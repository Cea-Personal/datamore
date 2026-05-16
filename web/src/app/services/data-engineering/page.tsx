// app/services/data-engineering/page.tsx
import ServiceDetail from '@/src/components/ServiceDetail'
import { getPayloadClient } from '@/src/payload-client'

export const dynamic = 'force-dynamic'

export default async function DataEngineeringServicePage() {
  const payload = await getPayloadClient()
  const service = await payload.find({
    collection: 'services',
    where: {
      slug: {
        equals: 'data-engineering'
      }
    },
    limit: 1
  })
  
  if (!service.docs || service.docs.length === 0) {
    // Fallback data if not in database
    return (
      <ServiceDetail 
        title="Data Engineering & Infrastructure"
        category="High-Precision Data Infrastructure"
        icon="precision_manufacturing"
        imageAlt="A futuristic and technical 3D visualization of a complex data pipeline network. Glowing cyan and midnight navy lines weave together against a dark, minimalist background representing server nodes and interconnected data structures. The lighting is crisp and cinematic, emphasizing the precision and clarity of modern data engineering. High-tech aesthetics with a sense of calm authority and strategic clarity."
        imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAl-jX5tmVwCDI7dES7JjHsKHuatJkL96zLgav0xfCgqf_9grfiAqWSvrBdvX3JkaW0MyRIPmPTT_oZgyXa1AsF0ENl063N-iaJh_0aWhqB8K_jGYDNTFA8kAYkpB2Y6lvdX6oENp2SKHY8a-pFu6LiqheC09588CafL6IJP7mNjF-oyv2IS9rtgTPtHAPPIbuWZa-QjSpta-IpoV0SSXlYePmaqmcGlAyB2p_uH2f6pTtrnivQkeMCpDWaU3cdrOFPOJNWk2GZbIm-"
        heroTitle="Architecting the Backbone of <span class=\"text-secondary\">Intelligence.</span>"
        heroSubtitle="We build high-performance data pipelines and resilient infrastructure that transform chaotic data streams into precise, actionable assets for the world's most demanding fintechs and NGOs."
        primaryButtonLabel="Start Engineering Consultation"
        secondaryButtonLabel=""
        offerings={[
          {
            icon: "dynamic_feed",
            title: "ETL/ELT Architecture",
            description: "Custom-built extraction frameworks that handle heterogeneous data sources with zero-loss integrity, optimized for downstream AI readiness."
          },
          {
            icon: "bolt",
            title: "Real-time Streaming",
            description: "Low-latency event processing using Kafka and Flink for mission-critical real-time decisioning."
          },
          {
            icon: "cloud_sync",
            title: "Cloud Migration",
            description: "Seamless transition of legacy workloads to AWS or Azure with zero downtime and optimized OpEx."
          },
          {
            icon: "layers",
            title: "Data Lakehouse Design",
            description: "Merging the flexibility of data lakes with the governance of warehouses using Delta Lake and Iceberg."
          }
        ]}
        impactMetrics={[
          {
            value: "99.9%",
            label: "Pipeline Uptime",
            description: "Redundant architectures and automated self-healing clusters."
          },
          {
            value: "60%",
            label: "Reduction in ETL Latency",
            description: "Proprietary partitioning logic and optimized compute allocation."
          },
          {
            value: "45%",
            label: "Cloud Cost Optimization",
            description: "Aggressive resource monitoring and spot instance orchestration."
          }
        ]}
        ctaTitle="Ready to scale your impact with data?"
        ctaSubtitle="Stop fighting your infrastructure. Let our engineers build the foundation your AI and Analytics teams deserve."
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
      icon="precision_manufacturing" // Default icon, could be made dynamic
      imageAlt="Service image" // Would come from service data
      imageUrl="" // Would come from service data
      heroTitle="Architecting the Backbone of <span class=\"text-secondary\">Intelligence.</span>"
      heroSubtitle="We build high-performance data pipelines and resilient infrastructure that transform chaotic data streams into precise, actionable assets for the world's most demanding fintechs and NGOs."
      primaryButtonLabel="Start Engineering Consultation"
      secondaryButtonLabel=""
      offerings={[]} // Would parse from service data
      impactMetrics={[]} // Would parse from service data
      ctaTitle="Ready to scale your impact with data?"
      ctaSubtitle="Stop fighting your infrastructure. Let our engineers build the foundation your AI and Analytics teams deserve."
      primaryCTALabel="Book a Strategy Session"
      secondaryCTALabel="View Case Studies"
    />
  )
}