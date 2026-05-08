'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Coverage', href: '/types/' },
    { label: 'Livestock', href: '/livestock/' },
    { label: 'Compare', href: '/compare/' },
    { label: 'Guides', href: '/blog/' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <span className="text-2xl">🐄</span>
            <span className="text-[#0d7377]">LivestockInsurance.co.nz</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#0d7377]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            {/* CTA Button */}
            <Link
              href="/contact/"
              className="rounded-lg bg-[#0d7377] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#065f73]"
            >
              Get Quotes
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden flex-col gap-1.5"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`h-0.5 w-6 bg-gray-800 transition-transform ${
                mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-gray-800 transition-opacity ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-gray-800 transition-transform ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="flex flex-col gap-3 pb-4 pt-3 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#0d7377]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact/"
              className="mt-2 rounded-lg bg-[#0d7377] px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-[#065f73]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Quotes
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
