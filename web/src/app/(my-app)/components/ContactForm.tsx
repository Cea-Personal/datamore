"use client"
import Link from 'next/link'
import { useState } from 'react'

const emptyForm = { name: '', email: '', organization: '', message: '', systems: '' }
const emailConfig = {
  service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
}

export default function ContactForm() {
  const [formData, setFormData] = useState(emptyForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const isConfigured = Boolean(emailConfig.service_id && emailConfig.template_id && emailConfig.user_id)
  const mailBody = `Name: ${formData.name}\nOrganization: ${formData.organization}\nEmail: ${formData.email}\n\nProblem: ${formData.message}\n\nCurrent systems: ${formData.systems || 'Not specified'}`
  const emailHref = `mailto:contact@datamore.org?subject=${encodeURIComponent('Data & AI Assessment')}&body=${encodeURIComponent(mailBody)}`

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isSubmitting || !isConfigured) return
    if (![formData.name, formData.email, formData.organization, formData.message].every(value => value.trim())) {
      setError('Please complete your name, organization, email and business problem.')
      return
    }
    setIsSubmitting(true)
    setError('')
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...emailConfig,
          template_params: {
            name: formData.name.trim(),
            email: formData.email.trim(),
            organization: formData.organization.trim(),
            title: 'Data & AI Assessment',
            message: `${formData.message.trim()}${formData.systems.trim() ? `\n\nCurrent systems/tools: ${formData.systems.trim()}` : ''}`,
          },
        }),
      })
      if (!response.ok) throw new Error('Email delivery request failed')
      setSubmitted(true)
      setFormData(emptyForm)
    } catch {
      setError('Your request could not be sent. Please try again or email contact@datamore.org using the link below.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div role="status" className="bg-white p-6 md:p-10 rounded-xl ambient-shadow border border-outline-variant/30 space-y-4">
        <h2 className="text-headline-lg text-secondary">Assessment request sent</h2>
        <p className="text-body-lg text-on-surface-variant">Thank you for sharing the problem. We will review your request and get in touch to discuss the next step.</p>
        <button type="button" onClick={() => setSubmitted(false)} className="text-label-md text-secondary hover:underline">Send another request</button>
      </div>
    )
  }

  return (
    <div className="bg-white p-6 md:p-10 rounded-xl ambient-shadow border border-outline-variant/30 space-y-6">
      <h2 className="text-headline-lg">Tell us about your business</h2>
      <p className="text-body-md text-on-surface-variant">A few details are enough to start. No commitment to a project.</p>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit} aria-busy={isSubmitting}>
        <div className="space-y-2">
          <label htmlFor="assessment-name" className="block text-label-md">Name</label>
          <input id="assessment-name" name="name" autoComplete="name" className="assessment-field" value={formData.name} onChange={event => setFormData({ ...formData, name: event.target.value })} required maxLength={150} />
        </div>
        <div className="space-y-2">
          <label htmlFor="assessment-email" className="block text-label-md">Email</label>
          <input id="assessment-email" name="email" type="email" autoComplete="email" className="assessment-field" value={formData.email} onChange={event => setFormData({ ...formData, email: event.target.value })} required maxLength={254} />
        </div>
        <div className="md:col-span-2 space-y-2">
          <label htmlFor="assessment-organization" className="block text-label-md">Organization</label>
          <input id="assessment-organization" name="organization" autoComplete="organization" className="assessment-field" value={formData.organization} onChange={event => setFormData({ ...formData, organization: event.target.value })} required maxLength={200} />
        </div>
        <div className="md:col-span-2 space-y-2">
          <label htmlFor="assessment-problem" className="block text-label-md">What problem are you trying to solve?</label>
          <textarea id="assessment-problem" name="message" className="assessment-field" rows={4} placeholder="For example: our weekly sales report takes hours to prepare, or our team manually processes invoices." value={formData.message} onChange={event => setFormData({ ...formData, message: event.target.value })} required maxLength={5000} />
        </div>
        <div className="md:col-span-2 space-y-2">
          <label htmlFor="assessment-systems" className="block text-label-md">Current systems or tools <span className="font-normal text-on-surface-variant">(optional)</span></label>
          <input id="assessment-systems" name="systems" className="assessment-field" placeholder="Spreadsheets, CRM, accounting software…" value={formData.systems} onChange={event => setFormData({ ...formData, systems: event.target.value })} maxLength={1000} />
        </div>
        {error && <p role="alert" className="md:col-span-2 text-error text-body-md">{error}</p>}
        <div className="md:col-span-2 space-y-4">
          {isConfigured ? (
            <button type="submit" disabled={isSubmitting} className="w-full glassy-button text-on-primary py-4 px-4 rounded-lg text-label-md disabled:opacity-60">{isSubmitting ? 'Sending…' : 'Request a free assessment'}</button>
          ) : (
            <p role="status" className="text-body-md text-on-surface-variant">Send your assessment request by email using the link below. Your email app will open with these details; send it there to complete your request.</p>
          )}
          <a href={emailHref} className="block text-center text-secondary text-label-md underline underline-offset-4">{isConfigured ? 'Or send these details by email' : 'Open assessment email'}</a>
          <p className="text-body-md text-on-surface-variant">We use these details to respond to your request. Read our <Link href="/privacy" className="text-secondary underline">Privacy Policy</Link>.</p>
        </div>
      </form>
    </div>
  )
}
