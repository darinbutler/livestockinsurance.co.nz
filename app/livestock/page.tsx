import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { livestockTypes } from '../../data/livestock-types';
import QuoteForm from '../../components/QuoteForm';
import { SITE } from '../../data/site';

export const metadata: Metadata = {
  title: 'Livestock Insurance by Animal Type NZ | LivestockInsurance.co.nz',
  description:
    'Comprehensive insurance for all livestock types in New Zealand — cattle, sheep, horses, pigs, poultry, deer, alpacas, and more. Customized coverage for every farm.',
  alternates: {
    canonical: 'https://livestockinsurance.co.nz/livestock/',
  },
};

export default function LivestockTypesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-80 md:h-96 w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1546445317-29f4545e9d53?w=1600&auto=format&fit=crop&q=80"
          alt="Livestock on farm"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Insurance for Every Animal on Your Farm
            </h1>
            <p className="text-lg md:text-xl text-gray-100">
              Specialized coverage tailored to your specific livestock needs
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Livestock Types Grid - Left 2 Columns */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {livestockTypes.map((livestock) => (
                <Link
                  key={livestock.slug}
                  href={`/livestock/${livestock.slug}/`}
                  className="group"
                >
                  <div className="h-full bg-white border-2 border-gray-100 rounded-lg p-6 hover:border-teal-700 hover:shadow-lg transition-all duration-300">
                    {/* Icon */}
                    <div className="mb-4 inline-flex items-center justify-center w-14 h-14 bg-teal-100 rounded-lg group-hover:bg-teal-700 transition-colors">
                      <span className="text-2xl">{livestock.icon}</span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">
                      {livestock.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {livestock.shortDesc}
                    </p>

                    {/* Key Facts */}
                    <div className="space-y-2 pb-4 border-b border-gray-100">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Key Facts
                      </p>
                      <ul className="space-y-1">
                        {livestock.keyFacts.slice(0, 2).map((fact, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="text-teal-600 mr-2 font-bold">•</span>
                            {fact}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Arrow */}
                    <div className="mt-4 inline-flex items-center text-teal-700 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                      Learn more <span className="ml-2">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Why Choose Us Section */}
            <div className="mt-12 bg-white border-2 border-teal-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Livestock Insurance?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-xl">
                    🎯
                  </div>
                  <h3 className="font-bold text-gray-900">Farm-Specific Coverage</h3>
                  <p className="text-gray-600 text-sm">
                    Policies tailored to your unique herd composition and farming practices.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-xl">
                    💰
                  </div>
                  <h3 className="font-bold text-gray-900">Competitive Rates</h3>
                  <p className="text-gray-600 text-sm">
                    Bundle discounts and loyalty rewards to reduce your overall costs.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-xl">
                    ⚡
                  </div>
                  <h3 className="font-bold text-gray-900">Fast Claims Processing</h3>
                  <p className="text-gray-600 text-sm">
                    Rapid assessment and settlement to get you back on track quickly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Form Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <QuoteForm title="Get Your Farm Quote Today" />

              {/* Trust Badges */}
              <div className="mt-6 bg-white border-2 border-gray-100 rounded-lg p-6">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
                  Trusted by NZ Farmers
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-lg mr-3">✓</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">FMC Regulated</p>
                      <p className="text-xs text-gray-500">All partner advisers are licensed</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-lg mr-3">✓</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Free Quotes</p>
                      <p className="text-xs text-gray-500">No obligation to compare options</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-lg mr-3">✓</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Expert Support</p>
                      <p className="text-xs text-gray-500">Farm insurance specialists ready to help</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Livestock Insurance by Animal Type',
            description:
              'Find specialized livestock insurance for all farm animals in New Zealand',
            url: 'https://livestockinsurance.co.nz/livestock/',
            publisher: {
              '@type': 'Organization',
              name: SITE.name,
              logo: {
                '@type': 'ImageObject',
                url: SITE.logo,
              },
            },
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: livestockTypes.map((lt, idx) => ({
                '@type': 'ListItem',
                position: idx + 1,
                item: {
                  '@type': 'Thing',
                  name: lt.name,
                  description: lt.shortDesc,
                  url: `https://livestockinsurance.co.nz/livestock/${lt.slug}/`,
                },
              })),
            },
          }),
        }}
      />
    </div>
  );
}
