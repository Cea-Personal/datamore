import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageHero from '@/(my-app)/components/PageHero'
import CTA from '@/(my-app)/components/CTA'
import ServiceCapabilities from '@/(my-app)/components/ServiceCapabilities'
import { SolutionsOverview, SolutionDetail } from '@/(my-app)/components/SolutionPages'
import { assessmentCTA, solutions } from '@data/v1'
import type { ServiceData } from '@/(my-app)/types/service'

const serviceFiles = {
  'data-foundations': () => import('@data/services/data-foundation.json'),
  'bi-analytics': () => import('@data/services/bi-analytics.json'),
  'systems-integration': () => import('@data/services/systems-integration.json'),
}

export default async function ServicePage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params
  if (!slug?.length) return <SolutionsOverview />
  if (slug.length !== 1) notFound()
  if (slug[0] === 'ai-automation') return <SolutionDetail solution={solutions[1]} />
  // Preserve the old singular footer URL as well as the canonical capability URL.
  const serviceName = slug[0] === 'system-integration' ? 'systems-integration' : slug[0]
  if (!Object.hasOwn(serviceFiles, serviceName)) notFound()
  const data = (await serviceFiles[serviceName as keyof typeof serviceFiles]()).default as ServiceData
  return (
    <>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-8 flex flex-wrap gap-4 text-label-md">
        <Link href="/solutions/data-analytics" className="text-secondary hover:underline">Data &amp; Analytics</Link>
        {serviceName === 'systems-integration' && <Link href="/solutions/ai-automation" className="text-secondary hover:underline">AI Automation</Link>}
        <span className="text-on-surface-variant">Supporting capability</span>
      </div>
      <PageHero data={{ ...data.hero, title: data.hero.title.replace('One Ecosystem.', 'One Ecosystem.</span>'), slug: { label: 'Free Data & AI Assessment', url: '/contact' } }} />
      <ServiceCapabilities data={data.capabilities || data.offerings || data.pillars || []} />
      <CTA data={assessmentCTA} />
    </>
  )
}
