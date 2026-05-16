// src/components/InsightsHero.tsx
import Image from 'next/image'

interface InsightsHeroData {
  title: string
  subtitle: string
  readTime: string
  badge: {
    label: string
    color: string
  }
  image: {
    alt: string
    url: string
  }
}

export default function InsightsHero({ data }: { data: InsightsHeroData }) {
  return (
    <section className="px-margin-desktop max-w-container-max mx-auto mb-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-7">
          <div className="flex items-center gap-2 mb-4">
            <span className={`bg-${data.badge.color} text-on-${data.badge.color} px-3 py-1 rounded-full font-label-md text-label-md`}>
              {data.badge.label}
            </span>
            <span className="text-on-surface-variant font-caption text-caption">{data.readTime}</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-primary mb-6" dangerouslySetInnerHTML={{ __html: data.title }}>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-2xl">
            {data.subtitle}
          </p>
          <button className="bg-secondary text-on-secondary px-8 py-4 rounded-lg font-label-md text-label-md flex items-center gap-2 interactive-shadow transition-all group">
            Read Full Article
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
            <div className="md:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden ambient-shadow">
              <Image
                alt={data.image.alt}
                src={data.image.url}
                className="w-full h-full object-cover"
                width={800}
                height={600}
                priority
              />
            </div>
      </div>
    </section>
  )
}