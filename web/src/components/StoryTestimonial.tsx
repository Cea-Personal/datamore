// src/components/StoryTestimonial.tsx
interface TestimonialData {
  quote: string
  author: string
  title: string
  image: {
    alt: string
    url: string
  }
}

export default function StoryTestimonial({ data }: { data: TestimonialData }) {
  return (
    <section className="py-24 bg-white border-y border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
        <span className="material-symbols-outlined text-secondary text-[48px] mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
<blockquote className="font-headline-lg text-headline-lg md:text-[36px] text-primary max-w-4xl mx-auto leading-tight mb-10">
          &quot;Datamore didn&apos;t just give us a dashboard; they re-engineered how we think about risk. We now have a predictive advantage that has directly improved our bottom line.&quot;
        </blockquote>
        <div className="flex flex-col items-center gap-2">
          <img 
            alt={data.image.alt} 
            src={data.image.url}
            className="w-16 h-16 rounded-full object-cover border-2 border-secondary p-1"
          />
          <div className="font-label-md text-primary">{data.author}</div>
          <div className="font-caption text-on-surface-variant">{data.title}</div>
        </div>
      </div>
    </section>
  )
}