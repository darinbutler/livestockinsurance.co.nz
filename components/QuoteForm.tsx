'use client'

import React, { useState } from 'react'

type FormVariant = 'compact' | 'full'
type FormState = 'idle' | 'submitting' | 'error'

interface QuoteFormProps {
  variant?: FormVariant
}

export default function QuoteForm({ variant = 'compact' }: QuoteFormProps) {
  const [state, setState] = useState<FormState>('idle')
  const [error, setError] = useState<string>('')
  const [formData, setFormData] = useState({
    livestockType: '',
    coverNeeded: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const livestockOptions = [
    'Dairy Cattle',
    'Beef Cattle',
    'Sheep',
    'Deer',
    'Goats',
    'Pigs',
    'Alpacas / Llamas',
    'Poultry',
    'Rare Breeds & Show Animals',
    'Mixed / Other',
  ]

  const coverOptions = [
    'Mortality Cover',
    'Disease & Illness',
    'Full Farm Pack',
    'Transit Insurance',
    'Not sure — need advice',
  ]

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setState('submitting')
    setError('')

    try {
      const workerUrl = 'https://form-handler.butlerdarin.workers.dev'

      const payload = {
        livestockType: formData.livestockType,
        coverNeeded: formData.coverNeeded,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        subject: 'Livestock Insurance Enquiry — LivestockInsurance.co.nz',
      }

      const response = await fetch(workerUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      // Success: redirect to thank you page
      window.location.href = '/thank-you/'
    } catch (err) {
      setState('error')
      setError(
        err instanceof Error ? err.message : 'An error occurred. Please try again.'
      )
    }
  }

  if (variant === 'compact') {
    return (
      <div className="mx-auto w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow-lg">
        {/* Card Header */}
        <div className="bg-[#0d7377] px-6 py-4">
          <h2 className="text-xl font-bold text-white">Get Free Quotes</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 px-6 py-6">
          {/* Livestock Type */}
          <div>
            <label htmlFor="livestockType" className="block text-sm font-medium text-gray-700">
              Livestock Type
            </label>
            <select
              id="livestockType"
              name="livestockType"
              value={formData.livestockType}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-[#0d7377] focus:outline-none focus:ring-2 focus:ring-[#0d7377]/20"
            >
              <option value="">Select livestock type...</option>
              {livestockOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Cover Needed */}
          <div>
            <label htmlFor="coverNeeded" className="block text-sm font-medium text-gray-700">
              Cover Needed
            </label>
            <select
              id="coverNeeded"
              name="coverNeeded"
              value={formData.coverNeeded}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-[#0d7377] focus:outline-none focus:ring-2 focus:ring-[#0d7377]/20"
            >
              <option value="">Select cover type...</option>
              {coverOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-[#0d7377] focus:outline-none focus:ring-2 focus:ring-[#0d7377]/20"
              placeholder="Your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-[#0d7377] focus:outline-none focus:ring-2 focus:ring-[#0d7377]/20"
              placeholder="your@email.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone <span className="text-gray-500">(optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-[#0d7377] focus:outline-none focus:ring-2 focus:ring-[#0d7377]/20"
              placeholder="+64 (0)..."
            />
          </div>

          {/* Error State */}
          {state === 'error' && error && (
            <div className="rounded-md bg-red-50 p-3 text-sm text-red-700">{error}</div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={state === 'submitting'}
            className="mt-6 w-full rounded-md bg-[#0d7377] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#065f73] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {state === 'submitting' ? (
              <>
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.25"
                  />
                  <path
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v.5a7.5 7.5 0 00-7.5 7.5h.5z"
                  />
                </svg>
                Submitting...
              </>
            ) : (
              <>Get My Free Quotes →</>
            )}
          </button>

          {/* Trust Line */}
          <p className="text-center text-xs text-gray-500">
            Free quotes · No obligation · Compare instantly
          </p>
        </form>
      </div>
    )
  }

  // Full variant
  return (
    <div className="mx-auto w-full max-w-2xl rounded-xl border border-gray-200 bg-white shadow-xl">
      {/* Card Header */}
      <div className="bg-[#0d7377] px-8 py-6">
        <h2 className="text-2xl font-bold text-white">Get Free Livestock Insurance Quotes</h2>
        <p className="mt-2 text-sm text-gray-100">
          Fill in your details and we'll connect you with insurers who offer the best rates for
          your livestock.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6 px-8 py-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Livestock Type */}
          <div>
            <label htmlFor="livestockType" className="block text-sm font-semibold text-gray-800">
              Livestock Type
            </label>
            <select
              id="livestockType"
              name="livestockType"
              value={formData.livestockType}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-gray-900 focus:border-[#0d7377] focus:outline-none focus:ring-2 focus:ring-[#0d7377]/20"
            >
              <option value="">Select livestock type...</option>
              {livestockOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Cover Needed */}
          <div>
            <label htmlFor="coverNeeded" className="block text-sm font-semibold text-gray-800">
              Cover Needed
            </label>
            <select
              id="coverNeeded"
              name="coverNeeded"
              value={formData.coverNeeded}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-gray-900 focus:border-[#0d7377] focus:outline-none focus:ring-2 focus:ring-[#0d7377]/20"
            >
              <option value="">Select cover type...</option>
              {coverOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Name */}
          <div className="md:col-span-1">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-800">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-gray-900 focus:border-[#0d7377] focus:outline-none focus:ring-2 focus:ring-[#0d7377]/20"
              placeholder="Your full name"
            />
          </div>

          {/* Email */}
          <div className="md:col-span-1">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-gray-900 focus:border-[#0d7377] focus:outline-none focus:ring-2 focus:ring-[#0d7377]/20"
              placeholder="your@email.com"
            />
          </div>

          {/* Phone */}
          <div className="md:col-span-1">
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-800">
              Phone <span className="text-gray-500 font-normal">(optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-gray-900 focus:border-[#0d7377] focus:outline-none focus:ring-2 focus:ring-[#0d7377]/20"
              placeholder="+64 (0)..."
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-800">
            Message <span className="text-gray-500 font-normal">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-gray-900 focus:border-[#0d7377] focus:outline-none focus:ring-2 focus:ring-[#0d7377]/20"
            placeholder="Tell us about your livestock and any specific requirements..."
          />
        </div>

        {/* Error State */}
        {state === 'error' && error && (
          <div className="rounded-md bg-red-50 p-4 text-sm text-red-700">{error}</div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={state === 'submitting'}
          className="w-full rounded-md bg-[#0d7377] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#065f73] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {state === 'submitting' ? (
            <>
              <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.25"
                />
                <path
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v.5a7.5 7.5 0 00-7.5 7.5h.5z"
                />
              </svg>
              Submitting...
            </>
          ) : (
            <>Get My Free Quotes →</>
          )}
        </button>

        {/* Trust Line */}
        <div className="text-center text-sm text-gray-600">
          <p className="font-medium">Free quotes · No obligation · Compare instantly</p>
          <p className="mt-2 text-xs text-gray-500">
            We connect you with licensed advisers — zero pressure, zero cost.
          </p>
        </div>
      </form>
    </div>
  )
}
