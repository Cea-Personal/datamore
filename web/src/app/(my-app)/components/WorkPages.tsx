import Link from 'next/link'
import { assessmentCTA, workExamples } from '@data/v1'
import CTA from './CTA'
import PageHero from './PageHero'

export function WorkOverview() {
  return (
    <>
      <PageHero data={{ title: 'How we approach the work', subtitle: 'Explore practical approaches to reporting, business visibility and repetitive workflows.', badge: { label: 'Work & approaches' }, image: { alt: '', url: '' } }} />
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-20">
        <div className="bg-surface-container-low border border-outline-variant/30 p-6 rounded-xl mb-10">
          <h2 className="text-headline-md mb-3">A clear distinction between examples and evidence</h2>
          <p className="text-body-md text-on-surface-variant">The scenarios below are hypothetical examples of proposed approaches. They are not completed Datamore engagements, founder experience or demonstration projects. No client results or performance figures are claimed.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-gutter">
          {workExamples.map(example => (
            <article key={example.slug} className="bg-white rounded-xl p-8 border border-outline-variant/30">
              <p className="text-label-md text-secondary mb-3">Hypothetical example · {example.solution}</p>
              <h2 className="text-headline-md mb-4">{example.title}</h2>
              <p className="text-body-md text-on-surface-variant mb-6">{example.problem}</p>
              <Link className="text-label-md text-secondary hover:underline" href={`/work/${example.slug}`}>Explore the approach →</Link>
            </article>
          ))}
        </div>
      </section>
      <CTA data={assessmentCTA} />
    </>
  )
}

export function WorkDetail({ example }: { example: typeof workExamples[number] }) {
  return (
    <>
      <PageHero data={{ title: example.title, subtitle: 'A hypothetical example of a proposed approach. This is not a completed client engagement or demonstration project.', badge: { label: `Hypothetical example · ${example.solution}` }, image: { alt: '', url: '' } }} />
      <article className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop pb-20 space-y-10">
        <Link href="/work" className="text-label-md text-secondary hover:underline">← All approaches</Link>
        <section>
          <h2 className="text-headline-lg mb-4">The business problem</h2>
          <p className="text-body-lg text-on-surface-variant">{example.problem}</p>
        </section>
        <section>
          <h2 className="text-headline-lg mb-4">A proposed approach</h2>
          <ol className="list-decimal pl-6 space-y-4 text-body-lg text-on-surface-variant">{example.approach.map(step => <li key={step}>{step}</li>)}</ol>
        </section>
        <section className="bg-surface-container-low p-6 rounded-xl">
          <h2 className="text-headline-md mb-4">How we would evaluate it</h2>
          <p className="text-body-lg text-on-surface-variant">{example.evaluation}</p>
          <p className="text-body-md text-on-surface-variant mt-4">Measures would be agreed at the start of a real project. No results have been measured or promised for this example.</p>
        </section>
        <Link href={example.solution === 'AI Automation' ? '/solutions/ai-automation' : '/solutions/data-analytics'} className="text-label-md text-secondary hover:underline">Explore {example.solution} →</Link>
      </article>
      <CTA data={assessmentCTA} />
    </>
  )
}
