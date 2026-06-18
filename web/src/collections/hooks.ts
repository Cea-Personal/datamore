import { Collection, CollectionAfterChangeHook, CollectionSlug } from "payload";

export const handleStatusWebhook = (options: {
  webhookurl: string;
  event: string;
  collection: string;
  approvalStatus: string;
  relatedCollectionsfieldName?: string[]
  relatedCollections?: CollectionSlug[];
}): CollectionAfterChangeHook => {
  return async ({ doc, previousDoc, operation, req }) => {
     req.payload.logger.info(

      `Previous: ${previousDoc?.status}`

    )

    req.payload.logger.info(

      `Current: ${doc.status}`

    )
    try {
      // 1. Guard against new creations that are already approved (if applicable)
      const isNewlyApprovedOnCreate =
        operation === "create" && doc.status === options.approvalStatus;

      // 2. Guard against updates where it changed from false (or undefined) to true
      const isNewlyApprovedOnUpdate =
        operation === "update" &&
        doc.status === options.approvalStatus &&
        (!previousDoc || previousDoc.status !== options.approvalStatus);

      // 3. Trigger webhook only if one of the approval conditions is met
      if (isNewlyApprovedOnCreate || isNewlyApprovedOnUpdate) {
        const webhookUrl = options.webhookurl;
        const webhookSecret = process.env.WEBHOOK_SECRET || "";
        const relatedData = options.relatedCollections?.map(
          async (collection: CollectionSlug, index) => {
            const results = await req.payload.find({
              collection,
              where: {
                [options.relatedCollectionsfieldName?.[index] || 'id']: {
                  equals: doc.id,
                },
              },
              depth: 0, // Keeps it lightweight unless you need nested fields populated
              req, // Crucial for passing down transaction/locale context
            });
            return results?.docs || {};
          },
        );

        const relatedDataResolved = await Promise.all(relatedData || []);
        doc.related = relatedDataResolved;

        await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${btoa(webhookSecret)}`, // Optional: Add a secret for verification
          },
          body: JSON.stringify({
            event: options.event,
            collection: options.collection,
            documentId: doc.id,
            data: doc, // Sends the fully approved document
          }),
        });
        req.payload.logger.info(`webhook sent for document ${doc.id}`);
      }
    } catch (error) {
      req.payload.logger.error(error, "Failed to trigger webhook:");
    }

    // Always return the doc in an afterChange hook
    return doc;
  };
};
