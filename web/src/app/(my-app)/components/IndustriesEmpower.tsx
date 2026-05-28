'use client'

import { useState } from 'react'

interface Industry {
  label: string
  icon: string
}

interface IndustriesEmpowerData {
  title: string
  subtitle: string
  industries: Industry[]
}

export default function IndustriesEmpower({ data }: { data: IndustriesEmpowerData }) {
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null)

  return (
    <section className="px-margin-mobile md:px-margin-desktop py-24 max-w-container-max mx-auto">
      <div className="mb-16">
        <h2 className="text-headline-lg text-primary mb-4">{data.title}</h2>
        <p className="text-body-md text-on-surface-variant max-w-lg">{data.subtitle}</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-gutter">
        {data.industries.map((industry) => {
          const isHovered = hoveredIndustry === industry.label
          return (
            <div
              key={industry.label}
              className="flex flex-col items-center text-center cursor-pointer"
              onMouseEnter={() => setHoveredIndustry(industry.label)}
              onMouseLeave={() => setHoveredIndustry(null)}
            >
              <div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center mb-4 transition-all duration-300 hover:bg-secondary">
                <span className="material-symbols-outlined text-secondary text-3xl transition-all duration-300 hover:text-white">
                  {industry.icon}
                </span>
              </div>
              <span
                className={`text-label-md transition-all duration-300 ${
                  isHovered
                    ? 'text-secondary text-lg scale-110'
                    : 'text-on-surface-variant hover:text-secondary'
                }`}
              >
                {industry.label}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}