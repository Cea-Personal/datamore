// src/components/ContactBadges.tsx

export default function ContactBadges() {
  return (
    <div className="mt-8 grid grid-cols-3 gap-gutter opacity-60">
      <div className="flex flex-col items-center text-center p-4">
        <span className="material-symbols-outlined text-secondary text-4xl mb-2">security</span>
        <p className="font-label-md text-label-md">ISO 27001 Certified</p>
      </div>
      <div className="flex flex-col items-center text-center p-4">
        <span className="material-symbols-outlined text-secondary text-4xl mb-2">bolt</span>
        <p className="font-label-md text-label-md">Rapid Deployment</p>
      </div>
      <div className="flex flex-col items-center text-center p-4">
        <span className="material-symbols-outlined text-secondary text-4xl mb-2">psychology</span>
        <p className="font-label-md text-label-md">AI First Strategy</p>
      </div>
    </div>
  )
}