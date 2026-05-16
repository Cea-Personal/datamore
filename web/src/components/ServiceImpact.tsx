// src/components/ServiceImpact.tsx
interface ImpactMetric {
  value: string
  label: string
  description: string
}

interface ServiceImpactData {
  title: string
  subtitle: string
  metrics: ImpactMetric[]
}

export default function ServiceImpact({ data }: { data: ServiceImpactData }) {
  return (
    <>
      {/* Outcome Section */}
      <section className="px-margin-desktop py-24 max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-headline-lg text-primary">{data.title}</h2>
          <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto mt-4">
            {data.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {data.metrics.map((metric, index) => (
            <div key={index} className="p-8 border-l-2 border-secondary">
              <div className="text-display-lg text-secondary mb-2">
                {metric.value}
              </div>
              <h4 className="text-headline-md mb-2">
                {metric.label}
              </h4>
              <p className="text-body-md text-on-surface-variant">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}