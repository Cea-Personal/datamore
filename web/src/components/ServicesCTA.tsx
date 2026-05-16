// src/components/ServicesCTA.tsx
interface ServicesCTAData {
  title: string
  subtitle: string
  primaryButton: {
    label: string
    url: string
  }
  secondaryButton: {
    label: string
    url: string
  }
}

export default function ServicesCTA({ data }: { data: ServicesCTAData }) {
  return (
    <section className="px-margin-desktop py-20 bg-primary-container">
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
        <div className="max-w-xl">
          <h2 className="font-headline-lg text-headline-lg text-on-primary mb-4">{data.title}</h2>
          <p className="font-body-lg text-body-lg text-on-primary-container">{data.subtitle}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-secondary text-on-secondary rounded-xl font-label-md text-label-md glass-edge hover:opacity-95 transition-all">
            {data.primaryButton.label}
          </button>
          <button className="px-8 py-4 border border-on-primary-container text-on-primary rounded-xl font-label-md text-label-md hover:bg-on-primary-fixed-variant transition-all">
            {data.secondaryButton.label}
          </button>
        </div>
      </div>
    </section>
  )
}