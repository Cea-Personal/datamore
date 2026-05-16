// app/insights/[slug]/page.tsx
import InsightDetail from '@/src/components/InsightDetail'
import { getPayloadClient } from '@/src/payload-client'

export const dynamic = 'force-dynamic'

export default async function InsightPage({ params }: { params: { slug: string } }) {
  const payload = await getPayloadClient()
  const insight = await payload.find({
    collection: 'insights',
    where: {
      slug: {
        equals: params.slug
      }
    },
    limit: 1
  })
  
  if (!insight.docs || insight.docs.length === 0) {
    // Fallback to static data if not in database
    return (
      <InsightDetail 
        title="The Future of AI Automation in Enterprise Fintech"
        author={{
          name: "David Ross",
          title: "Head of Engineering",
          date: "Oct 24, 2024",
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUkD-DpmR3u9SRR6g_RTS-q7uoejcoLG6_hf1LFjzLCRrMYNpchz15m2FZKywG5-64pE5hvkXVJX8KPBzwUNntezR2vEGss7D7v40W9s8MOvdQyBmCby3HGr4E3AsISNWYzyilymBaqsW1pe0SPwjE4WZdifDVQyIvRpSRCHT0kJY9V1sdVRsbVuRIf6v0Gkn_1sMt4AgecRBltOpEMcnt359eNZByy29fO9jUQBMYmhIJRBMzeIK-7RpKIacbAPHKipBaBmk2iav_"
        }}
        heroImage={{
          alt: "Technical AI visualization",
          url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMVxChUSTPCXZon77NysuiVwmh_6tgaK_fjp99pKil7s_5dMoYI8Z73YcHgtXD8DCm3zZn3XRU0I7UJFzjIRv11N4zGBtveascOntKKEXQZ2aTu5Tdg6AA50evgd5LCFozYr_1cFdMDX1dyDnlsoZWiuj-agJMUZGB8Tzf5M5_dnbPYIAj6wJ8EJ-Z-sPWNwnM8zRs4XpAV_KrFHw0JYt9l-4_gZQfNJoWI845_8K2B-Y3GRHelMwXFqgpA6CxfI3j1WjN5cHWxEQJ"
        }}
        sections={[
          {
            type: 'text',
            content: "In the rapidly evolving landscape of fintech, the integration of Artificial Intelligence (AI) has shifted from a competitive advantage to a fundamental necessity. As enterprise organizations grapple with burgeoning datasets and increasingly complex regulatory requirements, the demand for sophisticated automation has never been higher."
          },
          {
            type: 'heading',
            content: "The Shift Toward Agentic Intelligence"
          },
          {
            type: 'text',
            content: "Traditional robotic process automation (RPA) is being superseded by what we define as 'Agentic Intelligence'—systems that don't just follow static rules but understand context, predict outcomes, and execute multi-step workflows with minimal human oversight. In fintech, this translates to real-time risk assessment, automated compliance reporting, and hyper-personalized customer advisory platforms."
          },
          {
            type: 'roi-chart',
            title: "AI Automation ROI Benchmark",
            data: [
              { label: "OPERATIONAL EFFICIENCY", value: "+42%", color: "tertiary-fixed-dim" },
              { label: "ERROR REDUCTION", value: "-68%", color: "tertiary-fixed-dim" },
              { label: "COST OF COMPLIANCE", value: "-31%", color: "tertiary-fixed-dim" }
            ]
          },
          {
            type: 'text',
            content: "Source: Datamore Internal Benchmark Study 2024. Data represents average performance gains across 12 enterprise fintech deployments.",
            variant: 'caption'
          },
          {
            type: 'heading',
            content: "Bridging the Transparency Gap"
          },
          {
            type: 'text',
            content: "One of the primary hurdles in enterprise adoption remains the 'black box' problem. To meet stringent financial regulations, AI must be explainable. Our current engineering focus at Datamore is centered on creating transparent audit trails for every AI-driven decision. This ensures that when a transaction is flagged for fraud, the underlying logic is perfectly clear to human auditors and regulatory bodies alike."
          }
        ]}
        socialShare={true}
        relatedArticles={[
          {
            title: "Scaling Data Engineering for Global Markets",
            readTime: "5 min read",
            imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCj7tneh6BLGU38mB7Fi1Ebt0_Lh_kpCuJzkThg0L42ChKqlM_wDRknI9mqT_EnjfoTSgeFgBl4YQF4ubsMjbOrVjoCI6R1dGBNTuy9Hjf4OR_vBJlVILM9gTkfu6cSICTkyLlA76k8B4ClhHl9IJ_-ek-kzjVzrPrw2Bw7XjC33VSLrQXyF7usKX5dmnfedr_Ezd8BTuUklx0euqcp6TYH7MV5VTLrCZmUojRaO7GOD_k-VDjPOM0qrh12joYUWT8MIW0zGyVf056a"
          },
          {
            title: "Zero-Trust Architecture in Banking Systems",
            readTime: "8 min read",
            imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBNmeFmttXmjLPRajZ_7iQec1VZAWg2Lqc2h6qPd1RtIvirLhBxSMyy8HZjvuAIuBTCBQU7ODg0u5kinGL1soqFwuoaVJgngr_q9qJjL1IO29rjhSDp_-I2f7fHxM0lCeOUP6ylUCbpEjYmYGdaV6rkXSD7TcpMWLNfEQZEZ96xqgVO3BpmSSjHtVdwEOIEKzfgqoRH1bp7WZp0DyBicyHf-im1FRkPRUhYo6Gcn1R8g4iUgZrRQhB4JxJ07d1lJjcoaKqRwGiGvuw"
          }
        ]}
        cta={{
          title: "Ready to Scale Your AI Ambitions?",
          subtitle: "Our team of senior engineers and AI strategists are ready to help you navigate the complexities of enterprise-grade automation. Let's build the future together.",
          primaryButton: {
            label: "Get a Technical Audit",
            icon: "trending_flat"
          },
          secondaryButton: {
            label: "View Our Services"
          }
        }}
      />
    )
  }
  
  const insightData = insight.docs[0]
  
  return (
    <InsightDetail 
      title={insightData.title}
      author={{
        name: insightData.authorName || "Datamore Team",
        title: insightData.authorTitle || "Author",
        date: insightData.publishedDate ? new Date(insightData.publishedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : "Recent",
        imageUrl: insightData.authorImage || ""
      }}
      heroImage={{
        alt: insightData.title,
        url: insightData.image?.url || ""
      }}
      sections={insightData.content?.map((section: any, index: number) => ({
        type: section.type || 'text',
        content: section.content || '',
        title: section.title || '',
        data: section.data || []
      })) || []}
      socialShare={true}
      relatedArticles={[]} // Would fetch related insights in a real implementation
      cta={{
        title: "Ready to Scale Your AI Ambitions?",
        subtitle: "Our team of senior engineers and AI strategists are ready to help you navigate the complexities of enterprise-grade automation. Let's build the future together.",
        primaryButton: {
          label: "Get a Technical Audit",
          icon: "trending_flat"
        },
        secondaryButton: {
          label: "View Our Services"
        }
      }}
    />
  )
}