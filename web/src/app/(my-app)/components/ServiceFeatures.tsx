// src/components/ServiceFeatures.tsx
interface FeatureItem {
  icon: string
  title: string
  description: string
}

interface FeatureData {
  title: string
  items: FeatureItem[]
}

export default function ServiceFeatures({ data }: { data: FeatureData }) {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6" dangerouslySetInnerHTML={{ __html: data.title }}>
        </h2>
        <div className="space-y-8">
          {data.items.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary-container/10 rounded-lg flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <div>
                <h4 className="font-label-md text-label-md mb-1">{item.title}</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}