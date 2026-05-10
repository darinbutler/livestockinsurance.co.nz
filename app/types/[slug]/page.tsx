import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import { COVERAGE_TYPES } from '@/data/coverage-types';
import { FAQS } from '@/data/faqs';
import { SITE } from '@/data/site';

export function generateStaticParams() {
  return COVERAGE_TYPES.map((ct) => ({ slug: ct.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const ct = COVERAGE_TYPES.find((c) => c.slug === params.slug);
  if (!ct) return {};
  return {
    title: ct.metaTitle,
    description: ct.metaDesc,
    alternates: { canonical: `${SITE.domain}/types/${ct.slug}/` },
  };
}

const providerInfo: Record<string, { name: string; note: string }[]> = {
  'mortality-cover': [
    { name: 'FMG', note: 'Market leader for NZ rural livestock mortality. Best for cattle and sheep farmers.' },
    { name: 'Aon', note: 'Good for high-value individual animals requiring agreed value cover.' },
    { name: 'Gallagher', note: 'Best for exotic livestock and high agreed-value stud animals.' },
    { name: 'NZI', note: 'Competitive farm pack pricing with mortality bundled.' },
  ],
  'disease-illness': [
    { name: 'FMG', note: 'Specific Mycoplasma bovis and notifiable disease endorsements available.' },
    { name: 'Aon', note: 'Access to specialist underwriters for complex disease scenarios.' },
    { name: 'Gallagher', note: 'Good for poultry and pig intensive farming disease risk.' },
    { name: 'NZI', note: 'Farm pack includes basic disease cover as standard.' },
  ],
  'transit-insurance': [
    { name: 'FMG', note: 'Comprehensive transit cover included in farm pack or as add-on.' },
    { name: 'Aon', note: 'Good for specialist or high-value transit scenarios.' },
    { name: 'Gallagher', note: 'Best for show animals travelling on the circuit.' },
    { name: 'NZI', note: 'Transit cover available as standalone or farm pack add-on.' },
  ],
  'natural-disaster': [
    { name: 'FMG', note: 'NZ-specific natural disaster cover including post-shearing exposure for sheep.' },
    { name: 'Aon', note: 'Lloyd\'s markets available for large-scale natural disaster coverage.' },
    { name: 'Gallagher', note: 'Specialist cover for farms in high-risk regions.' },
    { name: 'NZI', note: 'Natural disaster extension available on farm policies.' },
  ],
  'public-liability': [
    { name: 'FMG', note: 'Public liability included in most FMG farm pack policies. $1M–$5M limits.' },
    { name: 'Aon', note: 'Higher limits available for large commercial operations.' },
    { name: 'Gallagher', note: 'Specialist cover for deer farmers and high-escape-risk livestock.' },
    { name: 'NZI', note: 'Competitive liability pricing in farm pack policies.' },
  ],
  'theft-cover': [
    { name: 'FMG', note: 'Theft cover available as part of comprehensive farm pack.' },
    { name: 'Aon', note: 'Good for high-value stud animals requiring theft cover.' },
    { name: 'Gallagher', note: 'Specialist theft cover for rare breeds and show animals.' },
    { name: 'NZI', note: 'Theft cover available on most livestock policies.' },
  ],
};

export default function CoverageTypePage({ params }: { params: { slug: string } }) {
  const ct = COVERAGE_TYPES.find((c) => c.slug === params.slug);
  if (!ct) notFound();

  const relatedFaqs = FAQS.filter((f) => f.category === 'Coverage').slice(0, 3);
  const providers = providerInfo[ct.slug] || [];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.domain },
      { '@type': 'ListItem', position: 2, name: 'Coverage Types', item: `${SITE.domain}/types/` },
      { '@type': 'ListItem', position: 3, name: ct.name, item: `${SITE.domain}/types/${ct.slug}/` },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: ct.name,
    description: ct.description,
    provider: { '@type': 'Organization', name: SITE.name, url: SITE.domain },
    areaServed: 'New Zealand',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: relatedFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gray-900 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-5">
            <Link href="/" className="hover:text-gray-200">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/types/" className="hover:text-gray-200">Coverage Types</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">{ct.name}</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-5xl mb-3">{ct.icon}</div>
              <h1 className="text-4xl font-extrabold text-white mb-4">{ct.name}</h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-3">{ct.shortDesc}</p>
              <p className="text-xl font-bold" style={{ color: '#0d7377' }}>{ct.fromPrice}</p>
            </div>
            <div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About {ct.name}</h2>
                <p className="text-gray-600 leading-relaxed">{ct.description}</p>
              </div>

              {/* What Covers */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">What It Covers</h2>
                <ul className="space-y-2">
                  {ct.whatCovers.map((item) => (
                    <li key={item} className="flex items-start space-x-2">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who Needs */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Who Needs This Cover</h2>
                <ul className="space-y-2">
                  {ct.whoNeeds.map((item) => (
                    <li key={item} className="flex items-start space-x-2">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#0d7377' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Providers */}
              {providers.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Providers for {ct.name}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {providers.map((p) => (
                      <div key={p.name} className="border border-gray-200 rounded-xl p-4">
                        <h3 className="font-bold text-gray-900 mb-1">{p.name}</h3>
                        <p className="text-gray-500 text-sm">{p.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs */}
              {relatedFaqs.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Related Questions</h2>
                  <div className="space-y-3">
                    {relatedFaqs.map((faq) => (
                      <div key={faq.question} className="border border-gray-200 rounded-xl p-4">
                        <h3 className="font-semibold text-gray-900 mb-2 text-sm">{faq.question}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-4">
                <QuoteForm />
                <div className="rounded-xl p-4 text-white" style={{ backgroundColor: '#0d7377' }}>
                  <h3 className="font-bold mb-2 text-sm">Pricing Guide</h3>
                  <p className="text-teal-100 text-sm font-semibold">{ct.fromPrice}</p>
                  <p className="text-teal-200 text-xs mt-1">Actual premiums depend on animal values, species, and location. Get a free quote for your situation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12" style={{ backgroundColor: '#0d7377' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Get {ct.name} Quotes</h2>
          <p className="text-teal-100 mb-6">Free quotes from licensed rural insurance advisers.</p>
          <Link href="/contact/" className="inline-block bg-white font-bold px-6 py-3 rounded-xl" style={{ color: '#0d7377' }}>
            Get Free Quotes
          </Link>
        </div>
      </section>
    </>
  );
}
