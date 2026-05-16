// src/components/StoriesGrid.tsx
import Link from 'next/link'

interface Story {
  slug: string
  title: string
  sector: string
  image: {
    alt: string
    url: string
  }
  summary: string
  metrics: Array<{
    value: string
    label: string
  }>
}

export default function StoriesGrid({ data }: { data: Story[] }) {
  return (
    <main className="px-margin-desktop max-w-container-max mx-auto pb-32">
      <div className="grid grid-cols-12 gap-gutter">
        {/* Main Story (larger) */}
        {data.map((story, index) => (
          <div
            key={index}
            className={`col-span-12 md:col-span-${index === 0 ? 8 : 4} group`}
          >
            <div
              className="ambient-shadow-card bg-surface-container-lowest rounded-xl overflow-hidden transition-all duration-300 hover:border-secondary border border-outline-variant h-full flex flex-col ${index === 0 ? 'md:flex-row' : 'flex-col'}"
            >
              {index === 0 && (
                <>
                  <div className="md:w-1/2 relative overflow-hidden">
                    <img
                      alt={story.image.alt}
                      src={story.image.url}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <span className="text-secondary text-label-md mb-3">
                      {story.sector}
                    </span>
                    <h3 className="text-headline-lg text-primary mb-4 leading-tight">
                      {story.title}
                    </h3>
                    <p className="text-on-surface-variant text-body-md mb-6">
                      {story.summary}
                    </p>
                    <Link
                      href={`/success-stories/${story.slug}`}
                      className="inline-flex items-center text-secondary text-label-md hover:underline"
                    >
                      Read Full Story <span className="material-symbols-outlined ml-2">arrow_forward</span>
                    </Link>
                  </div>
                </>
              )}
              {index > 0 && (
                <>
                  <div className="h-64 relative overflow-hidden">
                    <img
                      alt={story.image.alt}
                      src={story.image.url}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <span className="text-secondary text-label-md mb-3">
                      {story.sector}
                    </span>
                    <h3 className="text-headline-md text-primary mb-4">
                      {story.title}
                    </h3>
                    <p className="text-on-surface-variant text-body-md mb-6">
                      {story.summary}
                    </p>
                    <Link
                      href={`/success-stories/${story.slug}`}
                      className="mt-auto inline-flex items-center text-secondary text-label-md hover:underline"
                    >
                      Read Full Story <span className="material-symbols-outlined ml-2">arrow_forward</span>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}