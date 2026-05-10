import PageLayout from '@/components/PageLayout';
import Link from 'next/link';

// Sample insights data for initial display (will be replaced by Payload CMS data)
const sampleInsights = [
  {
    id: '1',
    title: 'The LLM Orchestration Layer: Beyond the Chatbot',
    excerpt: 'Why the next generation of enterprise value lies not in the models themselves, but in the sophisticated architecture that governs their multi-agent interactions.',
    category: 'AI Strategy',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAesR2N9fgP3etoUfuj38WUFdVGiWm4WkpfuEe9euqWeY5Uom6S08l2x1GYGWdyWtaYUjxr349av_CYHiA7Kq-wU8f4Cx5ktODitGBd-6Rf3wrYHmdtUm4q8rbDIlnjgiH-uXmdhY2-U9wOuEveRFM6PYD7orLLAcpq4zBwqlDHcBAFT1ak8j8VF2feZxJWhBMw-zs0wen0fqnUaWIng6ML08pzQG3X2tPHYeFe85h9pNH3yxaCfXpaciEbcbcq8cAQHVpCNIbpuKp7',
    author: 'Dr. Sarah Chen',
    publishedAt: '2024-10-24',
    readTime: '12 min read',
    featured: true,
  },
  {
    id: '2',
    title: 'Vector Database Benchmarking 2024',
    excerpt: 'Comprehensive performance analysis of leading vector databases across varying scales and query patterns.',
    category: 'Architecture',
    author: 'Marcus Johnson',
    publishedAt: '2024-10-20',
    readTime: '8 min read',
  },
  {
    id: '3',
    title: 'Privacy-Preserving Computation in Finance',
    excerpt: 'How federated learning and secure enclaves are revolutionizing compliance in regulated industries.',
    category: 'Data Ethics',
    author: 'Elena Rodriguez',
    publishedAt: '2024-10-15',
    readTime: '10 min read',
  },
  {
    id: '4',
    title: 'Optimizing GPU Clusters for Training Large Transformers',
    excerpt: 'An exhaustive look at interconnect bandwidth limitations and thermal management strategies in modern data centers.',
    category: 'Architecture',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGvr6l6tq1VVTTuy_QeC76OsodvCl_qnFAJRprS5wnN9Wy10G7gOODwg7iBVM5rtUsSH_IQQ2sMo7ogOL9sAgtANmpSGl5JEMa2byaznJZg8NL62NWEZWn3QhdHAlu1P1oUryINLa_-9_FKPG-9juccsnKQameTTLKubT31mbJnyqTpUxvVOa7kLoRCj8Dy6qfnzEMswE2Vo1JwVMpYvQRLjRVvgCRNNgNbhYJiRxuqZqxAgDL3Wy4bveyDTkJ2R-qi3pvaqG-FcaP',
    author: 'James Liu',
    publishedAt: '2024-10-10',
    readTime: '15 min read',
  },
  {
    id: '5',
    title: 'Recursive Reasoners: Self-Correcting LLM Pipelines',
    excerpt: 'Moving beyond zero-shot prompts into recursive chains that verify their own outputs against external ground-truth datasets.',
    category: 'Agentic AI',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHtXvpC9FMyW1yR9CDjyHREjMoqlILKkTIeJlRlde12c2G2sL5TgaNn06yWB2DtVW3-AUHUBZ1MFzj0Kbv7fHhMAWGHvHCRli6bDqlf7ri9ATZMRUW3r0wztznR63guSoPXG8sjZCcXkliqOroV0zfSiQtXHJBrZFbjDY3vo4JRil48PhnZYdsAXmKDkdVzEMak-Dt9fQSKKcyS3QDny0XGgz7yZRRCpwHDMI1fkBQ38ZdE9DXfEpQabnNy9I4E6IifCzEmwm8ma41',
    author: 'Dr. Sarah Chen',
    publishedAt: '2024-10-05',
    readTime: '12 min read',
  },
  {
    id: '6',
    title: 'Semantic Data Fabric: The End of Traditional ETL?',
    excerpt: 'How semantic mapping layers are enabling real-time data discovery across heterogeneous enterprise systems without duplication.',
    category: 'Data Ops',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFwHNjksmbpnLQPtLBe3K3u5Hr_vYocOP2SL2tHUk-KUf_T3l4FQOebOTkMDozr1IPjVz17UWXsRydKET1i6PA88u0qIdk43DzlLBzYTYrcbReiDYlJIQ7csIgiYUTBAdX7NfpJdRGBLzjRISI6k9DTUG6d6fNC43uPDIOVb6QjCxFJ8SXq_RfqQINI71TuydCa8XLJU7d08-ixe1NYZKbJyzPO55oDLJ8iEJQlP70H6_hA_bDRjWNpOVyZI29Nif2pEZRvHg5XhPg',
    author: 'Maya Patel',
    publishedAt: '2024-09-28',
    readTime: '10 min read',
  },
  {
    id: '7',
    title: 'The 2025 AI Readiness Framework',
    excerpt: 'A comprehensive guide for CTOs to audit infrastructure, talent, and data governance before deploying production-grade AI.',
    category: 'Strategy',
    author: 'Alex Thompson',
    publishedAt: '2024-09-22',
    readTime: '18 min read',
    horizontal: true,
  },
];

export default function InsightsPage() {
  const featured = sampleInsights.find((insight) => insight.featured);
  const regular = sampleInsights.filter((insight) => !insight.featured);
  const quickTake = sampleInsights.find((insight) => insight.category === 'Quick Take');

  return (
    <PageLayout>
      <main className="pt-24 pb-margin-desktop px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Header Section */}
        <section className="mb-margin-tablet">
          <h1 className="font-display-lg text-display-lg mb-4">Insights &amp; Strategy</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Advanced analysis on the future of generative intelligence, decentralized data
            architectures, and enterprise AI scaling.
          </p>
        </section>

        {/* Featured Article */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-margin-desktop">
          <div className="lg:col-span-8 group relative overflow-hidden rounded-xl bento-card aspect-[16/9] lg:aspect-auto min-h-[400px] flex flex-col justify-end p-gutter">
            <img
              alt=""
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40 group-hover:scale-105 transition-transform duration-700"
              src={featured?.image}
            />
            <div className="relative z-10">
              <div className="flex gap-2 mb-4">
                <span className="ai-gradient px-3 py-1 rounded-full text-white font-label-md text-label-md">
                  AI STRATEGY
                </span>
                <span className="bg-surface-variant/50 border border-outline-variant/30 px-3 py-1 rounded-full text-on-surface-variant font-label-md text-label-md uppercase">
                  Featured
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl mb-4 group-hover:text-primary transition-colors">
                {featured?.title}
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 line-clamp-2">
                {featured?.excerpt}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">calendar_today</span>
                  <span className="font-label-md text-label-md uppercase">
                    {featured?.publishedAt}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">schedule</span>
                  <span className="font-label-md text-label-md uppercase">
                    {featured?.readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Side Featured Items */}
          <div className="lg:col-span-4 flex flex-col gap-gutter">
            <div className="flex-1 bento-card p-gutter rounded-xl flex flex-col justify-center">
              <span className="text-secondary font-label-md text-label-md mb-2 uppercase tracking-widest">
                Trending Insight
              </span>
              <h3 className="font-headline-md text-headline-md mb-4">
                Vector Database Benchmarking 2024
              </h3>
              <a
                href="#"
                className="flex items-center gap-2 text-primary font-bold group"
              >
                Read Analysis
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="flex-1 bento-card p-gutter rounded-xl flex flex-col justify-center relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 opacity-10">
                <span className="material-symbols-outlined text-[120px]">database</span>
              </div>
              <span className="text-tertiary font-label-md text-label-md mb-2 uppercase tracking-widest">
                Data Ethics
              </span>
              <h3 className="font-headline-md text-headline-md mb-4">
                Privacy-Preserving Computation in Finance
              </h3>
              <a
                href="#"
                className="flex items-center gap-2 text-primary font-bold group"
              >
                Case Study
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Technical Deep Dives Grid */}
        <section>
          <div className="flex items-baseline justify-between mb-8 border-b border-outline-variant/20 pb-4">
            <h2 className="font-headline-lg text-headline-lg">Technical Deep Dives</h2>
            <div className="flex gap-4">
              <button className="text-primary font-label-md text-label-md uppercase border-b-2 border-primary pb-1">
                All
              </button>
              <button className="text-on-surface-variant font-label-md text-label-md uppercase hover:text-primary transition-colors pb-1">
                AI/ML
              </button>
              <button className="text-on-surface-variant font-label-md text-label-md uppercase hover:text-primary transition-colors pb-1">
                Infrastructure
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {/* Card 1 */}
            <div className="bento-card rounded-xl overflow-hidden group">
              <div className="aspect-video relative">
                <img
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src={sampleInsights[3].image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <span className="font-label-md text-label-md text-secondary border border-secondary/30 px-2 py-0.5 rounded mb-4 inline-block uppercase">
                  Architecture
                </span>
                <h4 className="font-headline-md text-headline-md mb-3 group-hover:text-primary transition-colors">
                  Optimizing GPU Clusters for Training Large Transformers
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 mb-6">
                  An exhaustive look at interconnect bandwidth limitations and thermal
                  management strategies in modern data centers.
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    8 min read
                  </span>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary">
                    north_east
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bento-card rounded-xl overflow-hidden group">
              <div className="aspect-video relative">
                <img
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src={sampleInsights[4].image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <span className="ai-gradient text-white px-2 py-0.5 rounded font-label-md text-label-md mb-4 inline-block uppercase">
                  Agentic AI
                </span>
                <h4 className="font-headline-md text-headline-md mb-3 group-hover:text-primary transition-colors">
                  Recursive Reasoners: Self-Correcting LLM Pipelines
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 mb-6">
                  Moving beyond zero-shot prompts into recursive chains that verify their
                  own outputs against external ground-truth datasets.
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    15 min read
                  </span>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary">
                    north_east
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bento-card rounded-xl overflow-hidden group">
              <div className="aspect-video relative">
                <img
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src={sampleInsights[5].image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <span className="font-label-md text-label-md text-tertiary border border-tertiary/30 px-2 py-0.5 rounded mb-4 inline-block uppercase">
                  Data Ops
                </span>
                <h4 className="font-headline-md text-headline-md mb-3 group-hover:text-primary transition-colors">
                  Semantic Data Fabric: The End of Traditional ETL?
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 mb-6">
                  How semantic mapping layers are enabling real-time data discovery across
                  heterogeneous enterprise systems without duplication.
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    10 min read
                  </span>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary">
                    north_east
                  </span>
                </div>
              </div>
            </div>

            {/* Card 4 (Horizontal Span) */}
            <div className="bento-card rounded-xl overflow-hidden md:col-span-2 group flex flex-col md:flex-row">
              <div className="md:w-1/2 relative overflow-hidden">
                <img
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbxjlkTqIGxWfbDUjlOz1K476035jgNqo-Mf_h5HTnhgw58surqLTGW1IIMp5SY7shDM4qbziVtNzR2AzFSg649CdyxuM1RAV3CHWV1keg9gtneZMPYNESjZkf84PN8dv4mK6Gtsoz0df8hFDa1ClpclKPrlowiU-IrMUndU-9cPDVIATktVe72TqtIAzj8KmoxZOLBop4fwcbLCNYiumEsPJaZUU91ACPWkDTWrlrx2FVtpskV3OcXaTWjV8nAq2gnX48-P5Uidyq"
                />
              </div>
              <div className="md:w-1/2 p-gutter flex flex-col justify-center">
                <span className="font-label-md text-label-md text-primary border border-primary/30 px-2 py-0.5 rounded mb-4 inline-block self-start uppercase">
                  Strategy
                </span>
                <h4 className="font-headline-lg text-headline-lg mb-4 group-hover:text-primary transition-colors">
                  The 2025 AI Readiness Framework
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  A comprehensive guide for CTOs to audit infrastructure, talent, and data
                  governance before deploying production-grade AI.
                </p>
                <button className="bg-surface-variant text-on-surface font-bold px-6 py-3 rounded-xl border border-outline-variant hover:bg-primary hover:text-on-primary transition-all self-start flex items-center gap-2">
                  Download PDF
                  <span className="material-symbols-outlined">download</span>
                </button>
              </div>
            </div>

            {/* Card 5 (Small Accent) */}
            <div className="bento-card rounded-xl p-6 flex flex-col justify-between border-l-4 border-l-primary">
              <div>
                <span className="material-symbols-outlined text-primary mb-4">
                  lightbulb
                </span>
                <h4 className="font-headline-md text-headline-md mb-2">Quick Take</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                  &quot;The bottleneck for AI adoption isn&apos;t model performance—it&apos;s the
                  reliability of the underlying data pipelines.&quot;
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-outline-variant/20 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-container" />
                <span className="font-label-md text-label-md">Dr. Sarah Chen, CTO</span>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mt-margin-desktop bento-card rounded-xl p-margin-tablet relative overflow-hidden text-center">
          <div className="absolute inset-0 ai-gradient opacity-5 pointer-events-none" />
          <div className="relative z-10 max-w-xl mx-auto">
            <span className="material-symbols-outlined text-primary text-5xl mb-4">
              mail
            </span>
            <h2 className="font-headline-xl text-headline-xl mb-4">
              Stay at the Cutting Edge
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              Get bi-weekly technical deep dives and strategic analysis delivered directly
              to your inbox. No fluff, just data.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                className="flex-1 bg-surface-container-low border border-outline-variant rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                placeholder="Enter your enterprise email"
                type="email"
              />
              <button className="bg-primary text-on-primary font-bold px-8 py-4 rounded-xl hover:shadow-[0_0_15px_rgba(173,198,255,0.4)] transition-all">
                Subscribe Now
              </button>
            </form>
            <p className="font-label-md text-label-md text-on-surface-variant mt-4 opacity-60">
              Join 12,000+ technical leaders from companies like OpenAI, Anthropic, and
              NVIDIA.
            </p>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
