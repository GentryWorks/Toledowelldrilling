import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: `Water Well Drilling ${siteConfig.city}, ${siteConfig.stateAbbr}`,
  description: `Professional water well drilling in ${siteConfig.city}, ${siteConfig.stateAbbr}. Residential and commercial well construction, site evaluation, permits, and well development. Call ${siteConfig.phone} for a free estimate.`,
  alternates: { canonical: "/water-well-drilling" },
  openGraph: {
    title: `Water Well Drilling ${siteConfig.city}, ${siteConfig.stateAbbr}`,
    description: `Professional water well drilling in ${siteConfig.city}, ${siteConfig.stateAbbr}. Residential and commercial well construction.`,
    url: `${siteConfig.url}/water-well-drilling`,
  },
};

export default function WellDrillingPage() {
  const { city, stateAbbr, state, phone, phoneRaw, businessName, suburbs } =
    siteConfig;

  return (
    <>
      <Breadcrumbs items={[{ label: "Well Drilling" }]} />

      <Hero
        title={`Water Well Drilling in ${city}, ${stateAbbr}`}
        subtitle={`Professional residential and commercial well drilling. Licensed, insured, and trusted by ${city} homeowners.`}
        bgImage="/hero-drilling.webp"
      />


      {/* What Is Well Drilling */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
            What Is Water Well Drilling?
          </h2>
            <p className="text-gray-700 mb-4">
            Water well drilling is the process of boring a hole into the
            ground to reach an underground aquifer. An aquifer is a layer of
            rock or sediment that holds water. Once we reach it, you get a
            private water supply — clean groundwater piped straight to your
            home with no monthly bill from the city.
          </p>
          <p className="text-gray-700 mb-4">
            The well is lined with steel or PVC casing to keep it clean. We
            seal the top to block surface water and runoff. Then we connect a
            pump system that delivers water to every fixture in your home.
          </p>
          <p className="text-gray-700 mb-4">
            At {businessName}, we handle the whole job from start to finish.
            That means site evaluation, permit filing, drilling, pump
            installation, and water testing. You make one call. We take care
            of the rest.
          </p>
          <h3 className="text-xl font-bold text-navy mb-3">
            Well Drilling in Toledo, Ohio
          </h3>
          <p className="text-gray-700">
            A lot of {city} area homeowners assume the clay soil in NW Ohio
            means well water won&apos;t work near them. That is a common
            misunderstanding. Yes, glacial clay covers most of NW Ohio — left
            behind by the last ice age thousands of years ago. But below that
            clay sit limestone and sandstone aquifers that hold clean,
            reliable groundwater. Once we drill through the clay and reach
            those deeper layers, you get a strong, productive well. Most
            residential wells in the {city} area hit water between 60 and 150
            feet. That is shallower than the national average, which means
            faster drilling and a lower total cost for you.
          </p>
        </div>
      </section>

      {/* When Do You Need */}
      <section className="bg-gray-bg py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
            When Do You Need a New Well?
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>New construction:</strong> Building a home in a rural
              part of {city} or the surrounding area where city water lines
              don&apos;t reach? A drilled well is your water source. We work
              with your builder and get the well in before foundation work
              starts so nothing slows down your project.
            </p>
            <p>
              <strong>Existing well failure:</strong> Wells that are 30 or
              more years old can lose flow, develop water quality problems, or
              crack in the casing. When repair costs start creeping toward the
              price of a new well, a replacement gives you better value and
              clean water for another 30+ years.
            </p>
            <p>
              <strong>Property without well access:</strong> Bought rural land
              in the {city} area with no well on it? We evaluate your
              property, pick the best drilling spot, and put in a complete
              water system. You go from no water to running water.
            </p>
            <p>
              <strong>Switching from city water:</strong> Some {city} area
              homeowners drill a well to stop paying a monthly water bill.
              Toledo city water costs a typical household $600 to $900 per
              year. A fully installed well in Ohio runs $5,000 to $15,000 —
              a one-time cost. Most homeowners who switch see the well pay for
              itself in 10 to 15 years, and they never pay a water bill again.
              A private well also means no usage restrictions during droughts
              and no dependence on aging city pipes.
            </p>
          </div>
        </div>
      </section>

      {/* Residential Well Drilling */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
            Residential Well Drilling in {city}
          </h2>
          <p className="text-gray-700 mb-4">
            Most of the wells we drill in the {city} area are for
            homeowners. The result is simple: your family gets clean water
            on demand with no monthly bill. Whether you are building new,
            replacing an old well, or moving to land without city water
            access — a residential well is your answer.
          </p>
          <p className="text-gray-700 mb-4">
            In NW Ohio, most residential wells reach water at 60 to 150
            feet. That is shallower than most of the country, thanks to the
            limestone and sandstone aquifers that sit below the glacial clay
            layer. We size the pump system to match your home — number of
            bathrooms, appliances, and outdoor use all factor in. You get
            steady pressure at every tap.
          </p>
          <p className="text-gray-700">
            Every well we drill comes with a sanitary cap, steel or PVC
            casing, a submersible pump, pressure tank, and water line to
            your home. Before we leave, we test the water for bacteria,
            nitrates, and other contaminants. You get the results in writing.
          </p>
        </div>
      </section>

      {/* Commercial Well Drilling */}
      <section className="bg-gray-bg py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
            Commercial Well Drilling in {city}
          </h2>
          <p className="text-gray-700 mb-4">
            Businesses, churches, schools, and farms in the {city} area
            that sit outside the city water grid need a dependable water
            source. A commercial well gives you that — with no monthly
            utility bill eating into your operating costs.
          </p>
          <p className="text-gray-700 mb-4">
            Commercial wells use larger casing and high-capacity pumps built
            for heavy daily use. We design the system around your specific
            water volume needs, whether you are opening a new facility or
            replacing a well that can not keep up.
          </p>
          <p className="text-gray-700">
            Commercial jobs often require working with your contractor or
            building department. We handle the well permitting and{" "}
            <Link
              href="/well-inspection"
              className="text-accent hover:text-accent-dark"
            >
              water testing
            </Link>{" "}
            requirements so your project stays on schedule.
          </p>
        </div>
      </section>

      {/* Agricultural Well Drilling */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
            Agricultural &amp; Irrigation Well Drilling in {city}
          </h2>
          <p className="text-gray-700 mb-4">
            Farms and rural properties around {city} need water for
            livestock, crop irrigation, and day-to-day operations. An
            agricultural well delivers the volume you need without running
            dry when demand peaks during growing season.
          </p>
          <p className="text-gray-700 mb-4">
            We drill livestock wells and irrigation wells sized for your
            land and your water needs. Whether it is a small hobby farm or
            a large row-crop operation, we check the aquifer capacity on
            your property and build a system with consistent flow you can
            count on.
          </p>
          <p className="text-gray-700">
            Agricultural wells in {state} may have different permit
            requirements based on water use and volume. We handle all of
            it and make sure your well meets every {state} rule for farm
            water use.
          </p>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-gray-bg py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8">
            Our Well Drilling Process
          </h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy mb-2">
                  Site Evaluation
                </h3>
                <p className="text-gray-700">
                  We come to your property at no charge. We look at the
                  soil, check local geology records, and pick the best
                  drilling spot. We also measure required setback distances
                  from septic systems and property lines per {state} rules.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy mb-2">
                  Permits &amp; Approvals
                </h3>
                <p className="text-gray-700">
                  Ohio requires a well construction permit through your local
                  county health department before drilling can start. We
                  handle the application and all inspections. You do not
                  touch any paperwork.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy mb-2">Drilling</h3>
                <p className="text-gray-700">
                  Our truck-mounted rig bores down through the glacial clay
                  and into the limestone or sandstone aquifer below. In NW
                  Ohio, that is usually 60 to 150 feet. We set steel or PVC
                  casing as we go to keep the hole solid and block surface
                  water from getting in.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy mb-2">
                  Well Development &amp; Testing
                </h3>
                <p className="text-gray-700">
                  Once we hit the aquifer, we develop the well to get the
                  best possible flow. Then we install the pump, measure your
                  yield in gallons per minute, and send a water sample to the
                  lab. You get clean running water and a complete well log
                  documenting everything — depth, geology, flow rate, and
                  water quality results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Section */}
      <section className="bg-gray-bg py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
            Well Drilling Cost in {city}, {stateAbbr}
          </h2>
          <p className="text-gray-700 mb-4">
            Well drilling costs in the {city} area depend on how deep we
            need to drill, the casing type, and your pump system. In NW
            Ohio, most residential wells reach water between 60 and 150
            feet. That shallower depth keeps project costs lower than many
            parts of the country.
          </p>
          <p className="text-gray-700 mb-4">
            A fully installed well in Ohio typically runs $5,000 to $15,000.
            Every quote we give includes drilling, casing, the pump, permits,
            and water testing. No hidden fees. No bill surprises at the end.
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
              for a free estimate specific to your property.
            </strong>
          </p>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
            Well Drilling Service Areas
          </h2>
          <p className="text-gray-700 mb-4">
            We drill wells throughout {city}, {stateAbbr} and the surrounding
            communities including{" "}
            {suburbs.map((suburb, i) => (
              <span key={suburb}>
                {suburb}
                {i < suburbs.length - 1 ? ", " : ""}
              </span>
            ))}
            , and other nearby communities.
          </p>
          <p className="text-gray-700">
            Not sure if we come to your area?{" "}
            <Link href="/contact" className="text-accent hover:text-accent-dark">
              Contact us
            </Link>{" "}
            and we&apos;ll let you know.
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
                How long does it take to drill a well?
              </h3>
              <p className="text-gray-700">
                Most wells in the {city} area take 1 to 3 days to drill.
                NW Ohio wells are shallower than average, which keeps the
                drilling time short. From permit to running water, the full
                process usually takes 1 to 2 weeks.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                How deep will my well need to be?
              </h3>
              <p className="text-gray-700">
                In the {city} area, most residential wells reach water at 60
                to 150 feet. NW Ohio sits on glacial aquifers that are
                shallower than most of the country. The limestone and
                sandstone layers below the surface clay produce clean,
                reliable water at those depths. We review local geology and
                visit your land before we start.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Do I need a permit to drill a well in {stateAbbr}?
              </h3>
              <p className="text-gray-700">
                Yes. {state} requires a well construction permit through your
                local county health department before drilling begins. We
                file all applications and handle every inspection. There is
                no extra charge for permit work.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Is well water safe to drink?
              </h3>
              <p className="text-gray-700">
                We test every new well for bacteria, nitrates, iron, and
                other contaminants before the job is done. Most wells in
                the {city} area produce clean drinking water. If the test
                shows a problem, we recommend the right{" "}
                <Link
                  href="/well-pump-repair"
                  className="text-accent hover:text-accent-dark"
                >
                  water treatment solutions
                </Link>
                .
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                What warranty do you offer?
              </h3>
              <p className="text-gray-700">
                We back our work with a warranty on drilling, casing, and
                pump installation. The exact terms are spelled out in your
                written estimate before any work starts. A well we drill is
                built to last 25 or more years with normal maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Drill Your Well in {city}?
          </h2>
          <p className="text-gray-300 mb-6">
            Call today for a free site visit and written estimate.
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
            name: `Water Well Drilling in ${city}, ${stateAbbr}`,
            provider: {
              "@type": "LocalBusiness",
              name: businessName,
              url: siteConfig.url,
            },
            areaServed: {
              "@type": "City",
              name: `${city}, ${stateAbbr}`,
            },
            description: `Professional residential, commercial, and agricultural water well drilling in ${city}, ${stateAbbr}. Site evaluation, permitting, drilling, pump installation, and water testing.`,
            serviceType: "Water Well Drilling",
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
                name: "How long does it take to drill a well?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Most residential wells in the ${city} area take 1 to 3 days to drill. The complete process including permitting, drilling, pump installation, and water testing typically takes 1 to 2 weeks.`,
                },
              },
              {
                "@type": "Question",
                name: "How deep will my well need to be?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Well depth in ${state} varies by location and geology. In the ${city} area, residential wells typically range from 100 to 400 feet.`,
                },
              },
              {
                "@type": "Question",
                name: `Do I need a permit to drill a well in ${stateAbbr}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Yes, ${state} requires a well drilling permit before construction begins. We handle all permit applications and inspections as part of our service.`,
                },
              },
              {
                "@type": "Question",
                name: "Is well water safe to drink?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `We test every new well for bacteria, nitrates, and other contaminants. Most wells in the ${city} area produce clean, safe drinking water.`,
                },
              },
              {
                "@type": "Question",
                name: "What warranty do you offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We stand behind our work with a warranty on drilling, casing, and pump installation. Our wells are built to last 25+ years with proper maintenance.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
