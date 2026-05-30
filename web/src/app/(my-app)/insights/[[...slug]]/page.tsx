import InsightsHero from '@/(my-app)/components/PageHero'
import InsightsClient from '@/(my-app)/components/InsightsClient'
import InsightDetail from '@/(my-app)/components/InsightDetail'
import type { InsightData } from '@/(my-app)/types/insight'
// import { insightFiles, InsightsData, LoadedInsights} from '@data/insights/index'
import { getPayloadClient } from '@/(payload)/payload-client'
import type { Insight } from '../../../../../payload-types'

const ARTICLES_PER_PAGE = 4

const categoryLabelMap: Record<string, string> = {
  'ai-ml': 'AI & ML',
  'bi': 'Business Intelligence',
  'ai': 'AI & LLM Automation',
  'data-engineering': 'Data Engineering',
  'data-strategy': 'Data Strategy',
  'managed-data': 'Managed Data Services',
  'case-studies': 'Case Studies',
  'software-development': 'Software Development',
}

export default async function InsightsPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params
  const insightSlug = slug?.[0]

  if (!insightSlug) {
    const payload = await getPayloadClient()
    
    const allInsights = await payload.find({
      collection: 'insights',
      limit: 100,
    })

    const allArticles = allInsights.docs
      .sort((a: Insight, b: Insight) => (b.likes || 0) - (a.likes || 0))
      .map((insight: Insight) => ({
      slug: insight.slug,
      thumbnail: insight.heroImage?.image||'',
      category: categoryLabelMap[insight.category] || insight.category,
      date: insight.publishedDate || '',
      readTime: insight.readTime || '',
      title: insight.title,
      description: insight.summary || '',
      likes: insight.likes || 0,
    }))

    const heroInsight = allArticles[0]

    const initialArticles = allArticles.slice(0, ARTICLES_PER_PAGE)

    const uniqueFilters = Array.from(
      new Set(allArticles.map((a: typeof allArticles[0]) => a.category))
    )

    const buttons = [
      { label: "All Insights", variant: "primary" },
      ...uniqueFilters.map((f: string) => ({
        label: categoryLabelMap[f] || f,
        variant: "outline"
      }))
    ]
    const heroData = {
      title: heroInsight?.title || "Insights",
      subtitle: heroInsight?.description || "",
      readTime: heroInsight?.readTime || "",
      likes: heroInsight?.likes || 0,
      badge: {
        label: heroInsight?.likes && heroInsight.likes > 0 ? "Most Liked" : "Featured Analysis",
        color: "tertiary-fixed",
        icon: heroInsight?.likes && heroInsight.likes > 0 ? "favorite" : "lightbulb"
      },
      image: {
        alt: heroInsight?.thumbnail ? "Featured Article" : "",
        url: heroInsight?.thumbnail || ""
      },
      slug: heroInsight?.slug ? {
        url: `/insights/${heroInsight?.slug}`,
        label: "Read Full Article"
      } : undefined
    }

    const ctaData = {
      title: "Ready to scale your impact with data?",
      subtitle: "Partner with Datamore to transform your organization through technical excellence and strategic AI innovation."
    }

    return (
      <>
        <InsightsHero data={heroData} />
        <InsightsClient 
          initialArticles={initialArticles} 
          allArticles={allArticles}
          filterData={{ buttons }} 
          ctaData={ctaData} 
        />
      </>
    )
  }

  const payload = await getPayloadClient()
  
  const insight = await payload.find({
    collection: 'insights',
    where: {
      slug: {
        equals: insightSlug
      }
    },
    limit: 1
  })

  if (!insight.docs.length) {
    return <div>Insight not found</div>
  }

  const insightDoc = insight.docs[0]
  
  const sections = insightDoc.sections?.map((section: any, index: number) => {
    const imageData = section.image
      ? (typeof section.image === 'object' && section.image.url
          ? { alt: section.image.alt || "", url: section.image.url }
          : undefined)
      : undefined

    return {
      type: section.type,
      content: section.content || '',
      title: section.title,
      variant: section.variant,
      image: imageData,
      data: section.data
    }
  }) || []

  const data: InsightData = {
    id: insightDoc.id,
    title: insightDoc.title,
    author: {
      name: insightDoc.author?.name || "Datamore Team",
      title: insightDoc.author?.title || "",
      date: insightDoc.publishedDate || "",
      imageUrl: insightDoc.author?.image?.url
    },
    heroImage: {
      alt: insightDoc.heroImage?.image?.alt || "",
      url: insightDoc.heroImage?.image?.url || insightDoc.image?.url || ""
    },
    sections,
    socialShare: insightDoc.socialShare,
    relatedArticles: (insightDoc.relatedArticles || []).map((a: any) => ({
      title: a.title || "",
      readTime: a.readTime || "",
      imageUrl: a.imageUrl || ""
    })),
    cta: {
      title: insightDoc.cta?.title || "Ready to scale your impact with data?",
      subtitle: insightDoc.cta?.subtitle || "Partner with Datamore to transform your organization through technical excellence and strategic AI innovation."
    },
    likes: insightDoc.likes || 0,
  }

  return (
    <>
      <InsightDetail
        id={data.id}
        title={data.title}
        author={data.author}
        heroImage={data.heroImage}
        sections={data.sections}
        socialShare={data.socialShare}
        relatedArticles={data.relatedArticles}
        cta={data.cta}
        likes={data.likes}
      />
    </>
  )
}