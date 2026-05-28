// src/components/ServicePageImpact.tsx

export interface Metric {
  value: string
  label: string
  description: string
}

export default function ServicePageImpact({ data }: { data: { title: string; metrics: Metric[] } }) {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-white">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">{data.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {data.metrics.map((metric, index) => (
            <div key={index} className="text-center p-8 rounded-2xl bg-surface-container-low border border-outline-variant/30">
              <div className="font-display-lg text-display-lg text-secondary mb-2">{metric.value}</div>
              <p className="font-headline-md text-headline-md text-on-surface mb-2">{metric.label}</p>
              <p className="font-body-md text-body-md text-on-surface-variant">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}