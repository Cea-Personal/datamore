// src/components/CareersWhyJoin.tsx
interface Benefit {
  icon: string
  title: string
  description: string
}

export default function CareersWhyJoin({ data }: { data: Benefit[] }) {
  return (
    <section className="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-headline-lg text-primary mb-6">Engineered for Excellence</h2>
          <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed">
            We are a community of precision-driven professionals. At Datamore, we believe in deep work, high autonomy, and the pursuit of mastery in data science and artificial intelligence.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>
              <span className="text-body-md text-on-surface">Flat hierarchy focused on competence</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>
              <span className="text-body-md text-on-surface">Dedicated R&D time for internal AI ventures</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>
              <span className="text-body-md text-on-surface">Strategic wellness and deep-focus days</span>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {data.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-outline-variant/30">
              <span className="material-symbols-outlined text-secondary mb-4">{benefit.icon}</span>
              <h4 className="text-label-md mb-2 text-primary">{benefit.title}</h4>
              <p className="text-caption text-on-surface-variant">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}