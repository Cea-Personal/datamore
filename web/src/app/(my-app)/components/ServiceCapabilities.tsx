// src/components/ServiceCapabilities.tsx
interface Capability {
  icon: string
  title: string
  description: string
  features?: string[]
  gridSpan?: number
  image?: string
}

export default function ServiceCapabilities({ data }: { data: Capability[] }) {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto">
        <div className="mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Core Capabilities</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Precision-engineered frameworks designed to scale with the complexity of global finance and humanitarian sectors.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {data.map((capability, index) => {
            let colSpan = 'md:col-span-4'
            if (capability.gridSpan === 2) colSpan = 'md:col-span-8'
            else if (capability.image) colSpan = 'md:col-span-8'
            
            return (
              <div 
                key={index} 
                className={`bg-surface-container-lowest p-8 rounded-2xl ambient-shadow interactive-shadow transition-all group border border-outline-variant/30 flex flex-col ${colSpan} ${!capability.image ? 'justify-between' : ''}`}
              >
                {capability.image ? (
                  <div className="flex flex-col md:flex-row gap-8 h-full">
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <span className="material-symbols-outlined text-secondary text-4xl mb-4">{capability.icon}</span>
                        <h3 className="font-headline-md text-headline-md text-on-surface mb-3">{capability.title}</h3>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-6">{capability.description}</p>
                      </div>
                      {capability.features && (
                        <div className="flex flex-wrap gap-2">
                          {capability.features.map((feature, i) => (
                            <span key={i} className="bg-surface-container px-3 py-1 rounded-full font-caption text-caption text-secondary">{feature}</span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 bg-surface-container rounded-xl overflow-hidden min-h-[200px]">
                      <img src={capability.image} alt={capability.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-secondary text-4xl mb-6">{capability.icon}</span>
                    <h3 className="font-headline-md text-headline-md text-on-surface mb-3">{capability.title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">{capability.description}</p>
                    {capability.features && (
                      <ul className="space-y-3">
                        {capability.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
                            <span className="material-symbols-outlined text-secondary text-sm">check_circle</span> {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}