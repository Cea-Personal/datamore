// src/components/ServiceSecurity.tsx
interface SecurityData {
  title: string
  subtitle: string
  features: Array<{
    icon: string
    title: string
    description: string
  }>
  metrics: Array<{ label: string; value: string }>
}

export default function ServiceSecurity({ data }: { data: SecurityData }) {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-primary-container text-on-primary-container relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
      <div className="max-w-container-max mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
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
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <span className="font-label-md text-label-md text-white">Security Protocol</span>
                <span className="text-secondary text-sm">Status: Active</span>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-[94%]"></div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {data.metrics.map((metric, index) => (
                  <div key={index} className="bg-white/5 p-4 rounded-lg">
                    <div className="font-caption text-caption opacity-60">{metric.label}</div>
                    <div className="font-headline-md text-headline-md text-white">{metric.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}