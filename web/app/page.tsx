import PageLayout from "@/components/PageLayout";
import Link from "next/link";

export const dynamic = 'force-dynamic';
export const dynamicParams = true;

export default function Home() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[870px] flex items-center justify-center overflow-hidden px-margin-mobile">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-40"
            alt="A sophisticated futuristic data visualization in a dark room environment. Strands of glowing cyan and purple light fibers weave together to form a complex neural network structure against a deep charcoal background. The lighting is cinematic with high contrast and sharp focus, capturing the essence of advanced AI-native scalability and technical excellence. The atmosphere is immersive and premium."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPtDhy1cQ-ObFpT9mnrPDMF5SB9JDOdmPh9UxlvDW6dsrTYHjk-r7hFfv8_54x7S-ccNJq_mOVUOe5ZfW2mmRWw4HEsg_oMSvcEU7Dt96QHe5Z5WCFulEbJ4SmZrAYrm70tjnxR45ZjbO0uebbYgL-I-gj1EsPYHh9LUbEtlWY3i07H6hX0JbMKNXId0mXdFMO8bK-Q7KqyQgFJfakUJunH0HCxxHcWH-NKbPnWVUchSg0z8M0WRXLUEmQWmuofIN_vGB9M33UnzFH"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/60 to-background" />
        </div>
        <div className="relative z-10 max-w-container-max mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-8 border-primary/20">
            <span className="ai-gradient w-2 h-2 rounded-full animate-pulse" />
            <span className="font-label-md text-label-md text-primary tracking-widest uppercase">
              Next-Gen Data Architecture
            </span>
          </div>
          <h1 className="font-display-lg text-display-lg mb-6 max-w-4xl mx-auto leading-none">
            Engineering the <span className="text-secondary">Intelligence</span>{" "}
            of Tomorrow
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
            Datamore provides high-performance computing solutions and AI-native
            data pipelines for enterprises that demand precision and
            frictionless scalability.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/services"
              className="bg-secondary text-on-secondary px-8 py-4 rounded-xl font-bold glow-shadow hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              View Solutions
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
      
          </div>
        </div>
      </section>

      {/* Bento Grid Service Pillars */}
      <section className="py-16 md:py-24 max-w-container-max mx-auto  px-margin-mobile md:px-margin-desktop">
        <div className="mb-12 md:mb-16 text-left">
          <h2 className="font-headline-xl text-headline-xl mb-4 md:mb-6">
            Core Service Pillars
          </h2>
          <div className="h-1 w-24 ai-gradient rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-2 gap-6 md:gap-gutter">
          {/* AI & Automation (Large) */}
          <div className="md:col-span-6 glass-card rounded-xl p-3 md:p-4 flex flex-col justify-between group overflow-hidden relative">
            <div>
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-secondary text-2xl md:text-3xl">psychology</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg mb-2">AI &amp; Automation</h3>
              <p className="text-on-surface-variant font-body-md max-w-md text-sm">
                AI-driven workflow automation and operational intelligence solutions.
              </p>
            </div>
            <div className="flex items-center gap-2 text-tertiary font-bold text-label-md mt-auto group-hover:translate-x-2 transition-transform cursor-pointer">
              EXPLORE SOLUTIONS
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </div>
          </div>

          {/* Data and Anal (Large) */}
          <div className="md:col-span-6  glass-card rounded-xl p-3 md:p-4 flex flex-col justify-between group overflow-hidden relative">
            <div>
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-secondary text-2xl md:text-3xl">storage</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg mb-2">Data &amp; Analytics</h3>
              <p className="text-on-surface-variant font-body-md max-w-md text-sm">
                Modern data infrastructure, self healing pipelines, dashboards, and analytics systems.
              </p>
            </div>
            <div className="flex items-center gap-2 text-primary font-bold text-label-md mt-auto group-hover:translate-x-2 transition-transform cursor-pointer">
              EXPLORE SOLUTIONS
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </div>
          </div>

          {/* Technology Advisory */}
          <div className="md:col-span-4 glass-card rounded-xl p-6 md:p-8 flex flex-col justify-between group gap-4 md:gap-6 border-t-secondary/20">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-secondary text-2xl md:text-3xl">hub</span>
              </div>
              <h3 className="font-headline-md text-headline-md">Technology Advisory</h3>
              <p className="text-on-surface-variant text-body-sm">AI readiness, digital transformation, architecture, and strategic consulting.</p>
              <div className="flex items-center gap-2 text-secondary font-bold text-label-md mt-4 md:mt-6 group-hover:translate-x-2 transition-transform cursor-pointer">
              EXPLORE SOLUTIONS
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </div>
          </div>

          {/* Software Development */}
          <div className="md:col-span-4 glass-card rounded-xl p-6 md:p-8 flex flex-col gap-4 md:gap-6 border-t-secondary/20">
               <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-secondary text-2xl md:text-3xl">code</span>
               </div>
            <h3 className="font-headline-md text-headline-md">Software Development</h3>
            <p className="text-on-surface-variant text-body-sm">Enterprise applications, cloud-native architectures, microservices, and legacy modernization.</p>
            <div className="flex items-center gap-2 text-secondary font-bold text-label-md mt-4 md:mt-6  group-hover:translate-x-2 transition-transform cursor-pointer">
                EXPLORE SOLUTIONS
                <span className="material-symbols-outlined text-sm">chevron_right</span>
            </div>
          </div>

          {/* Governance & Managed Services */}
          <div className="md:col-span-4 glass-card rounded-xl p-6 md:p-8 flex flex-col gap-4 md:gap-6 border-t-tertiary/20">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
            <span className="material-symbols-outlined text-secondary text-2xl md:text-3xl">policy</span>
          </div>
            <h3 className="font-headline-md text-headline-md">Managed Services</h3>
            <p className="text-on-surface-variant text-body-sm">Governance,Audits, monitoring, optimization, compliance, and ongoing platform support.</p>
              <div className="flex items-center gap-2 text-secondary font-bold text-label-md mt-4 md:mt-6  group-hover:translate-x-2 transition-transform cursor-pointer">
                EXPLORE SOLUTIONS
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </div>
          </div>
        </div>
      </section>

      {/* Why Datamore & Metrics */}
      <section className="bg-surface-container-low py-16 md:py-24 relative px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-8 md:gap-margin-desktop items-center">
          <div>
            <span className="text-secondary font-bold tracking-widest text-label-md uppercase mb-4 block">
              Proven Results
            </span>
            <h2 className="font-headline-xl text-headline-xl mb-6 md:mb-8">
              Built for those who lead the market.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 md:mb-12">
              We engineer competitive advantages through a fusion of
              mathematical rigor and cutting-edge cloud infrastructure.
            </p>
            <div className="grid grid-cols-2 gap-6 md:gap-gutter">
              <div className="flex flex-col gap-2">
                <span className="text-headline-xl md:text-headline-2xl font-black text-primary">
                  99.5%
                </span>
                <span className="text-label-md text-on-surface-variant uppercase">
                  System Uptime
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-headline-xl md:text-headline-2xl font-black text-secondary">
                  35%
                </span>
                <span className="text-label-md text-on-surface-variant uppercase">
                  Cost Reduction
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-headline-xl md:text-headline-2xl font-black text-tertiary">
                  200ms
                </span>
                <span className="text-label-md text-on-surface-variant uppercase">
                  Avg Inference
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-headline-xl md:text-headline-2xl font-black text-on-surface">
                  50+
                </span>
                <span className="text-label-md text-on-surface-variant uppercase">
                  Projects Delivered
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="glass-card rounded-xl overflow-hidden shadow-2xl relative z-10">
              <img
                className="w-full aspect-[4/3] object-cover"
                alt="A macro shot of a sleek, high-tech server rack with glowing blue LED indicators in a dark, climate-controlled data center. The focus is sharp on the metallic textures and precise cable management, symbolizing Datamore's commitment to technical excellence and high-end infrastructure. The lighting is low-key with vibrant blue accents, maintaining a professional and futuristic dark-mode aesthetic."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ6u7rkGUt3w_v0LztOfk1T_DkIA24jYMyuVq56DbxeeubrIjmJd130JcTqbQH11wjG8L2mV7ujzml93YS9WsWSFvMzAsm1no0Wxc3SSr8i4exPusaaLw5LPIwauu5UzYtagy2qzcAejzkhlgQPAGbCpm7TwWiEgGCwbz4PW9a2apYv4_X4vYT70Ob1Dexvd8p_kmCeXx2hjjTmUDThdDCuS-lBkZVCrV02VyYRutuCLCd1uSRNzOw7SI_ZJ4tvS096kAMus-dVwgj"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 p-4 md:p-6 glass-card rounded-lg border-primary/30">
                <p className="text-on-surface font-body-md italic">
                  &quot;Datamore&apos;s implementation of our data lake reduced
                  processing costs by 60% in the first quarter alone.&quot;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-variant" />
                  <div>
                    <p className="font-bold text-body-sm">
                      CTO, Global Logistics Corp
                    </p>
                    <p className="text-label-md text-on-surface-variant">
                      Strategic Partner
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative back elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 ai-gradient opacity-10 rounded-full blur-[100px]" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary opacity-5 rounded-full blur-[80px]" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-4xl mx-auto glass-card rounded-xl p-8 md:p-12 py-10 md:py-16 border-primary/20 glow-shadow">
          <h2 className="font-headline-xl text-headline-xl mb-6 md:mb-8">
            Ready to Scale?
          </h2>
          <p className="text-on-surface-variant mb-10 md:mb-12 max-w-xl mx-auto">
            Contact our engineering team today for a technical deep-dive into
            how we can modernize your data stack.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link
              href="/contact#calendar"
              className="bg-primary text-on-primary-container px-10 py-4 rounded-xl font-bold hover:opacity-90 transition-all"
            >
              Schedule a Call
            </Link>
            <Link
              href="/work"
              className="border border-outline text-on-surface px-10 py-4 rounded-xl font-bold hover:bg-surface-variant transition-all"
            >
              View Our Use Cases
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
