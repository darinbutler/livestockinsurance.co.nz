import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerColumns = [
    {
      title: 'Coverage Types',
      links: [
        { label: 'Mortality Cover', href: '#' },
        { label: 'Disease & Illness', href: '#' },
        { label: 'Transit Insurance', href: '#' },
        { label: 'Farm Liability', href: '#' },
        { label: 'Natural Disaster', href: '#' },
        { label: 'Theft Cover', href: '#' },
      ],
    },
    {
      title: 'By Livestock',
      links: [
        { label: 'Cattle Insurance', href: '#' },
        { label: 'Sheep Insurance', href: '#' },
        { label: 'Deer Insurance', href: '#' },
        { label: 'Goat Insurance', href: '#' },
        { label: 'Pig Insurance', href: '#' },
        { label: 'Alpaca & Llama', href: '#' },
      ],
    },
    {
      title: 'Information',
      links: [
        { label: 'Compare Providers', href: '/compare/' },
        { label: 'Insurance Guides', href: '/blog/' },
        { label: 'FAQs', href: '#' },
        { label: 'About Us', href: '#' },
        { label: 'Contact', href: '/contact/' },
      ],
    },
    {
      title: 'Industry Bodies',
      links: [
        { label: 'Beef + Lamb NZ', href: 'https://beeflambnz.com' },
        { label: 'DairyNZ', href: 'https://dairynz.co.nz' },
        { label: 'Deer Industry NZ', href: 'https://deernz.org' },
        { label: 'Federated Farmers NZ', href: 'https://fedfarm.org.nz' },
        { label: 'NZ Pork', href: 'https://nzpork.co.nz' },
        { label: 'Financial Markets Authority', href: 'https://fma.govt.nz' },
      ],
    },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Section */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="mb-1 text-2xl font-bold">LivestockInsurance.co.nz</h2>
          <p className="text-sm font-semibold text-gray-300">
            NZ's Independent Livestock Insurance Comparison
          </p>
          <p className="mt-3 max-w-2xl text-sm text-gray-400">
            Compare livestock insurance cover from New Zealand's leading providers. Find the right insurance for your cattle, sheep, deer, goats, and other livestock at the best price.
          </p>
        </div>

        {/* Link Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors hover:text-[#0d7377]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclosure */}
        <div className="mt-10 border-t border-gray-800 pt-8">
          <p className="text-xs text-gray-500 leading-relaxed">
            LivestockInsurance.co.nz is a referral and lead generation service. We are not a
            licensed financial adviser, insurer, or insurance broker. The advisers we refer are
            licensed under the FMCA 2013 and regulated by the FMA. This service is free to
            farmers — advisers are compensated by insurers.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            © {currentYear} LivestockInsurance.co.nz
          </p>
          <div className="flex gap-6">
            <Link href="/privacy/" className="text-sm text-gray-500 hover:text-gray-400">
              Privacy
            </Link>
            <Link href="/terms/" className="text-sm text-gray-500 hover:text-gray-400">
              Terms
            </Link>
            <Link href="/disclaimer/" className="text-sm text-gray-500 hover:text-gray-400">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
