// src/components/Impact.tsx

interface ImpactData {
  title: string
  metrics: Array<{
    value: string
    label: string
  }>
}

export default function Impact({ data }: { data: ImpactData }) {
  return (
    <section className="px-margin-mobile md:px-margin-desktop py-24 max-w-container-max mx-auto">
      <div className="bg-primary-container text-on-primary-container rounded-3xl overflow-hidden relative p-12 md:p-20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary to-transparent"></div>
        <div className="relative z-10">
          <h2 className="text-headline-lg text-white mb-16 text-center">{data.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
            {data.metrics.map((metric, index) => (
              <div key={index}>
                <div className="text-display-lg-mobile md:text-display-lg text-tertiary-fixed-dim mb-2">
                  {metric.value}
                </div>
                <p className="text-body-md opacity-80">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}