import Link from "next/link";
import { siteConfig } from "@/data/config";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              {siteConfig.businessName}
            </h3>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="text-accent text-lg font-bold hover:text-white transition-colors"
            >
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="block text-gray-400 text-sm mt-2 hover:text-white transition-colors"
            >
              {siteConfig.email}
            </a>
            <p className="text-gray-400 text-sm mt-2">{siteConfig.hours}</p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/water-well-drilling"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Water Well Drilling
                </Link>
              </li>
              <li>
                <Link
                  href="/well-pump-repair"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Well Pump Repair
                </Link>
              </li>
              <li>
                <Link
                  href="/well-inspection"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Well Inspection
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Service area */}
          <div>
            <h3 className="text-lg font-bold mb-4">Service Areas</h3>
            <ul className="space-y-1">
              <li className="text-gray-400 text-sm">
                {siteConfig.city}, {siteConfig.stateAbbr}
              </li>
              {siteConfig.suburbs.map((suburb) => (
                <li key={suburb} className="text-gray-400 text-sm">
                  {suburb}, {siteConfig.stateAbbr}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {siteConfig.businessName}. All
            rights reserved.
          </p>
          {siteConfig.license && (
            <p className="text-gray-600 text-xs mt-2">{siteConfig.license}</p>
          )}
        </div>
      </div>
    </footer>
  );
}
