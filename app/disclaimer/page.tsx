import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer | LivestockInsurance.co.nz',
  description:
    'Disclaimer for LivestockInsurance.co.nz — clarification of our role and relationship with advisers and insurers.',
};

export default function DisclaimerPage() {
  return (
    <main>
      <section className="bg-brand-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Disclaimer</h1>
          <p className="text-brand-100 mt-2">Effective: 1 May 2026</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-sm max-w-none space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 mt-0">Important Clarifications</h2>
          <p>
            This page clarifies the role of LivestockInsurance.co.nz and our relationship with the advisers and insurers in our network. Please read this carefully.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-6">
            <h3 className="text-lg font-bold text-amber-900 mb-2">Key Point</h3>
            <p className="text-amber-900">
              LivestockInsurance.co.nz is a referral service only. We do not provide financial advice, we are not a financial adviser, we are not an insurance provider, and we are not a licensed broker. Our role is solely to connect you with licensed advisers.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">1. What We Are NOT</h2>

          <h3 className="text-xl font-semibold text-gray-900">Not a Financial Adviser</h3>
          <p>
            We do not provide financial advice. We do not assess your financial situation, recommend specific insurance policies, or provide personalised financial guidance. Any advice you receive comes from licensed advisers in our network, not from us.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">Not an Insurance Provider or Insurer</h3>
          <p>
            We do not sell, underwrite, or issue insurance policies. We have no involvement in policy terms, pricing, claims assessment, or claims payment. These are the sole responsibility of the insurance providers.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">Not an Insurance Broker</h3>
          <p>
            We are not licensed as an insurance broker under the Financial Markets Conduct Act 2013. We do not arrange or facilitate insurance contracts on your behalf. We simply refer you to advisers who may help you arrange insurance.
          </p>

          <h3 className="text-xl font-semibold text-gray-900">Not Regulated by the FMA</h3>
          <p>
            LivestockInsurance.co.nz is not directly regulated by the Financial Markets Authority (FMA). However, the advisers we refer you to are licensed and regulated by the FMA.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">2. Our Limited Role</h2>
          <p>
            Our sole role is to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide information about livestock insurance types and coverage</li>
            <li>Collect your contact and farm information via our quote request form</li>
            <li>Match your information to appropriate advisers in our network</li>
            <li>Refer you to those advisers</li>
          </ul>
          <p>
            We take no further role. The adviser-client relationship, advice, quotes, and insurance contracts are entirely between you and the adviser/insurer.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">3. About Our Advisers</h2>
          <p>
            <strong>Licensed and Regulated:</strong> Every adviser in our network is licensed under the Financial Markets Conduct Act 2013 (FMCA) and regulated by the Financial Markets Authority (FMA). They are bound by strict codes of conduct.
          </p>
          <p>
            <strong>Independent Relationships:</strong> Your relationship is with the adviser, not with us. The adviser has a legal duty to act in your best interests and provide personalised advice based on your circumstances.
          </p>
          <p>
            <strong>We Do Not Control Advisers:</strong> While we partner with advisers, we do not control them, supervise their advice, or guarantee the quality or timeliness of their service. Complaints about adviser conduct should be directed to the adviser and, if unresolved, to the Financial Markets Authority.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">4. About Insurance Providers</h2>
          <p>
            The insurance providers (FMG, Aon, Gallagher, NZI, Gerrards, etc.) are separate legal entities. They are responsible for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Policy terms and conditions</li>
            <li>Underwriting decisions and pricing</li>
            <li>Claims assessment and payment</li>
            <li>Customer service and complaint handling</li>
          </ul>
          <p>
            We have no involvement in any of these. Disputes with insurers should be directed to them directly.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">5. Information Accuracy</h2>
          <p>
            We strive to provide accurate information about livestock insurance on our website. However:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Information may become outdated as policies and providers change</li>
            <li>Information is general only and not tailored to your situation</li>
            <li>Quotes provided by advisers may differ from general information due to your specific circumstances</li>
            <li>Always seek personalised advice for your situation</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">6. No Liability for Third Parties</h2>
          <p>
            We are not responsible for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Adviser conduct, quality, or timeliness of service</li>
            <li>Insurer policy terms, pricing, or claims handling</li>
            <li>Disputes between you and advisers or insurers</li>
            <li>Losses arising from insurance coverage gaps or policy exclusions</li>
            <li>Third-party websites or services linked from our site</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">7. No Guarantee of Service</h2>
          <p>
            While we aim to match you with advisers, we do not guarantee:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>That an adviser will contact you</li>
            <li>Response timeframes (though we target 24 hours)</li>
            <li>That quotes will be competitive or binding</li>
            <li>Availability of specific coverage or providers</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">8. Your Responsibility</h2>
          <p>
            You are responsible for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Providing accurate farm and livestock information</li>
            <li>Reviewing adviser recommendations carefully</li>
            <li>Comparing multiple quotes before deciding</li>
            <li>Understanding policy terms and exclusions before purchasing</li>
            <li>Asking advisers questions if anything is unclear</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">9. Disputes and Complaints</h2>
          <p>
            <strong>With an Adviser:</strong> Contact the adviser directly. If unresolved, complaint to the Financial Markets Authority (FMA) or the Disputes Resolution Scheme (DRS) they belong to.
          </p>
          <p>
            <strong>With an Insurer:</strong> Contact the insurer directly. If unresolved, complain to the Insurance Ombudsman.
          </p>
          <p>
            <strong>With LivestockInsurance.co.nz:</strong> Contact us at support@livestockinsurance.co.nz. We will address concerns about our service only, not adviser or insurer conduct.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">10. No Liability</h2>
          <p>
            To the maximum extent permitted by law, LivestockInsurance.co.nz is not liable for any losses, damages, or costs arising from:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use of our website or services</li>
            <li>Adviser conduct or recommendations</li>
            <li>Insurer policy terms or claims handling</li>
            <li>Insurance coverage gaps or exclusions</li>
            <li>Any third party's actions or services</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">11. Privacy and Data Protection</h2>
          <p>
            Your personal information will be shared with advisers so they can contact you. See our{' '}
            <Link href="/privacy/" className="text-brand-700 font-semibold hover:underline">
              Privacy Policy
            </Link>{' '}
            for full details on how your data is used and protected.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">12. Changes to This Disclaimer</h2>
          <p>
            We may update this Disclaimer at any time. Changes are effective immediately upon posting. Please review it regularly.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">13. Acknowledgement</h2>
          <p>
            By using LivestockInsurance.co.nz, you acknowledge that you have read, understood, and agree to this Disclaimer and our{' '}
            <Link href="/terms/" className="text-brand-700 font-semibold hover:underline">
              Terms of Use
            </Link>{' '}
            and{' '}
            <Link href="/privacy/" className="text-brand-700 font-semibold hover:underline">
              Privacy Policy
            </Link>
            .
          </p>

          <p className="text-sm text-gray-600 italic mt-8">
            Last updated: May 2026
          </p>
        </div>

        {/* Link to related pages */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            See also: <Link href="/privacy/" className="text-brand-700 font-semibold hover:underline">Privacy Policy</Link> | <Link href="/terms/" className="text-brand-700 font-semibold hover:underline">Terms of Use</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
