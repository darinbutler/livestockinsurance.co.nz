import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use | LivestockInsurance.co.nz',
  description: 'Terms of Use for LivestockInsurance.co.nz — conditions for using our website and services.',
};

export default function TermsPage() {
  return (
    <main>
      <section className="bg-brand-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Terms of Use</h1>
          <p className="text-brand-100 mt-2">Effective: 1 May 2026</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-sm max-w-none space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 mt-0">Introduction</h2>
          <p>
            These Terms of Use ("Terms") govern your access to and use of the LivestockInsurance.co.nz website and services. By accessing our website, you agree to be bound by these Terms. If you do not agree, please do not use our website.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">1. About Our Service</h2>
          <p>
            LivestockInsurance.co.nz is a referral and lead generation service. We connect farmers and livestock owners with licensed rural insurance advisers. We do not:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide financial advice directly</li>
            <li>Sell insurance products</li>
            <li>Act as an insurance broker or intermediary</li>
            <li>Guarantee specific insurance outcomes or pricing</li>
          </ul>
          <p>
            Advice and insurance products are provided by licensed advisers and insurers in our network, not by us.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">2. Your Use of the Website</h2>
          <p>You agree to use our website only for lawful purposes and in a way that does not infringe on the rights of others or restrict their use and enjoyment of the website.</p>
          <p>
            Prohibited behaviour includes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Harassing or causing distress or inconvenience</li>
            <li>Transmitting malicious code or viruses</li>
            <li>Accessing without authorisation</li>
            <li>Disrupting the normal flow of dialogue</li>
            <li>Providing false or misleading information</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">3. Accuracy of Information</h2>
          <p>
            You agree to provide accurate, complete, and truthful information when requesting quotes. We are not responsible for loss or damage resulting from inaccurate information you provide.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">4. Intellectual Property</h2>
          <p>
            All content on our website, including text, graphics, logos, and images, is the property of LivestockInsurance.co.nz or its licensors. You may not reproduce, modify, or distribute content without our written permission.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">5. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for their content, accuracy, or practices. Your use of third-party websites is at your own risk and subject to their terms and conditions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">6. No Warranty</h2>
          <p>
            Our website is provided "as is" without warranties of any kind. We do not warrant that:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The website will be uninterrupted or error-free</li>
            <li>Content will be accurate or complete</li>
            <li>Advisers will respond within a specific timeframe</li>
            <li>Quotes will be binding or competitive</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, LivestockInsurance.co.nz and its officers, employees, and agents are not liable for any direct, indirect, incidental, special, or consequential damages arising from your use of the website or services, including loss of business, revenue, or profits.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">8. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless LivestockInsurance.co.nz from any claims, losses, or damages arising from your breach of these Terms or your use of the website.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">9. Termination</h2>
          <p>
            We may terminate your access to our website at any time without notice if we believe you have violated these Terms or acted unlawfully.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">10. Governing Law</h2>
          <p>
            These Terms are governed by the laws of New Zealand. Any disputes shall be subject to the exclusive jurisdiction of New Zealand courts.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">11. Amendments</h2>
          <p>
            We may update these Terms at any time. Continued use of the website constitutes acceptance of changes.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">12. Contact</h2>
          <p>
            For questions about these Terms, contact us at:
          </p>
          <div className="bg-gray-50 p-4 rounded border border-gray-200 my-4">
            <p className="font-semibold">LivestockInsurance.co.nz</p>
            <p>Email: support@livestockinsurance.co.nz</p>
            <p>Website: livestockinsurance.co.nz</p>
          </div>

          <p className="text-sm text-gray-600 italic mt-8">
            Last updated: May 2026
          </p>
        </div>

        {/* Link to related pages */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            See also: <Link href="/privacy/" className="text-brand-700 font-semibold hover:underline">Privacy Policy</Link> | <Link href="/disclaimer/" className="text-brand-700 font-semibold hover:underline">Disclaimer</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
