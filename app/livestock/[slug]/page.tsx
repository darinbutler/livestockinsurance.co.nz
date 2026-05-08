import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { livestockTypes } from '../../../data/livestock-types';
import { coverageTypes } from '../../../data/coverage-types';
import QuoteForm from '../../../components/QuoteForm';
import { SITE } from '../../../data/site';

export function generateStaticParams() {
  return livestockTypes.map((lt) => ({
    slug: lt.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lt = livestockTypes.find((l) => l.slug === slug);

  if (!lt) {
    return {};
  }

  return {
    title: `${lt.name} NZ | LivestockInsurance.co.nz`,
    description: lt.shortDesc,
    alternates: {
      canonical: `https://livestockinsurance.co.nz/livestock/${lt.slug}/`,
    },
  };
}

export default async function LivestockDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const livestock = livestockTypes.find((l) => l.slug === slug);

  if (!livestock) {
    notFound();
  }

  // Get the first 4 relevant coverage types (filter by relevantCoverageTypes if available)
  const relevantCoverage = livestock.relevantCoverageTypes
    ? coverageTypes.filter((ct) => livestock.relevantCoverageTypes?.includes(ct.slug)).slice(0, 4)
    : coverageTypes.slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-72 md:h-80 w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1548445929-4f60a497ed7a?w=1600&auto=format&fit=crop&q=80"
          alt={livestock.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
          <Link
            href="/livestock/"
            className="self-start mt-6 text-white hover:text-gray-300 transition-colors flex items-center text-sm font-semibold"
          >
            ← Back to Livestock Types
          </Link>

          <div className="flex-1 flex flex-col items-center justify-center text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-teal-600 rounded-full mb-4">
              <span className="text-4xl">{livestock.icon}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">{livestock.name}</h1>
            <p className="text-lg text-gray-100 max-w-2xl">{livestock.shortDesc}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Content - 2 Columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                About {livestock.name} Insurance
              </h2>
              <p className="text-gray-700 leading-relaxed">{livestock.fullDescription}</p>
            </div>

            {/* Key Facts Grid */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Key Facts</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {livestock.keyFacts.map((fact, idx) => (
                  <div
                    key={idx}
                    className="bg-white border-2 border-gray-100 rounded-lg p-6 hover:border-teal-700 transition-colors"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-teal-100 text-teal-700 font-bold text-lg">
                          {idx + 1}
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-gray-700">{fact}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coverage Notes */}
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-8">
              <h3 className="text-lg font-bold text-blue-900 mb-3">Coverage Notes</h3>
              <p className="text-blue-900 leading-relaxed">{livestock.coverageNotes}</p>
            </div>

            {/* Coverage Types Available */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Coverage Types Available for {livestock.name}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {relevantCoverage.map((coverage) => (
                  <Link
                    key={coverage.slug}
                    href={`/types/${coverage.slug}/`}
                    className="bg-white border-2 border-gray-100 rounded-lg p-4 hover:border-teal-700 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-start">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-teal-100 rounded-lg group-hover:bg-teal-700 transition-colors flex-shrink-0">
                        <span className="text-lg">{coverage.icon}</span>
                      </div>
                      <div className="ml-3 flex-1">
                        <h4 className="font-semibold text-gray-900 group-hover:text-teal-700 transition-colors">
                          {coverage.name}
                        </h4>
                        <p className="text-xs text-gray-600 mt-1 line-clamp-1">
                          {coverage.shortDesc}
                        </p>
                        <p className="text-teal-700 font-semibold text-xs mt-2">
                          From {coverage.fromPrice}
                        </p>
                      </div>
                      <span className="text-teal-600 group-hover:translate-x-1 transition-transform ml-2">
                        →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
              <Link
                href="/types/"
                className="inline-flex items-center text-teal-700 font-semibold hover:text-teal-800 transition-colors mt-4"
              >
                View all coverage types <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Get Covered CTA */}
            <div className="bg-gradient-to-r from-teal-600 to-teal-800 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">Get {livestock.name} Insurance Quotes Today</h3>
              <p className="text-teal-100 mb-6">
                Compare quotes from leading NZ insurers and find the perfect coverage for your{' '}
                {livestock.name.toLowerCase()}.
              </p>
              <button className="inline-flex items-center px-6 py-3 bg-white text-teal-700 font-semibold rounded-lg hover:bg-teal-50 transition-colors">
                Get Free Quotes <span className="ml-2">→</span>
              </button>
            </div>
          </div>

          {/* Right Sidebar - Quote Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <QuoteForm
                compact
                title={`Quote for ${livestock.name}`}
                livestockType={livestock.slug}
              />

              {/* Quick Info Box */}
              <div className="mt-6 bg-teal-50 border-2 border-teal-200 rounded-lg p-6">
                <p className="text-xs font-semibold text-teal-900 uppercase tracking-wide mb-4">
                  Quick Facts
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-teal-700 font-semibold">Typical Coverage</p>
                    <p className="text-sm text-teal-900 mt-1">
                      {livestock.relevantCoverageTypes
                        ? livestock.relevantCoverageTypes.slice(0, 3).join(', ')
                        : 'Mortality, disease, theft'}
                    </p>
                  </div>
                  <div className="border-t border-teal-200 pt-3">
                    <p className="text-xs text-teal-700 font-semibold">Need Help?</p>
                    <p className="text-xs text-teal-900 mt-1">
                      Our farm insurance experts are available to discuss your {livestock.name.toLowerCase()} coverage needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Markup - Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: `${livestock.name} Insurance`,
            description: livestock.shortDesc,
            url: `https://livestockinsurance.co.nz/livestock/${livestock.slug}/`,
            areaServed: {
              '@type': 'Country',
              name: 'NZ',
            },
            provider: {
              '@type': 'Organization',
              '@id': 'https://livestockinsurance.co.nz/#organization',
              name: SITE.name,
            },
            offers: {
              '@type': 'Offer',
              priceCurrency: 'NZD',
              description: `Insurance coverage for ${livestock.name}`,
            },
          }),
        }}
      />
    </div>
  );
}
