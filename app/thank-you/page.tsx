import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thank You | LivestockInsurance.co.nz',
  description: 'Thanks for requesting livestock insurance quotes. We will be in touch within 24 hours.',
  robots: 'noindex',
};

export default function ThankYouPage() {
  return (
    <main>
      <section className="min-h-screen bg-gradient-to-br from-brand-900 to-brand-800 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
              <span className="text-3xl text-emerald-600">✓</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Thanks for Your Enquiry!
          </h1>

          {/* Message */}
          <p className="text-xl text-brand-100 mb-8">
            We've received your livestock insurance quote request.
          </p>

          {/* Details */}
          <div className="bg-brand-800 rounded-lg p-8 mb-8">
            <h2 className="text-lg font-bold text-white mb-4">What Happens Next</h2>
            <div className="space-y-4 text-left text-brand-100">
              <div className="flex gap-4">
                <span className="text-emerald-400 font-bold flex-shrink-0">✓</span>
                <p>
                  One of our licensed rural insurance advisers will review your request.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-emerald-400 font-bold flex-shrink-0">✓</span>
                <p>
                  They will contact you <strong>within 24 hours</strong> with free quotes from major providers.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-emerald-400 font-bold flex-shrink-0">✓</span>
                <p>
                  You can compare options and ask questions — there's no obligation to commit.
                </p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/"
              className="bg-white text-brand-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/blog/"
              className="bg-brand-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-600 transition-colors"
            >
              Read Insurance Guides
            </Link>
          </div>

          {/* Contact Info */}
          <p className="text-sm text-brand-200">
            Have questions in the meantime? Check out our <Link href="/faqs/" className="text-white font-semibold hover:underline">FAQ page</Link> or email us at support@livestockinsurance.co.nz
          </p>
        </div>
      </section>
    </main>
  );
}
