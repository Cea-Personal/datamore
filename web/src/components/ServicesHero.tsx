// src/components/ServicesHero.tsx
import Image from 'next/image'

interface ServicesHeroData {
  title: string
  subtitle: string
  image: {
    alt: string
    url: string
  }
}

export default function ServicesHero({ data }: { data: ServicesHeroData }) {
  return (
    <section className="px-margin-mobile md:px-margin-desktop py-20 max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-7">
          <span className="inline-block py-1 px-3 bg-surface-container-high text-on-secondary-fixed-variant text-label-md rounded-full mb-6">
            Enterprise Solutions
          </span>
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary mb-6" dangerouslySetInnerHTML={{ __html: data.title }}>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-xl">
            {data.subtitle}
          </p>
        </div>
        <div className="md:col-span-5 relative">
            <div className="aspect-square bg-surface-container rounded-3xl overflow-hidden ambient-shadow-card">
              <Image
                alt={data.image.alt}
                src={data.image.url}
                className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]"
                width={800}
                height={800}
                priority
              />
            </div>
        </div>
      </div>
    </section>
  )
}