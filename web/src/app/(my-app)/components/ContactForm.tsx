// src/components/ContactForm.tsx
'use client'
import { useState } from 'react'
import ContactBadges from './ContactBadges'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    title: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
          template_params: {
            name: formData.name,
            email: formData.email,
            title: formData.title,
            organization: formData.organization,
            message: formData.message,
          }
        })
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', title: '', organization: '', message: '' })
      } else {
        const errorText = await response.text()
        console.error('EmailJS error:', errorText)
        setError('Failed to send message. Please try again.')
      }
    } catch (err) {
      console.error('Submit error:', err)
      setError('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-surface-container-lowest p-10 rounded-xl shadow-premium glass-edge space-y-8">
        <div className="space-y-2">
          <h2 className="text-headline-lg text-secondary">Message Sent!</h2>
          <p className="text-body-md text-on-surface-variant">
            Thank you for reaching out. We'll get back to you within 24 hours.
          </p>
        </div>
        <ContactBadges />
      </div>
    )
  }

  return (
    <div className="bg-surface-container-lowest p-10 rounded-xl shadow-premium glass-edge space-y-8">
      <div className="space-y-2">
        <h2 className="text-headline-lg text-primary">Request a Strategy Call</h2>
        <p className="text-body-md text-on-surface-variant">
          Fill out the form below and our lead consultants will reach out within 24 hours.
        </p>
      </div>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label className="text-label-md text-on-surface">Full Name</label>
          <input 
            className="w-full px-4 py-3 bg-transparent border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all placeholder:text-outline/50" 
            placeholder="John Doe" 
            type="text" 
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-label-md text-on-surface">Work Email</label>
          <input 
            className="w-full px-4 py-3 bg-transparent border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all placeholder:text-outline/50" 
            placeholder="john@organization.com" 
            type="email" 
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div className="md:col-span-2 flex flex-col gap-2">
          <label className="text-label-md text-on-surface">Organization</label>
          <input 
            className="w-full px-4 py-3 bg-transparent border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all placeholder:text-outline/50" 
            placeholder="Company Name" 
            type="text" 
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            required
          />
        </div>
         <div className="md:col-span-2 flex flex-col gap-2">
          <label className="text-label-md text-on-surface">Title</label>
          <textarea 
            className="w-full px-4 py-3 bg-transparent border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all placeholder:text-outline/50" 
            placeholder="Whats' your request?" 
            rows={1}
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
        </div>
        <div className="md:col-span-2 flex flex-col gap-2">
          <label className="text-label-md text-on-surface">How can we help?</label>
          <textarea 
            className="w-full px-4 py-3 bg-transparent border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all placeholder:text-outline/50" 
            placeholder="Briefly describe your data challenges or project goals..." 
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
        </div>
        {error && (
          <div className="md:col-span-2 text-error">
            {error}
          </div>
        )}
        <div className="md:col-span-2 pt-4">
          <button 
            className="w-full btn-gradient text-on-primary py-4 rounded-lg text-label-md shadow-premium shadow-interactive active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50" 
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <span className="material-symbols-outlined">send</span>
          </button>
          <p className="text-center mt-4 text-caption text-outline">
            By clicking send, you agree to our Privacy Policy regarding data handling.
          </p>
        </div>
      </form>
      <ContactBadges />
    </div>
  )
}