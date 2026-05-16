// src/components/ServiceCategories.tsx
import Link from 'next/link'

interface ServiceCategory {
  title: string
  category: string
  icon: string
  description: string
  features: string[]
  link: string
}

export default function ServiceCategories({ data }: { data: ServiceCategory[] }) {
  return (
    <section className="px-margin-desktop py-24 bg-surface-container-low">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary">Core Service Areas</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">End-to-end data excellence for fintech and NGOs.</p>
          </div>
          <div className="flex gap-4">
            <div className="h-[2px] w-24 bg-outline-variant mb-3"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {data.map((category, index) => {
            // Determine layout - first item takes 8 columns, others take 4 columns in a bento-like layout
            const isFirst = index === 0;
            const colSpan = isFirst ? 'md:col-span-8' : 'md:col-span-4';
            const isLargeCard = isFirst;
            
            return (
              <div
                key={index}
                className={`${colSpan} ${isLargeCard ? 'bg-surface-container-lowest p-10 rounded-3xl ambient-shadow-card border border-outline-variant/30 flex flex-col justify-between group' : 'bg-primary-container p-8 rounded-3xl flex flex-col text-on-primary group hover:bg-on-primary-fixed-variant transition-colors duration-300'}`}
              >
                {isLargeCard ? (
                  <>
                    <div className="flex justify-between items-start">
                      <div className="w-16 h-16 bg-secondary-container flex items-center justify-center rounded-2xl">
                        <span className="material-symbols-outlined text-on-secondary-container text-4xl">{category.icon}</span>
                      </div>
                      <span className="font-label-md text-label-md text-secondary uppercase tracking-widest">Foundational</span>
                    </div>
                    <div className="mt-12">
                      <h3 className="font-headline-lg text-headline-lg text-primary mb-4">{category.title}</h3>
                      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-8">
                        {category.description}
                      </p>
                      <div className="grid grid-cols-2 gap-6 border-t border-outline-variant pt-8">
                        {category.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-secondary">check_circle</span>
                            <span className="font-label-md text-label-md">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-12 h-12 bg-tertiary-fixed flex items-center justify-center rounded-xl mb-8">
                      <span className="material-symbols-outlined text-on-tertiary-fixed text-2xl">{category.icon}</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md mb-4">{category.title}</h3>
                    <p className="font-body-md text-body-md opacity-80 mb-8 flex-grow">
                      {category.description}
                    </p>
                    <ul className="space-y-4 mb-8">
                      {category.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex justify-between items-center border-b border-on-primary-container pb-2">
                          <span className="font-label-md text-label-md">{feature}</span>
                          <span className="material-symbols-outlined text-tertiary-fixed text-sm">arrow_forward</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full py-3 bg-surface-container-lowest text-primary rounded-xl font-label-md text-label-md hover:bg-secondary-fixed transition-colors">
                      Explore {category.title.split(' ')[0]}
                    </button>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}