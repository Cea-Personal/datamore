import InsightsHero from '@/(my-app)/components/PageHero'
import InsightsClient from '@/(my-app)/components/_InsightsClient'
import InsightDetail from '@/(my-app)/components/_InsightDetail'
import { getAllInsightsFromPayload, getInsightBySlugFromPayload, mapInsightToCard, getHeroData, ctaData, getInsightData} from '@data/insights/index'
import type { Insight } from '@payload-types'

const ARTICLES_PER_PAGE = 4

const categoryLabelMap: Record<string, string> = {
  'ai-ml': 'AI & ML',
  'bi': 'Business Intelligence',
  'data-engineering': 'Data Engineering',
  'data-strategy': 'Data Strategy',
  'managed-data': 'Managed Data Services',
  'case-studies': 'Case Studies',
  'technology': 'Technology',
  'industry': 'Industry',
  'software-development': 'Software Development'
}

export default async function InsightsPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params
  const insightSlug = slug?.[0]

  if (!insightSlug) {
    const allInsights = await getAllInsightsFromPayload()
    const allArticles = allInsights.sort((a: Insight, b: Insight) => (b.likes || 0) - (a.likes || 0))
      .map((insight: Insight) => mapInsightToCard(insight, categoryLabelMap))

    const initialArticles = allArticles.slice(0, ARTICLES_PER_PAGE)
    const uniqueFilters: string[] = Array.from(
      new Set(allArticles.map((a: typeof allArticles[0]) => a.category))
    )
    const heroData = getHeroData(allArticles[0])

    const buttons = [
      { label: "All Insights", variant: "primary" },
      ...uniqueFilters.map((filter: string) => ({
        label: categoryLabelMap[filter] || filter,
        variant: "outline"
      }))
    ]
    

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

  const insight = await getInsightBySlugFromPayload(insightSlug)

  if (!insight.docs.length) {
    return <div>Insight not found</div>
  }

  const insightDoc = insight.docs[0]
  const data = getInsightData(insightDoc)

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