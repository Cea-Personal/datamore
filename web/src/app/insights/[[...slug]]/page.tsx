// app/insights/[[...slug]]/page.tsx
import InsightsData from '@/data/insights.json'
import InsightsHero from '@/components/InsightsHero'
import InsightsFilter from '@/components/InsightsFilter'
import InsightsGrid from '@/components/InsightsGrid'
import InsightsSidebar from '@/components/InsightsSidebar'
import GlobalCTA from '@/components/CTA'
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

    const otherArticles = InsightsData.articles.filter(a => a.slug !== InsightsData.hero.slug)

return (
    <>
      <InsightsHero data={InsightsData.hero} />
      <section className="px-margin-desktop max-w-container-max mx-auto mb-20">
        <InsightsFilter data={InsightsData.filter} />
      </section>
        <section className="px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <div className="lg:col-span-8">
              <InsightsGrid data={otherArticles} />
              <div className="mt-12 text-center">
                <button className="px-8 py-3 border border-outline text-primary font-label-md rounded-lg hover:bg-surface-container transition-colors">
                  Load More Articles
                </button>
              </div>
            </div>
            <aside className="lg:col-span-4 space-y-12">
              <InsightsSidebar data={InsightsData.sidebar} />
            </aside>
          </div>
        </section>
        <GlobalCTA data={InsightsData.cta} />
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