import InsightsData from '@/data/insights.json'
import InsightsHero from '@/components/PageHero'
import InsightsClient from '@/components/InsightsClient'
import InsightDetail from '@/components/InsightDetail'
import type { Article, InsightData } from '@/types/insight'

const insightFiles = {
  'the-future-of-ai-automation-in-enterprise-fintech': () => import('@/data/insights/the-future-of-ai-automation-in-enterprise-fintech.json'),
  'optimizing-data-pipelines-for-high-frequency-trading': () => import('@/data/insights/optimizing-data-pipelines-for-high-frequency-trading.json'),
  'ethics-and-transparency-in-financial-llms': () => import('@/data/insights/ethics-and-transparency-in-financial-llms.json'),
  'scaling-ngo-impact-with-data-strategy': () => import('@/data/insights/scaling-ngo-impact-with-data-strategy.json'),
  'the-rise-of-semantic-layers-in-bi': () => import('@/data/insights/the-rise-of-semantic-layers-in-bi.json'),
  'modernizing-legacy-data-for-global-banks': () => import('@/data/insights/modernizing-legacy-data-for-global-banks.json'),
  'ai-driven-fraud-detection-strategies': () => import('@/data/insights/ai-driven-fraud-detection-strategies.json'),
}

const ARTICLES_PER_PAGE = 4

export default async function InsightsPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params
  const insightSlug = slug?.[0]

  if (!insightSlug) {
    const heroArticle: Article = {
      slug: InsightsData.hero.slug,
      thumbnail: InsightsData.hero.image.url,
      category: InsightsData.hero.badge.label,
      date: '',
      readTime: InsightsData.hero.readTime,
      title: InsightsData.hero.title,
      description: InsightsData.hero.subtitle
    }

    const allArticles = InsightsData.articles.filter(a => a.slug !== InsightsData.hero.slug)
    const initialArticles = allArticles.slice(0, ARTICLES_PER_PAGE)

    return (
      <>
        <InsightsHero data={InsightsData.hero} />
        <InsightsClient 
          initialArticles={initialArticles} 
          allArticles={allArticles}
          filterData={InsightsData.filter} 
          ctaData={InsightsData.cta} 
        />
      </>
    )
  }

  const loadData = insightFiles[insightSlug as keyof typeof insightFiles]
  if (!loadData) {
    return <div>Insight not found</div>
  }

  const data = (await loadData()).default as InsightData

  return (
    <>
      <InsightDetail
        title={data.title}
        author={data.author}
        heroImage={data.heroImage}
        sections={data.sections}
        socialShare={data.socialShare}
        relatedArticles={data.relatedArticles}
        cta={data.cta}
      />
    </>
  )
}