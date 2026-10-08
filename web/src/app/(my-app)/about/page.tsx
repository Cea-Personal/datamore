import type { Metadata } from 'next'
import CTA from '../components/CTA'
import PageHero from '../components/PageHero'
import { assessmentCTA } from '@data/v1'

export const metadata: Metadata = { title: 'About | Datamore', description: 'Why Datamore exists and how we approach focused data and AI projects.' }

export default function AboutPage() {
  return (
    <>
      <PageHero data={{ title: 'Technology that makes everyday work easier', subtitle: 'Datamore is a technology consultancy helping growing organizations turn scattered data and repetitive processes into reliable analytics and AI-powered workflows.', badge: { label: 'About Datamore' }, image: { alt: '', url: '' } }} />
      <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop pb-20 space-y-12">
        <section>
          <h2 className="text-headline-lg mb-4">Why Datamore exists</h2>
          <p className="text-body-lg text-on-surface-variant">Growing organizations often have useful information and capable people, but disconnected tools and manual processes get in the way. We help make that information usable and give people more time for work that needs their judgment.</p>
        </section>
        <section>
          <h2 className="text-headline-lg mb-4">A practical engineering focus</h2>
          <p className="text-body-lg text-on-surface-variant">Our work brings together data foundations, analytics, AI workflows and system integration. The starting point is the decision or process you need to improve. Tools are selected to fit your existing systems and an agreed scope.</p>
        </section>
        <section>
          <h2 className="text-headline-lg mb-4">How we approach a project</h2>
          <ul className="list-disc pl-6 space-y-4 text-body-lg text-on-surface-variant">
            <li>Understand the business problem before recommending a platform.</li>
            <li>Start with a focused diagnostic or small implementation.</li>
            <li>Agree on measures, validate data and keep people in control of important decisions.</li>
            <li>Document the system and support the people who will use it.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-headline-lg mb-4">Start with a conversation</h2>
          <p className="text-body-lg text-on-surface-variant">Tell us about the reporting or workflow challenge your team is facing. We can discuss your systems, scope and working arrangements before you commit to a project.</p>
          <a href="mailto:contact@datamore.org" className="inline-block mt-4 text-secondary text-body-md hover:underline">contact@datamore.org</a>
        </section>
      </div>
      <CTA data={assessmentCTA} />
    </>
  )
}
