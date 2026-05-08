import type { Metadata } from 'next';
import QuoteForm from '../../components/QuoteForm';

export const metadata: Metadata = {
  title: 'Compare Livestock Insurance NZ 2026 | FMG vs Aon vs Gallagher vs NZI',
  description:
    'Side-by-side comparison of NZ livestock insurance providers. FMG, Aon, Gallagher, NZI and specialist brokers rated across key coverage types.',
  openGraph: {
    title: 'Compare Livestock Insurance NZ 2026 | FMG vs Aon vs Gallagher vs NZI',
    description:
      'Side-by-side comparison of NZ livestock insurance providers. FMG, Aon, Gallagher, NZI and specialist brokers rated across key coverage types.',
    type: 'website',
    locale: 'en_NZ',
  },
};

interface ProviderFeature {
  provider: string;
  mortality: string;
  disease: string;
  transit: string;
  liability: string;
  naturalDisaster: string;
  marketShare: string;
  bestFor: string;
}

const providers: ProviderFeature[] = [
  {
    provider: 'FMG',
    mortality: 'Excellent',
    disease: 'Excellent',
    transit: 'Good',
    liability: 'Excellent',
    naturalDisaster: 'Excellent',
    marketShare: 'Market leader',
    bestFor: 'All livestock types; comprehensive coverage',
  },
  {
    provider: 'Aon',
    mortality: 'Excellent',
    disease: 'Good',
    transit: 'Good',
    liability: 'Excellent',
    naturalDisaster: 'Good',
    marketShare: 'Major player',
    bestFor: 'Large farms; tailored policies',
  },
  {
    provider: 'Gallagher',
    mortality: 'Good',
    disease: 'Good',
    transit: 'Excellent',
    liability: 'Good',
    naturalDisaster: 'Good',
    marketShare: 'Established',
    bestFor: 'Transit-heavy operations; mixed livestock',
  },
  {
    provider: 'NZI',
    mortality: 'Good',
    disease: 'Moderate',
    transit: 'Good',
    liability: 'Good',
    naturalDisaster: 'Good',
    marketShare: 'Solid presence',
    bestFor: 'Budget-conscious farmers; basic coverage',
  },
  {
    provider: 'Gerrards',
    mortality: 'Excellent',
    disease: 'Excellent',
    transit: 'Good',
    liability: 'Excellent',
    naturalDisaster: 'Excellent',
    marketShare: 'Specialist',
    bestFor: 'Thoroughbreds, stud animals, high-value genetics',
  },
];

const providerDetails = [
  {
    name: 'FMG',
    strengths:
      'Industry leader in livestock insurance. Broad coverage across all livestock types, strong claims service, excellent natural disaster cover.',
    suited: 'Farmers seeking comprehensive, market-leading coverage with reliable claims handling.',
    quote: 'Visit FMG.co.nz or call our advisers for a personalised quote.',
  },
  {
    name: 'Aon',
    strengths:
      'Specialises in farm insurance. Tailored policies for different farm sizes and livestock mixes. Strong support for commercial operations.',
    suited: 'Commercial and larger-scale farms needing bespoke coverage.',
    quote: 'Request a quote through our rural advisers network.',
  },
  {
    name: 'Gallagher',
    strengths:
      'Expertise in transport and transit insurance. Good all-round livestock cover with competitive transit rates.',
    suited: 'Farmers regularly transporting stock; mixed livestock operations.',
    quote: 'Our advisers can connect you with Gallagher specialists.',
  },
  {
    name: 'NZI',
    strengths:
      'Competitive pricing for basic livestock cover. Straightforward policies with good claims support.',
    suited: 'Budget-conscious farmers needing essential coverage.',
    quote: 'Ask our advisers for NZI quotes and options.',
  },
  {
    name: 'Gerrards',
    strengths:
      'Specialist in high-value livestock (stud animals, thoroughbreds). Expert underwriting for genetics and bloodline animals.',
    suited: 'Breeders and owners of high-value or specialist livestock.',
    quote: 'Our network includes Gerrards specialists for premium livestock.',
  },
];

function getRatingColor(rating: string): string {
  switch (rating) {
    case 'Excellent':
      return 'text-emerald-600';
    case 'Good':
      return 'text-amber-600';
    case 'Moderate':
      return 'text-orange-600';
    default:
      return 'text-gray-600';
  }
}

function getRatingBg(rating: string): string {
  switch (rating) {
    case 'Excellent':
      return 'bg-emerald-50';
    case 'Good':
      return 'bg-amber-50';
    case 'Moderate':
      return 'bg-orange-50';
    default:
      return 'bg-gray-50';
  }
}

export default function ComparePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-900 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Compare Livestock Insurance Providers</h1>
          <p className="text-lg text-brand-100">
            See how FMG, Aon, Gallagher, NZI, and Gerrards stack up across coverage types, market presence, and who they suit best.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Provider Comparison</h2>
        <div className="overflow-x-auto border border-gray-200 rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="bg-brand-900 text-white">
                <th className="px-6 py-4 text-left font-semibold">Provider</th>
                <th className="px-6 py-4 text-left font-semibold">Mortality</th>
                <th className="px-6 py-4 text-left font-semibold">Disease</th>
                <th className="px-6 py-4 text-left font-semibold">Transit</th>
                <th className="px-6 py-4 text-left font-semibold">Liability</th>
                <th className="px-6 py-4 text-left font-semibold">Natural Disaster</th>
                <th className="px-6 py-4 text-left font-semibold">Market Share</th>
              </tr>
            </thead>
            <tbody>
              {providers.map((p, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 font-semibold text-brand-700">{p.provider}</td>
                  <td className={`px-6 py-4 font-medium ${getRatingColor(p.mortality)}`}>{p.mortality}</td>
                  <td className={`px-6 py-4 font-medium ${getRatingColor(p.disease)}`}>{p.disease}</td>
                  <td className={`px-6 py-4 font-medium ${getRatingColor(p.transit)}`}>{p.transit}</td>
                  <td className={`px-6 py-4 font-medium ${getRatingColor(p.liability)}`}>{p.liability}</td>
                  <td className={`px-6 py-4 font-medium ${getRatingColor(p.naturalDisaster)}`}>
                    {p.naturalDisaster}
                  </td>
                  <td className="px-6 py-4 text-gray-700">{p.marketShare}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          Ratings are indicative based on policy features, not actual claims experience. Personalised advice from a licensed adviser is recommended.
        </p>
      </section>

      {/* Provider Deep-Dives */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-12">Provider Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {providerDetails.map((pd, idx) => (
            <div key={idx} className="rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-brand-900 mb-4">{pd.name}</h3>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Strengths</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{pd.strengths}</p>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Best for</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{pd.suited}</p>
              </div>
              <p className="text-sm text-brand-700 font-semibold">{pd.quote}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Disclosure & CTA */}
      <section className="bg-gray-50 border-t border-gray-200 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">About This Comparison</h2>
            <p className="text-gray-700 mb-3">
              This comparison is <strong>indicative only</strong> and based on publicly available policy features. Every farm is unique, and the best provider for you depends on your specific livestock mix, location, and risk profile.
            </p>
            <p className="text-gray-700">
              Our licensed rural advisers can provide a personalised recommendation after understanding your individual needs.
            </p>
          </div>

          {/* CTA Form */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Ready to Compare Quotes?
            </h3>
            <QuoteForm />
          </div>
        </div>
      </section>
    </main>
  );
}
