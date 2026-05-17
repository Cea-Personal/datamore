'use client'

import { useState } from 'react'
import InsightsGrid from '@/components/InsightsGrid'
import type { Article } from '@/types/insight'

interface FilterButton {
  label: string
  variant: string
}

interface CategoryItem {
  label: string
  count: number
}

interface EditorsChoiceItem {
  category: string
  title: string
  readTime: string
}

interface QuarterlyReportItem {
  title: string
  description: string
  action: {
    label: string
    icon: string
  }
}

interface InsightsSidebarData {
  categories: CategoryItem[]
  editorsChoice: EditorsChoiceItem[]
  quarterlyReport: QuarterlyReportItem
}

export default function InsightsFilter({ 
  data, 
  articles,
  onFilterChange 
}: { 
  data: { buttons: FilterButton[]; placeholder: string }
  articles: Article[]
  onFilterChange: (filtered: Article[]) => void
}) {
  const [activeFilter, setActiveFilter] = useState('All Insights')
  const [searchTerm, setSearchTerm] = useState('')

  const handleFilterClick = (label: string) => {
    setActiveFilter(label)
    let filtered = articles
    
    if (label !== 'All Insights') {
      filtered = articles.filter(a => 
        a.category.toLowerCase() === label.toLowerCase()
      )
    }
    
    if (searchTerm) {
      filtered = filtered.filter(a => 
        a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    
    onFilterChange(filtered)
  }

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    let filtered = articles
    
    if (activeFilter !== 'All Insights') {
      filtered = articles.filter(a => 
        a.category.toLowerCase() === activeFilter.toLowerCase()
      )
    }
    
    if (term) {
      filtered = filtered.filter(a => 
        a.title.toLowerCase().includes(term.toLowerCase()) ||
        a.description.toLowerCase().includes(term.toLowerCase())
      )
    }
    
    onFilterChange(filtered)
  }

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-outline-variant pb-8">
      <div className="flex flex-wrap gap-3">
        {data.buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => handleFilterClick(button.label)}
            className={activeFilter === button.label
              ? 'bg-primary text-on-primary px-4 py-2 rounded-full text-label-md'
              : 'bg-surface-container-low text-on-surface-variant px-4 py-2 rounded-full text-label-md hover:bg-surface-container-high transition-colors'}
          >
            {button.label}
          </button>
        ))}
      </div>
      <div className="relative min-w-[300px]">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
        <input
          className="w-full pl-10 pr-4 py-2 border border-outline-variant rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all text-body-md"
          placeholder={data.placeholder}
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    </div>
  )
}