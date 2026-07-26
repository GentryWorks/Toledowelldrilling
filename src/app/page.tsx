import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import Hero from "@/components/Hero";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: `Water Well Drilling ${siteConfig.city}, ${siteConfig.stateAbbr} | ${siteConfig.titleSuffix}`,
  description: `Professional water well drilling in ${siteConfig.city}, ${siteConfig.stateAbbr}. New well construction, well pump repair, and water testing. Licensed, insured, free estimates. Call ${siteConfig.phone}.`,
};

export default function HomePage() {
  const { city, state, stateAbbr, phone, phoneRaw, businessName, suburbs, license } =
    siteConfig;

  return (
    <>
      <Hero
        title={`Water Well Drilling in ${city}, ${stateAbbr}`}
        subtitle={`Trusted well drilling, pump repair, and water testing for homes and businesses across ${city} and surrounding areas.`}
      />

      <QuoteForm />

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-12">
            Why {city} Homeowners Choose {businessName}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">&#128167;</div>
              <h3 className="text-xl font-bold text-navy mb-3">
                Licensed Well Drillers
              </h3>
              <p className="text-gray-text">
                Fully licensed and insured in {state}. Every well we drill
                meets state code requirements and is built to last for decades.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">&#9201;</div>
              <h3 className="text-xl font-bold text-navy mb-3">
                Fast Response Times
              </h3>
              <p className="text-gray-text">
                Well pump failures can leave your family without water. We
                prioritize emergency calls and offer same-day service when
                possible.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">&#128176;</div>
              <h3 className="text-xl font-bold text-navy mb-3">
                Free Estimates
              </h3>
              <p className="text-gray-text">
                We evaluate your property, discuss your water needs, and provide
                a clear, written estimate before any work begins. No surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Well Drilling in City */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
              Water Well Drilling in {city}, {stateAbbr}
            </h2>
            <p className="text-gray-700 mb-4">
              If you live in a rural or semi-rural area of {city}, a private
              water well is often the most reliable and cost-effective way to get
              clean water to your home. Unlike municipal water, a private well
              gives you full control over your water supply — no monthly water
              bills, no usage restrictions during droughts, and no dependence on
              aging city infrastructure.
            </p>
            <p className="text-gray-700 mb-4">
              At {businessName}, we provide complete well drilling services for
              homeowners and businesses across {city} and surrounding
              communities. From the initial site evaluation to the final water
              quality test, we handle every step of the process so you
              don&apos;t have to coordinate between multiple contractors.
            </p>
            <p className="text-gray-700">
              Whether you&apos;re building a new home that needs a well,
              replacing a failing well on your property, or looking to switch
              from city water to well water, our licensed team has the
              equipment and local experience to get the job done right. We
              drill in all soil and rock conditions found in the {city} area
              and handle all {stateAbbr} well permits on your behalf.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/drilling-process.webp"
              alt={`Water well drilling rig in ${city}, ${stateAbbr}`}
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-bg py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8">
            How Well Drilling Works
          </h2>
          <div className="space-y-6 text-gray-700">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy mb-1">
                  Free Site Evaluation
                </h3>
                <p>
                  We visit your property at no cost to assess the terrain,
                  review soil and geological conditions, identify the best
                  drilling location, and measure setback distances from septic
                  systems and property lines as required by {state} law.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy mb-1">
                  Written Estimate &amp; Permits
                </h3>
                <p>
                  You receive a detailed estimate covering drilling, casing,
                  pump installation, and water testing — no hidden costs. We
                  file all required {siteConfig.state} well construction
                  permits before work begins.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy mb-1">
                  Drilling &amp; Well Construction
                </h3>
                <p>
                  Our truck-mounted rig drills through soil and rock to reach
                  the water-bearing formation. We install steel or PVC casing
                  to protect the borehole, seal the well at the surface to
                  prevent contamination, and develop the well to maximize
                  water flow.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy mb-1">
                  Pump Installation &amp; Water Testing
                </h3>
                <p>
                  We install a submersible pump sized for your well&apos;s
                  yield and your household demand, connect the pressure tank
                  and water line to your home, and submit a water sample for
                  lab testing. You receive a complete well log documenting
                  depth, geology, flow rate, and water quality results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-12">
            Our Well Drilling Services in {city}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/water-well-drilling"
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              <Image
                src="/service-drilling.webp"
                alt={`Water well drilling in ${city}`}
                width={800}
                height={500}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-3">
                  Water Well Drilling
                </h3>
                <p className="text-gray-text mb-4">
                  New residential and commercial water well construction.
                  Professional site evaluation, drilling, casing installation, and
                  well development. We handle permits and inspections so you
                  don&apos;t have to.
                </p>
                <span className="text-accent font-medium">
                  Learn more &rarr;
                </span>
              </div>
            </Link>
            <Link
              href="/well-pump-repair"
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              <Image
                src="/service-pump.webp"
                alt={`Well pump repair in ${city}`}
                width={800}
                height={500}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-3">
                  Well Pump Installation &amp; Repair
                </h3>
                <p className="text-gray-text mb-4">
                  Submersible pump installation, jet pump repair, pressure tank
                  replacement, and constant pressure system upgrades. We service
                  all brands and restore your water supply fast.
                </p>
                <span className="text-accent font-medium">
                  Learn more &rarr;
                </span>
              </div>
            </Link>
            <Link
              href="/well-inspection"
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              <Image
                src="/service-inspection.webp"
                alt={`Well inspection and water testing in ${city}`}
                width={800}
                height={500}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-3">
                  Well Inspection &amp; Water Testing
                </h3>
                <p className="text-gray-text mb-4">
                  Annual well inspections, flow rate testing, water quality
                  analysis, and real estate well certifications. Know
                  what&apos;s in your water and keep your family safe.
                </p>
                <span className="text-accent font-medium">
                  Learn more &rarr;
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Well Drilling Cost */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
            How Much Does Well Drilling Cost in {city}?
          </h2>
          <p className="text-gray-700 mb-4">
            The cost of drilling a water well in the {city} area depends on
            several factors including well depth, ground conditions, casing
            material, and the type of pump system you need. Every property is
            different, which is why we provide free, on-site estimates
            tailored to your specific situation.
          </p>
          <p className="text-gray-700 mb-4">
            Factors that affect pricing include how deep we need to drill to
            reach the aquifer, whether the ground is soft soil or hard rock,
            the diameter of the well casing, and the type of pump system
            installed. Shallow wells in favorable soil conditions cost less,
            while deep wells through rock formations cost more.
          </p>
          <p className="text-gray-700">
            We provide free, written estimates after evaluating your property.
            Our quotes include everything — drilling, materials, labor,
            permits, and water testing. No hidden fees.{" "}
            <strong>
              Call{" "}
              <a
                href={`tel:${phoneRaw}`}
                className="text-accent hover:text-accent-dark"
              >
                {phone}
              </a>{" "}
              for a free estimate.
            </strong>
          </p>
        </div>
      </section>

      {/* Photo Break */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/section-break.webp"
          alt={`${businessName} crew working on a well drilling project`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <p className="text-white text-2xl md:text-3xl font-bold max-w-2xl">
            Trusted by {city} homeowners for reliable water well services.
          </p>
        </div>
      </section>

      {/* Homepage FAQ */}
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
                drill. The complete process — including permitting, drilling,
                pump installation, and water testing — typically takes 1 to 2
                weeks from start to finish.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                How deep will my well need to be?
              </h3>
              <p className="text-gray-700">
                Well depth depends on your property&apos;s geology and the
                local water table. In the {city} area, residential wells
                typically range from 100 to 400 feet. We review geological
                data and evaluate your property to estimate depth before
                drilling begins.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Do I need a permit to drill a well in {stateAbbr}?
              </h3>
              <p className="text-gray-700">
                Yes. {siteConfig.state} requires a well construction permit
                before drilling can begin. We handle all permit applications,
                inspections, and documentation as part of our service at no
                extra charge.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                How do I know if my well pump is failing?
              </h3>
              <p className="text-gray-700">
                Common signs include no water, low or fluctuating pressure,
                a pump that runs constantly, sputtering faucets, dirty water,
                or unusually high electric bills. If you notice any of these,{" "}
                <Link
                  href="/well-pump-repair"
                  className="text-accent hover:text-accent-dark"
                >
                  contact us for a diagnosis
                </Link>
                .
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Is well water safe to drink?
              </h3>
              <p className="text-gray-700">
                Most wells in the {city} area produce clean, safe drinking
                water. We{" "}
                <Link
                  href="/well-inspection"
                  className="text-accent hover:text-accent-dark"
                >
                  test every new well
                </Link>{" "}
                for bacteria, nitrates, and other contaminants before handing
                it over. Annual testing is recommended to ensure ongoing water
                quality.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Well water vs. city water — which is better?
              </h3>
              <p className="text-gray-700">
                Well water eliminates monthly water bills, gives you
                independence from municipal supply issues, and is often
                naturally filtered through rock and soil. City water is
                treated and monitored by the municipality but comes with
                ongoing costs and occasional restrictions. For {city}{" "}
                homeowners in areas without city water access, a private well
                is the clear choice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6 text-center">
            Serving {city} and Surrounding Areas
          </h2>
          <p className="text-gray-700">
            We provide water well drilling, pump repair, and water testing
            services across {city}, {stateAbbr} and the surrounding
            communities including{" "}
            {suburbs.map((suburb, i) => (
              <span key={suburb}>
                {suburb}
                {i < suburbs.length - 1 ? ", " : ""}
              </span>
            ))}
            , and other nearby areas. If you&apos;re located in the greater{" "}
            {city} area and need a well drilled or serviced, call us for a
            free estimate.
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-navy py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need a Well Drilled in {city}?
          </h2>
          <p className="text-gray-300 mb-6">
            Call us today for a free, no-obligation estimate.
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
