import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '../../../data/blog-posts';
import QuoteForm from '../../../components/QuoteForm';

export function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | LivestockInsurance.co.nz`,
    description: post.excerpt,
    alternates: { canonical: `https://livestockinsurance.co.nz/blog/${post.slug}/` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, width: 1200, height: 630 }],
      type: 'article',
      publishedTime: post.date,
      locale: 'en_NZ',
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter(
    p => p.category === post.category && p.slug !== post.slug
  ).slice(0, 3);

  const publishedDate = new Date(post.date);
  const formattedDate = publishedDate.toLocaleDateString('en-NZ', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <main>
      <style>{`
        .article-body p {
          margin-bottom: 1rem;
          line-height: 1.75;
          color: #374151;
        }
        .article-body h2 {
          font-size: 1.875rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #111827;
        }
        .article-body h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: #1f2937;
        }
        .article-body ul, .article-body ol {
          margin-bottom: 1rem;
          padding-left: 1.5rem;
          color: #374151;
          line-height: 1.75;
        }
        .article-body li {
          margin-bottom: 0.5rem;
        }
      `}</style>

      {/* Header */}
      <section className="bg-brand-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog/" className="text-brand-100 hover:text-white transition-colors mb-4 inline-flex items-center">
            ← All Guides
          </Link>
          <span className="inline-block mb-4 text-sm font-semibold text-brand-200 bg-brand-800 px-3 py-1 rounded-full">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-brand-100 text-sm">
            <div>
              <p className="font-semibold">James Henderson, Senior Rural Insurance Adviser</p>
            </div>
            <div className="mt-3 sm:mt-0 flex items-center gap-4">
              <span>{formattedDate}</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Article */}
          <article className="lg:col-span-2">
            {/* Feature Image */}
            <div className="mb-8 rounded-lg overflow-hidden h-96 bg-gray-100">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Lead Excerpt */}
            <div className="mb-8 p-6 bg-brand-50 border-l-4 border-brand-700 rounded">
              <p className="text-lg font-semibold text-gray-900">{post.excerpt}</p>
            </div>

            {/* Body */}
            <div className="article-body prose prose-sm max-w-none">
              {post.body.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Quote Form */}
            <div className="mb-8 sticky top-4">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Get Expert Advice</h3>
                <QuoteForm variant="compact" />
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h3>
                <ul className="space-y-4">
                  {relatedPosts.map((relPost) => (
                    <li key={relPost.slug}>
                      <Link
                        href={`/blog/${relPost.slug}/`}
                        className="text-brand-700 hover:text-brand-900 font-semibold text-sm block hover:underline"
                      >
                        {relPost.title}
                      </Link>
                      <p className="text-xs text-gray-500 mt-1">{relPost.category}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Browse All */}
            <div>
              <Link
                href="/blog/"
                className="block w-full text-center py-3 bg-brand-700 text-white rounded-lg font-semibold hover:bg-brand-800 transition-colors"
              >
                Browse all guides
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* JSON-LD BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            image: post.image,
            datePublished: post.date,
            dateModified: post.date,
            author: {
              '@type': 'Organization',
              name: 'LivestockInsurance.co.nz',
              '@id': 'https://livestockinsurance.co.nz',
            },
            publisher: {
              '@type': 'Organization',
              name: 'LivestockInsurance.co.nz',
              logo: {
                '@type': 'ImageObject',
                url: 'https://livestockinsurance.co.nz/logo.png',
              },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://livestockinsurance.co.nz/blog/${post.slug}/`,
            },
            articleSection: post.category,
            inLanguage: 'en-NZ',
          }),
        }}
      />
    </main>
  );
}
