import type { Metadata } from "next";
import { siteConfig } from "@/data/config";
import QuoteForm from "@/components/QuoteForm";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: `Contact ${siteConfig.businessName} | Free Quote`,
  description: `Contact ${siteConfig.businessName} for water well drilling and pump service in ${siteConfig.city}, ${siteConfig.stateAbbr}. Free estimates. Call ${siteConfig.phone} or fill out our online form.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact ${siteConfig.businessName} | Free Quote`,
    description: `Contact ${siteConfig.businessName} for water well drilling and pump service in ${siteConfig.city}, ${siteConfig.stateAbbr}.`,
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  const { city, stateAbbr, phone, phoneRaw, businessName, address, zip, hours, license } =
    siteConfig;

  return (
    <>
      <Breadcrumbs items={[{ label: "Contact" }]} />

      {/* Page Header */}
      <section className="bg-navy text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-300 mb-6">
            Get a free quote for well drilling or pump service in {city},{" "}
            {stateAbbr}.
          </p>
          <a
            href={`tel:${phoneRaw}`}
            className="inline-block bg-accent hover:bg-accent-dark text-white text-xl md:text-2xl font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Call Now {phone}
          </a>
        </div>
      </section>

      <QuoteForm />

      {/* Contact Info */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-12">
            How to Reach Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-3xl mb-3">&#128222;</div>
              <h3 className="text-lg font-bold text-navy mb-2">Phone</h3>
              <a
                href={`tel:${phoneRaw}`}
                className="text-accent hover:text-accent-dark font-medium"
              >
                {phone}
              </a>
              <p className="text-gray-text text-sm mt-1">{hours}</p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl mb-3">&#128205;</div>
              <h3 className="text-lg font-bold text-navy mb-2">Location</h3>
              <p className="text-gray-700">{address}</p>
              <p className="text-gray-700">
                {city}, {stateAbbr} {zip}
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl mb-3">&#9201;</div>
              <h3 className="text-lg font-bold text-navy mb-2">Response Time</h3>
              <p className="text-gray-700">
                We respond to quote requests within 24 hours. Emergency pump
                calls are prioritized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-gray-bg py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
            What to Expect When You Call
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>1. Tell us about your project.</strong> Whether you need a
              new well drilled, a pump repaired, or just have questions about
              your water system, we&apos;ll listen and help you understand your
              options.
            </p>
            <p>
              <strong>2. We&apos;ll schedule a site visit.</strong> For new well
              drilling, we&apos;ll evaluate your property at no charge. For pump
              issues, we&apos;ll diagnose the problem and explain what&apos;s
              needed before any work begins.
            </p>
            <p>
              <strong>3. You get a written estimate.</strong> Clear pricing with
              no hidden fees. We don&apos;t start work until you approve the
              cost.
            </p>
            <p>
              <strong>4. We do the work.</strong> Licensed, insured, and done
              right. Licensed and insured.
            </p>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-8">
            Our Service Area
          </h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(city + ', ' + stateAbbr)}&z=10&output=embed`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${businessName} service area map`}
            />
          </div>
          <p className="text-center text-gray-text mt-4 text-sm">
            Serving {city} and surrounding communities including{" "}
            {siteConfig.suburbs.slice(0, 3).join(", ")}, and more.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-6">
            Call now or fill out the form above for a free quote.
          </p>
          <a
            href={`tel:${phoneRaw}`}
            className="inline-block bg-accent hover:bg-accent-dark text-white text-xl font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Call Now {phone}
          </a>
        </div>
      </section>
    </>
  );
}
