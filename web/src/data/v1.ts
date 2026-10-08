// Public V1 content. Original service, story and article sources remain in place.
export const assessmentCTA = {
  title: 'Start with the problem. Find the next step.',
  subtitle: 'A free Data & AI Assessment to understand your business, review the bottleneck, and decide whether a small diagnostic or implementation makes sense.',
}

export const solutions = [
  {
    slug: 'data-analytics',
    title: 'Data & Analytics',
    icon: 'insights',
    description: 'Bring scattered data together, replace manual reporting, and give your team a reliable view of the business.',
    problem: 'Your data lives in different tools. Reporting takes too long, and the numbers don’t always agree.',
    outcomes: ['One consistent view of sales, customers and operations', 'Reporting that runs without repeated spreadsheet work', 'Clear metrics your team can use to make decisions'],
    steps: ['Connect business systems', 'Build a reliable data foundation', 'Agree on business metrics', 'Deliver dashboards and reporting'],
    capabilities: [
      { href: '/services/data-foundations', label: 'Data Foundations' },
      { href: '/services/bi-analytics', label: 'Analytics & BI' },
      { href: '/services/systems-integration', label: 'System Integration' },
    ],
  },
  {
    slug: 'ai-automation',
    title: 'AI Automation',
    icon: 'smart_toy',
    description: 'Reduce repetitive knowledge and operational work with AI-assisted workflows and human review where it matters.',
    problem: 'Your team spends too much time searching for information, processing documents, and moving work between tools.',
    outcomes: ['Answers grounded in approved company knowledge', 'Less repetitive document handling and routing', 'Human approval for decisions that need judgment'],
    steps: ['Understand the manual process', 'Connect tools and approved knowledge', 'Build and test an assisted workflow', 'Measure time saved and review quality'],
    capabilities: [
      { href: '/services/ai-automation#technical-capabilities', label: 'AI assistants, RAG & document workflows' },
      { href: '/services/systems-integration', label: 'System Integration' },
    ],
  },
] as const

export const problems = [
  { title: 'Scattered data', description: 'Business information lives across spreadsheets, applications and databases.', icon: 'database' },
  { title: 'Manual reporting', description: 'Your team copies, cleans and reconciles data before it can answer basic questions.', icon: 'table_chart' },
  { title: 'Poor visibility', description: 'It is hard to see what is happening across customers, sales and operations.', icon: 'visibility' },
  { title: 'Repetitive workflows', description: 'People spend their time searching, processing documents and repeating the same tasks.', icon: 'repeat' },
  { title: 'Disconnected systems', description: 'Important tools do not exchange information reliably, creating duplicate work.', icon: 'sync_problem' },
]

export const useCases = [
  { title: 'Automated business reporting', description: 'Connect operational systems and replace recurring spreadsheet preparation.', solution: 'Data & Analytics' },
  { title: 'Customer & sales intelligence', description: 'Combine CRM, marketing and transaction data to understand conversion, retention and revenue.', solution: 'Data & Analytics' },
  { title: 'Operations analytics', description: 'Bring inventory, logistics or service performance into a consistent view.', solution: 'Data & Analytics' },
  { title: 'Internal knowledge assistant', description: 'Help teams query approved documents with answers that point back to their sources.', solution: 'AI Automation' },
  { title: 'Document & workflow automation', description: 'Extract, classify, summarize and route documents, with human approval where required.', solution: 'AI Automation' },
]

// These are proposed approaches, not completed engagements or demonstrations.
export const workExamples = [
  { slug: 'business-reporting', title: 'From scattered sales data to useful reporting', solution: 'Data & Analytics', problem: 'Sales and inventory information is spread across e-commerce, finance and warehouse tools. A weekly report starts with manual reconciliation.', approach: ['Connect the relevant systems and validate incoming data.', 'Agree on sales and inventory definitions with the business.', 'Build reporting with checks, scheduled updates and visible data freshness.'], evaluation: 'Compare reporting preparation time and reconciliation errors against the current process.' },
  { slug: 'supply-chain-predictive-modeling', title: 'A clearer view of inventory and operations', solution: 'Data & Analytics', problem: 'Teams cannot easily compare demand, stock levels and delivery performance across systems.', approach: ['Unify inventory, order and delivery information.', 'Build shared operational metrics and exception views.', 'Evaluate forecasting only after establishing data quality and a useful baseline.'], evaluation: 'Track stock availability, forecast error and the time needed to identify exceptions.' },
  { slug: 'data-driven-philanthropy-impact', title: 'Consistent reporting for an impact organization', solution: 'Data & Analytics', problem: 'Programme teams use different spreadsheets and definitions, making it difficult to report outcomes consistently.', approach: ['Agree on programme measures and reporting definitions.', 'Connect source data and document quality gaps.', 'Build a shared view of activity and outcomes with appropriate access.'], evaluation: 'Review completeness, consistency and reporting effort with programme teams.' },
  { slug: 'enterprise-knowledge-retrieval', title: 'Find answers in approved company knowledge', solution: 'AI Automation', problem: 'Employees spend time searching through company documents and asking colleagues the same questions.', approach: ['Select approved knowledge sources and respect access permissions.', 'Retrieve relevant passages and return source-backed answers.', 'Test against real questions and route uncertain answers to a person.'], evaluation: 'Measure answer usefulness, source accuracy and search time on an agreed set of questions.' },
  { slug: 'scaling-data-maturity-for-growth', title: 'Move from spreadsheets to shared business metrics', solution: 'Data & Analytics', problem: 'A growing business relies on separate spreadsheets that disagree about customers, sales and performance.', approach: ['Identify the decisions and reports that matter first.', 'Create a small data model with consistent metric definitions.', 'Deliver one useful dashboard before expanding the platform.'], evaluation: 'Check metric consistency, team adoption and preparation time before expanding scope.' },
] as const

export const focusSegments = [
  { title: 'Retail & e-commerce', description: 'Understand sales, customers and inventory across your channels.' },
  { title: 'Growing businesses', description: 'Replace spreadsheet bottlenecks and repetitive work as your team grows.' },
  { title: 'Nonprofits & impact organizations', description: 'Bring programme reporting and operational information together.' },
]
