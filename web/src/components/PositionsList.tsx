// src/components/PositionsList.tsx
interface Position {
  title: string
  location: string
  type: string
  description: string
  requirements: string[]
  responsibilities: string[]
}

export default function PositionsList({ data }: { data: Position[] }) {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((position, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm border border-outline-variant/30 hover:border-secondary transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-headline-md text-headline-md text-primary">{position.title}</h3>
              <span className="px-3 py-1 bg-surface-container-high rounded-full font-label-md text-label-md text-on-surface">
                {position.type}
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-3">{position.location}</p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">{position.description}</p>
            
            <div className="mb-3">
              <h4 className="font-label-md text-label-md mb-2 text-primary">Requirements</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {position.requirements.map((req, idx) => (
                  <li key={idx} className="text-on-surface-variant">{req}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-3">
              <h4 className="font-label-md text-label-md mb-2 text-primary">Responsibilities</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {position.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-on-surface-variant">{resp}</li>
                ))}
              </ul>
            </div>
            
            <a href="#apply" className="inline-block mt-4 px-4 py-2 bg-secondary text-on-secondary rounded font-label-md text-label-md hover:brightness-110 transition-all">
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}