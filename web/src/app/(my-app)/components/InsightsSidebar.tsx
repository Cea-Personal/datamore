'use client'

import Link from 'next/link'

interface Article {
  slug: string
  category: string
}

export default function InsightsSidebar({ 
  articles,
  onFilter 
}: { 
  articles: Article[]
  onFilter?: (category: string) => void
}) {
  const categoryCounts = articles.reduce((acc, article) => {
    const cat = article.category
    acc[cat] = (acc[cat] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const uniqueCategories = Array.from(
    new Set(articles.map(a => a.category).filter(Boolean))
  ).map(category => ({
    label: category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    slug: category
  }))

  return (
    <>
      {/* Browse by Category */}
      <div className="hidden md:block bg-surface-container-low p-8 rounded-2xl">
        <h4 className="text-headline-md text-primary mb-6">Browse by Category</h4>
        <ul className="flex flex-col gap-4">
          {uniqueCategories.map((category) => (
            <li key={category.slug}>
              {onFilter ? (
                <button
                  onClick={() => onFilter(category.slug)}
                  className="w-full flex justify-between items-center group"
                >
                  <span className="text-body-md text-on-surface-variant group-hover:text-secondary transition-colors">
                    {category.label}
                  </span>
                  <span className="bg-surface-container-high text-on-surface-variant px-2 py-1 rounded text-label-md text-caption">
                    {categoryCounts[category.slug] || 0}
                  </span>
                </button>
              ) : (
                <Link href={`/insights?category=${category.slug}`} className="flex justify-between items-center group">
                  <span className="text-body-md text-on-surface-variant group-hover:text-secondary transition-colors">
                    {category.label}
                  </span>
                  <span className="bg-surface-container-high text-on-surface-variant px-2 py-1 rounded text-label-md text-caption">
                    {categoryCounts[category.slug] || 0}
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}