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
  cta: {
    title: string
    subtitle: string
    primaryButton: {
      label: string
      url: string
    }
    secondaryButton: {
      label: string
      url: string
    }
  }
}

export default function ServiceImpact({ data }: { data: ServiceImpactData }) {
  return (
    <>
      {/* Outcome Section */}
      <section className="px-margin-desktop py-24 max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary">{data.title}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto mt-4">
            {data.subtitle}
          </p>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {data.metrics.map((metric, index) => (
            <div key={index} className="p-8 border-l-2 border-secondary">
              <div className="font-display-lg text-display-lg text-secondary mb-2">
                {metric.value}
              </div>
              <h4 className="font-headline-md text-headline-md mb-2">
                {metric.label}
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-margin-desktop py-20 bg-primary-container">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="max-w-xl">
            <h2 className="font-headline-lg text-headline-lg text-on-primary mb-4">
              {data.cta.title}
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary-container">
              {data.cta.subtitle}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-secondary text-on-secondary rounded-xl font-label-md text-label-md glass-edge hover:opacity-95 transition-all">
              {data.cta.primaryButton.label}
            </button>
            <button className="px-8 py-4 border border-on-primary-container text-on-primary rounded-xl font-label-md text-label-md hover:bg-on-primary-fixed-variant transition-all">
              {data.cta.secondaryButton.label}
            </button>
          </div>
        </div>
      </section>
    </>
  )
}