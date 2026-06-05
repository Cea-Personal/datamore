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
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    organization: false,
    title: false,
    message: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const isFormValid = () => {
    return (
      formData.name.trim() !== '' &&
      formData.email.trim() !== '' &&
      isValidEmail(formData.email) &&
      formData.organization.trim() !== '' &&
      formData.title.trim() !== '' &&
      formData.message.trim() !== ''
    )
  }

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
        setTouched({ name: false, email: false, organization: false, title: false, message: false })
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
            Thank you for reaching out. We&apos;ll get back to you within 24 hours.
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
            className={`w-full px-4 py-3 bg-transparent border rounded-lg focus:ring-2 focus:ring-secondary/20 outline-none transition-all placeholder:text-outline/50 ${touched.name && formData.name.trim() === '' ? 'border-error' : 'border-outline-variant focus:border-secondary'}`} 
            placeholder="John Doe" 
            type="text" 
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            onBlur={() => setTouched({ ...touched, name: true })}
            required
          />
          {touched.name && formData.name.trim() === '' && (
            <span className="text-caption text-error">Full name is required</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-label-md text-on-surface">Work Email</label>
          <input 
            className={`w-full px-4 py-3 bg-transparent border rounded-lg focus:ring-2 focus:ring-secondary/20 outline-none transition-all placeholder:text-outline/50 ${touched.email && (!formData.email.trim() || !isValidEmail(formData.email)) ? 'border-error' : 'border-outline-variant focus:border-secondary'}`} 
            placeholder="john@organization.com" 
            type="email" 
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            onBlur={() => setTouched({ ...touched, email: true })}
            required
          />
          {touched.email && !formData.email.trim() ? (
            <span className="text-caption text-error">Email is required</span>
          ) : (
            touched.email && formData.email && !isValidEmail(formData.email) && (
              <span className="text-caption text-error">Please enter a valid email address</span>
            )
          )}
        </div>
        <div className="md:col-span-2 flex flex-col gap-2">
          <label className="text-label-md text-on-surface">Organization</label>
          <input 
            className={`w-full px-4 py-3 bg-transparent border rounded-lg focus:ring-2 focus:ring-secondary/20 outline-none transition-all placeholder:text-outline/50 ${touched.organization && formData.organization.trim() === '' ? 'border-error' : 'border-outline-variant focus:border-secondary'}`} 
            placeholder="Company Name" 
            type="text" 
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            onBlur={() => setTouched({ ...touched, organization: true })}
            required
          />
          {touched.organization && formData.organization.trim() === '' && (
            <span className="text-caption text-error">Organization is required</span>
          )}
        </div>
        <div className="md:col-span-2 flex flex-col gap-2">
          <label className="text-label-md text-on-surface">Title</label>
          <textarea 
            className={`w-full px-4 py-3 bg-transparent border rounded-lg focus:ring-2 focus:ring-secondary/20 outline-none transition-all placeholder:text-outline/50 ${touched.title && formData.title.trim() === '' ? 'border-error' : 'border-outline-variant focus:border-secondary'}`} 
            placeholder="What&apos;s your request?" 
            rows={1}
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            onBlur={() => setTouched({ ...touched, title: true })}
            required
          />
          {touched.title && formData.title.trim() === '' && (
            <span className="text-caption text-error">Title is required</span>
          )}
        </div>
        <div className="md:col-span-2 flex flex-col gap-2">
          <label className="text-label-md text-on-surface">How can we help?</label>
          <textarea 
            className={`w-full px-4 py-3 bg-transparent border rounded-lg focus:ring-2 focus:ring-secondary/20 outline-none transition-all placeholder:text-outline/50 ${touched.message && formData.message.trim() === '' ? 'border-error' : 'border-outline-variant focus:border-secondary'}`} 
            placeholder="Briefly describe your data challenges or project goals..." 
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            onBlur={() => setTouched({ ...touched, message: true })}
            required
          />
          {touched.message && formData.message.trim() === '' && (
            <span className="text-caption text-error">Message is required</span>
          )}
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
            disabled={isSubmitting || !isFormValid()}
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