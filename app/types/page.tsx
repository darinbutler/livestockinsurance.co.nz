import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { coverageTypes } from '../../data/coverage-types';
import QuoteForm from '../../components/QuoteForm';
import { SITE } from '../../data/site';

export const metadata: Metadata = {
  title: 'Livestock Insurance Coverage Types NZ | LivestockInsurance.co.nz',
  description:
    'Explore all livestock insurance coverage types available in NZ — mortality, disease, transit, liability, natural disaster, and theft cover.',
  alternates: {
    canonical: 'https://livestockinsurance.co.nz/types/',
  },
};

export default function CoverageTypesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-80 md:h-96 w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1600&auto=format&fit=crop&q=80"
          alt="Livestock farm"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-teal-900 bg-opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">All Coverage Types Explained</h1>
            <p className="text-lg md:text-xl text-teal-100">
              Choose the livestock insurance protection that fits your farm
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Coverage Types Grid - Left 2 Columns */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {coverageTypes.map((coverage) => (
                <Link
                  key={coverage.slug}
                  href={`/types/${coverage.slug}/`}
                  className="group"
                >
                  <div className="h-full bg-white border-2 border-gray-100 rounded-lg p-6 hover:border-teal-700 hover:shadow-lg transition-all duration-300">
                    {/* Icon */}
                    <div className="mb-4 inline-flex items-center justify-center w-14 h-14 bg-teal-100 rounded-lg group-hover:bg-teal-700 transition-colors">
                      <span className="text-2xl">{coverage.icon}</span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">
                      {coverage.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {coverage.shortDesc}
                    </p>

                    {/* Price */}
                    <div className="mb-4 pb-4 border-b border-gray-100">
                      <p className="text-teal-700 font-semibold text-sm">
                        From {coverage.fromPrice}
                      </p>
                    </div>

                    {/* Who Needs This */}
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Who Needs This
                      </p>
                      <ul className="space-y-1">
                        {coverage.whoNeeds.slice(0, 3).map((need, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="text-teal-600 mr-2">•</span>
                            {need}
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

            {/* CTA Section */}
            <div className="mt-12 bg-gradient-to-r from-teal-600 to-teal-800 rounded-lg p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Not Sure Which Cover You Need?
              </h2>
              <p className="text-teal-100 mb-6 text-lg">
                Our insurance specialists can help you find the right combination of coverage for
                your specific needs.
              </p>
              <Link
                href="/contact/"
                className="inline-flex items-center bg-white text-teal-700 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
              >
                Get Expert Advice <span className="ml-2">→</span>
              </Link>
            </div>
          </div>

          {/* Quote Form Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <QuoteForm compact title="Get a Quick Quote" />
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
            name: 'Livestock Insurance Coverage Types',
            description:
              'Complete guide to livestock insurance coverage types available in New Zealand',
            url: 'https://livestockinsurance.co.nz/types/',
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
              itemListElement: coverageTypes.map((ct, idx) => ({
                '@type': 'ListItem',
                position: idx + 1,
                item: {
                  '@type': 'Service',
                  name: ct.name,
                  description: ct.shortDesc,
                  url: `https://livestockinsurance.co.nz/types/${ct.slug}/`,
                },
              })),
            },
          }),
        }}
      />
    </div>
  );
}
