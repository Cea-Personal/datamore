// src/components/StoryTechnicalSpotlight.tsx
interface TechnicalSpotlightData {
  title: string
  metrics: { label: string; value: string; percentage?: number }[]
  quote?: string
}

export default function StoryTechnicalSpotlight({ data }: { data: TechnicalSpotlightData }) {
  return (
    <section className="py-20 bg-primary-container">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="bg-primary-container p-12 rounded-xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <span className="material-symbols-outlined text-[160px]">query_stats</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg mb-8">{data.title}</h2>
          <div className="space-y-6 max-w-2xl">
            {data.metrics.map((metric, index) => (
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
          </div>
        </div>
      </div>
    </section>
  )
}