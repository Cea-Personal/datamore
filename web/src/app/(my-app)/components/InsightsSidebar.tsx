'use client'

import Link from 'next/link'

interface Article {
  slug: string
  category: string
}

interface EditorsChoiceItem {
  category: string
  title: string
  readTime: string
}

const categoryLabelMap: Record<string, string> = {
  'data-strategy': 'Data Strategy',
  'ai-ml': 'AI & ML',
  'engineering': 'Engineering',
  'case-studies': 'Case Studies',
  'cloud-architecture': 'Cloud Architecture',
  'Data Strategy': 'data-strategy',
  'AI & ML': 'ai-ml',
  'Engineering': 'engineering',
  'Case Studies': 'case-studies',
  'Cloud Architecture': 'cloud-architecture'
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

  const categories = [
    { label: 'Data Strategy', slug: 'data-strategy' },
    { label: 'AI & ML', slug: 'ai-ml' },
    { label: 'Engineering', slug: 'engineering' },
    { label: 'Case Studies', slug: 'case-studies' },
    { label: 'Cloud Architecture', slug: 'cloud-architecture' }
  ]

  return (
    <>
      {/* Browse by Category */}
      <div className="bg-surface-container-low p-8 rounded-2xl">
        <h4 className="text-headline-md text-primary mb-6">Browse by Category</h4>
        <ul className="flex flex-col gap-4">
          {categories.map((category) => (
            <li key={category.slug}>
              {onFilter ? (
                <button
                  onClick={() => onFilter(category.label)}
                  className="w-full flex justify-between items-center group"
                >
                  <span className="text-body-md text-on-surface-variant group-hover:text-secondary transition-colors">
                    {category.label}
                  </span>
                  <span className="bg-surface-container-high text-on-surface-variant px-2 py-1 rounded text-label-md text-caption">
                    {categoryCounts[category.label] || 0}
                  </span>
                </button>
              ) : (
                <Link href={`/insights?category=${category.slug}`} className="flex justify-between items-center group">
                  <span className="text-body-md text-on-surface-variant group-hover:text-secondary transition-colors">
                    {category.label}
                  </span>
                  <span className="bg-surface-container-high text-on-surface-variant px-2 py-1 rounded text-label-md text-caption">
                    {categoryCounts[category.label] || 0}
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