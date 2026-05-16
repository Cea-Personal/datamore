// src/components/HowWeDoIt.tsx

interface HowWeDoItData {
  title: string
  steps: Array<{
    number: string
    title: string
    description: string
  }>
}

export default function HowWeDoIt({ data }: { data: HowWeDoItData }) {
  return (
    <section className="bg-surface-container-low py-24">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-16 text-center">{data.title}</h2>
        <div className="relative flex flex-col md:flex-row justify-between items-stretch gap-8">
          {/* Vertical line for desktop */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant/30 hidden md:block -translate-y-1/2"></div>
          {data.steps.map((step, index) => (
            <div
              key={index}
              className="relative z-10 bg-surface-container-lowest p-8 rounded-xl ambient-shadow flex-1 border border-surface-container"
            >
              <div className="w-10 h-10 rounded-full bg-secondary text-on-primary flex items-center justify-center font-label-md text-label-md mb-6 shadow-lg shadow-secondary/20">
                {step.number}
              </div>
              <h4 className="font-label-md text-label-md text-primary uppercase tracking-widest mb-3">{step.title}</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}