interface ServiceTool {
  name: string
  icon?: string
}

export default function ServiceTools({ data }: { data: string[] }) {
  return (
    <section className="py-12 px-margin-mobile md:px-margin-desktop bg-surface overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <div className="mb-8">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Tools & Technologies</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            Modern stack powering enterprise-grade solutions across cloud, data, and AI platforms.
          </p>
        </div>
        <div className="relative">
          <div className="flex animate-slide-infinite gap-gutter">
            {[...data, ...data].map((tool, index) => (
              <div
                key={`${tool}-${index}`}
                className="flex-shrink-0 bg-surface-container-low rounded-xl border border-outline-variant/30 px-6 py-4 min-w-max"
              >
                <span className="font-label-md text-label-md text-on-surface-variant">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}