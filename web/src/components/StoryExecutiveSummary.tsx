// src/components/StoryExecutiveSummary.tsx
interface StoryData {
  executiveSummary: string
  metrics: { value: string; label: string }[]
}

export default function StoryExecutiveSummary({ data }: { data: StoryData }) {
  return (
    <section className="py-20 bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0px_4px_20px_rgba(15,23,42,0.05)] border border-outline-variant/30 flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <h2 className="font-headline-md text-headline-md mb-4 text-primary">Executive Summary</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {data.executiveSummary}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:w-1/3">
            {data.metrics.map((metric, index) => (
              <div key={index}>
                <div className="text-secondary font-display-lg text-[40px] leading-none mb-2">{metric.value}</div>
                <div className="font-label-md text-on-surface-variant">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}