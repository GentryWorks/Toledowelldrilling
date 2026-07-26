"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/config";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar — phone number */}
      <div className="bg-navy text-white text-center py-2 px-4">
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="text-lg md:text-xl font-bold tracking-wide hover:text-accent transition-colors"
        >
          Call Now {siteConfig.phone}
        </a>
        <span className="hidden md:inline text-sm ml-4 text-gray-300">
          | {siteConfig.hours}
        </span>
      </div>

      {/* Main nav */}
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="text-xl md:text-2xl font-bold text-navy">
          {siteConfig.businessName}
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-navy font-medium">
            Home
          </Link>
          <Link
            href="/water-well-drilling"
            className="text-gray-700 hover:text-navy font-medium"
          >
            Well Drilling
          </Link>
          <Link
            href="/well-pump-repair"
            className="text-gray-700 hover:text-navy font-medium"
          >
            Well Pump Repair
          </Link>
          <Link
            href="/well-inspection"
            className="text-gray-700 hover:text-navy font-medium"
          >
            Well Inspection
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-navy font-medium"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-dark text-white font-bold px-5 py-2 rounded transition-colors"
          >
            Free Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-navy"
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-border px-4 pb-4">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="block py-3 text-gray-700 font-medium border-b border-gray-100"
          >
            Home
          </Link>
          <Link
            href="/water-well-drilling"
            onClick={() => setMobileOpen(false)}
            className="block py-3 text-gray-700 font-medium border-b border-gray-100"
          >
            Well Drilling
          </Link>
          <Link
            href="/well-pump-repair"
            onClick={() => setMobileOpen(false)}
            className="block py-3 text-gray-700 font-medium border-b border-gray-100"
          >
            Well Pump Repair
          </Link>
          <Link
            href="/well-inspection"
            onClick={() => setMobileOpen(false)}
            className="block py-3 text-gray-700 font-medium border-b border-gray-100"
          >
            Well Inspection
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="block py-3 text-gray-700 font-medium border-b border-gray-100"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block py-3 mt-2 bg-accent text-white text-center font-bold rounded"
          >
            Free Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
