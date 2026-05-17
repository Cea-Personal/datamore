// src/components/StorySolution.tsx
interface SolutionFeature {
  icon: string
  title: string
  description: string
}

interface SolutionData {
  title: string
  description: string
  features: SolutionFeature[]
}

interface TechnicalSpotlightData {
  title: string
  metrics: { label: string; value: string; percentage?: number }[]
  quote?: string
}

interface StorySolutionProps {
  data: SolutionData
  technicalSpotlight?: TechnicalSpotlightData
}

export default function StorySolution({ data, technicalSpotlight }: StorySolutionProps) {
  return (
    <section className="py-20">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="bg-surface-container-high p-12 rounded-xl border border-secondary/20">
              <span className="material-symbols-outlined text-secondary text-[40px] mb-6">engineering</span>
              <h2 className="font-headline-lg text-headline-lg mb-6">{data.title}</h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                {data.description}
              </p>
              <div className="space-y-4">
                {data.features.map((feature, index) => (
                  <div key={index} className="p-4 bg-white/50 rounded-lg border border-white flex gap-4">
                    <span className="material-symbols-outlined text-secondary">{feature.icon}</span>
                    <div>
                      <div className="font-label-md text-primary">{feature.title}</div>
                      <p className="text-caption text-on-surface-variant">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {technicalSpotlight && (
              <div className="bg-primary-container p-12 rounded-xl text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <span className="material-symbols-outlined text-[160px]">query_stats</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg mb-8">{technicalSpotlight.title}</h2>
                <div className="space-y-8 relative z-10">
                  {technicalSpotlight.metrics.map((metric, index) => (
                    <div key={index}>
                      <div className="flex justify-between font-label-md mb-2">
                        <span>{metric.label}</span>
                        <span>{metric.value}</span>
                      </div>
                      <div className="w-full bg-white/10 h-1 rounded-full">
                        <div className="bg-tertiary-fixed-dim h-full rounded-full" style={{ width: `${metric.percentage || 80}%` }}></div>
                      </div>
                    </div>
                  ))}
                  {technicalSpotlight.quote && (
<p className="font-body-md text-on-primary-container leading-relaxed italic">
                      &quot;The engineering challenge was not just moving data, but moving it with total transactional integrity across a global mesh network.&quot;
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}