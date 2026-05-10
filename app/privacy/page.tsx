import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Privacy Policy | LivestockInsurance.co.nz',
  description: 'Privacy policy for LivestockInsurance.co.nz — how we collect, use, and protect your personal information.',
  alternates: { canonical: `${SITE.domain}/privacy/` },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative bg-gray-900 overflow-hidden py-14">
        <div className="absolute inset-0 bg-cover bg-center opacity-35" style={{ backgroundImage: `url(https://images.pexels.com/photos/31487836/pexels-photo-31487836.jpeg?auto=compress&cs=tinysrgb&w=1400&h=500&fit=crop)` }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-gray-200">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">Privacy Policy</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white mb-3">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">Last updated: May 2026</p>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray">
          <h2>Information We Collect</h2>
          <p>When you submit an enquiry through LivestockInsurance.co.nz, we collect: your name, email address, phone number, livestock type, and cover type preferences. This information is used solely to connect you with licensed rural insurance advisers.</p>

          <h2>How We Use Your Information</h2>
          <p>Your personal information is used to: (1) forward your enquiry to licensed rural insurance advisers; (2) send you a confirmation email if requested; and (3) improve our service. We do not sell your personal information to third parties.</p>

          <h2>Who We Share Your Information With</h2>
          <p>Your enquiry details are shared with licensed NZ rural insurance Financial Advice Providers who will contact you about your insurance needs. These advisers are bound by their own privacy obligations under the Privacy Act 2020 and their FAP licence conditions.</p>

          <h2>Data Security</h2>
          <p>Enquiry data is processed via a secure Cloudflare Workers endpoint. We do not store your personal information on our own servers beyond what is necessary for the referral process.</p>

          <h2>Your Rights</h2>
          <p>Under the Privacy Act 2020, you have the right to access and correct personal information we hold about you. To exercise these rights, contact us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>

          <h2>Cookies</h2>
          <p>This website uses minimal cookies for analytics and site performance. We do not use cookies to track you across other websites or for targeted advertising.</p>

          <h2>Contact</h2>
          <p>Privacy enquiries: <a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
        </div>
      </section>
    </>
  );
}
