// app/services/bi/page.tsx
import ServiceDetail from '@/src/components/ServiceDetail'
import { getPayloadClient } from '@/src/payload-client'

export const dynamic = 'force-dynamic'

export default async function BIServicePage() {
  const payload = await getPayloadClient()
  const service = await payload.find({
    collection: 'services',
    where: {
      slug: {
        equals: 'bi'
      }
    },
    limit: 1
  })
  
  if (!service.docs || service.docs.length === 0) {
    // Fallback data if not in database
    return (
      <ServiceDetail 
        title="Business Intelligence & Analytics"
        category="Business Intelligence"
        icon="insights"
        imageAlt="A sophisticated 3D visualization of a complex data network in a clean, high-key studio environment. Glowing nodes in electric blue connect via thin silver filaments against a minimalist white background. The lighting is crisp and professional, reflecting a corporate modern aesthetic with technical precision. The image feels airy, spacious, and authoritative."
        imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBCIeZmedR4RnbuDLYo2rcSTeI6fFLiqzF-A3zHIZrWqfC34SR_SASPX8uLzTINjskIVOa5ODB6exKMlEHA6w9qE7HINE4wQTfMPL8YKu3eXHtqg90dmfP6FZeBlM3ewVrmzjMbKidPubUveaIWGBHyyfhL76LIt2kG5SXNoMMBWmmq4a86A8BecReN2eigjcdPSbwH0RkUHFZ_OYxAsF1hfklCZXODrh8tlRuuka8e4YIUeeRmkLXObj2RNChuC-PX-8LFZ5xvRwGi"
        heroTitle="Transforming Raw Data into <span class=\"text-secondary\">Strategic Narratives</span>."
        heroSubtitle="Move beyond simple reporting. We engineer high-precision BI ecosystems that synthesize fragmented data into cohesive, actionable strategic pathways for global fintechs and enterprise NGOs."
        primaryButtonLabel="Start Strategy Session"
        secondaryButtonLabel="View Methodology"
        offerings={[
          {
            icon: "model_training",
            title: "Predictive Modeling",
            description: "Utilizing advanced machine learning algorithms to forecast market shifts, risk vectors, and growth opportunities before they materialize.",
            specsLabel: "Explore Technical Specs"
          },
          {
            icon: "leaderboard",
            title: "Executive Reporting",
            description: "Bespoke C-Suite narratives that strip away noise to reveal the critical KPIs driving your strategy."
          },
          {
            icon: "group_work",
            title: "Customer 360",
            description: "Consolidating disparate touchpoints into a unified intelligence layer for behavioral analysis."
          },
          {
            icon: "settings_suggest",
            title: "Operational Analytics",
            description: "Real-time optimization of internal workflows and supply chain efficiency through granular data monitoring."
          }
        ]}
        impactMetrics={[
          {
            value: "40%",
            label: "Faster Time-to-Insight",
            description: "Reduction in manual data preparation through automated ETL pipelines."
          },
          {
            value: "22%",
            label: "Data-Driven Growth",
            description: "Average increase in customer lifetime value for our retail fintech partners."
          },
          {
            value: "100%",
            label: "Data Integrity",
            description: "Audit-ready reporting structures that meet stringent NGO transparency standards."
          },
          {
            value: "15M+",
            label: "Events Processed",
            description: "Daily data points processed through our real-time streaming infrastructure."
          }
        ]}
        ctaTitle="Ready to scale your impact with data?"
        ctaSubtitle="Join the ranks of data-forward organizations using Datamore to turn complexity into competitive advantage."
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
      icon="insights" // Default icon, could be made dynamic
      imageAlt="Service image" // Would come from service data
      imageUrl="" // Would come from service data
      heroTitle="Transforming Raw Data into <span class=\"text-secondary\">Strategic Narratives</span>."
      heroSubtitle="Move beyond simple reporting. We engineer high-precision BI ecosystems that synthesize fragmented data into cohesive, actionable strategic pathways for global fintechs and enterprise NGOs."
      primaryButtonLabel="Start Strategy Session"
      secondaryButtonLabel="View Methodology"
      offerings={[]} // Would parse from service data
      impactMetrics={[]} // Would parse from service data
      ctaTitle="Ready to scale your impact with data?"
      ctaSubtitle="Join the ranks of data-forward organizations using Datamore to turn complexity into competitive advantage."
      primaryCTALabel="Book a Strategy Session"
      secondaryCTALabel="View Case Studies"
    />
  )
}