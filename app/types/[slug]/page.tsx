import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { coverageTypes } from '../../../data/coverage-types';
import QuoteForm from '../../../components/QuoteForm';
import { SITE } from '../../../data/site';

export function generateStaticParams() {
  return coverageTypes.map((ct) => ({
    slug: ct.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ct = coverageTypes.find((c) => c.slug === slug);

  if (!ct) {
    return {};
  }

  return {
    title: `${ct.name} | LivestockInsurance.co.nz`,
    description: ct.shortDesc,
    alternates: {
      canonical: `https://livestockinsurance.co.nz/types/${ct.slug}/`,
    },
  };
}

export default async function CoverageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const coverage = coverageTypes.find((c) => c.slug === slug);

  if (!coverage) {
    notFound();
  }

  const providers = [
    {
      name: 'FMG',
      note: 'Full range of livestock coverage with farm bundling discounts',
    },
    {
      name: 'Aon',
      note: 'Specialist livestock insurance with dedicated farm team',
    },
    {
      name: 'Gallagher',
      note: 'Comprehensive coverage with rural expertise',
    },
    {
      name: 'NZI',
      note: 'Competitive rates with flexible policy options',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-72 md:h-80 w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1600&auto=format&fit=crop&q=80"
          alt={coverage.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-teal-900 bg-opacity-60" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
          <Link
            href="/types/"
            className="self-start mt-6 text-white hover:text-teal-200 transition-colors flex items-center text-sm font-semibold"
          >
            ← Back to Coverage Types
          </Link>

          <div className="flex-1 flex flex-col items-center justify-center text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-teal-600 rounded-full mb-4">
              <span className="text-4xl">{coverage.icon}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">{coverage.name}</h1>
            <p className="text-lg text-teal-100 max-w-2xl">{coverage.shortDesc}</p>
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
                About {coverage.name}
              </h2>
              <p className="text-gray-700 leading-relaxed">{coverage.fullDescription}</p>
            </div>

            {/* Who Needs & What's Covered Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Who Needs This Cover */}
              <div className="bg-white border-2 border-gray-100 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-teal-100 text-teal-700 rounded-full mr-3 text-sm font-bold">
                    ✓
                  </span>
                  Who Needs This Cover
                </h3>
                <ul className="space-y-3">
                  {coverage.whoNeeds.map((need, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 rounded-full bg-teal-100 text-teal-700 mr-3 mt-0.5">
                        ✓
                      </span>
                      <span className="text-gray-700">{need}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What's Covered */}
              <div className="bg-white border-2 border-gray-100 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-teal-100 text-teal-700 rounded-full mr-3 text-sm font-bold">
                    📋
                  </span>
                  What's Covered
                </h3>
                <ul className="space-y-3">
                  {coverage.whatCovers.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 rounded-full bg-teal-100 text-teal-700 mr-3 mt-0.5">
                        •
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Typical Cost Section */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 border-l-4 border-teal-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-teal-900 mb-2">Typical Cost</h3>
              <div className="text-4xl font-bold text-teal-700 mb-4">{coverage.fromPrice}</div>
              <p className="text-teal-900 leading-relaxed">
                Premium costs vary based on the size of your herd, type of livestock, coverage
                level, and risk profile. Larger herds and bundled policies typically receive
                volume discounts. Get a personalized quote below for your specific situation.
              </p>
            </div>

            {/* Provider Comparison */}
            <div className="bg-white border-2 border-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Insurance Providers</h3>
              <div className="space-y-4">
                {providers.map((provider, idx) => (
                  <div key={idx} className="pb-4 border-b border-gray-100 last:border-b-0">
                    <h4 className="font-bold text-gray-900 mb-1">{provider.name}</h4>
                    <p className="text-gray-600 text-sm">{provider.note}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-6 pt-6 border-t border-gray-100">
                All providers are regulated under the Financial Markets Conduct Act. Compare quotes
                from multiple insurers to find the best value for your needs.
              </p>
            </div>

            {/* Get Quotes CTA */}
            <div className="bg-white border-2 border-teal-700 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to Get Covered?</h3>
              <p className="text-gray-600 mb-4">
                Use our quick quote tool to compare {coverage.name} from leading NZ insurers in
                minutes.
              </p>
              <button className="inline-flex items-center px-6 py-3 bg-teal-700 text-white font-semibold rounded-lg hover:bg-teal-800 transition-colors">
                Get Quotes Now <span className="ml-2">→</span>
              </button>
            </div>
          </div>

          {/* Right Sidebar - Quote Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <QuoteForm
                compact
                title={`Get ${coverage.name} Quotes`}
                coverageType={coverage.slug}
              />
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
            name: coverage.name,
            description: coverage.shortDesc,
            url: `https://livestockinsurance.co.nz/types/${coverage.slug}/`,
            areaServed: {
              '@type': 'Country',
              name: 'NZ',
            },
            provider: {
              '@type': 'Organization',
              '@id': 'https://livestockinsurance.co.nz/#organization',
              name: SITE.name,
            },
          }),
        }}
      />
    </div>
  );
}
