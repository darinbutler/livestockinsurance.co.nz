import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | LivestockInsurance.co.nz',
  description: 'Privacy Policy for LivestockInsurance.co.nz — how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="bg-brand-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-brand-100 mt-2">Effective: 1 May 2026</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-sm max-w-none space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 mt-0">Introduction</h2>
          <p>
            LivestockInsurance.co.nz ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">1. Information We Collect</h2>
          <p>We collect the following categories of personal information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Contact Information:</strong> Name, email address, phone number, physical address
            </li>
            <li>
              <strong>Farm Information:</strong> Type of livestock, farm location, acreage, number of animals
            </li>
            <li>
              <strong>Insurance Details:</strong> Current insurance status, coverage needs, claims history (if provided)
            </li>
            <li>
              <strong>Technical Information:</strong> IP address, browser type, pages visited, time spent on site (via analytics)
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">2. How We Use Your Information</h2>
          <p>We use your information for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To match you with appropriate licensed rural insurance advisers</li>
            <li>To send your enquiry details to advisers in our network</li>
            <li>To enable advisers to contact you with quotes and advice</li>
            <li>To improve our website and service</li>
            <li>To comply with legal and regulatory obligations</li>
            <li>To send you updates or marketing information (with your consent)</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">3. Sharing Your Information</h2>
          <p>
            <strong>With Advisers:</strong> Your personal and farm information is shared with licensed rural insurance advisers in our network so they can contact you and provide quotes. You consent to this sharing when you submit your quote request.
          </p>
          <p>
            <strong>With Third Parties:</strong> We do not sell your personal information to third parties. We may share information with service providers (e.g., email hosts, analytics providers) who are bound by confidentiality agreements.
          </p>
          <p>
            <strong>Legal Compliance:</strong> We may disclose information if required by law or in response to lawful requests from authorities.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">4. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your personal information, including encryption, secure servers, and access controls. However, no transmission over the internet is completely secure. If you have security concerns, please contact us.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">5. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to fulfil the purposes for which it was collected, typically 24 months. After this period, we securely delete or anonymise your data unless we are required to retain it by law.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">6. Your Rights</h2>
          <p>Under the Privacy Act 2020, you have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your personal information</li>
            <li>Request correction of inaccurate information</li>
            <li>Withdraw consent to marketing communications</li>
            <li>Request deletion of your information (subject to legal obligations)</li>
            <li>Lodge a complaint with the Privacy Commissioner</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">7. Cookies</h2>
          <p>
            Our website uses cookies to enhance your experience. You can control cookie settings through your browser. Essential cookies are required for website function. We use analytics cookies to understand how you use our site.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">8. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for their privacy practices. Please review their privacy policies before sharing your information.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">9. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or your personal information, contact us at:
          </p>
          <div className="bg-gray-50 p-4 rounded border border-gray-200 my-4">
            <p className="font-semibold">LivestockInsurance.co.nz</p>
            <p>Email: privacy@livestockinsurance.co.nz</p>
            <p>Website: livestockinsurance.co.nz</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of our website constitutes acceptance of changes.
          </p>

          <p className="text-sm text-gray-600 italic mt-8">
            Last updated: May 2026
          </p>
        </div>

        {/* Link to related pages */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            See also: <Link href="/terms/" className="text-brand-700 font-semibold hover:underline">Terms of Use</Link> | <Link href="/disclaimer/" className="text-brand-700 font-semibold hover:underline">Disclaimer</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
