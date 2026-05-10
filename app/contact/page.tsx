import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '../components/QuoteForm';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Get Livestock Insurance Quotes NZ | Free Expert Comparison | LivestockInsurance.co.nz',
  description: 'Get free livestock insurance quotes from licensed rural insurance advisers. Compare FMG, Aon, Gallagher and NZI. No cost, no obligation.',
  alternates: { canonical: `${SITE.domain}/contact/` },
};

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Get Livestock Insurance Quotes',
  url: `${SITE.domain}/contact/`,
  description: 'Free livestock insurance quotes from licensed NZ rural advisers.',
  mainEntity: {
    '@type': 'Organization',
    name: SITE.name,
    email: SITE.email,
    url: SITE.domain,
  },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />

      <section className="bg-gray-900 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-gray-200">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">Get Quotes</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white mb-3">Get Free Livestock Insurance Quotes</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Our licensed rural insurance advisers will compare providers and get you the right cover for your livestock and farm.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Form */}
            <div>
              <QuoteForm />
            </div>

            {/* Trust Elements */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Why Use LivestockInsurance.co.nz?</h2>
                <div className="space-y-4">
                  {[
                    { icon: '🏅', title: 'Licensed NZ Advisers', desc: 'All advisers we work with are licensed under the Financial Markets Conduct Act 2013 and hold current FAP licences.' },
                    { icon: '🆓', title: 'Free to Use', desc: 'Our service is completely free to you. Advisers earn a referral fee from the insurer — you pay nothing extra.' },
                    { icon: '⏰', title: '24-Hour Response', desc: 'We aim to have a licensed adviser contact you within 24 business hours of your enquiry.' },
                    { icon: '🔍', title: 'Independent Comparison', desc: 'We compare FMG, Aon, Gallagher, NZI, and specialist brokers — we\'re not tied to any single insurer.' },
                    { icon: '🌾', title: 'Rural Specialists', desc: 'The advisers we work with specialise in rural and livestock insurance — they understand farming.' },
                  ].map((item) => (
                    <div key={item.title} className="flex space-x-4">
                      <span className="text-2xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm mb-0.5">{item.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl p-5">
                <h3 className="font-bold text-white mb-2">Providers We Compare</h3>
                <div className="grid grid-cols-2 gap-2">
                  {['FMG — Market Leader', 'Aon — Global Reach', 'Gallagher — Specialist', 'NZI — Farm Packs'].map((p) => (
                    <div key={p} className="flex items-center space-x-2">
                      <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#0d7377' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300 text-xs">{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-4">
                <p className="text-gray-500 text-xs leading-relaxed">
                  <strong className="text-gray-700">Email us directly:</strong>{' '}
                  <a href={`mailto:${SITE.email}`} className="hover:underline" style={{ color: '#0d7377' }}>{SITE.email}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
