import type { Metadata } from 'next';
import { faqs } from '../../data/faqs';
import QuoteForm from '../../components/QuoteForm';

export const metadata: Metadata = {
  title: 'Livestock Insurance FAQs NZ | Common Questions Answered',
  description:
    'Answers to common questions about livestock insurance in New Zealand — costs, coverage, claims, and how to compare providers.',
  openGraph: {
    title: 'Livestock Insurance FAQs NZ | Common Questions Answered',
    description:
      'Answers to common questions about livestock insurance in New Zealand — costs, coverage, claims, and how to compare providers.',
    type: 'website',
    locale: 'en_NZ',
  },
};

interface FAQ {
  category: string;
  questions: Array<{
    id: string;
    q: string;
    a: string;
  }>;
}

// Group FAQs by category
function groupFAQsByCategory(allFaqs: any[]): FAQ[] {
  const grouped: { [key: string]: any[] } = {};
  allFaqs.forEach(faq => {
    if (!grouped[faq.category]) grouped[faq.category] = [];
    grouped[faq.category].push(faq);
  });
  return Object.entries(grouped).map(([category, questions]) => ({
    category,
    questions,
  }));
}

export default function FAQsPage() {
  const groupedFaqs = groupFAQsByCategory(faqs);

  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-900 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-brand-100">
            Answers to common questions about livestock insurance in New Zealand.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {groupedFaqs.map((group, groupIdx) => (
          <div key={groupIdx} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{group.category}</h2>
            <div className="space-y-3">
              {group.questions.map((faq, qIdx) => (
                <details
                  key={qIdx}
                  className="group border border-gray-200 rounded-lg overflow-hidden hover:border-brand-300 transition-colors"
                >
                  <summary className="cursor-pointer px-6 py-4 font-semibold text-gray-900 hover:bg-gray-50 flex items-center justify-between bg-white">
                    <span>{faq.q}</span>
                    <span className="text-brand-700 group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-gray-700 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-brand-50 border-t border-gray-200 py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Didn't find the answer you were looking for?
          </h2>
          <p className="text-gray-700 text-center mb-8">
            Get in touch with one of our licensed rural advisers for personalised advice.
          </p>
          <QuoteForm />
        </div>
      </section>

      {/* FAQPage JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(faq => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
