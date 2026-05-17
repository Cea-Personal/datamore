// src/components/StoryHero.tsx
interface StoryHeroData {
  title: string
  subtitle: string
  badge?: {
    label: string
    icon: string
  }
  image: {
    alt: string
    url: string
  }
}

export default function StoryHero({ data }: { data: StoryHeroData }) {
  return (
    <main className="pt-24 overflow-x-hidden">
      <section className="relative w-full h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt={data.image.alt}
            src={data.image.url}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter w-full">
          <div className="md:col-span-8 flex flex-col gap-6">
            {data.badge && (
              <div className="inline-flex items-center bg-tertiary-fixed-dim/20 text-on-tertiary-container px-3 py-1 rounded-full w-fit">
                <span className="material-symbols-outlined text-[18px] mr-2">{data.badge.icon}</span>
                <span className="font-label-md text-label-md">{data.badge.label}</span>
              </div>
            )}
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary max-w-3xl" dangerouslySetInnerHTML={{ __html: data.title }}></h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">{data.subtitle}</p>
          </div>
        </div>
      </section>
    </main>
  )
}