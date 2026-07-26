import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import Hero from "@/components/Hero";
import QuoteForm from "@/components/QuoteForm";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: `Well Inspection & Water Testing ${siteConfig.city}, ${siteConfig.stateAbbr}`,
  description: `Well inspection and water testing in ${siteConfig.city}, ${siteConfig.stateAbbr}. Annual well checkups, bacteria testing, mineral analysis, and real estate well certifications. Call ${siteConfig.phone}.`,
  alternates: { canonical: "/well-inspection" },
  openGraph: {
    title: `Well Inspection & Water Testing ${siteConfig.city}, ${siteConfig.stateAbbr}`,
    description: `Well inspection and water testing in ${siteConfig.city}, ${siteConfig.stateAbbr}. Annual checkups, bacteria testing, and real estate certifications.`,
    url: `${siteConfig.url}/well-inspection`,
  },
};

export default function WellInspectionPage() {
  const { city, stateAbbr, state, phone, phoneRaw, businessName, suburbs } =
    siteConfig;

  return (
    <>
      <Breadcrumbs items={[{ label: "Well Inspection" }]} />

      <Hero
        title={`Well Inspection & Water Testing in ${city}, ${stateAbbr}`}
        subtitle={`Protect your family's water supply with professional well inspections and water quality testing.`}
      />

      <QuoteForm />

      {/* What Is a Well Inspection */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
            Well Inspection &amp; Water Testing in {city}
          </h2>
          <p className="text-gray-700 mb-4">
            A well inspection is a comprehensive checkup of your entire water
            well system — from the well cap at the surface to the pump sitting
            hundreds of feet underground. At {businessName}, we inspect every
            component to make sure your well is delivering safe, clean water at
            the flow rate and pressure your household needs.
          </p>
          <p className="text-gray-700 mb-4">
            Water testing goes hand in hand with inspections. Even if your well
            looks fine on the outside, the water itself can contain bacteria,
            minerals, or contaminants that are invisible to the eye. The EPA
            recommends private well owners test their water at least once per
            year, and more often if you notice changes in taste, odor, or
            appearance.
          </p>
          <p className="text-gray-700">
            Whether you need an annual checkup, a real estate well
            certification, or you&apos;ve noticed something off with your water,
            {businessName} provides thorough inspections and lab-grade water
            testing for {city} homeowners.
          </p>
        </div>
      </section>

      {/* When Do You Need */}
      <section className="bg-gray-bg py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
            When Do You Need a Well Inspection?
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Annual maintenance:</strong> The National Ground Water
              Association recommends having your well inspected at least once per
              year. Annual inspections catch small problems — like a cracked well
              cap or a slow decline in flow rate — before they become expensive
              emergencies.
            </p>
            <p>
              <strong>Buying or selling a home:</strong> Most lenders and many
              buyers in the {city} area require a well inspection and water test
              before closing. We provide certified inspection reports that
              satisfy real estate transaction requirements in {stateAbbr}.
            </p>
            <p>
              <strong>Changes in water quality:</strong> If your water suddenly
              tastes different, smells like rotten eggs, appears cloudy or
              discolored, or leaves stains on fixtures, those are signs that
              something has changed in your well or aquifer. An inspection and
              water test will identify the cause.
            </p>
            <p>
              <strong>After flooding or severe weather:</strong> Heavy rain,
              flooding, or nearby construction can introduce surface water
              contamination into your well. A post-event inspection and bacteria
              test ensures your water is still safe.
            </p>
            <p>
              <strong>New property with an existing well:</strong> If you&apos;ve
              moved to a property with a well you didn&apos;t drill, an
              inspection tells you the condition of the system and whether any
              repairs or upgrades are needed.
            </p>
          </div>
        </div>
      </section>

      {/* What We Inspect */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8">
            What We Inspect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-bg rounded-lg p-6">
              <h3 className="font-bold text-navy mb-2">
                Well Cap &amp; Seal
              </h3>
              <p className="text-gray-700 text-sm">
                We check that the well cap is secure, the sanitary seal is
                intact, and no insects, rodents, or surface water can enter
                the well casing.
              </p>
            </div>
            <div className="bg-gray-bg rounded-lg p-6">
              <h3 className="font-bold text-navy mb-2">Well Casing</h3>
              <p className="text-gray-700 text-sm">
                We inspect visible casing for cracks, corrosion, or damage.
                Compromised casing can allow contaminants to seep into your
                water supply.
              </p>
            </div>
            <div className="bg-gray-bg rounded-lg p-6">
              <h3 className="font-bold text-navy mb-2">
                Flow Rate &amp; Yield
              </h3>
              <p className="text-gray-700 text-sm">
                We measure your well&apos;s output in gallons per minute to
                ensure it meets your household demand. A declining flow rate
                can signal a{" "}
                <Link
                  href="/well-pump-repair"
                  className="text-accent hover:text-accent-dark"
                >
                  pump issue
                </Link>{" "}
                or a dropping water table.
              </p>
            </div>
            <div className="bg-gray-bg rounded-lg p-6">
              <h3 className="font-bold text-navy mb-2">
                Pump &amp; Pressure System
              </h3>
              <p className="text-gray-700 text-sm">
                We test pump performance, check the pressure tank for proper
                charge, verify pressure switch settings, and inspect electrical
                connections for safety.
              </p>
            </div>
            <div className="bg-gray-bg rounded-lg p-6">
              <h3 className="font-bold text-navy mb-2">Water Level</h3>
              <p className="text-gray-700 text-sm">
                We measure the static water level (at rest) and drawdown level
                (while pumping) to assess aquifer health and ensure your pump
                is set at the correct depth.
              </p>
            </div>
            <div className="bg-gray-bg rounded-lg p-6">
              <h3 className="font-bold text-navy mb-2">
                Surrounding Area
              </h3>
              <p className="text-gray-700 text-sm">
                We check for potential contamination sources near the wellhead
                — septic systems, chemical storage, animal pens, or runoff
                paths that could affect water quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Water Testing */}
      <section className="bg-gray-bg py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
            Water Testing Services
          </h2>
          <p className="text-gray-700 mb-6">
            We collect water samples from your well and send them to a
            certified laboratory for analysis. Results typically come back
            within 5 to 10 business days. Here&apos;s what we test for:
          </p>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Bacteria Testing
              </h3>
              <p>
                Total coliform and E. coli testing detects bacterial
                contamination that can cause illness. This is the most
                important test for private wells and should be done annually.
                If bacteria is detected, we can{" "}
                <Link
                  href="/water-well-drilling"
                  className="text-accent hover:text-accent-dark"
                >
                  shock chlorinate your well
                </Link>{" "}
                to eliminate the contamination.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Mineral &amp; Hardness Analysis
              </h3>
              <p>
                We test for iron, manganese, calcium, magnesium, and pH
                levels. High iron causes orange staining on fixtures. Hard
                water leaves scale buildup in pipes and appliances. These
                results help us recommend the right treatment system if
                needed.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Nitrate &amp; Contaminant Screening
              </h3>
              <p>
                Nitrates from agricultural runoff or failing septic systems are
                a common concern in {state}. We also screen for arsenic, lead,
                and other contaminants based on local geology and known risks
                in the {city} area.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Real Estate Water Testing
              </h3>
              <p>
                Buying or selling a home with a well in {city}? We provide the
                water quality testing required for mortgage lending and real
                estate closings. Our reports are accepted by lenders and
                inspectors across {stateAbbr}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
            Well Inspection Cost in {city}, {stateAbbr}
          </h2>
          <p className="text-gray-700 mb-4">
            The cost of a well inspection in the {city} area depends on the
            scope of the inspection and whether water testing is included. A
            basic visual inspection costs less than a comprehensive checkup
            with full water quality lab analysis. Real estate well
            certifications are more detailed due to lender reporting
            requirements. We provide clear pricing upfront before scheduling
            your inspection.
          </p>
          <p className="text-gray-700">
            <strong>
              Call{" "}
              <a
                href={`tel:${phoneRaw}`}
                className="text-accent hover:text-accent-dark"
              >
                {phone}
              </a>{" "}
              for exact pricing and to schedule your inspection.
            </strong>
          </p>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-gray-bg py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
            Well Inspection Service Areas
          </h2>
          <p className="text-gray-700">
            We provide well inspections and water testing across {city},{" "}
            {stateAbbr} and the surrounding areas including{" "}
            {suburbs.map((suburb, i) => (
              <span key={suburb}>
                {suburb}
                {i < suburbs.length - 1 ? ", " : ""}
              </span>
            ))}
            , and other nearby communities. Whether you need an annual
            checkup or a real estate well certification, we&apos;re here to
            help.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                How often should I have my well inspected?
              </h3>
              <p className="text-gray-700">
                At least once per year. Annual inspections catch problems
                early and help ensure your water stays safe. You should also
                get an inspection after any flooding, nearby construction, or
                changes in water taste, smell, or appearance.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                How often should I test my well water?
              </h3>
              <p className="text-gray-700">
                The EPA recommends testing for bacteria and nitrates at least
                once per year. Test more frequently if you have infants in the
                home, if your well has had past contamination, or if you live
                near agricultural land.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                What happens if bacteria is found in my well water?
              </h3>
              <p className="text-gray-700">
                Don&apos;t panic — it&apos;s fixable. We shock chlorinate the
                well to kill the bacteria, then retest to confirm it&apos;s
                clear. If contamination recurs, we investigate the source and
                recommend permanent solutions like UV disinfection or well
                repairs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Do I need a well inspection to sell my house?
              </h3>
              <p className="text-gray-700">
                In most cases, yes. Most mortgage lenders require a well
                inspection and water test for homes with private wells. Even
                if not required, buyers typically request one during due
                diligence. Having a recent inspection report ready can speed up
                the sale.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Why does my well water smell like rotten eggs?
              </h3>
              <p className="text-gray-700">
                That smell is hydrogen sulfide gas, which is common in well
                water. It&apos;s usually not harmful at low levels but is
                unpleasant. A water test confirms the level, and treatment
                options include aeration systems, carbon filters, or chemical
                injection depending on severity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Schedule Your Well Inspection in {city}
          </h2>
          <p className="text-gray-300 mb-6">
            Know what&apos;s in your water. Call today to book an inspection.
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
            name: `Well Inspection & Water Testing in ${city}, ${stateAbbr}`,
            provider: {
              "@type": "LocalBusiness",
              name: businessName,
              url: siteConfig.url,
            },
            areaServed: {
              "@type": "City",
              name: `${city}, ${stateAbbr}`,
            },
            description: `Professional well inspection and water quality testing in ${city}, ${stateAbbr}. Annual checkups, bacteria testing, mineral analysis, and real estate well certifications.`,
            serviceType: "Well Inspection",
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
                name: "How often should I have my well inspected?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "At least once per year. Annual inspections catch problems early. Also get an inspection after flooding, nearby construction, or changes in water quality.",
                },
              },
              {
                "@type": "Question",
                name: "How often should I test my well water?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The EPA recommends testing for bacteria and nitrates at least once per year. Test more frequently with infants in the home or near agricultural land.",
                },
              },
              {
                "@type": "Question",
                name: "What happens if bacteria is found in my well water?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We shock chlorinate the well to kill the bacteria, then retest to confirm. If contamination recurs, we investigate the source and recommend permanent solutions.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need a well inspection to sell my house?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "In most cases, yes. Most mortgage lenders require a well inspection and water test for homes with private wells.",
                },
              },
              {
                "@type": "Question",
                name: "Why does my well water smell like rotten eggs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "That smell is hydrogen sulfide gas, common in well water. A water test confirms the level, and treatment options include aeration, carbon filters, or chemical injection.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
