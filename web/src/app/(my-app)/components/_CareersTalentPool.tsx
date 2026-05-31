// src/components/CareersTalentPool.tsx
export default function CareersTalentPool({ data }: { data: { title: string; subtitle: string } }) {
  return (
    <section id="talent-pool" className="bg-surface-container-low py-32 px-margin-mobile md:px-margin-desktop border-y border-outline-variant/20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white p-12 md:p-20 rounded-3xl ambient-shadow border border-outline-variant/20">
          <span className="material-symbols-outlined text-outline text-5xl mb-6">search_off</span>
          <h2 className="text-headline-lg text-primary mb-4">{data.title}</h2>
          <p className="text-body-md text-on-surface-variant mb-12">{data.subtitle}</p>
          <form className="text-left space-y-6 max-w-lg mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-label-md mb-2 text-on-surface">Full Name</label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full bg-transparent border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-secondary focus:border-secondary transition-all"
                />
              </div>
              <div>
                <label className="block text-label-md mb-2 text-on-surface">Email Address</label>
                <input
                  type="email"
                  placeholder="jane@example.com"
                  className="w-full bg-transparent border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-secondary focus:border-secondary transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-label-md mb-2 text-on-surface">Specialization</label>
              <select className="w-full bg-transparent border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-secondary focus:border-secondary transition-all">
                <option> AI Engineering</option>
                <option> Data Platform & Architecture</option>
                <option> Data Engineer </option>
                <option> Analytics Engineer</option>
                <option> Business Analyst </option>
                <option>Product Strategy</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-label-md mb-2 text-on-surface">Briefly, what is your 'edge'?</label>
              <textarea
                placeholder="I specialize in high-throughput real-time data pipelines..."
                rows={4}
                className="w-full bg-transparent border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-secondary focus:border-secondary transition-all"
              />
            </div>
            <button className="w-full bg-primary text-on-primary py-4 rounded-lg text-label-md hover:bg-secondary transition-all active:scale-95">
              Join our Talent Pool
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}