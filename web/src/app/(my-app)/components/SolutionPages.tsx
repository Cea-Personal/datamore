import Link from 'next/link'
import LandingData from '@data/landing.json'
import AIData from '@data/services/ai-automation.json'
import { assessmentCTA, solutions } from '@data/v1'
import CTA from './CTA'
import PageHero from './PageHero'
import WhatWeDo from './WhatWeDo'
import HowWeDoIt from './HowWeDoIt'
import ServiceCapabilities from './ServiceCapabilities'
import { UseCasesSection } from './V1Sections'

export function SolutionsOverview() {
  return (
    <>
      <PageHero data={{ title: 'Better visibility. Less manual work.', subtitle: 'Two solution areas for growing organizations. Start with the business problem; choose the systems and tools that fit it.', badge: { label: 'Solutions' }, image: { alt: '', url: '' } }} />
      <WhatWeDo data={LandingData.whatWeDo} />
      <HowWeDoIt data={LandingData.howWeDoIt} />
      <CTA data={assessmentCTA} />
    </>
  )
}

export function SolutionDetail({ solution }: { solution: typeof solutions[number] }) {
  return (
    <>
      <PageHero data={{ title: solution.title, subtitle: solution.description, badge: { label: 'Solution', icon: solution.icon }, image: { alt: '', url: '' }, slug: { label: 'Free Data & AI Assessment', url: '/contact' } }} />
      <section className="bg-surface-container-low py-16">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-headline-lg mb-4">The problem</h2>
            <p className="text-body-lg text-on-surface-variant">{solution.problem}</p>
          </div>
          <div>
            <h2 className="text-headline-lg mb-4">What we help you achieve</h2>
            <ul className="list-disc pl-5 space-y-3 text-body-md text-on-surface-variant">{solution.outcomes.map(outcome => <li key={outcome}>{outcome}</li>)}</ul>
          </div>
        </div>
      </section>
      <UseCasesSection solution={solution.title} />
      <HowWeDoIt data={{ title: 'From the current process to a useful system', steps: solution.steps.map((title, index) => ({ number: String(index + 1), title, description: '' })) }} />
      <section id="technical-capabilities" className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16">
        <h2 className="text-headline-lg mb-4">Capabilities behind the solution</h2>
        <p className="text-body-lg text-on-surface-variant mb-6 max-w-2xl">Data foundations, analytics, AI and integration remain part of the work. We choose what is needed for the agreed outcome.</p>
        <div className="flex flex-wrap gap-4">{solution.capabilities.map(capability => <Link key={capability.href} href={capability.href} className="text-secondary text-label-md underline underline-offset-4">{capability.label}</Link>)}</div>
        {solution.slug === 'ai-automation' && (
          <details className="mt-8 border border-outline-variant rounded-xl">
            <summary className="p-6 text-label-lg cursor-pointer">Explore AI implementation capabilities</summary>
            <ServiceCapabilities data={AIData.capabilities} />
          </details>
        )}
      </section>
      <CTA data={assessmentCTA} />
    </>
  )
}
