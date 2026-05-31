// src/components/ServicePageHero.tsx
import Link from 'next/dist/client/link'

interface HeroData {
  title: string
  subtitle: string
  badge?: {
    label: string
    icon?: string
  }
  image: {
    alt: string | null | undefined
    url: string | null | undefined
  }
  backgroundImage?: {
    url: string | null | undefined
    alt?: string
  }
  slug?:{
    url : string
    label: string
  } 
  readTime?: string
  likes?: number
}

export default function ServicePageHero({ data }: { data: HeroData }) {
  const hasBackgroundImage = data.backgroundImage?.url
  
  return (
    <section className={`relative overflow-hidden min-h-[70vh] pt-20 pb-32 px-margin-mobile md:px-margin-desktop ${hasBackgroundImage ? 'bg-cover bg-center bg-no-repeat' : ''}`}
    >
      {hasBackgroundImage && (
        <div className="absolute inset-0 bg-white/80" />
      )}
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        <div className="lg:col-span-10 lg:col-start-2 z-10 text-center">
          {data.badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full text-secondary mb-6 mx-auto">
              {data.badge.icon && (
                <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>{data.badge.icon}</span>
              )}
              <span className="font-label-md text-label-md uppercase tracking-wider">{data.badge.label}</span>
              <span className="text-on-surface-variant text-caption">{data.readTime}</span>
              {data.likes !== undefined && data.likes > 0 && (
                <span className="flex items-center gap-1 text-on-surface-variant text-caption">
                  <span className="material-symbols-outlined text-[16px]">favorite</span>
                  {data.likes}
                </span>
              )}
            </div>
          )}
          <div>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6 text-center" dangerouslySetInnerHTML={{ __html: data.title }}>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-10 px-10 mx-auto text-left">
            {data.subtitle}
          </p>
          </div>
          {data.slug && (
            <Link href={data.slug.url} className="bg-secondary text-on-secondary px-6 py-3 rounded-lg text-label-md flex items-center gap-2 interactive-shadow transition-all group w-60 mx-auto">
              {data.slug.label}
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-sm">arrow_forward</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}