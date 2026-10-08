import Link from 'next/link'
import { focusSegments, problems, useCases, workExamples } from '@data/v1'

export function ProblemsSection() {
  return (
    <section className="bg-surface-container-low py-16 md:py-20">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <h2 className="text-headline-lg text-primary mb-4">Does this sound familiar?</h2>
        <p className="text-body-lg text-on-surface-variant mb-10 max-w-2xl">Start with what slows your business down. The technology comes after.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {problems.map(problem => (
            <div key={problem.title} className="bg-white p-6 rounded-xl border border-outline-variant/30">
              <span aria-hidden="true" className="material-symbols-outlined text-secondary mb-4">{problem.icon}</span>
              <h3 className="text-headline-md mb-3">{problem.title}</h3>
              <p className="text-body-md text-on-surface-variant">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function UseCasesSection({ solution }: { solution?: string }) {
  const items = useCases.filter(item => !solution || item.solution === solution)
  return (
    <section className="px-margin-mobile md:px-margin-desktop py-16 md:py-20 max-w-container-max mx-auto">
      <h2 className="text-headline-lg text-primary mb-4">What this could look like in your business</h2>
      <p className="text-body-lg text-on-surface-variant max-w-2xl mb-10">Practical applications, scoped around a problem your team recognizes.</p>
      <div className="grid md:grid-cols-2 gap-gutter">
        {items.map(item => (
          <article key={item.title} className="border-t border-outline-variant pt-6">
            <p className="text-label-md text-secondary mb-2">{item.solution}</p>
            <h3 className="text-headline-md mb-3">{item.title}</h3>
            <p className="text-body-md text-on-surface-variant">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export function WorkPreview() {
  const examples = [workExamples[0], workExamples[3]]
  return (
    <section className="px-margin-mobile md:px-margin-desktop py-16 md:py-20 max-w-container-max mx-auto">
      <h2 className="text-headline-lg text-primary mb-4">Explore the approach behind the work</h2>
      <p className="text-body-lg text-on-surface-variant mb-10 max-w-2xl">These hypothetical examples explain how we would approach common problems. They are not client results or completed demonstrations.</p>
      <div className="grid md:grid-cols-2 gap-gutter">
        {examples.map(example => (
          <article key={example.slug} className="bg-white rounded-xl p-8 border border-outline-variant/30 ambient-shadow">
            <p className="text-label-md text-secondary mb-3">Hypothetical example · {example.solution}</p>
            <h3 className="text-headline-md mb-4">{example.title}</h3>
            <p className="text-body-md text-on-surface-variant mb-6">{example.problem}</p>
            <Link className="text-label-md text-secondary hover:underline" href={`/work/${example.slug}`}>Explore this approach →</Link>
          </article>
        ))}
      </div>
    </section>
  )
}

export function WhoWeHelp() {
  return (
    <section className="bg-surface-container-low py-16 md:py-20">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <h2 className="text-headline-lg text-primary mb-10">For teams growing beyond manual processes</h2>
        <div className="grid md:grid-cols-3 gap-gutter">
          {focusSegments.map(segment => (
            <div key={segment.title}>
              <h3 className="text-headline-md mb-3">{segment.title}</h3>
              <p className="text-body-md text-on-surface-variant">{segment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
