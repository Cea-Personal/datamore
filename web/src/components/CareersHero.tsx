// src/components/CareersHero.tsx
import Image from 'next/image'

interface CareersHeroData {
  title: string
  subtitle: string
  image: {
    alt: string
    url: string
  }
}

export default function CareersHero({ data }: { data: CareersHeroData }) {
  return (
    <section className="relative px-margin-mobile md:px-margin-desktop py-20 md:py-32 max-w-container-max mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="z-10">
        <span className="inline-block px-4 py-1 rounded-full bg-surface-container-high text-secondary text-label-md mb-6">
          Careers at Datamore
        </span>
        <h1 className="text-display-lg-mobile md:text-display-lg text-primary mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: data.title }}>
        </h1>
        <p className="text-body-lg text-on-surface-variant max-w-lg mb-10">
          {data.subtitle}
        </p>
        <div className="flex gap-4">
          <a href="#talent-pool" className="bg-primary text-on-primary px-8 py-4 rounded-lg text-label-md hover:bg-secondary transition-all shadow-lg active:scale-95">
            View Mission
          </a>
          <a href="#values" className="border border-outline text-on-surface px-8 py-4 rounded-lg text-label-md hover:bg-surface-container transition-all active:scale-95">
            Our Values
          </a>
        </div>
      </div>
       <div className="relative h-[450px] md:h-[500px] rounded-2xl overflow-hidden ambient-shadow">
         <Image
           alt={data.image.alt}
           src={data.image.url}
           className="w-full h-full object-cover"
           width={800}
           height={500}
           priority
         />
         <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
       </div>
    </section>
  )
}