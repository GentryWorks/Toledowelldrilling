import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import Hero from "@/components/Hero";
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


      {/* What Is a Well Inspection */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
            Well Inspection &amp; Water Testing in {city}
          </h2>
          <p className="text-gray-700 mb-4">
            A well inspection is a full checkup of your water system — from
            the cap at the surface all the way down to the pump. At{" "}
            {businessName}, we look at every part to make sure your well is
            giving your family safe, clean water at good pressure and flow.
          </p>
          <p className="text-gray-700 mb-4">
            Water testing works alongside the inspection. Your well can look
            fine on the outside and still have bacteria, iron, or nitrates
            you cannot see, smell, or taste. The EPA tells private well
            owners to test at least once a year. If you notice any change in
            taste, smell, or color, test sooner.
          </p>
          <p className="text-gray-700">
            Annual checkup, real estate well cert, or something just seems
            off with your water — {businessName} does thorough inspections
            and lab-quality water tests for {city} homeowners. You get clear
            results and straight answers about what they mean.
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
              Association says to get your well inspected at least once a
              year. Annual visits catch small problems early — a cracked cap,
              a slow drop in flow rate — before they turn into big repair
              bills.
            </p>
            <p>
              <strong>Buying or selling a home:</strong> Most lenders in the{" "}
              {city} area require a well inspection and water test before
              closing. We provide certified inspection reports that meet
              lender and real estate requirements in {stateAbbr}.
            </p>
            <p>
              <strong>Changes in water quality:</strong> Water that suddenly
              tastes off, smells like rotten eggs, looks cloudy, or leaves
              orange stains on sinks and tubs is telling you something
              changed. An inspection and water test will find out what.
            </p>
            <p>
              <strong>After flooding or severe weather:</strong> Heavy rain
              and flooding can push surface water into your well. A bacteria
              test after a big storm or flood makes sure your water is still
              safe to drink.
            </p>
            <p>
              <strong>New property with an existing well:</strong> Moved to
              a home with a well you did not drill? An inspection tells you
              what shape the system is in and what repairs or upgrades it
              needs.
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
                We make sure the cap is tight, the sanitary seal is solid,
                and nothing — not bugs, rodents, or surface runoff — can
                get into the casing.
              </p>
            </div>
            <div className="bg-gray-bg rounded-lg p-6">
              <h3 className="font-bold text-navy mb-2">Well Casing</h3>
              <p className="text-gray-700 text-sm">
                We look for cracks, corrosion, or physical damage in the
                visible casing. A damaged casing lets surface water and
                contaminants into your water supply.
              </p>
            </div>
            <div className="bg-gray-bg rounded-lg p-6">
              <h3 className="font-bold text-navy mb-2">
                Flow Rate &amp; Yield
              </h3>
              <p className="text-gray-700 text-sm">
                We measure how many gallons per minute your well produces.
                A dropping flow rate is an early warning sign of a{" "}
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
                We test pump output, check the pressure tank charge, verify
                switch settings, and look at all electrical connections for
                safety issues.
              </p>
            </div>
            <div className="bg-gray-bg rounded-lg p-6">
              <h3 className="font-bold text-navy mb-2">Water Level</h3>
              <p className="text-gray-700 text-sm">
                We measure the water level at rest and while pumping. This
                tells us how healthy the aquifer is and whether your pump is
                set at the right depth.
              </p>
            </div>
            <div className="bg-gray-bg rounded-lg p-6">
              <h3 className="font-bold text-navy mb-2">
                Surrounding Area
              </h3>
              <p className="text-gray-700 text-sm">
                We look at what is near your wellhead — septic systems,
                chemical storage, animal areas, or drainage paths that could
                contaminate the water. In NW Ohio farmland areas, runoff
                paths from fields are especially worth checking.
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
            certified lab. Results come back within 5 to 10 business days.
            Here is what we test for:
          </p>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Bacteria Testing
              </h3>
              <p>
                Total coliform and E. coli tests check for bacteria that can
                make your family sick. This is the single most important test
                for private well owners and it should be done every year. If
                bacteria shows up, we can{" "}
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
                We test for iron, manganese, calcium, magnesium, and pH.
                NW Ohio groundwater often runs high in iron and hardness —
                both are common results of the limestone aquifers in the
                area. High iron leaves orange stains on your sinks, tubs,
                and laundry. Hard water leaves white scale buildup in your
                pipes and appliances. Test results help us point you to the
                right treatment system if needed.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Nitrate &amp; Contaminant Screening
              </h3>
              <p>
                The {city} area and the surrounding Maumee River valley are
                surrounded by farmland. Every spring, rainwater carries
                nitrates from farm fields into shallow groundwater. Nitrates
                are odorless and colorless — you will never know they are
                there without a test. They are especially dangerous for
                infants and young children. High nitrate levels in baby
                formula water can cause a serious condition called blue baby
                syndrome. Annual testing catches this before it becomes a
                health problem. We also screen for arsenic, lead, and other
                contaminants based on local geology and known risks in the{" "}
                {city} area.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Real Estate Water Testing
              </h3>
              <p>
                Buying or selling a home with a well in {city}? We provide
                the water quality testing your lender requires. Our reports
                are accepted by mortgage lenders and inspectors across{" "}
                {stateAbbr} and get deals closed without delays.
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
            Inspection cost in the {city} area depends on what is included.
            A basic visual check costs less than a full checkup with lab
            water testing. Real estate certifications cost more because they
            require detailed lender-ready reports. We give you clear pricing
            upfront before we schedule anything.
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
            We provide well inspections and water testing throughout {city},{" "}
            {stateAbbr} and the surrounding areas including{" "}
            {suburbs.map((suburb, i) => (
              <span key={suburb}>
                {suburb}
                {i < suburbs.length - 1 ? ", " : ""}
              </span>
            ))}
            , and other nearby communities. Annual checkup or real estate
            cert — we are here to help.
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
                At least once a year. Annual inspections catch small problems
                before they become expensive ones. Also get an inspection
                after any flooding, nearby construction, or if your water
                changes in taste, smell, or color.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                How often should I test my well water?
              </h3>
              <p className="text-gray-700">
                The EPA recommends testing for bacteria and nitrates at least
                once a year. Test more often if you have infants in the home,
                if your well has had past contamination, or if you live near
                farmland. The {city} area is surrounded by agricultural land,
                and spring nitrate runoff is a real concern here.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                What happens if bacteria is found in my well water?
              </h3>
              <p className="text-gray-700">
                It is fixable. We shock chlorinate the well to kill the
                bacteria, then retest to confirm it is gone. If it keeps
                coming back, we dig into the source and recommend a permanent
                fix — UV disinfection, well repairs, or a seal upgrade.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Do I need a well inspection to sell my house?
              </h3>
              <p className="text-gray-700">
                In most cases, yes. Most lenders require a well inspection
                and water test for homes with private wells. Even when it is
                not required, buyers ask for one during due diligence. Having
                a fresh inspection report ready speeds up the sale.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Why does my well water smell like rotten eggs?
              </h3>
              <p className="text-gray-700">
                That is hydrogen sulfide gas — common in well water across
                NW Ohio. At low levels it is not dangerous but it is
                unpleasant. A water test confirms how much is there. Treatment
                options include aeration systems, carbon filters, or chemical
                injection depending on the level.
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
            Know what is in your water. Call today to book an inspection.
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
