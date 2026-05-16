// src/components/Industries.tsx
interface IndustryTag {
  label: string
}

interface IndustryCard {
  title: string
  description: string
  image: {
    alt: string
    url: string
  }
}

interface IndustriesData {
  title: string
  subtitle: string
  tags: IndustryTag[]
  cards: IndustryCard[]
}

export default function Industries({ data }: { data: IndustriesData }) {
  return (
    <section className="px-margin-mobile md:px-margin-desktop py-24 max-w-container-max mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">{data.title}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">{data.subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {data.tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-surface-container-low rounded-full font-label-md text-label-md text-on-secondary-fixed-variant"
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {data.cards.map((card, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="aspect-video rounded-xl overflow-hidden mb-4 ambient-shadow bg-surface-container">
              <img
                alt={card.image.alt}
                src={card.image.url}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h5 className="font-headline-md text-headline-md text-primary mb-2">{card.title}</h5>
            <p className="font-caption text-caption text-on-surface-variant">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}