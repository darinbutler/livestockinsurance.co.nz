'use client'

import Link from 'next/link'
import Image from 'next/image'
import QuoteForm from '../components/QuoteForm'

// Import data - adjust paths if needed
// import coverageTypes from '../data/coverage-types'
// import livestockTypes from '../data/livestock-types'

// Placeholder data - replace with actual data imports
const coverageTypes = [
  {
    id: 'death-loss',
    name: 'Death & Loss',
    slug: 'death-loss',
    icon: '🐄',
    shortDesc: 'Cover for accidental death or loss of livestock',
    fromPrice: '$12/month'
  },
  {
    id: 'theft',
    name: 'Theft Protection',
    slug: 'theft',
    icon: '🔒',
    shortDesc: 'Protection against livestock theft',
    fromPrice: '$8/month'
  },
  {
    id: 'disease',
    name: 'Disease Coverage',
    slug: 'disease',
    icon: '⚕️',
    shortDesc: 'Coverage for notifiable livestock diseases',
    fromPrice: '$15/month'
  },
  {
    id: 'transport',
    name: 'Transport Protection',
    slug: 'transport',
    icon: '🚚',
    shortDesc: 'Cover while livestock in transit',
    fromPrice: '$10/month'
  },
  {
    id: 'breeding-loss',
    name: 'Breeding Stock Loss',
    slug: 'breeding-loss',
    icon: '🌱',
    shortDesc: 'Special coverage for breeding animals',
    fromPrice: '$18/month'
  },
  {
    id: 'welfare',
    name: 'Welfare & Care',
    slug: 'welfare',
    icon: '💚',
    shortDesc: 'Coverage for emergency care and welfare',
    fromPrice: '$9/month'
  }
]

const livestockTypes = [
  {
    id: 'cattle',
    name: 'Cattle',
    slug: 'cattle',
    icon: '🐄',
    shortDesc: 'Beef and dairy cattle insurance'
  },
  {
    id: 'sheep',
    name: 'Sheep',
    slug: 'sheep',
    icon: '🐑',
    shortDesc: 'Wool and meat sheep coverage'
  },
  {
    id: 'deer',
    name: 'Deer',
    slug: 'deer',
    icon: '🦌',
    shortDesc: 'Venison and deer farm insurance'
  },
  {
    id: 'pigs',
    name: 'Pigs',
    slug: 'pigs',
    icon: '🐷',
    shortDesc: 'Pig farming insurance'
  },
  {
    id: 'poultry',
    name: 'Poultry',
    slug: 'poultry',
    icon: '🐓',
    shortDesc: 'Chicken, turkey & bird coverage'
  },
  {
    id: 'horses',
    name: 'Horses',
    slug: 'horses',
    icon: '🐴',
    shortDesc: 'Equine and horse insurance'
  },
  {
    id: 'alpacas',
    name: 'Alpacas',
    slug: 'alpacas',
    icon: '🦙',
    shortDesc: 'Alpaca and camelid coverage'
  },
  {
    id: 'exotic',
    name: 'Exotic Livestock',
    slug: 'exotic',
    icon: '🦬',
    shortDesc: 'Specialist exotic animal insurance'
  }
]

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(5,25,25,0.65) 0%, rgba(13,115,119,0.45) 55%, rgba(5,25,25,0.72) 100%), url('https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1600&auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 sm:py-32">
          <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 rounded-full bg-teal-900/30 border border-teal-700/50 backdrop-blur-sm">
            <span className="text-2xl">🐄</span>
            <p className="text-teal-100 text-sm font-medium">NZ's Independent Livestock Insurance Specialists</p>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Protect Your Livestock. Protect Your Farm.
          </h1>

          <p className="text-lg sm:text-xl text-teal-50 mb-10 max-w-3xl mx-auto leading-relaxed">
            NZ farmers lose <strong>$150 million annually</strong> from unexpected livestock deaths. Our licensed rural advisers compare FMG, Aon, Gallagher, and NZI to find the right cover for your cattle, sheep, deer, and all farm animals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#quote"
              className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Free Quotes <span className="ml-2">→</span>
            </a>
            <Link
              href="/compare"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-lg border border-white/30 transition-all duration-300 backdrop-blur-sm"
            >
              Compare Providers
            </Link>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="w-full bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            <div className="text-center border-r border-gray-200 last:border-r-0">
              <p className="text-4xl sm:text-5xl font-bold text-teal-700 mb-2">$150M+</p>
              <p className="text-gray-600 text-sm sm:text-base">Lost to livestock deaths annually</p>
            </div>
            <div className="text-center border-r border-gray-200 last:border-r-0">
              <p className="text-4xl sm:text-5xl font-bold text-teal-700 mb-2">25,000</p>
              <p className="text-gray-600 text-sm sm:text-base">Sheep lost in Cyclone Gabrielle alone</p>
            </div>
            <div className="text-center border-r border-gray-200 last:border-r-0">
              <p className="text-4xl sm:text-5xl font-bold text-teal-700 mb-2">6</p>
              <p className="text-gray-600 text-sm sm:text-base">Coverage types compared</p>
            </div>
            <div className="text-center">
              <p className="text-4xl sm:text-5xl font-bold text-teal-700 mb-2">24hrs</p>
              <p className="text-gray-600 text-sm sm:text-base">Response from licensed advisers</p>
            </div>
          </div>
        </div>
      </section>

      {/* COVERAGE TYPES SECTION */}
      <section
        className="relative w-full py-16 sm:py-20 lg:py-24"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(5,25,25,0.78) 0%, rgba(13,115,119,0.60) 55%, rgba(5,25,25,0.82) 100%), url('https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1600&auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">All Coverage Types</h2>
            <p className="text-teal-100 text-lg max-w-2xl mx-auto">
              Choose the right combination of coverage for your farming operation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {coverageTypes.map((type) => (
              <Link key={type.id} href={`/types/${type.slug}`}>
                <div className="h-full p-6 rounded-xl bg-white/95 backdrop-blur-md hover:bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-white/20">
                  <div className="text-5xl mb-4">{type.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{type.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{type.shortDesc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-teal-600 font-semibold">{type.fromPrice}</span>
                    <span className="text-teal-600 text-sm">Learn more →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/types"
              className="inline-flex items-center text-white font-semibold text-lg hover:text-teal-100 transition-colors"
            >
              View all coverage types <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* LIVESTOCK TYPES SECTION */}
      <section
        className="relative w-full py-16 sm:py-20 lg:py-24"
        style={{
          backgroundImage: `rgba(248,250,252,0.92), url('https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1600&auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'lighten',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Insurance for Every Animal on Your Farm</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Specialized coverage tailored to your specific livestock and farming needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {livestockTypes.map((type) => (
              <Link key={type.id} href={`/livestock/${type.slug}`}>
                <div className="h-full p-6 rounded-xl bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-gray-200">
                  <div className="text-5xl mb-4">{type.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{type.name}</h3>
                  <p className="text-gray-600 text-sm">{type.shortDesc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 text-lg">Three simple steps to the right livestock insurance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-teal-100 text-teal-700 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tell Us About Your Livestock</h3>
              <p className="text-gray-600">
                Complete our quick 2-minute form with details about your animals, farm, and insurance needs
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-teal-100 text-teal-700 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">We Compare the Market</h3>
              <p className="text-gray-600">
                Our licensed rural advisers compare FMG, Aon, Gallagher, NZI and more to find the best fit
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-teal-100 text-teal-700 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get Personalised Quotes</h3>
              <p className="text-gray-600">
                Receive detailed quotes from multiple providers within 24 hours with expert recommendations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARE PROVIDERS SECTION */}
      <section className="w-full bg-gray-900 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">The Providers We Compare</h2>
            <p className="text-gray-300 text-lg">Understanding NZ's livestock insurance landscape</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">FMG</h3>
              <ul className="space-y-2 text-gray-300 text-sm mb-4">
                <li>NZ Rural Specialist</li>
                <li>~70% market share</li>
                <li>Comprehensive farm packs</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">Aon</h3>
              <ul className="space-y-2 text-gray-300 text-sm mb-4">
                <li>Global Broker</li>
                <li>~15% market share</li>
                <li>Strong online platform</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">Gallagher</h3>
              <ul className="space-y-2 text-gray-300 text-sm mb-4">
                <li>~8% market share</li>
                <li>Specialist breeds</li>
                <li>Exotic livestock experts</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">NZI</h3>
              <ul className="space-y-2 text-gray-300 text-sm mb-4">
                <li>~7% market share</li>
                <li>Competitive pricing</li>
                <li>Established operators</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/compare"
              className="inline-flex items-center px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              See Full Comparison <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* QUOTE FORM SECTION */}
      <section id="quote" className="w-full bg-brand-50 py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Get Your Free Quotes Today</h2>
            <p className="text-gray-600 text-lg">
              Our licensed advisers will compare quotes from multiple providers and contact you within 24 hours
            </p>
          </div>
          <QuoteForm variant="full" />
        </div>
      </section>

      {/* FOOTER CTA SECTION */}
      <section className="w-full bg-gradient-to-r from-teal-700 to-teal-800 py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Talk to a Licensed Rural Adviser Today</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            Get expert advice, compare quotes, and protect your livestock investment with New Zealand's independent comparison service
          </p>
          <a
            href="#quote"
            className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-100 text-teal-700 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Request Your Free Quotes <span className="ml-2">→</span>
          </a>
        </div>
      </section>
    </>
  )
}
