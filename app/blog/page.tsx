import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '../../data/blog-posts';

export const metadata: Metadata = {
  title: 'Livestock Insurance Guides & Articles | LivestockInsurance.co.nz',
  description: 'Expert guides on livestock insurance in NZ — covering cattle, sheep, deer, disease risks, natural disasters, and how to compare providers.',
  openGraph: {
    title: 'Livestock Insurance Guides & Articles | LivestockInsurance.co.nz',
    description: 'Expert guides on livestock insurance in NZ — covering cattle, sheep, deer, disease risks, natural disasters, and how to compare providers.',
    type: 'website',
    locale: 'en_NZ',
  },
};

export default function BlogIndex() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-brand-900 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Livestock Insurance Guides</h1>
          <p className="text-lg text-brand-100">
            Expert advice on cattle, sheep, deer, and other livestock coverage. Learn how to compare providers and choose the right policy for your farm.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6">
                {/* Category Badge */}
                <span className="inline-block mb-3 text-xs font-semibold text-brand-700 bg-brand-50 px-3 py-1 rounded-full w-fit">
                  {post.category}
                </span>

                {/* Title */}
                <h2 className="text-xl font-bold mb-2 text-gray-900 line-clamp-2">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>{new Date(post.date).toLocaleDateString('en-NZ', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Link */}
                <Link
                  href={`/blog/${post.slug}/`}
                  className="text-brand-700 font-semibold inline-flex items-center hover:text-brand-900 transition-colors"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
