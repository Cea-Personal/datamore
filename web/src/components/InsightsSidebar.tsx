// src/components/InsightsSidebar.tsx
interface CategoryItem {
  label: string
  count: number
}

interface EditorsChoiceItem {
  category: string
  title: string
  readTime: string
}

interface QuarterlyReportItem {
  title: string
  description: string
  action: {
    label: string
    icon: string
  }
}

export default function InsightsSidebar({ data }: { data: { categories: CategoryItem[]; editorsChoice: EditorsChoiceItem[]; quarterlyReport: QuarterlyReportItem } }) {
  return (
    <>
      {/* Browse by Category */}
      <div className="bg-surface-container-low p-8 rounded-2xl">
        <h4 className="font-headline-md text-headline-md text-primary mb-6">Browse by Category</h4>
        <ul className="flex flex-col gap-4">
          {data.categories.map((category, index) => (
            <li key={index}>
              <a href="#" className="flex justify-between items-center group">
                <span className="font-body-md text-on-surface-variant group-hover:text-secondary transition-colors">
                  {category.label}
                </span>
                <span className={`bg-surface-container-high text-on-surface-variant px-2 py-1 rounded text-caption font-label-md`}>
                  {category.count}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Editor's Choice */}
      <div className="mt-12">
        <h4 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary">verified</span>
          Editor's Choice
        </h4>
        <div className="space-y-6">
          {data.editorsChoice.map((item, index) => (
            <a
              key={index}
              href="#"
              className="group block border-b border-outline-variant pb-6"
            >
              <span className={`text-${item.category.toLowerCase().replace(' & ', '-').replace(' ', '-')} font-label-md text-caption block mb-1`}>
                {item.category}
              </span>
              <h5 className="font-label-md text-label-md text-primary group-hover:text-secondary transition-colors leading-tight mb-2">
                {item.title}
              </h5>
              <span className="text-on-surface-variant text-caption">{item.readTime}</span>
            </a>
          ))}
        </div>
      </div>
      
      {/* Recommended Reading */}
      <div className="mt-12 bg-primary-container p-8 rounded-2xl text-on-primary">
        <h4 className="font-headline-md text-headline-md mb-4">{data.quarterlyReport.title}</h4>
        <p className="font-body-md mb-6 opacity-80">{data.quarterlyReport.description}</p>
        <button className="w-full bg-white text-primary py-3 rounded-lg font-label-md hover:bg-opacity-90 transition-all flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">{data.quarterlyReport.action.icon}</span>
          {data.quarterlyReport.action.label}
        </button>
      </div>
    </>
  )
}