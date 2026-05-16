// src/components/InsightsGrid.tsx
interface Article {
  thumbnail: string
  category: string
  date: string
  readTime: string
  title: string
  description: string
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
              <span className={`bg-secondary/90 backdrop-blur-md text-on-secondary px-3 py-1 rounded-md font-label-md text-label-md`}>
                {article.category}
              </span>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div className="text-on-surface-variant font-caption text-caption mb-2 flex justify-between">
              <span>{article.date}</span>
              <span>{article.readTime}</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-3">{article.title}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">
              {article.description}
            </p>
            <a href="#" className="text-secondary font-label-md text-label-md flex items-center gap-1 group-hover:underline">
              Read more <span className="material-symbols-outlined text-sm">chevron_right</span>
            </a>
          </div>
        </article>
      ))}
    </div>
  )
}