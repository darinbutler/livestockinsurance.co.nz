import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: "Livestock Insurance NZ | Compare FMG, Aon & More | LivestockInsurance.co.nz",
    template: '%s | LivestockInsurance.co.nz',
  },
  description: "Compare livestock insurance from FMG, Aon, Gallagher, and NZI. Free expert advice from licensed rural advisers for cattle, sheep, deer, and all farm animals.",
  metadataBase: new URL('https://livestockinsurance.co.nz'),
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://livestockinsurance.co.nz',
    siteName: 'LivestockInsurance.co.nz',
    title: "Livestock Insurance NZ | Compare FMG, Aon, Gallagher & NZI",
    description: "NZ's independent livestock insurance comparison. Free expert advice from licensed rural advisers.",
    images: [{ url: '/images/livestock-hero.jpg', width: 1200, height: 630, alt: 'Livestock Insurance NZ' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Livestock Insurance NZ",
    description: "Compare livestock insurance from major NZ rural insurers.",
    images: ['/images/livestock-hero.jpg']
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: 'https://livestockinsurance.co.nz'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://livestockinsurance.co.nz/#organization',
    name: 'LivestockInsurance.co.nz',
    url: 'https://livestockinsurance.co.nz',
    description: "NZ's independent livestock insurance comparison service connecting farmers with licensed rural advisers.",
    areaServed: {
      '@type': 'Country',
      name: 'New Zealand',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@cover4you.co.nz',
      contactType: 'Customer Service',
      areaServed: 'NZ',
    },
    knowsAbout: [
      'Cattle Insurance',
      'Sheep Insurance',
      'Deer Insurance',
      'Pig Insurance',
      'Poultry Insurance',
      'Horse Insurance',
      'Alpaca Insurance',
      'Exotic Livestock Insurance',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://livestockinsurance.co.nz/#website',
    url: 'https://livestockinsurance.co.nz',
    name: 'LivestockInsurance.co.nz',
    description: "NZ's independent livestock insurance comparison service",
    publisher: {
      '@id': 'https://livestockinsurance.co.nz/#organization',
    },
    inLanguage: 'en-NZ',
  }

  return (
    <html lang="en-NZ">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-white text-gray-900">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
