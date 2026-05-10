import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Disclaimer | LivestockInsurance.co.nz',
  description: 'Disclaimer for LivestockInsurance.co.nz — important information about our referral service and the nature of the advice provided.',
  alternates: { canonical: `${SITE.domain}/disclaimer/` },
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="bg-gray-900 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-gray-200">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">Disclaimer</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white mb-3">Disclaimer</h1>
          <p className="text-gray-400 text-sm">Last updated: May 2026</p>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray">
          <h2>Nature of This Service</h2>
          <p>LivestockInsurance.co.nz is an independent comparison and referral service operated by Cover4You Group. We connect New Zealand farmers and livestock owners with licensed rural insurance advisers. We do not sell insurance directly and we are not an insurance provider.</p>

          <h2>Not Financial Advice</h2>
          <p>The information on this website is general in nature and does not constitute financial advice. It is intended as a guide only. The content on this site does not take into account your individual circumstances, financial situation, livestock values, or specific risk profile.</p>
          <p>Before making any insurance decision, you should speak with a licensed Financial Advice Provider (FAP) who can assess your specific situation. The advisers we refer you to hold current FAP licences under the Financial Markets Conduct Act 2013.</p>

          <h2>Referral Service</h2>
          <p>When you submit an enquiry through LivestockInsurance.co.nz, your details are passed to licensed NZ rural insurance advisers who will contact you to discuss your insurance needs. We earn a referral fee from these advisers. This is at no additional cost to you.</p>

          <h2>Accuracy of Information</h2>
          <p>We make every effort to keep the information on this website accurate and up to date. However, insurance products, premiums, and provider offerings change regularly. The pricing guides, coverage descriptions, and provider information on this site are indicative only and may not reflect current offerings. Always confirm details with a licensed adviser or directly with the insurer.</p>

          <h2>Third-Party Links</h2>
          <p>This website may contain links to third-party websites. We are not responsible for the content, accuracy, or privacy practices of those sites.</p>

          <h2>Contact</h2>
          <p>Questions about this disclaimer: <a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
        </div>
      </section>
    </>
  );
}
