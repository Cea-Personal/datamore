// src/components/InsightsHero.tsx
import Link from 'next/link'
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
  slug?: string
}

export default function InsightsHero({ data }: { data: InsightsHeroData }) {
  return (
    <section className="pt-24 pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-7">
          <div className="flex items-center gap-2 mb-4">
            <span className={`bg-${data.badge.color} text-on-${data.badge.color} px-3 py-1 rounded-full text-label-md`}>
              {data.badge.label}
            </span>
            <span className="text-on-surface-variant text-caption">{data.readTime}</span>
          </div>
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary mb-6" dangerouslySetInnerHTML={{ __html: data.title }}>
          </h1>
          <p className="text-body-lg text-on-surface-variant mb-8 max-w-2xl">
            {data.subtitle}
          </p>
          {data.slug && (
            <Link href={`/insights/${data.slug}`} className="bg-secondary text-on-secondary px-6 py-3 rounded-lg text-label-md flex items-center gap-2 interactive-shadow transition-all group w-60">
              Read Full Article
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-sm">arrow_forward</span>
            </Link>
          )}
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