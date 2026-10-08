import { notFound } from 'next/navigation'
import InsightsHero from '@/(my-app)/components/PageHero'
import InsightsClient from '@/(my-app)/components/_InsightsClient'
import InsightDetail from '@/(my-app)/components/_InsightDetail'
import { getInsightBySlugFromPayload, mapInsightToCard, getInsightData } from '@data/insights/index'
import { practicalInsightCards, practicalInsightDetail, reviewedCMSInsightSlugs } from '@data/public-insights'
import { assessmentCTA } from '@data/v1'

const categoryLabels: Record<string, string> = { 'ai-ml': 'AI Automation', bi: 'Data & Analytics', 'data-engineering': 'Data & Analytics', 'data-strategy': 'Data & Analytics' }

export default async function InsightsPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params
  if (slug && slug.length !== 1) notFound()
  if (!slug?.length) {
    const reviewedDocs = await Promise.all(reviewedCMSInsightSlugs.map(getInsightBySlugFromPayload))
    const allArticles = [...practicalInsightCards(), ...reviewedDocs.filter(doc => doc !== null).map(doc => mapInsightToCard(doc, categoryLabels))]
    const filters = [...new Set(allArticles.map(article => article.category))]
    return (
      <>
        <InsightsHero data={{ title: 'Practical data & AI advice', subtitle: 'Start with the business question, understand the process, and choose a useful next step.', badge: { label: 'Insights' }, image: { alt: '', url: '' } }} />
        <InsightsClient initialArticles={allArticles.slice(0, 4)} allArticles={allArticles} filterData={{ buttons: [{ label: 'All Insights', variant: 'primary' }, ...filters.map(label => ({ label, variant: 'outline' }))] }} ctaData={assessmentCTA} />
      </>
    )
  }
  const insightSlug = slug[0]
  const practical = practicalInsightDetail(insightSlug)
  if (practical) return <InsightDetail {...practical} />
  // The CMS remains intact. Unreviewed records do not enter the buying journey.
  if (!reviewedCMSInsightSlugs.includes(insightSlug)) notFound()
  const insight = await getInsightBySlugFromPayload(insightSlug)
  if (!insight) notFound()
  return <InsightDetail {...getInsightData(insight)} />
}
