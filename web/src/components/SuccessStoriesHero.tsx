// src/components/SuccessStoriesHero.tsx

interface HeroData {
  title: string
  subtitle: string
}

export default function SuccessStoriesHero({ data }: { data: HeroData }) {
  return (
    <header className="pt-20 pb-16 px-margin-desktop max-w-container-max mx-auto text-center">
      <span className="bg-tertiary-container text-tertiary-fixed-dim px-4 py-1 rounded-full font-label-md text-label-md inline-block mb-6 uppercase tracking-wider">
        Our Impact
      </span>
      <h1 className="font-display-lg text-display-lg mb-6 text-primary">{data.title}</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
        {data.subtitle}
      </p>
    </header>
  )
}