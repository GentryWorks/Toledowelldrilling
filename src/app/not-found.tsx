import Link from "next/link";
import { siteConfig } from "@/data/config";

export default function NotFound() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-navy mb-4">404</h1>
        <h2 className="text-2xl font-bold text-navy mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-text mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist. Here
          are some helpful links:
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/"
            className="bg-accent hover:bg-accent-dark text-white font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
        <div className="text-left bg-gray-bg rounded-lg p-6">
          <h3 className="font-bold text-navy mb-3">Our Services</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/water-well-drilling"
                className="text-accent hover:text-accent-dark"
              >
                Water Well Drilling
              </Link>
            </li>
            <li>
              <Link
                href="/well-pump-repair"
                className="text-accent hover:text-accent-dark"
              >
                Well Pump Repair
              </Link>
            </li>
            <li>
              <Link
                href="/well-inspection"
                className="text-accent hover:text-accent-dark"
              >
                Well Inspection &amp; Water Testing
              </Link>
            </li>
          </ul>
          <p className="mt-4 text-gray-text text-sm">
            Or call us at{" "}
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="text-accent hover:text-accent-dark font-medium"
            >
              {siteConfig.phone}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
