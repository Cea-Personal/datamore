// app/insights/page.tsx
import InsightsData from '@/src/data/insights.json'
import InsightsHero from '@/src/components/InsightsHero'
import InsightsFilter from '@/src/components/InsightsFilter'
import InsightsGrid from '@/src/components/InsightsGrid'
import InsightsSidebar from '@/src/components/InsightsSidebar'
import GlobalCTA from '@/src/components/GlobalCTA'

export default function InsightsPage() {
  return (
    <>
      <InsightsHero data={InsightsData.hero} />
      <section className="px-margin-desktop max-w-container-max mx-auto mb-12">
        <InsightsFilter data={InsightsData.filter} />
      </section>
      <section className="px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-8">
            <InsightsGrid data={InsightsData.articles} />
            <div className="mt-12 text-center">
              <button className="px-8 py-3 border border-outline text-primary font-label-md rounded-lg hover:bg-surface-container transition-colors">
                Load More Articles
              </button>
            </div>
          </div>
          <aside className="lg:col-span-4 space-y-12">
            <InsightsSidebar data={InsightsData.sidebar} />
          </aside>
        </div>
      </section>
      <GlobalCTA data={InsightsData.cta} />
    </>
  )
}