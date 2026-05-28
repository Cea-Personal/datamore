import Link from 'next/link'

interface Article {
  slug: string
  thumbnail: string
  category: string
  date: string
  readTime: string
  title: string
  description: string
  likes?: number
}

export default function InsightsGrid({ data }: { data: Article[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
      {data.map((article, index) => (
        <article
          key={index}
          className="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden ambient-shadow interactive-shadow transition-all group border border-outline-variant/30"
        >
          <div className="h-48 overflow-hidden relative">
            <img
              alt={`Thumbnail for ${article.title}`}
              src={article.thumbnail}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4">
              <span className={`bg-secondary/90 backdrop-blur-md text-on-secondary px-3 py-1 rounded-md text-label-md`}>
                {article.category}
              </span>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div className="text-on-surface-variant text-caption mb-2 flex justify-between">
              <span>{article.date}</span>
              <span>{article.readTime}</span>
            </div>
            <h3 className="text-headline-md text-primary mb-3">{article.title}</h3>
            <p className="text-body-md text-on-surface-variant mb-6 flex-grow">
              {article.description}
            </p>
            {article.likes !== undefined && (
              <div className="flex items-center text-on-surface-variant text-caption mb-4">
                <span className="material-symbols-outlined text-[16px] mr-1">favorite</span>
                <span>{article.likes} likes</span>
              </div>
            )}
            <Link href={`/insights/${article.slug}`} className="text-secondary text-label-md flex items-center gap-1 no-underline">
              <span className="hover:underline decoration-2 underline-offset-2">Read more</span> <span className="material-symbols-outlined text-sm">chevron_right</span>
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}