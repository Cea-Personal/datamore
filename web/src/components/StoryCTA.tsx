// src/components/StoryCTA.tsx
interface CTAData {
  title: string
  subtitle: string
  primaryButton: { label: string; url: string }
  secondaryButton: { label: string; url: string }
}

export default function StoryCTA({ data }: { data: CTAData }) {
  return (
    <section className="py-24 max-w-container-max mx-auto px-margin-desktop">
      <div className="bg-primary-container rounded-3xl p-16 text-center flex flex-col items-center gap-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent"></div>
        <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white relative z-10">{data.title}</h2>
        <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl relative z-10">
          {data.subtitle}
        </p>
        <div className="flex flex-col md:flex-row gap-4 relative z-10">
          <button className="bg-secondary text-white px-8 py-4 rounded-xl font-label-md hover:shadow-lg hover:shadow-secondary/20 transition-all flex items-center gap-2">
            {data.primaryButton.label}
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
          <button className="bg-white/10 text-white px-8 py-4 rounded-xl font-label-md border border-white/20 hover:bg-white/20 transition-all">
            {data.secondaryButton.label}
          </button>
        </div>
      </div>
    </section>
  )
}