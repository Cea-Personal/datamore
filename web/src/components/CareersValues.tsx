// src/components/CareersValues.tsx
import Image from 'next/image'

interface Value {
  icon: string
  title: string
  description: string
  image?: {
    alt: string
    url: string
  }
}

export default function CareersValues({ data }: { data: Value[] }) {
  return (
    <section id="values" className="bg-surface-container-lowest py-32 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-headline-lg text-primary mb-4">Core Principles</h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">We operate at the intersection of academic precision and commercial agility.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {data.map((value, index) => {
            if (value.image) {
              return (
                <div key={index} className="md:col-span-12 bg-surface-container-low p-10 rounded-xl border border-outline-variant/30 flex flex-col md:flex-row items-center gap-10">
                  <div className="md:w-1/2">
                    <span className="material-symbols-outlined text-secondary text-4xl mb-6">{value.icon}</span>
                    <h3 className="text-headline-md text-primary mb-4">{value.title}</h3>
                    <p className="text-body-md text-on-surface-variant">{value.description}</p>
                  </div>
                  <div className="md:w-1/2 h-full min-h-[200px] rounded-lg overflow-hidden">
                    <Image
                      alt={value.image.alt}
                      src={value.image.url}
                      className="w-full h-full object-cover"
                      width={800}
                      height={400}
                    />
                  </div>
                </div>
              )
            }
            if (index === 1) {
              return (
                <div key={index} className="md:col-span-4 bg-primary-container p-10 rounded-xl text-on-primary-container flex flex-col justify-between">
                  <div>
                    <span className="material-symbols-outlined text-tertiary-fixed-dim text-4xl mb-6">{value.icon}</span>
                    <h3 className="text-headline-md text-white mb-4">{value.title}</h3>
                    <p className="text-body-md opacity-80">{value.description}</p>
                  </div>
                </div>
              )
            }
            return (
              <div key={index} className="md:col-span-8 bg-white p-10 rounded-xl ambient-shadow border border-outline-variant/30 flex flex-col justify-between group hover:border-secondary transition-colors">
                <div>
                  <span className="material-symbols-outlined text-secondary text-4xl mb-6">{value.icon}</span>
                  <h3 className="text-headline-md text-primary mb-4">{value.title}</h3>
                  <p className="text-body-md text-on-surface-variant">{value.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}