// src/components/ServiceInfrastructure.tsx
interface InfrastructureFeature {
  icon: string
  title: string
  description: string
}

interface InfrastructureData {
  title: string
  subtitle: string
  features: InfrastructureFeature[]
  metrics?: { label: string; value: string }[]
}

export default function ServiceInfrastructure({ data }: { data: InfrastructureData }) {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-primary-container text-on-primary-container">
      <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-white mb-6">{data.title}</h2>
          <p className="font-body-lg text-body-lg opacity-80 mb-8">{data.subtitle}</p>
          <div className="space-y-6">
            {data.features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-secondary/20 rounded flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary">{feature.icon}</span>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-white mb-1">{feature.title}</h4>
                  <p className="font-body-md text-body-md opacity-70">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {data.metrics && (
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md">
            <div className="space-y-4">
              {data.metrics.map((metric, index) => (
                <div key={index} className="bg-white/5 p-4 rounded-lg">
                  <div className="font-caption text-caption opacity-60">{metric.label}</div>
                  <div className="font-headline-md text-headline-md text-white">{metric.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}