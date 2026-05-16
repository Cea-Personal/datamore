// src/components/ContactForm.tsx
import Image from 'next/image'

export default function ContactForm() {
  return (
    <>
      <div className="space-y-2">
        <h2 className="font-headline-lg text-headline-lg text-primary">Request a Strategy Call</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Fill out the form below and our lead consultants will reach out within 24 hours.
        </p>
      </div>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="font-label-md text-label-md text-on-surface">Full Name</label>
          <input className="w-full px-4 py-3 bg-transparent border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all placeholder:text-outline/50" placeholder="John Doe" type="text" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-label-md text-label-md text-on-surface">Work Email</label>
          <input className="w-full px-4 py-3 bg-transparent border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all placeholder:text-outline/50" placeholder="john@organization.com" type="email" />
        </div>
        <div className="md:col-span-2 flex flex-col gap-2">
          <label className="font-label-md text-label-md text-on-surface">Organization</label>
          <input className="w-full px-4 py-3 bg-transparent border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all placeholder:text-outline/50" placeholder="Company Name" type="text" />
        </div>
        <div className="md:col-span-2 flex flex-col gap-2">
          <label className="font-label-md text-label-md text-on-surface">How can we help?</label>
          <textarea className="w-full px-4 py-3 bg-transparent border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all placeholder:text-outline/50" placeholder="Briefly describe your data challenges or project goals..." rows={4} />
        </div>
        <div className="md:col-span-2 pt-4">
          <button className="w-full btn-gradient text-on-primary py-4 rounded-lg font-label-md text-label-md shadow-premium shadow-interactive active:scale-95 transition-all flex items-center justify-center gap-2" type="submit">
            Send Message
            <span className="material-symbols-outlined">send</span>
          </button>
          <p className="text-center mt-4 font-caption text-caption text-outline">
            By clicking send, you agree to our Privacy Policy regarding data handling.
          </p>
        </div>
      </form>
    </>
  )
}