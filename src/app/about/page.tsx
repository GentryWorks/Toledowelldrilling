import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: `About ${siteConfig.businessName} | ${siteConfig.city} Well Drilling`,
  description: `${siteConfig.businessName} provides professional water well drilling and pump services in ${siteConfig.city}, ${siteConfig.stateAbbr}. Licensed, insured, and serving the community for ${siteConfig.yearsInBusiness}+ years.`,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About ${siteConfig.businessName}`,
    description: `${siteConfig.businessName} provides professional water well drilling and pump services in ${siteConfig.city}, ${siteConfig.stateAbbr}.`,
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  const {
    city,
    stateAbbr,
    state,
    phone,
    phoneRaw,
    businessName,
    suburbs,
    license,
    yearsInBusiness,
  } = siteConfig;

  return (
    <>
      <Breadcrumbs items={[{ label: "About Us" }]} />

      {/* Hero with team photo */}
      <section className="relative text-white py-10 md:py-16 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/about-team.webp')" }}
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            About {businessName}
          </h1>
          <p className="text-lg text-gray-300">
            {city}&apos;s trusted well drilling and pump service company.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
            {city}&apos;s Well Drilling Professionals
          </h2>
          <p className="text-gray-700 mb-4">
            {businessName} has been providing water well drilling and pump
            services to {city}, {stateAbbr} and surrounding communities for
            over {yearsInBusiness} years. We are a locally owned and operated
            company built on honest work, fair pricing, and standing behind
            every well we drill.
          </p>
          <p className="text-gray-700 mb-4">
            Our team is fully licensed and insured to perform well
            drilling, pump installation, and water system service throughout{" "}
            {state}. We handle everything from new well construction for rural
            homebuilders to emergency pump replacements for families who
            can&apos;t go a day without water.
          </p>
          <p className="text-gray-700">
            We believe in doing the job right the first time. That means using
            quality materials, following {stateAbbr} well construction
            standards, and making sure every customer understands exactly what
            we&apos;re doing and why before any work begins.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-gray-bg py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/water-well-drilling"
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              <h3 className="text-lg font-bold text-navy mb-2">
                Water Well Drilling
              </h3>
              <p className="text-gray-700 text-sm">
                New residential and commercial well construction, site
                evaluation, permitting, and complete well system installation.
              </p>
            </Link>
            <Link
              href="/well-pump-repair"
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              <h3 className="text-lg font-bold text-navy mb-2">
                Well Pump Service
              </h3>
              <p className="text-gray-700 text-sm">
                Pump repair, replacement, pressure tank service, and constant
                pressure system installation for all pump types.
              </p>
            </Link>
            <Link
              href="/well-inspection"
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              <h3 className="text-lg font-bold text-navy mb-2">
                Well Inspection
              </h3>
              <p className="text-gray-700 text-sm">
                Annual well inspections, flow rate testing, water level
                measurement, and real estate well certifications.
              </p>
            </Link>
            <Link
              href="/well-inspection"
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              <h3 className="text-lg font-bold text-navy mb-2">
                Water Testing
              </h3>
              <p className="text-gray-700 text-sm">
                Bacteria, mineral, and contaminant testing for new wells, annual
                checkups, and real estate transactions.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8">
            Why {city} Homeowners Choose Us
          </h2>
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Licensed &amp; Insured
              </h3>
              <p>
                We carry full liability insurance and workers&apos; compensation
                coverage. Our {stateAbbr} well drilling license means every well
                we construct meets state code requirements.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Transparent Pricing
              </h3>
              <p>
                We provide detailed written estimates before work begins. Our
                quotes include all labor, materials, permits, and testing. No
                hidden fees, no surprise charges, no pressure to decide on the
                spot.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Local Knowledge
              </h3>
              <p>
                After {yearsInBusiness}+ years of drilling in the {city} area,
                we know the local geology, water table depths, and soil
                conditions. This experience helps us drill more efficiently and
                avoid surprises.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Emergency Service
              </h3>
              <p>
                We know that a failed well pump means no water for your family.
                We prioritize emergency calls and work to restore your water as
                quickly as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-gray-bg py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
            Areas We Serve
          </h2>
          <p className="text-gray-700 mb-4">
            {businessName} provides well drilling and pump services across{" "}
            {city}, {stateAbbr} and the surrounding communities including{" "}
            {suburbs.map((suburb, i) => (
              <span key={suburb}>
                {suburb}
                {i < suburbs.length - 1 ? ", " : ""}
              </span>
            ))}
            , and other nearby areas.
          </p>
          <p className="text-gray-700">
            Don&apos;t see your area listed?{" "}
            <Link href="/contact" className="text-accent hover:text-accent-dark">
              Contact us
            </Link>{" "}
            — we may still be able to help.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-300 mb-6">
            Call us today for a free estimate or to schedule service.
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
