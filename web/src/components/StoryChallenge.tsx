// src/components/StoryChallenge.tsx
interface ChallengeData {
  title: string
  description: string
  items: { icon: string; text: string }[]
}

interface StoryChallengeProps {
  data: ChallengeData
  metrics: { value: string; label: string }[]
}

export default function StoryChallenge({ data, metrics }: StoryChallengeProps) {
  return (
    <section className="py-20">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-7 bg-white p-12 rounded-xl border border-outline-variant/50 shadow-[0px_4px_20px_rgba(15,23,42,0.05)]">
            <span className="material-symbols-outlined text-secondary text-[40px] mb-6">warning</span>
            <h2 className="font-headline-lg text-headline-lg mb-6">{data.title}</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
              {data.description}
            </p>
            <ul className="space-y-4">
              {data.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error mt-1">{item.icon}</span>
                  <span className="font-body-md text-on-surface">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-5 flex flex-col gap-gutter">
            <div className="flex-1 bg-primary-container text-on-primary-fixed p-8 rounded-xl flex flex-col justify-end relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-headline-md text-white mb-2">Technical Rigor</h3>
                <p className="text-on-primary-container text-body-md">Ensuring data integrity in zero-trust environments.</p>
              </div>
            </div>
            <div className="h-1/2 bg-secondary-container p-8 rounded-xl flex items-center justify-center text-white text-center">
              <div>
                <div className="text-display-lg leading-none mb-2">{metrics[0]?.value || '2.4B'}</div>
                <div className="font-label-md opacity-80 uppercase tracking-widest">Daily Transaction Volume</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}