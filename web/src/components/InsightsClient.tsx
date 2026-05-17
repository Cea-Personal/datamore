'use client'

import { useState } from 'react'
import InsightsFilter from '@/components/InsightsFilter'
import InsightsGrid from '@/components/InsightsGrid'
import InsightsSidebar from '@/components/InsightsSidebar'
import GlobalCTA from '@/components/CTA'
import type { Article } from '@/types/insight'

interface CTAData {
  title: string
  subtitle: string
  primaryButton: { label: string; url: string }
  secondaryButton: { label: string; url: string }
}

interface FilterData {
  buttons: { label: string; variant: string }[]
  placeholder: string
}

const ARTICLES_PER_PAGE = 4

export default function InsightsClient({
  initialArticles,
  allArticles,
  filterData,
  ctaData
}: {
  initialArticles: Article[]
  allArticles: Article[]
  filterData: FilterData
  ctaData: CTAData
}) {
  const [filteredArticles, setFilteredArticles] = useState<Article[] | null>(null)
  const [showAll, setShowAll] = useState(false)

  const activeArticles = filteredArticles !== null ? filteredArticles : allArticles
  const displayArticles = filteredArticles !== null 
    ? (showAll ? activeArticles : activeArticles.slice(0, ARTICLES_PER_PAGE))
    : (showAll ? allArticles : initialArticles)
  const hasMore = activeArticles.length > ARTICLES_PER_PAGE && !showAll

  const handleCategoryFilter = (category: string) => {
    const filtered = allArticles.filter(a => a.category === category)
    setFilteredArticles(filtered)
    setShowAll(false)
  }

  return (
    <>
      <section className="px-margin-desktop max-w-container-max mx-auto mb-20">
        <InsightsFilter data={filterData} articles={allArticles} onFilterChange={(filtered) => {
          setFilteredArticles(filtered)
          setShowAll(false)
        }} />
      </section>
      <section className="px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-8">
            <InsightsGrid data={displayArticles} />
            {hasMore && (
              <div className="mt-12 text-center">
                <button
                  onClick={() => setShowAll(true)}
                  className="px-8 py-3 border border-outline text-primary font-label-md rounded-lg hover:bg-surface-container transition-colors"
                >
                  Load More Articles
                </button>
              </div>
            )}
          </div>
          <aside className="lg:col-span-4 space-y-12">
            <InsightsSidebar articles={allArticles} onFilter={handleCategoryFilter} />
          </aside>
        </div>
      </section>
      <GlobalCTA data={ctaData} />
    </>
  )
}