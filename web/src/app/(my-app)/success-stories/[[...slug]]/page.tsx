import { notFound } from 'next/navigation'
import { workExamples } from '@data/v1'
import { WorkOverview, WorkDetail } from '@/(my-app)/components/WorkPages'

const legacyAliases: Record<string, string> = {
  'case-study': 'business-reporting',
  'optimizing-liquidity-risk-for-tier-1-fintech': 'business-reporting',
  'fixing-broken-reporting-for-ecommerce-company': 'business-reporting',
  'scaling-data-operations-for-a-multi-channel-retailer': 'business-reporting',
}

export default async function SuccessStoriesPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params
  if (!slug?.length) return <WorkOverview />
  const canonical = Object.hasOwn(legacyAliases, slug[0]) ? legacyAliases[slug[0]] : slug[0]
  const example = workExamples.find(item => item.slug === canonical)
  if (slug.length !== 1 || !example) notFound()
  return <WorkDetail example={example} />
}
