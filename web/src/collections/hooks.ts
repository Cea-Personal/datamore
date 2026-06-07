import { CollectionAfterChangeHook } from 'payload';

export const handleStatusWebhook: CollectionAfterChangeHook = async ({ doc, previousDoc, operation, req }) => {
  try {
    // 1. Guard against new creations that are already approved (if applicable)
    const isNewlyApprovedOnCreate = operation === 'create' && doc.status === 'approved';

    // 2. Guard against updates where it changed from false (or undefined) to true
    const isNewlyApprovedOnUpdate = 
      operation === 'update' && 
      doc.status === 'approved' && 
      (!previousDoc || previousDoc.status !== 'approved');

    // 3. Trigger webhook only if one of the approval conditions is met
    if (isNewlyApprovedOnCreate || isNewlyApprovedOnUpdate) {
      const webhookUrl = process.env.APPROVAL_WEBHOOK_URL || '';
      
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer Base64Encoded(${process.env.WEBHOOK_SECRET})`, // Optional: Add a secret for verification
        },
        body: JSON.stringify({
          event: 'document.approved',
          collection: 'your-collection-slug',
          documentId: doc.id,
          data: doc, // Sends the fully approved document
        }),
      });
      
      req.payload.logger.info(`Approval webhook sent for document ${doc.id}`);
    }
  } catch (error) {
    req.payload.logger.error(error, 'Failed to trigger approval webhook:');
  }

  // Always return the doc in an afterChange hook
  return doc;
};