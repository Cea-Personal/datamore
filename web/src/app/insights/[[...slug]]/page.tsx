import InsightsHero from '@/components/PageHero'
import InsightsClient from '@/components/InsightsClient'
import InsightDetail from '@/components/InsightDetail'
import type { InsightData } from '@/types/insight'
import { insightFiles, InsightsData, LoadedInsights} from '@/data/insights/index'


const ARTICLES_PER_PAGE = 4

export default async function InsightsPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params
  const insightSlug = slug?.[0]

  if (!insightSlug) {
    const allArticles = LoadedInsights.filter(
      a => a.insights.slug !== InsightsData.hero.slug
);

const initialArticles = allArticles.slice(0, ARTICLES_PER_PAGE);

const uniqueFilters = Array.from(
new Map(allArticles.map(a => [a.filter.label, a.filter])).values()
);

const buttons = [
  { label: "All Insights", variant: "primary" },
  ...uniqueFilters.map(f => ({
    label: f.label,
    variant: f.variant
  }))
];

    return (
      <>
        <InsightsHero data={InsightsData.hero} />
        <InsightsClient 
          initialArticles={initialArticles.map(a => a.insights)} 
          allArticles={allArticles.map(a => a.insights)}
          filterData={{ buttons }} 
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