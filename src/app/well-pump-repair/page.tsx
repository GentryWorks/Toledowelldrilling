import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import Hero from "@/components/Hero";
import QuoteForm from "@/components/QuoteForm";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: `Well Pump Repair ${siteConfig.city}, ${siteConfig.stateAbbr}`,
  description: `Well pump repair and installation in ${siteConfig.city}, ${siteConfig.stateAbbr}. Submersible pumps, jet pumps, pressure tanks, and constant pressure systems. Fast service. Call ${siteConfig.phone}.`,
  alternates: { canonical: "/well-pump-repair" },
  openGraph: {
    title: `Well Pump Repair ${siteConfig.city}, ${siteConfig.stateAbbr}`,
    description: `Well pump repair and installation in ${siteConfig.city}, ${siteConfig.stateAbbr}. Fast service.`,
    url: `${siteConfig.url}/well-pump-repair`,
  },
};

export default function WellPumpRepairPage() {
  const { city, stateAbbr, state, phone, phoneRaw, businessName, suburbs } =
    siteConfig;

  return (
    <>
      <Breadcrumbs items={[{ label: "Well Pump Repair" }]} />

      <Hero
        title={`Well Pump Repair in ${city}, ${stateAbbr}`}
        subtitle={`Fast, reliable well pump repair and installation. We restore your water supply and keep it running.`}
      />

      <QuoteForm />

      {/* What Is Well Pump Repair */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
            Well Pump Repair &amp; Installation in {city}
          </h2>
          <p className="text-gray-700 mb-4">
            Your well pump is the heart of your water system. When it fails, your
            entire household loses water — no showers, no laundry, no flushing
            toilets. At {businessName}, we diagnose and repair well pump
            problems fast so {city} homeowners aren&apos;t left without water
            longer than necessary.
          </p>
          <p className="text-gray-700 mb-4">
            We service all types of well pumps including submersible pumps, jet
            pumps, and booster pumps. Whether your pump needs a simple repair or
            a full replacement, our licensed technicians have the equipment and
            experience to get the job done right.
          </p>
          <p className="text-gray-700">
            We also install new pump systems for{" "}
            <Link
              href="/water-well-drilling"
              className="text-accent hover:text-accent-dark"
            >
              newly drilled wells
            </Link>{" "}
            and upgrade aging systems to modern constant-pressure technology.
          </p>
        </div>
      </section>

      {/* Signs You Need Repair */}
      <section className="bg-gray-bg py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
            Signs Your Well Pump Needs Repair
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-navy mb-2">No Water at All</h3>
              <p className="text-gray-700 text-sm">
                The most obvious sign. If you turn on a faucet and nothing comes
                out, the pump may have failed, the pressure switch may be stuck,
                or there could be an electrical issue.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-navy mb-2">
                Low or Fluctuating Pressure
              </h3>
              <p className="text-gray-700 text-sm">
                Water pressure that drops during use or varies throughout the
                day often indicates a failing pressure tank, a worn pump, or a
                waterlogged tank.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-navy mb-2">
                Pump Runs Continuously
              </h3>
              <p className="text-gray-700 text-sm">
                A pump that never shuts off is working overtime and will burn
                out. This usually means a leak in the system, a bad pressure
                switch, or a failing check valve.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-navy mb-2">
                Sputtering or Air in Lines
              </h3>
              <p className="text-gray-700 text-sm">
                Air bursts from your faucets indicate the pump is drawing air,
                which can mean a drop in water level, a crack in the drop pipe,
                or a failing pump.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-navy mb-2">
                Dirty or Sandy Water
              </h3>
              <p className="text-gray-700 text-sm">
                Sediment in your water can mean the pump has dropped too low in
                the well, the well screen is damaged, or the well itself needs
                rehabilitation.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-navy mb-2">
                High Electric Bills
              </h3>
              <p className="text-gray-700 text-sm">
                A pump that cycles too frequently or runs inefficiently drives
                up electricity costs. A properly sized, modern pump can
                significantly reduce energy usage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Provide */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8">
            Our Well Pump Services
          </h2>
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Submersible Pump Repair &amp; Replacement
              </h3>
              <p>
                Submersible pumps sit deep inside your well and are the most
                common type in {state}. When they fail, we pull the pump from the
                well, diagnose the issue, and either repair or replace it.
                Typical lifespan is 8 to 15 years depending on water conditions
                and usage.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Pressure Tank Replacement
              </h3>
              <p>
                Your pressure tank maintains consistent water pressure and
                prevents the pump from cycling on and off with every faucet use.
                A waterlogged or failed tank causes pressure fluctuations and
                premature pump wear. We install properly sized tanks to match
                your household demand.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Constant Pressure Systems
              </h3>
              <p>
                Upgrade from a standard pressure tank system to a variable
                frequency drive (VFD) constant pressure system. These
                automatically adjust pump speed to maintain steady pressure
                regardless of how many fixtures are running. Popular with {city}{" "}
                homeowners who want city-water-like pressure from their well.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Pressure Switch &amp; Controls
              </h3>
              <p>
                We diagnose and replace faulty pressure switches, control boxes,
                and wiring. These electrical components are often the cause of
                pump problems and are faster and less expensive to fix than the
                pump itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Section */}
      <section className="bg-gray-bg py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
            Well Pump Repair Cost in {city}
          </h2>
          <p className="text-gray-700 mb-4">
            Well pump repair costs in the {city} area vary depending on the
            type of repair needed. Simple fixes like a pressure switch or
            wiring repair cost less than a full submersible pump replacement,
            which involves pulling the pump from deep in the well. We
            diagnose the problem first and give you a clear written estimate
            so you know exactly what to expect.
          </p>
          <p className="text-gray-700">
            We provide a clear diagnosis and written estimate before any work
            begins. No work starts until you approve the cost.{" "}
            <strong>
              Call{" "}
              <a
                href={`tel:${phoneRaw}`}
                className="text-accent hover:text-accent-dark"
              >
                {phone}
              </a>{" "}
              for a free evaluation.
            </strong>
          </p>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
            Well Pump Service Areas
          </h2>
          <p className="text-gray-700">
            We repair and install well pumps across {city}, {stateAbbr} and
            the surrounding areas including{" "}
            {suburbs.map((suburb, i) => (
              <span key={suburb}>
                {suburb}
                {i < suburbs.length - 1 ? ", " : ""}
              </span>
            ))}
            , and other nearby communities. If your well pump is failing and
            you need fast service, give us a call.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-bg py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                How long do well pumps last?
              </h3>
              <p className="text-gray-700">
                Submersible well pumps typically last 8 to 15 years. Lifespan
                depends on water quality, usage patterns, and whether the pump
                was properly sized for your well. High sediment or mineral
                content can shorten pump life.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Can you repair my pump the same day?
              </h3>
              <p className="text-gray-700">
                We prioritize emergency calls because we know you can&apos;t go
                without water. Many repairs — especially pressure switches,
                controls, and above-ground components — can be completed the same
                day. Submersible pump pulls require scheduling but are typically
                completed within 24 to 48 hours.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Should I repair or replace my well pump?
              </h3>
              <p className="text-gray-700">
                If your pump is under 8 years old and the issue is electrical or
                mechanical, repair is usually the better option. If the pump is
                10+ years old, has failed before, or the well has water quality
                issues that accelerate wear, replacement provides better
                long-term value.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                What is a constant pressure system?
              </h3>
              <p className="text-gray-700">
                A constant pressure system uses a variable frequency drive (VFD)
                to adjust your pump&apos;s speed in real time, maintaining
                steady water pressure no matter how many faucets, showers, or
                appliances are running. It eliminates the pressure drops common
                with standard tank systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Well Pump Problems in {city}?
          </h2>
          <p className="text-gray-300 mb-6">
            Don&apos;t go without water. Call now for fast, reliable pump
            service.
          </p>
          <a
            href={`tel:${phoneRaw}`}
            className="inline-block bg-accent hover:bg-accent-dark text-white text-xl font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Call Now {phone}
          </a>
        </div>
      </section>

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Well Pump Repair in ${city}, ${stateAbbr}`,
            provider: {
              "@type": "LocalBusiness",
              name: businessName,
              url: siteConfig.url,
            },
            areaServed: {
              "@type": "City",
              name: `${city}, ${stateAbbr}`,
            },
            description: `Well pump repair, installation, and replacement in ${city}, ${stateAbbr}. Submersible pumps, pressure tanks, and constant pressure systems.`,
            serviceType: "Well Pump Repair",
          }),
        }}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How long do well pumps last?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Submersible well pumps typically last 8 to 15 years depending on water quality, usage patterns, and proper sizing.",
                },
              },
              {
                "@type": "Question",
                name: "Can you repair my pump the same day?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Many repairs can be completed the same day. Submersible pump pulls are typically completed within 24 to 48 hours.",
                },
              },
              {
                "@type": "Question",
                name: "Should I repair or replace my well pump?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "If your pump is under 8 years old, repair is usually better. If 10+ years old or has failed before, replacement provides better long-term value.",
                },
              },
              {
                "@type": "Question",
                name: "What is a constant pressure system?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A constant pressure system uses a variable frequency drive to adjust pump speed in real time, maintaining steady pressure regardless of demand.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
