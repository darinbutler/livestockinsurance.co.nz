import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About LivestockInsurance.co.nz | NZ Livestock Insurance Comparison',
  description:
    'Learn about LivestockInsurance.co.nz — a referral service connecting NZ farmers with licensed rural insurance advisers for livestock coverage quotes and advice.',
  openGraph: {
    title: 'About LivestockInsurance.co.nz | NZ Livestock Insurance Comparison',
    description:
      'Learn about LivestockInsurance.co.nz — a referral service connecting NZ farmers with licensed rural insurance advisers for livestock coverage quotes and advice.',
    type: 'website',
    locale: 'en_NZ',
  },
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-900 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About LivestockInsurance.co.nz</h1>
          <p className="text-lg text-brand-100">
            Connecting NZ farmers with expert livestock insurance advisers.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* What We Are */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Are</h2>
          <div className="prose prose-sm max-w-none space-y-4">
            <p className="text-gray-700">
              <strong>LivestockInsurance.co.nz</strong> is a <strong>referral and lead generation service</strong>. We connect New Zealand farmers and livestock owners with experienced, licensed rural insurance advisers who can provide free quotes and expert advice.
            </p>
            <p className="text-gray-700">
              We are <strong>not</strong> an insurance provider, insurer, insurance broker, or financial adviser. We do not sell insurance directly, and we do not provide financial advice. Our role is to make it easy for farmers to find and speak with the right advisers.
            </p>
            <p className="text-gray-700">
              The advisers in our network are licensed under the <strong>Financial Markets Conduct Act 2013</strong> and provide independent, personalised advice based on your individual farm, livestock, and risk profile.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-12 pb-12 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-700 mb-3">1</div>
              <h3 className="font-bold text-gray-900 mb-2">You Request Quotes</h3>
              <p className="text-sm text-gray-600">
                Fill in your farm details and livestock information on our website.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-700 mb-3">2</div>
              <h3 className="font-bold text-gray-900 mb-2">We Match You</h3>
              <p className="text-sm text-gray-600">
                We connect you with one of our licensed rural insurance advisers.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-700 mb-3">3</div>
              <h3 className="font-bold text-gray-900 mb-2">They Advise You</h3>
              <p className="text-sm text-gray-600">
                The adviser contacts you to understand your needs and provide personalised quotes.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-700 mb-3">4</div>
              <h3 className="font-bold text-gray-900 mb-2">You Compare & Choose</h3>
              <p className="text-sm text-gray-600">
                Compare options, ask questions, and select the coverage that suits your farm.
              </p>
            </div>
          </div>
        </div>

        {/* Our Advisers */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Advisers</h2>
          <div className="prose prose-sm max-w-none space-y-4">
            <p className="text-gray-700">
              Every adviser in our network is <strong>licensed under the Financial Markets Conduct Act 2013</strong>. This means they:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Have the legal authority to provide financial advice on insurance products</li>
              <li>Follow a strict code of ethics and conduct</li>
              <li>Are required to act in your best interests</li>
              <li>Have professional indemnity insurance</li>
              <li>Are subject to regulatory oversight and complaints handling</li>
            </ul>
            <p className="text-gray-700">
              Our advisers specialise in rural and farm insurance and have deep knowledge of livestock coverage options, providers, and the unique risks farmers face.
            </p>
          </div>
        </div>

        {/* Full Disclosure */}
        <div className="bg-brand-50 rounded-lg p-8 border border-brand-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Full Disclosure Statement</h2>
          <div className="prose prose-sm max-w-none space-y-4">
            <p className="text-gray-700">
              <strong>Our Business Model:</strong> LivestockInsurance.co.nz is a referral service. When you request quotes through our website, we introduce you to licensed rural insurance advisers. The advisers may earn a commission from insurance providers when a policy is placed. We may also receive a referral fee. These arrangements do not affect the price you pay for insurance.
            </p>
            <p className="text-gray-700">
              <strong>Independence:</strong> While we partner with advisers and insurance providers, our role is to help you find advisers, not to recommend specific insurers or policies. The advice you receive is independent and personalised to your circumstances.
            </p>
            <p className="text-gray-700">
              <strong>No Financial Relationship with You:</strong> You do not have a financial relationship with LivestockInsurance.co.nz. Our service to you is free. Your insurance contract and ongoing relationship are with the insurer or broker, not with us.
            </p>
            <p className="text-gray-700">
              <strong>Privacy & Data:</strong> We collect your information only to match you with appropriate advisers. We do not sell your data and we comply with the Privacy Act 2020. See our{' '}
              <Link href="/privacy/" className="text-brand-700 font-semibold hover:underline">
                Privacy Policy
              </Link>{' '}
              for details.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200 py-12 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Compare Livestock Insurance?</h2>
          <p className="text-gray-700 mb-6">
            Get free quotes from our network of licensed rural advisers.
          </p>
          <Link
            href="/contact/"
            className="inline-block bg-brand-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-800 transition-colors"
          >
            Request Free Quotes
          </Link>
        </div>
      </section>
    </main>
  );
}
