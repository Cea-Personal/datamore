// src/components/ServicePageHero.tsx
import Image from 'next/image'

interface HeroData {
  title: string
  subtitle: string
  badge?: {
    label: string
    caption: string
    icon: string
  }
  image: {
    alt: string
    url: string
  }
}

export default function ServicePageHero({ data }: { data: HeroData }) {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        <div className="lg:col-span-7 z-10">
          {data.badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full text-secondary mb-6">
              <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>{data.badge.icon}</span>
              <span className="font-label-md text-label-md uppercase tracking-wider">{data.badge.label}</span>
            </div>
          )}
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6" dangerouslySetInnerHTML={{ __html: data.title }}>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-10">
            {data.subtitle}
          </p>
        </div>
        <div className="lg:col-span-5 relative mt-12 lg:mt-0">
<div className="relative w-full aspect-square bg-surface-container rounded-2xl overflow-hidden ambient-shadow">
             <Image
               alt={data.image.alt}
               src={data.image.url}
               className="w-full h-full object-cover"
               width={800}
               height={800}
               priority
             />
             <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 to-transparent"></div>
           </div>
        </div>
      </div>
    </section>
  )
}