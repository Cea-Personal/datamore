// src/components/WhatWeDo.tsx
import Link from 'next/link'

interface WhatWeDoData {
  title: string
  cards: Array<{
    icon: string
    title: string
    description: string
    link: {
      label: string
      url: string
    }
  }>
}

export default function WhatWeDo({ data }: { data: WhatWeDoData }) {
  return (
    <section className="px-margin-mobile md:px-margin-desktop py-24 max-w-container-max mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-headline-lg text-headline-lg text-primary mb-4">{data.title}</h2>
        <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {data.cards.map((card, index) => (
          <div
            key={index}
            className={`bg-white p-8 rounded-xl ambient-shadow border border-surface-container-low interactive-shadow transition-all group ${index === 1 ? 'md:scale-105 z-10 bg-surface-container-lowest' : ''}`}
          >
            <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center mb-6 text-secondary">
              <span className="material-symbols-outlined">{card.icon}</span>
            </div>
            <h3 className="text-headline-md text-primary mb-3">{card.title}</h3>
            <p className="text-body-md text-on-surface-variant mb-6">
              {card.description}
            </p>
            <Link
              href={card.link.url}
              className="text-secondary text-label-md flex items-center gap-2 group-hover:gap-4 transition-all"
            >
              {card.link.label}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}