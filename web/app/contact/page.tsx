'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';

export default function Contact() {
  const [activeStep, setActiveStep] = useState(1);

  const locations = [
    {
      city: 'San Francisco',
      focus: 'High-Performance Compute & Neural R&D',
      timezone: '09:00 - 18:00 PST',
      icon: 'apartment',
      color: 'primary',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrtmCpRHvaxTvdOAiib-pmrvDHObj29oyv76McF3RyoltawvH7V8VP0v6jWyah9HA2KBH2GQkfXJqG0QIswempte-DGl65BgxbxVHaKlDR5RL5o8idMTUfULFSXoJowKJrZ93rFd3uoBzRYuT-Y9o2op0ydwYALf_cCjg1D8xwswNsnq4u0cdqqlrmNxKQl6yJtjNQjQiD0NRnyjVP8YWDEH21GpWFlqc7w3Zqx103VqV-t0AOBpKKb9asFF5sV9I1HTs5pvhah0wD',
    },
    {
      city: 'London',
      focus: 'Algorithmic Governance & Ethics Lab',
      timezone: '09:00 - 18:00 GMT',
      icon: 'hub',
      color: 'secondary',
    },
    {
      city: 'Singapore',
      focus: 'Edge Computing & IoT Integration',
      timezone: '09:00 - 18:00 SGT',
      icon: 'data_object',
      color: 'tertiary',
    },
  ];

   const services = [
     { icon: 'code', label: 'Software' },
     { icon: 'psychology', label: 'LLM Ops' },
     { icon: 'cloud_sync', label: 'Migration' },
     { icon: 'security', label: 'Security' },
     { icon: 'monitoring', label: 'Analytics' },
   ];

  const timeSlots = [
    '09:00 AM',
    '11:30 AM',
    '02:00 PM',
    '04:30 PM',
    '05:00 PM',
  ];

  return (
    <PageLayout>
      <main className="pt-32 pb-margin-desktop px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Hero Header */}
        <header className="mb-16">
          <h1 className="font-display-lg text-display-lg mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Connect with Intelligence
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Deploy bespoke AI solutions through our global network of precision labs. Your
            architecture, accelerated.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Left Column: Global Locations & Contact Info */}
          <aside className="lg:col-span-5 space-y-gutter">
            {/* Global Labs Bento */}
            <div className="glass-card p-gutter rounded-xl">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-headline-lg text-headline-lg">Global Labs</h2>
                <span className="material-symbols-outlined text-secondary">public</span>
              </div>
              <div className="space-y-6">
                {locations.map((location, idx) => (
                  <div
                    key={idx}
                    className="group cursor-pointer p-4 rounded-lg hover:bg-surface-variant/30 transition-all border border-transparent hover:border-outline-variant/30"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`bg-${location.color}-container p-3 rounded-xl`}>
                        <span
                          className={`material-symbols-outlined text-on-${location.color}-container`}
                          data-icon={location.icon}
                        >
                          {location.icon}
                        </span>
                      </div>
                      <div>
                        <h3 className={`font-headline-md text-headline-md text-${location.color}`}>
                          {location.city}
                        </h3>
                        <p className="text-on-surface-variant text-body-sm mb-2">
                          {location.focus}
                        </p>
                        <div className="flex items-center gap-2 text-label-md text-secondary">
                          <span className="material-symbols-outlined text-[16px]">schedule</span>
                          <span>{location.timezone}</span>
                        </div>
                      </div>
                    </div>
                    {location.image && (
                      <div className="mt-4 rounded-lg overflow-hidden h-32 relative">
                        <img
                          className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                          alt={location.city}
                          src={location.image}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Summary Bento */}
            <div className="glass-card p-gutter rounded-xl grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-label-md text-outline">EMAIL</span>
                <span className="font-headline-md text-headline-md truncate">
                  labs@datamore.io
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-label-md text-outline">SECURE PHONE</span>
                <span className="font-headline-md text-headline-md">
                  +1 (415) 555-8291
                </span>
              </div>
            </div>
          </aside>

          {/* Right Column: Consultation Form & Booking */}
          <section className="lg:col-span-7 space-y-gutter">
            {/* Multi-Step Form Card */}
            <div className="glass-card rounded-xl overflow-hidden">
              <div className="p-gutter border-b border-outline-variant/30 flex justify-between items-center">
                <div>
                  <h2 className="font-headline-lg text-headline-lg">
                    Technical Consultation
                  </h2>
                  <p className="text-on-surface-variant text-body-sm">
                    Define your project parameters
                  </p>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((step) => (
                    <div
                      key={step}
                      className={`w-8 h-1 rounded-full ${
                        step <= activeStep ? 'bg-primary' : 'bg-outline-variant'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <form className="p-gutter space-y-8">
                {/* Step 1: Identity */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-primary">
                    <span className="material-symbols-outlined">person_search</span>
                    <span className="font-headline-md text-headline-md">Identity</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                    <div className="space-y-2">
                      <label className="text-label-md text-outline">FULL NAME</label>
                      <input
                        className="w-full bg-surface-container-low border-b border-outline-variant focus:border-primary outline-none py-3 px-1 transition-all"
                        placeholder="Johnathan Sterling"
                        type="text"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-label-md text-outline">ORGANIZATION</label>
                      <input
                        className="w-full bg-surface-container-low border-b border-outline-variant focus:border-primary outline-none py-3 px-1 transition-all"
                        placeholder="Quantum Dynamics Inc."
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                {/* Step 2: Service Interest */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-secondary">
                    <span className="material-symbols-outlined">settings_input_component</span>
                    <span className="font-headline-md text-headline-md">Service Domain</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {services.map((service, idx) => (
                      <button
                        key={idx}
                        className="flex flex-col items-center justify-center p-4 border border-outline-variant rounded-lg hover:border-secondary hover:bg-secondary/5 transition-all group"
                        type="button"
                      >
                        <span
                          className={`material-symbols-outlined text-outline group-hover:text-secondary mb-2`}
                          data-icon={service.icon}
                        >
                          {service.icon}
                        </span>
                        <span className="text-label-md">{service.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Budget & Objective */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-tertiary">
                    <span className="material-symbols-outlined">target</span>
                    <span className="font-headline-md text-headline-md">Project Scale</span>
                  </div>
                  <div className="space-y-4">
                    <label className="text-label-md text-outline">
                      QUARTERLY ALLOCATION
                    </label>
                    <div className="flex gap-4">
                      {['$50k - $100k', '$100k - $500k', '$500k+'].map((budget, idx) => (
                        <label key={idx} className="flex-1">
                          <input className="hidden peer" name="budget" type="radio" />
                          <div className="text-center p-3 border border-outline-variant rounded-lg peer-checked:bg-tertiary peer-checked:text-on-tertiary cursor-pointer transition-all">
                            {budget}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-label-md text-outline">PRIMARY OBJECTIVE</label>
                    <textarea
                      className="w-full bg-surface-container-low border border-outline-variant focus:border-tertiary rounded-lg outline-none p-4 transition-all resize-none"
                      placeholder="Describe the desired outcome of this partnership..."
                      rows={3}
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-8">
                  <button
                    className="bg-primary text-on-primary font-bold px-12 py-4 rounded-xl flex items-center gap-3 hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all active:scale-95"
                    type="submit"
                  >
                    Initialize Request
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Calendly-style Booking Widget */}
            <div className="glass-card rounded-xl overflow-hidden">
              <div className="p-6 border-b border-outline-variant/30 bg-surface-container-highest/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                    <img
                      alt="Principal Engineer"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_d8Dt68in0s3rqTxZWANTVbXAomvloKEXisA1SyHvnbAFRRM-lvPd3v9lu9csEeHSTkbLUoN-AOBau15UlM1wRJJXiYhSjjJCJgpTR65AqP2AciFxXKpTPy7ggSzk83-pHs-FgYl7fyzkCo0J-QU9YQB0qko64eYIaYzOICCfHw8ViuaEffmfZrG-yoPKrD8LGwsEFZw1DjQslFqWUDgwJ1hv-1zscIsAALGFjIZfzEv555qgkmyNN6VMzxjK-RR2DRrcJCW21orC"
                    />
                  </div>
                  <div>
                    <p className="text-label-md text-secondary font-bold">AVAILABILITY</p>
                    <h3 className="font-headline-md text-headline-md">
                      Book with a Principal Engineer
                    </h3>
                  </div>
                </div>
              </div>
              <div className="p-gutter bg-surface-container-lowest grid grid-cols-1 md:grid-cols-7 gap-1">
                {/* Calendar Simulation */}
                <div className="md:col-span-4 p-4 border-r border-outline-variant/20">
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-bold">October 2024</span>
                    <div className="flex gap-2">
                      <button className="p-1 hover:bg-surface-variant rounded">
                        <span className="material-symbols-outlined text-body-sm">
                          chevron_left
                        </span>
                      </button>
                      <button className="p-1 hover:bg-surface-variant rounded">
                        <span className="material-symbols-outlined text-body-sm">
                          chevron_right
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 text-center text-label-md text-outline mb-4">
                    <span>M</span>
                    <span>T</span>
                    <span>W</span>
                    <span>T</span>
                    <span>F</span>
                    <span>S</span>
                    <span>S</span>
                  </div>
                  <div className="grid grid-cols-7 text-center gap-2">
                    {[28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((day, idx) => {
                      const isDisabled = day <= 30;
                      const isSelected = day === 2;
                      return (
                        <button
                          key={idx}
                          className={`p-2 rounded-lg transition-colors ${
                            isDisabled
                              ? 'text-outline-variant cursor-not-allowed'
                              : isSelected
                              ? 'bg-primary text-on-primary font-bold'
                              : 'hover:bg-primary-container/20'
                          }`}
                          disabled={isDisabled}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time Selection */}
                <div className="md:col-span-3 p-4 flex flex-col gap-3">
                  <p className="text-label-md text-outline mb-2">THURSDAY, OCT 2</p>
                  {timeSlots.map((time, idx) => (
                    <button
                      key={idx}
                      className={`w-full py-3 border rounded-lg transition-all ${
                        idx === 1
                          ? 'border-primary text-primary font-bold'
                          : 'border-outline-variant hover:border-primary'
                      }`}
                      type="button"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </PageLayout>
  );
}
