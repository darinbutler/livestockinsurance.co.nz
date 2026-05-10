import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Terms of Use | LivestockInsurance.co.nz',
  description: 'Terms of use for LivestockInsurance.co.nz.',
  alternates: { canonical: `${SITE.domain}/terms/` },
};

export default function TermsPage() {
  return (
    <>
      <section className="relative bg-gray-900 overflow-hidden py-14">
        <div className="absolute inset-0 bg-cover bg-center opacity-35" style={{ backgroundImage: `url(https://images.pexels.com/photos/5370215/pexels-photo-5370215.jpeg?auto=compress&cs=tinysrgb&w=1400&h=500&fit=crop)` }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-gray-200">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">Terms of Use</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white mb-3">Terms of Use</h1>
          <p className="text-gray-400 text-sm">Last updated: May 2026</p>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray">
          <h2>Acceptance of Terms</h2>
          <p>By using LivestockInsurance.co.nz, you agree to these terms of use. If you do not agree, please do not use this website.</p>

          <h2>Use of This Website</h2>
          <p>This website is intended for New Zealand residents seeking information about livestock insurance options. The information provided is general in nature and does not constitute financial advice.</p>

          <h2>No Insurance Sold Directly</h2>
          <p>LivestockInsurance.co.nz does not sell insurance. We are an independent referral service. Any insurance products discussed on this site are offered by licensed third-party insurance providers and advisers.</p>

          <h2>Accuracy of Information</h2>
          <p>While we strive to keep information accurate and current, we make no warranty as to the accuracy, completeness, or currency of information on this site. Insurance products, premiums, and terms change frequently. Always confirm with a licensed adviser.</p>

          <h2>Intellectual Property</h2>
          <p>All content on this website is owned by Cover4You Group and may not be reproduced without permission.</p>

          <h2>Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, Cover4You Group is not liable for any loss or damage arising from your use of this website or reliance on information contained herein.</p>

          <h2>Governing Law</h2>
          <p>These terms are governed by the laws of New Zealand. Any disputes will be subject to the jurisdiction of New Zealand courts.</p>

          <h2>Contact</h2>
          <p>Terms enquiries: <a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
        </div>
      </section>
    </>
  );
}
