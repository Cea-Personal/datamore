// src/components/FeaturedSuccessStory.tsx
import Link from 'next/link'

interface FeaturedSuccessStoryData {
  title: string
  summary : string
  metrics: Array<{
    value: string
    label: string
  }>
  slug: string,
  image: {
    alt: string
    url: string
  }
}

export default function FeaturedSuccessStory({ data }: { data: FeaturedSuccessStoryData }) {
  return (
    <section className="px-margin-mobile md:px-margin-desktop py-24 max-w-container-max mx-auto">
      <div className="bg-surface-container-lowest rounded-3xl ambient-shadow overflow-hidden border border-surface-container flex flex-col md:flex-row">
        <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          <span className="text-label-lg text-secondary uppercase tracking-widest mb-4">Featured Success Story</span>
          <h3 className="text-headline-lg text-primary mb-6">{data.title}</h3>
          <p className="text-body-md text-on-surface-variant mb-8">
            {data.summary}
          </p>
          <div className="flex items-center gap-6 mb-10">
            {data.metrics.map((metric, index) => (
              <div key={index} className="flex items-center gap-6">
                <div>
                  <div className="text-headline-md text-secondary">{metric.value}</div>
                  <div className="text-caption text-on-surface-variant">{metric.label}</div>
                </div>
                {index < data.metrics.length - 1 && (
                  <div className="w-px h-10 bg-outline-variant"></div>
                )}
              </div>
            ))}
          </div>
          <Link
            href={`/success-stories/${data.slug}`}
            className="flex items-center gap-2 text-label-lg text-primary group w-fit"
          >
             Read Full Story
            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
          </Link>
        </div>
        <div className="md:w-1/2 min-h-[300px]">
          <img
            alt={data.image.alt}
            src={data.image.url}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}