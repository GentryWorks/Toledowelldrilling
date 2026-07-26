import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import Hero from "@/components/Hero";
import QuoteForm from "@/components/QuoteForm";
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

      <QuoteForm />

      {/* What Is Well Drilling */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
            What Is Water Well Drilling?
          </h2>
          <p className="text-gray-700 mb-4">
            Water well drilling is the process of creating a borehole into the
            ground to access underground aquifers that supply clean, natural
            groundwater to your property. In {city}, well water is a reliable
            and cost-effective alternative to municipal water, giving homeowners
            independence from rising city water rates and supply disruptions.
          </p>
          <p className="text-gray-700 mb-4">
            A properly drilled well in {state} typically reaches depths of 100
            to 400 feet depending on your property&apos;s geology and the local
            water table. The well is lined with steel or PVC casing, sealed at
            the surface to prevent contamination, and connected to a pump system
            that delivers water throughout your home or business.
          </p>
          <p className="text-gray-700">
            At {businessName}, we handle every step of the process from initial
            site evaluation through final water testing. Our team works with
            local permitting authorities to ensure your well meets all{" "}
            {stateAbbr} state code requirements.
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
              <strong>New construction:</strong> If you&apos;re building a home
              in a rural area of {city} or surrounding communities where
              municipal water lines don&apos;t reach, a drilled well is your
              primary water source. We coordinate with your builder to ensure the
              well is drilled before foundation work begins.
            </p>
            <p>
              <strong>Existing well failure:</strong> Wells that are 30+ years
              old often experience declining water quality, reduced flow rates,
              or structural issues with the casing. When rehabilitation
              costs approach the price of a new well, replacement is the better
              long-term investment.
            </p>
            <p>
              <strong>Property without well access:</strong> If you&apos;ve
              purchased rural property in the {city} area that doesn&apos;t have
              an existing well, we&apos;ll evaluate your land, identify the best
              drilling location, and install a complete well system.
            </p>
            <p>
              <strong>Switching from city water:</strong> Some {city} area
              homeowners choose to drill a private well to reduce monthly water
              bills, avoid water restrictions during droughts, or simply have
              control over their own water supply.
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
            Most of the wells we drill in the {city} area are for homeowners.
            Whether you&apos;re building a new home on rural property,
            replacing an aging well that&apos;s losing yield, or buying
            land that doesn&apos;t have municipal water access, a
            residential well gives your family a reliable, independent water
            supply.
          </p>
          <p className="text-gray-700 mb-4">
            Residential wells in {state} typically range from 100 to 300
            feet deep depending on the local water table and geology. We
            size the well and pump system to match your household demand —
            factoring in the number of bathrooms, appliances, and outdoor
            water use. A properly sized system delivers consistent pressure
            to every fixture in your home.
          </p>
          <p className="text-gray-700">
            Every residential well we drill includes a sanitary well cap,
            steel or PVC casing, a submersible pump, pressure tank, and
            water line to your home. We also test the water for bacteria and
            contaminants before handing the system over to you.
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
            Businesses, churches, schools, and commercial properties in the{" "}
            {city} area that sit outside municipal water service areas need a
            reliable water source. Commercial wells require higher flow rates
            and more durable construction than residential systems to handle
            the demands of daily operations, employee use, and restroom
            facilities.
          </p>
          <p className="text-gray-700 mb-4">
            We drill commercial wells with larger-diameter casing and
            high-capacity pumps designed for sustained daily use. Whether
            you&apos;re developing a new commercial property, expanding an
            existing facility, or replacing an underperforming well, we
            design the system to meet your specific water volume
            requirements.
          </p>
          <p className="text-gray-700">
            Commercial projects often involve coordination with architects,
            general contractors, and local building departments. We handle
            the well permitting and{" "}
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
            Farms, ranches, and rural properties around {city} depend on
            wells for livestock watering, crop irrigation, and general
            agricultural operations. Agricultural wells are built for high
            output — delivering the volume of water needed to sustain daily
            farm operations without running dry during peak demand.
          </p>
          <p className="text-gray-700 mb-4">
            We drill irrigation wells and livestock wells sized for your
            specific acreage and water needs. Whether you need a well for a
            small hobby farm or a large-scale irrigation system, we evaluate
            the aquifer capacity on your property and design a well that
            delivers consistent flow rates throughout the growing season.
          </p>
          <p className="text-gray-700">
            Agricultural wells in {state} may have different permitting
            requirements than residential wells depending on the intended
            water usage and volume. We handle the permitting process and
            ensure your well complies with all {state} regulations for
            agricultural water use.
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
                  We visit your property to assess soil conditions, review
                  geological surveys, identify the best drilling location, and
                  check setback distances from septic systems and property
                  lines as required by {state} regulations.
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
                  We handle all {state} well permits and coordinate with your
                  local health department. You don&apos;t need to worry about
                  paperwork — we manage the entire permitting process.
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
                  Our truck-mounted drilling rig bores through soil and rock to
                  reach the water-bearing formation. We install steel or PVC
                  casing as we go to maintain the integrity of the borehole and
                  prevent surface water contamination.
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
                  After reaching the target aquifer, we develop the well to
                  maximize water flow, install the pump system, test the yield
                  (gallons per minute), and submit a water sample for quality
                  testing. You receive a complete well log documenting depth,
                  geology, and water quality.
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
            The cost of drilling a water well in the {city} area depends on
            several factors including well depth, soil and rock conditions,
            casing material, and pump system requirements. Every property is
            different, which is why we evaluate your site and provide a
            detailed written estimate before any work begins.
          </p>
          <p className="text-gray-700 mb-4">
            We provide free, detailed estimates after evaluating your property.
            Our quotes include all drilling, materials, labor, permits, and
            water testing — no hidden fees or surprise charges.
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
            We drill wells across {city}, {stateAbbr} and the surrounding
            areas including{" "}
            {suburbs.map((suburb, i) => (
              <span key={suburb}>
                {suburb}
                {i < suburbs.length - 1 ? ", " : ""}
              </span>
            ))}
            , and other nearby communities.
          </p>
          <p className="text-gray-700">
            Not sure if we serve your area?{" "}
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
                Most residential wells in the {city} area take 1 to 3 days to
                drill, depending on depth and ground conditions. The complete
                process including permitting, drilling, pump installation, and
                water testing typically takes 1 to 2 weeks.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                How deep will my well need to be?
              </h3>
              <p className="text-gray-700">
                Well depth in {state} varies by location and geology. In the{" "}
                {city} area, residential wells typically range from 100 to 400
                feet. We evaluate your property and review geological data to
                estimate the depth needed before drilling begins.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Do I need a permit to drill a well in {stateAbbr}?
              </h3>
              <p className="text-gray-700">
                Yes, {state} requires a well drilling permit before construction
                begins. We handle all permit applications and inspections as
                part of our service — there&apos;s no extra charge for this.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Is well water safe to drink?
              </h3>
              <p className="text-gray-700">
                We test every new well for bacteria, nitrates, and other
                contaminants before handing it over. Most wells in the {city}{" "}
                area produce clean, safe drinking water. If testing reveals any
                concerns, we recommend appropriate{" "}
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
                We stand behind our work with a warranty on drilling,
                casing, and pump installation. Specific terms are provided in
                your written estimate. Our wells are built to last 25+ years
                with proper maintenance.
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
            Call today for a free site evaluation and estimate.
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
