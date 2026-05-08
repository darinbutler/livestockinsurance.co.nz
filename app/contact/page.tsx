import type { Metadata } from 'next';
import QuoteForm from '../../components/QuoteForm';

export const metadata: Metadata = {
  title: 'Get Free Livestock Insurance Quotes | LivestockInsurance.co.nz',
  description:
    'Request free livestock insurance quotes from licensed NZ rural advisers. Compare FMG, Aon, Gallagher, and NZI. Response within 24 hours.',
  openGraph: {
    title: 'Get Free Livestock Insurance Quotes | LivestockInsurance.co.nz',
    description:
      'Request free livestock insurance quotes from licensed NZ rural advisers. Compare FMG, Aon, Gallagher, and NZI. Response within 24 hours.',
    type: 'website',
    locale: 'en_NZ',
  },
};

const benefits = [
  {
    icon: '✓',
    title: 'Free Expert Advice',
    description: 'No cost consultation with experienced rural insurance advisers.',
  },
  {
    icon: '✓',
    title: 'Compare All Major Providers',
    description: 'See quotes from FMG, Aon, Gallagher, NZI, and specialist brokers.',
  },
  {
    icon: '✓',
    title: '24-Hour Response',
    description: 'Get responses and quotes within one business day.',
  },
  {
    icon: '✓',
    title: 'No Obligation',
    description: 'Request quotes with zero pressure to commit.',
  },
  {
    icon: '✓',
    title: 'Licensed Advisers',
    description: 'All advisers licensed under the FMCA 2013.',
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-900 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Free Livestock Insurance Quotes</h1>
          <p className="text-lg text-brand-100 mb-6">
            Request free quotes from licensed NZ rural advisers. Compare major providers and get expert recommendations tailored to your farm.
          </p>
          <div className="flex items-center gap-6 text-sm font-semibold">
            <span className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> 100% Free
            </span>
            <span className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> No Obligation
            </span>
            <span className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> 24hr Response
            </span>
          </div>
        </div>
      </section>

      {/* 2-Col Layout */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Benefits */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Use Our Service?</h2>
            <div className="space-y-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 text-2xl text-emerald-600 font-bold">{benefit.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Block */}
            <div className="mt-12 p-6 bg-brand-50 rounded-lg border border-brand-200">
              <h3 className="font-bold text-gray-900 mb-3">Trusted by NZ Farmers</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✓ Licensed advisers only (FMCA regulated)</li>
                <li>✓ Independent recommendations</li>
                <li>✓ Connections with all major providers</li>
                <li>✓ Local, rural-focused expertise</li>
              </ul>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <div className="bg-white rounded-lg border border-gray-200 p-8 sticky top-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Your Quote</h2>
              <QuoteForm />
              <p className="text-xs text-gray-500 mt-6 text-center">
                By submitting, you agree to be contacted by our advisers. We respect your privacy and never share your details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclosure */}
      <section className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-gray-900 mb-4">Important Information</h2>
          <div className="prose prose-sm max-w-none">
            <p className="text-gray-700 text-sm mb-3">
              <strong>LivestockInsurance.co.nz</strong> is a referral service that connects farmers with licensed rural insurance advisers. We are not an insurance provider, insurer, or financial adviser. The advisers in our network are licensed under the Financial Markets Conduct Act 2013 (FMCA) and provide personalised advice based on your specific needs.
            </p>
            <p className="text-gray-700 text-sm">
              All quotes, recommendations, and advice you receive from advisers are independent and based on your individual circumstances. We recommend comparing multiple quotes before making a decision.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Questions?</h2>
        <p className="text-gray-700 mb-6">
          Check out our <a href="/faqs/" className="text-brand-700 font-semibold hover:text-brand-900">FAQ page</a> for answers to common questions about livestock insurance, coverage types, costs, and claims.
        </p>
      </section>
    </main>
  );
}
