// src/components/InsightsFilter.tsx
interface FilterButton {
  label: string
  variant: string
}

export default function InsightsFilter({ data }: { data: { buttons: FilterButton[]; placeholder: string } }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-outline-variant pb-8">
      <div className="flex flex-wrap gap-3">
        {data.buttons.map((button, index) => (
          <button
            key={index}
            className={button.variant === 'primary'
              ? 'bg-primary text-on-primary px-4 py-2 rounded-full font-label-md text-label-md'
              : 'bg-surface-container-low text-on-surface-variant px-4 py-2 rounded-full font-label-md text-label-md hover:bg-surface-container-high transition-colors'}
          >
            {button.label}
          </button>
        ))}
      </div>
      <div className="relative min-w-[300px]">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
        <input
          className="w-full pl-10 pr-4 py-2 border border-outline-variant rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all font-body-md"
          placeholder={data.placeholder}
          type="text"
        />
      </div>
    </div>
  )
}