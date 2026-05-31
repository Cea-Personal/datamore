// src/components/ServiceCategories.tsx
import Link from 'next/link'

interface ServiceCategory {
  title: string
  category: string
  icon: string
  description: string
  features: string[]
  link: string
  explore: string
}

export default function ServiceCategories({ data }: { data: ServiceCategory[] }) {
  return (
    <section className="px-margin-mobile md:px-margin-desktop py-24 bg-surface-container-low">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between  items-end mb-16 gap-6">
          <div className="flex flex-col items-center max-w-container-max mx-auto">
            <h2 className="text-headline-lg text-primary">Core Service Areas</h2>
            <p className="text-body-md text-on-surface-variant mt-2">End-to-end data excellence for businesses and organisations.</p>
          </div>
          <div className="flex gap-4">
            <div className="h-[2px] w-24 bg-outline-variant mb-3"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* 1. Data Engineering & Infrastructure (Large Feature) */}
          <div className="md:col-span-8 bg-surface-container-lowest p-10 rounded-3xl ambient-shadow-card border border-outline-variant/30 flex flex-col items-center justify-between">
            <div className="flex justify-between items-start">
              <div className="w-16 h-16 bg-secondary-container flex items-center justify-center rounded-2xl">
                <span className="material-symbols-outlined text-on-secondary-container text-4xl">{data[0].icon}</span>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-headline-lg text-primary mb-4">{data[0].title}</h3>
              <p className="text-body-lg text-on-surface-variant max-w-2xl mb-8">
                {data[0].description}
              </p>
              <div className="grid grid-cols-2 gap-6 border-t border-outline-variant pt-8">
                {data[0].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">check_circle</span>
                    <span className="text-label-md">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <Link href={data[0].link} className="mt-8 w-[360px] py-3 bg-secondary text-on-secondary rounded-xl text-label-md text-center">
              {data[0].explore}
            </Link>
          </div>

          {/* 2. Business Intelligence (Side Card) */}
          <div className="md:col-span-4 bg-primary-container p-8 rounded-3xl flex flex-col text-on-primary">
            <div className="w-12 h-12 bg-tertiary-fixed flex items-center justify-center rounded-xl mb-8">
              <span className="material-symbols-outlined text-on-tertiary-fixed text-2xl">{data[1].icon}</span>
            </div>
            <h3 className="text-headline-md mb-4">{data[1].title}</h3>
            <p className="text-body-md opacity-80 mb-8 flex-grow">
              {data[1].description}
            </p>
            <ul className="space-y-4 mb-8">
              {data[1].features.map((feature, index) => (
                <li key={index} className="flex justify-between items-center border-b border-on-primary-container pb-2">
                  <span className="text-label-md">{feature}</span>
                </li>
              ))}
            </ul>
            <Link href={data[1].link} className="w-[360px] py-3 bg-surface-container-lowest text-primary rounded-xl text-label-md text-center">
              {data[1].explore}
            </Link>
          </div>

          {/* 3. AI & LLM Automation (Interactive Card) */}
          <div className="md:col-span-6 bg-surface-container-highest p-8 rounded-3xl ambient-shadow-card flex flex-col border border-outline-variant/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-xl">
                <span className="material-symbols-outlined text-on-primary text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>
                  {data[2].icon}
                </span>
              </div>
              <h3 className="text-headline-md text-primary">{data[2].title}</h3>
            </div>
            <p className="text-body-md text-on-surface-variant mb-6">
              {data[2].description}
            </p>
            <div className="bg-surface-container-lowest rounded-2xl p-4 space-y-3">
              {data[2].features.map((feature, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-surface">
                  <span className="text-label-md">{feature}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
            <Link href={data[2].link} className="mt-6 w-[360px] py-3 bg-secondary text-on-secondary rounded-xl text-label-md text-center">
              {data[2].explore}
            </Link>
            </div>
          </div>

          {/* 4. Data Strategy (Bento Wide) */}
          <div className="md:col-span-6 bg-white p-8 flex flex-col rounded-3xl ambient-shadow-card border border-outline-variant/30 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-headline-md text-primary mb-2">{data[3].title}</h3>
              <p className="text-body-md text-on-surface-variant mb-8">{data[3].description}</p>
              <div className="flex flex-wrap gap-2">
                {data[3].features.map((feature, index) => (
                  <span key={index} className="px-3 py-1 bg-surface-container-high rounded-full text-label-md text-on-surface">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            <div className=" -bottom-10  w-48 h-48 bg-secondary/5 rounded-full blur-3xl"/>
            <div className="flex justify-center">
            <Link href={data[3].link} className="mt-6 w-[360px] py-3 bg-secondary text-on-secondary rounded-xl text-label-md text-center">
              {data[3].explore}
            </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}