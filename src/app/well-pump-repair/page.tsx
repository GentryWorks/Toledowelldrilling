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
            Your well pump is what moves water from the ground into your home.
            When it stops working, everything stops — no showers, no laundry,
            no running toilets. We get to {city} area homeowners fast and get
            the water back on.
          </p>
          <p className="text-gray-700 mb-4">
            Pump failures happen most in winter and summer. Frozen lines and
            cold temperatures put extra stress on pumps during Toledo winters.
            Summer brings high water demand that pushes older systems past
            their limit. If your pump fails in February, you are not waiting
            days for help. We know NW Ohio winters and we prioritize
            emergency calls.
          </p>
          <p className="text-gray-700 mb-4">
            We work on all pump types — submersible pumps, jet pumps, and
            booster pumps. Simple fix or full replacement, our licensed
            technicians carry the parts and have the experience to get it done.
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
                Turn on the tap and nothing comes out. That is the clearest
                sign your pump has failed, the pressure switch is stuck, or
                there is an electrical problem. Call us right away.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-navy mb-2">
                Low or Fluctuating Pressure
              </h3>
              <p className="text-gray-700 text-sm">
                Pressure that drops when you run the shower or bounces up and
                down through the day usually means a failing pressure tank, a
                worn pump, or a waterlogged tank.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-navy mb-2">
                Pump Runs Continuously
              </h3>
              <p className="text-gray-700 text-sm">
                A pump that never shuts off is heading for early burnout.
                This usually points to a system leak, a bad pressure switch,
                or a failing check valve. Do not ignore it.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-navy mb-2">
                Sputtering or Air in Lines
              </h3>
              <p className="text-gray-700 text-sm">
                If air spits out of your faucets, the pump is pulling air
                instead of water. That can mean the water level dropped, there
                is a crack in the drop pipe, or the pump is failing.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-navy mb-2">
                Dirty or Sandy Water
              </h3>
              <p className="text-gray-700 text-sm">
                Rust-colored or gritty water can mean the pump slipped too
                low in the well, the well screen is broken, or the well needs
                work. NW Ohio groundwater naturally runs higher in iron, so
                brown water is worth checking right away.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-navy mb-2">
                High Electric Bills
              </h3>
              <p className="text-gray-700 text-sm">
                A pump that short-cycles or runs inefficiently drives up your
                electric bill. A properly sized, modern pump can cut energy
                use and pay for itself over time.
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
                Submersible pumps sit at the bottom of your well and are the
                most common type in {state}. When one fails, we pull it from
                the well, find the problem, and repair or replace it. Most
                last 8 to 15 years. Harder water with higher iron — common in
                NW Ohio — can shorten that lifespan, so we check pump
                condition during every service call.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Pressure Tank Replacement
              </h3>
              <p>
                The pressure tank keeps water pressure steady and stops the
                pump from kicking on every time you open a tap. When the tank
                gets waterlogged or fails, pressure swings and the pump wears
                out early. We replace tanks sized for your home so the whole
                system runs smoothly.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Constant Pressure Systems
              </h3>
              <p>
                Upgrade to a constant pressure system that uses a variable
                speed drive to adjust pump speed on the fly. The result: rock
                steady pressure no matter how many showers, faucets, or
                appliances are running at once. Many {city} homeowners upgrade
                to this system when they want the same smooth pressure they
                were used to with city water.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Pressure Switch &amp; Controls
              </h3>
              <p>
                A bad pressure switch or control box can make your pump act
                like it has failed when the real problem is cheap to fix. We
                test and replace faulty switches, control boxes, and wiring.
                These repairs are fast and cost much less than pulling and
                replacing a pump.
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
            Pump repair costs in the {city} area depend on what needs to be
            fixed. A pressure switch or wiring repair costs far less than
            pulling and replacing a submersible pump. We diagnose first and
            give you a written estimate before we touch anything. You know
            the cost before we start.
          </p>
          <p className="text-gray-700">
            No work starts until you approve it.{" "}
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
            We repair and install well pumps throughout {city}, {stateAbbr}
            and the surrounding areas including{" "}
            {suburbs.map((suburb, i) => (
              <span key={suburb}>
                {suburb}
                {i < suburbs.length - 1 ? ", " : ""}
              </span>
            ))}
            , and other nearby communities. If your pump is failing and you
            need fast service, call us now.
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
                Submersible well pumps typically last 8 to 15 years. How long
                yours lasts depends on water quality, how much water you use,
                and whether the pump was sized right for your well. NW Ohio
                groundwater often runs high in iron and hardness, which can
                wear on pump parts faster than softer water.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Can you repair my pump the same day?
              </h3>
              <p className="text-gray-700">
                We know you cannot go without water. We pick up emergency
                calls and move fast. Pressure switch, control box, and
                above-ground repairs often get done the same day. Pulling and
                replacing a submersible pump takes scheduling but we typically
                have it done within 24 to 48 hours.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Should I repair or replace my well pump?
              </h3>
              <p className="text-gray-700">
                If the pump is under 8 years old and the problem is electrical
                or mechanical, repair is almost always the right call. If it
                is 10 or more years old, has failed before, or the well water
                is high in iron or hardness that speeds up wear, a replacement
                gives you better long-term value.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                What is a constant pressure system?
              </h3>
              <p className="text-gray-700">
                A constant pressure system uses a variable speed drive to
                adjust pump speed in real time. The result is steady water
                pressure no matter how many showers, faucets, or appliances
                are running at once. It solves the pressure drop problem that
                is common with standard tank setups.
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
            Your family should not go without water. Call now and we will
            get to you fast.
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
