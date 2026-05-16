// app/services/ai-llm-automation/page.tsx
import ServiceDetail from '@/src/components/ServiceDetail'
import { getPayloadClient } from '@/src/payload-client'

export const dynamic = 'force-dynamic'

export default async function AIServicePage() {
  const payload = await getPayloadClient()
  const service = await payload.find({
    collection: 'services',
    where: {
      slug: {
        equals: 'ai'
      }
    },
    limit: 1
  })
  
  if (!service.docs || service.docs.length === 0) {
    // Fallback data if not in database
    return (
      <ServiceDetail 
        title="AI & LLM Automation"
        category="AI & LLM Automation"
        icon="auto_awesome"
        imageAlt="A sophisticated 3D abstract visualization of neural network pathways glowing in electric blue and cyan against a deep midnight navy background. The structure appears architectural and precise, representing complex AI data flows. Soft, atmospheric lighting creates depth and a high-end corporate technology aesthetic, maintaining a clean and minimalist light-mode feel."
        imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBoKdAydz8LFm0bZx__CWMtwQnHNvKpjL4sznf_qCr8qTX0hYcHVnMYilkmm6NYkkShQHSUV0tZDDspaUB8F_GU5eh59UiBZige-cNdCXz3QAXbjYw2bHDmVxYswJ0FDC5prj6PihGg0x9rRtSwQyUO9geQsV6p-UvRNmvGi6JvrcVZ2Ez-bTdZcHngvb-uu4T3XwqXki4aRW2KmmkrmiL2YosLop5wRjRs0fqDTgfvAFcZX8g0jYpsHt7BTz0QbtIeDx5ldPcxii-O"
        heroTitle="Architecting the Future with <span class=\"text-secondary\">Generative AI</span>."
        heroSubtitle="We transform complex enterprise data into autonomous intelligence engines. Deploying custom LLM architectures that drive strategy, compliance, and growth with mathematical precision."
        primaryButtonLabel="Explore Capabilities"
        secondaryButtonLabel="View Case Studies"
        offerings={[
          {
            icon: "database",
            title: "Custom RAG Pipelines",
            description: "Augment LLMs with your private enterprise knowledge base. We build Retrieval-Augmented Generation systems that eliminate hallucinations and ensure factual consistency.",
            specsLabel: undefined
          },
          {
            icon: "hub",
            title: "Agentic Workflows",
            description: "Moving beyond chat. We design AI agents capable of reasoning, planning, and executing multi-step tasks across your existing software stack."
          },
          {
            icon: "gavel",
            title: "Automated Compliance",
            description: "AI-driven auditing for fintech and legal frameworks. Automate policy checks and regulatory reporting with 99.9% verifiable accuracy."
          },
          {
            icon: "model_training",
            title: "Fine-tuned LLMs",
            description: "When general models aren't enough. We fine-tune open-source models (Llama 3, Mistral) on your domain-specific language for superior performance at lower costs."
          }
        ]}
        impactMetrics={[
          {
            value: "85%",
            label: "Automation Efficiency",
            description: "Average reduction in manual document processing time for our fintech clients using Agentic Workflows."
          },
          {
            value: "60%",
            label: "Cost Reduction",
            description: "Reduction in operational costs associated with specialized data analysis and compliance reporting."
          }
        ]}
        ctaTitle="Ready to scale your impact with data?"
        ctaSubtitle="Join the leading enterprises leveraging Datamore to build the next generation of autonomous intelligence."
        primaryCTALabel="Book a Strategy Session"
        secondaryCTALabel="View Case Studies"
      />
    )
  }
  
  const serviceData = service.docs[0]
  
  return (
    <ServiceDetail 
      title={serviceData.title}
      category={serviceData.category}
      icon="auto_awesome" // Default icon, could be made dynamic
      imageAlt="Service image" // Would come from service data
      imageUrl="" // Would come from service data
      heroTitle="Architecting the Future with <span class=\"text-secondary\">Generative AI</span>."
      heroSubtitle="We transform complex enterprise data into autonomous intelligence engines. Deploying custom LLM architectures that drive strategy, compliance, and growth with mathematical precision."
      primaryButtonLabel="Explore Capabilities"
      secondaryButtonLabel="View Case Studies"
      offerings={[]} // Would parse from service data
      impactMetrics={[]} // Would parse from service data
      ctaTitle="Ready to scale your impact with data?"
      ctaSubtitle="Join the leading enterprises leveraging Datamore to build the next generation of autonomous intelligence."
      primaryCTALabel="Book a Strategy Session"
      secondaryCTALabel="View Case Studies"
    />
  )
}