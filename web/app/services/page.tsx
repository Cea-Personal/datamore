import PageLayout from '@/components/PageLayout';

export default function Services() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-margin-desktop items-center">
          <div>
            <span className="inline-block py-1 px-3 rounded-full border border-secondary text-secondary font-label-md mb-6 uppercase tracking-widest">
              Expert Systems
            </span>
            <h2 className="font-display-lg text-display-lg mb-8 leading-tight">
              Engineering the Future of{' '}
              <span className="text-secondary">Intelligence.</span>
            </h2>
            <p className="text-body-lg text-on-surface-variant max-w-xl mb-10">
              From agentic AI workflows to high-throughput data infrastructure, we architect
              scalable solutions for the modern enterprise.
            </p>
            <div className="flex gap-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold flex items-center gap-2 group transition-all hover:shadow-[0_0_30px_rgba(173,198,255,0.3)]">
                Consultation
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
              <button className="border border-outline-variant px-8 py-4 rounded-xl font-bold text-on-surface hover:bg-surface-variant/30 transition-all">
                View Methodology
              </button>
            </div>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden glass-card">
            <img
              alt="Technical Grid Background"
              className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1TNkoaa4L49mOBh8GIPXUW3yNcGHT6iS4DT8ZKFRX2k_sMuw7C3lTuQGhc5l5duBcbs_hJrVmbuucEMX3zfnSaZGsNfBleXUdCxsuMUh1nQeMAbjgcUWq_kwla_nKxAjlfN8QNfI-AJ8JL6bI_NwdbCYfD2D6U43UVcg0ZDNtpvJHeXXkdHr1lV_m99fxjWLJBQpQsZmNwAzgd96B0Nn7iUSOzDK_Wtl0JjsHNF2ks7SeSigp9gkOPdeKtLjXt31hsxpVAW4qHtix"
            />
            <div className="absolute inset-0 p-gutter flex flex-col justify-end">
              <div className="p-6 bg-surface/80 backdrop-blur-md rounded-xl border border-outline-variant/30">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
                  <span className="font-label-md text-secondary">SYSTEMS ACTIVE</span>
                </div>
                <p className="font-headline-md text-on-surface font-bold">
                  Cloud Infrastructure v4.2
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Services Hub */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-gutter">
          <div>
            <h3 className="font-headline-xl text-headline-xl mb-2">Our Capabilities</h3>
            <p className="text-on-surface-variant">
              Specialized divisions designed for vertical scalability.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="p-2 border border-outline-variant rounded-lg hover:bg-surface-variant transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="p-2 border border-outline-variant rounded-lg hover:bg-surface-variant transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* AI & Machine Learning - Large Bento */}
          <div className="md:col-span-8 glass-card p-gutter rounded-xl ai-gradient-border relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-12">
                <div className="p-4 bg-tertiary/10 rounded-xl">
                  <span
                    className="material-symbols-outlined text-tertiary scale-150"
                    data-icon="auto_awesome"
                  >
                    auto_awesome
                  </span>
                </div>
                <span className="text-tertiary font-label-md tracking-widest px-3 py-1 bg-tertiary/5 rounded-full border border-tertiary/20">
                  AGENTIC AI
                </span>
              </div>
              <h4 className="font-headline-lg text-headline-lg mb-4">
                Artificial Intelligence &amp; LLMs
              </h4>
              <p className="text-on-surface-variant max-w-lg mb-8">
                Deploying Agentic workflows, custom GenAI integrations, and
                Retrieval-Augmented Generation (RAG) to transform organizational data into
                actionable intelligence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-surface-container rounded-lg border border-outline-variant/20">
                  <p className="text-tertiary font-bold mb-1">RAG</p>
                  <p className="text-body-sm text-on-surface-variant">
                    Contextual Knowledge Retrieval
                  </p>
                </div>
                <div className="p-4 bg-surface-container rounded-lg border border-outline-variant/20">
                  <p className="text-tertiary font-bold mb-1">Agents</p>
                  <p className="text-body-sm text-on-surface-variant">
                    Autonomous Task Execution
                  </p>
                </div>
                <div className="p-4 bg-surface-container rounded-lg border border-outline-variant/20">
                  <p className="text-tertiary font-bold mb-1">Fine-Tuning</p>
                  <p className="text-body-sm text-on-surface-variant">
                    Custom Model Optimization
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-tertiary/10 blur-[100px] rounded-full group-hover:bg-tertiary/20 transition-all duration-700" />
          </div>

          {/* Software Development - Slim Bento */}
          <div className="md:col-span-4 glass-card p-gutter rounded-xl group">
            <div className="mb-12">
              <div className="p-4 bg-primary/10 rounded-xl w-fit">
                <span
                  className="material-symbols-outlined text-primary scale-150"
                  data-icon="code"
                >
                  code
                </span>
              </div>
            </div>
            <h4 className="font-headline-md text-headline-md mb-4">
              Software Engineering
            </h4>
            <p className="text-on-surface-variant text-body-sm mb-6">
              Bespoke enterprise applications built with React, Go, and Rust for peak
              performance.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-body-sm text-on-surface">
                <span
                  className="material-symbols-outlined text-primary"
                  data-icon="check_circle"
                >
                  check_circle
                </span>
                Cloud Native Architectures
              </li>
              <li className="flex items-center gap-3 text-body-sm text-on-surface">
                <span
                  className="material-symbols-outlined text-primary"
                  data-icon="check_circle"
                >
                  check_circle
                </span>
                Microservices Design
              </li>
              <li className="flex items-center gap-3 text-body-sm text-on-surface">
                <span
                  className="material-symbols-outlined text-primary"
                  data-icon="check_circle"
                >
                  check_circle
                </span>
                Legacy Modernization
              </li>
            </ul>
          </div>

          {/* Data Engineering - Square Bento */}
          <div className="md:col-span-6 glass-card p-gutter rounded-xl border-l-4 border-l-secondary">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-secondary/10 rounded-xl">
                <span
                  className="material-symbols-outlined text-secondary"
                  data-icon="database"
                >
                  database
                </span>
              </div>
              <h4 className="font-headline-md text-headline-md">Data Engineering</h4>
            </div>
            <p className="text-on-surface-variant mb-10">
              High-throughput ETL pipelines and robust data warehousing solutions using
              Snowflake, Databricks, and Kafka.
            </p>
            <div className="flex items-center gap-8 py-6 border-y border-outline-variant/10">
              <div>
                <p className="text-display-lg text-secondary font-bold text-[32px] leading-none mb-1">
                  99.9%
                </p>
                <p className="text-label-md text-on-surface-variant">UPTIME</p>
              </div>
              <div className="w-px h-12 bg-outline-variant/30" />
              <div>
                <p className="text-display-lg text-secondary font-bold text-[32px] leading-none mb-1">
                  5PB+
                </p>
                <p className="text-label-md text-on-surface-variant">MANAGED</p>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-secondary transition-colors">
                arrow_outward
              </span>
            </div>
          </div>

          {/* Analytics & Insights - Wide Bento */}
          <div className="md:col-span-6 glass-card p-gutter rounded-xl">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center mb-8">
                <h4 className="font-headline-md text-headline-md">Advanced Analytics</h4>
                <div className="p-3 bg-surface-variant rounded-xl">
                  <span
                    className="material-symbols-outlined text-on-surface"
                    data-icon="insights"
                  >
                    insights
                  </span>
                </div>
              </div>
              <p className="text-on-surface-variant mb-auto">
                Visualizing complex datasets through custom dashboards and predictive
                modeling to drive strategic decisions.
              </p>
              <div className="mt-8 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                <div className="flex-shrink-0 px-4 py-2 bg-surface-container-high rounded-full text-label-md border border-outline-variant/30">
                  PREDICTIVE
                </div>
                <div className="flex-shrink-0 px-4 py-2 bg-surface-container-high rounded-full text-label-md border border-outline-variant/30">
                  BI SOLUTIONS
                </div>
                <div className="flex-shrink-0 px-4 py-2 bg-surface-container-high rounded-full text-label-md border border-outline-variant/30">
                  DATA MINING
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture Diagram */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-24 pb-margin-desktop">
        <div className="glass-card rounded-2xl p-margin-tablet relative overflow-hidden">
          <div className="mb-12 max-w-2xl">
            <h3 className="font-headline-xl text-headline-xl mb-4">Technical Architecture</h3>
            <p className="text-on-surface-variant text-body-lg">
              We bridge the gap between legacy silos and AI-native futures through a unified
              processing layer.
            </p>
          </div>
          {/* Diagram Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter relative">
            {/* Column 1: Sources */}
            <div className="space-y-gutter">
              <div className="p-6 bg-surface-container-low border border-outline-variant/30 rounded-xl">
                <p className="text-label-md text-on-surface-variant mb-4 uppercase tracking-tighter">
                  Ingestion Layer
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-surface-container rounded-lg border border-outline-variant/10">
                    <span className="material-symbols-outlined text-primary" data-icon="cloud">
                      cloud
                    </span>
                    <span className="font-medium">Cloud Sources</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-surface-container rounded-lg border border-outline-variant/10">
                    <span className="material-symbols-outlined text-primary" data-icon="sensors">
                      sensors
                    </span>
                    <span className="font-medium">IoT Streams</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Processing (Center) */}
            <div className="flex flex-col justify-center">
              <div className="p-8 ai-gradient-border rounded-2xl relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-background border border-secondary text-secondary font-label-md rounded-full">
                  CORE ENGINE
                </div>
                <div className="text-center py-8">
                  <span
                    className="material-symbols-outlined text-secondary text-[64px] mb-4"
                    data-icon="hub"
                  >
                    hub
                  </span>
                  <h5 className="font-headline-md mb-2">Datamore Orchestrator</h5>
                  <p className="text-body-sm text-on-surface-variant">
                    Automated Data Fabric &amp; LLM Ops
                  </p>
                </div>
              </div>
            </div>

            {/* Column 3: Destinations */}
            <div className="space-y-gutter">
              <div className="p-6 bg-surface-container-low border border-outline-variant/30 rounded-xl h-full">
                <p className="text-label-md text-on-surface-variant mb-4 uppercase tracking-tighter">
                  Value Extraction
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-surface-container rounded-lg border border-outline-variant/10">
                    <span className="material-symbols-outlined text-tertiary" data-icon="smart_toy">
                      smart_toy
                    </span>
                    <span className="font-medium">AI Agents</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-surface-container rounded-lg border border-outline-variant/10">
                    <span className="material-symbols-outlined text-tertiary" data-icon="dashboard">
                      dashboard
                    </span>
                    <span className="font-medium">Visual Analytics</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-surface-container rounded-lg border border-outline-variant/10">
                    <span className="material-symbols-outlined text-tertiary" data-icon="api">
                      api
                    </span>
                    <span className="font-medium">Custom API Hub</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Connecting Lines */}
          <div className="hidden lg:block absolute top-1/2 left-[30%] w-[10%] h-px bg-gradient-to-r from-primary to-secondary" />
          <div className="hidden lg:block absolute top-1/2 right-[30%] w-[10%] h-px bg-gradient-to-r from-secondary to-tertiary" />
        </div>
      </section>
    </PageLayout>
  );
}
