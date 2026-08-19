import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import HeroFormEmbed from "@/components/HeroFormEmbed";

export const metadata: Metadata = {
  title: `Water Well Drilling ${siteConfig.city}, ${siteConfig.stateAbbr} | ${siteConfig.titleSuffix}`,
  description: `Professional water well drilling in ${siteConfig.city}, ${siteConfig.stateAbbr}. New well construction, well pump repair, and water testing. Licensed, insured, free estimates. Call ${siteConfig.phone}.`,
};

export default function HomePage() {
  const { city, state, stateAbbr, phone, phoneRaw, businessName, suburbs, license } =
    siteConfig;

  return (
    <>
      {/* 2-column Hero with inline form */}
      <section className="relative text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg.webp')" }}
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative max-w-6xl mx-auto px-4 py-14 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Left — headline + CTA (2/3 width) */}
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Water Well Drilling in {city}, {stateAbbr}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Trusted well drilling, pump repair, and water testing for homes and businesses across {city} and surrounding areas.
            </p>
            <a
              href={`tel:${phoneRaw}`}
              className="inline-block bg-accent hover:bg-accent-dark text-white text-xl font-bold px-8 py-4 rounded-lg transition-colors tracking-wide"
            >
              Call Now {phone}
            </a>
            <p className="mt-4 text-sm text-gray-400">
              Free Estimates &bull; Licensed &amp; Insured
            </p>
          </div>
          {/* Right — form with transparent background */}
          <div className="bg-transparent rounded-lg p-2">
            <HeroFormEmbed />
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
              A private well gives your family clean water with no monthly
              bill. You don&apos;t depend on the city. You don&apos;t pay per
              gallon. You control your own water supply — every single day.
            </p>
            <p className="text-gray-700 mb-4">
              Northwest Ohio sits on glacial clay left behind by the last ice
              age. Many people think that clay means no well water near{" "}
              {city}. That&apos;s not true. Limestone and sandstone aquifers
              sit below that clay layer. They produce clean, reliable water at
              depths of 60 to 150 feet — shallower than the national average.
            </p>
            <p className="text-gray-700">
              At {businessName}, we drill wells for homeowners and businesses
              across {city} and the surrounding area. We handle permits,
              drilling, pump installation, and water testing — all in one
              call. You get running water and peace of mind.
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
                meets {stateAbbr} code. We file your permit through the local
                health department before we ever turn a drill bit.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">&#9201;</div>
              <h3 className="text-xl font-bold text-navy mb-3">
                Fast Response Times
              </h3>
              <p className="text-gray-text">
                When your pump fails, your family has no water. We pick up
                the phone and get to you fast. Same-day service is available
                for most pump emergencies in the {city} area.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">&#128176;</div>
              <h3 className="text-xl font-bold text-navy mb-3">
                Free Estimates
              </h3>
              <p className="text-gray-text">
                We look at your property first. Then we give you a clear,
                written estimate — drilling, materials, pump, permits, and
                water testing all included. No surprise charges at the end.
              </p>
            </div>
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
                  We visit your property at no charge. We look at the land,
                  check the soil, and find the best spot to drill. We also
                  measure setback distances from septic systems and property
                  lines, as required by {state} law.
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
                  You get a written estimate that covers everything — drilling,
                  casing, pump, and water testing. No hidden fees. We also
                  file your {siteConfig.state} well construction permit with
                  the local health department. You don&apos;t lift a finger.
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
                  Our truck-mounted rig drills down through the glacial clay
                  and into the limestone or sandstone aquifer below. We set
                  steel or PVC casing as we go to keep the hole clean. Then we
                  seal the top to block surface runoff and develop the well to
                  get the best water flow possible.
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
                  We drop in a submersible pump sized for your home, hook up
                  the pressure tank, and run the water line to your house.
                  Then we pull a water sample and send it to the lab. You get
                  running water and a full well log — depth, geology, flow
                  rate, and water quality results all in writing.
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
                  You get a private water supply with no monthly bill. We
                  drill new wells for homes and businesses, handle all
                  {stateAbbr} permits, and test the water before we leave.
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
                  Your water comes back on fast. We fix submersible pumps,
                  jet pumps, pressure tanks, and controls. We work on all
                  brands and get most {city} homes running water the same day.
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
                  You know exactly what is in your water. We test for
                  bacteria, nitrates, iron, and hardness. We also handle real
                  estate well certifications for home buyers and sellers in{" "}
                  {city}.
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
            Well drilling costs in the {city} area depend on how deep we need
            to drill, the type of casing, and the pump system you need. In
            NW Ohio, most residential wells hit water between 60 and 150 feet.
            That shallower depth keeps costs lower than many parts of the
            country.
          </p>
          <p className="text-gray-700 mb-4">
            A fully installed well in Ohio typically runs $5,000 to $15,000.
            That is a one-time cost. Compare that to Toledo city water, which
            runs $600 to $900 per year for a typical household. Most homeowners
            who switch to well water see the well pay for itself within 10 to
            15 years — and they stop paying a water bill for good.
          </p>
          <p className="text-gray-700">
            We provide free, written estimates after evaluating your property.
            The quote covers drilling, materials, labor, permits, and water
            testing. No hidden fees.{" "}
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
            {city} families count on us for clean water every day.
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
                Most wells in the {city} area take 1 to 3 days to drill. From
                permit to running water, the full process usually takes 1 to 2
                weeks. NW Ohio wells are shallower than average, which helps
                keep the timeline short.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                How deep will my well need to be?
              </h3>
              <p className="text-gray-700">
                In the {city} area, most residential wells reach water between
                60 and 150 feet. NW Ohio sits on glacial aquifers that are
                shallower than most of the country. We review local geology
                and visit your property before drilling so there are no
                surprises.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Do I need a permit to drill a well in {stateAbbr}?
              </h3>
              <p className="text-gray-700">
                Yes. {siteConfig.state} requires a well construction permit
                before any drilling starts. The permit goes through your local
                county health department. We file everything and handle all
                inspections — no extra charge to you.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                How do I know if my well pump is failing?
              </h3>
              <p className="text-gray-700">
                Watch for no water at the tap, low pressure, a pump that
                never shuts off, sputtering faucets, rust-colored water, or a
                spike in your electric bill. If you see any of those signs,{" "}
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
                Most wells in the {city} area produce clean drinking water. We{" "}
                <Link
                  href="/well-inspection"
                  className="text-accent hover:text-accent-dark"
                >
                  test every new well
                </Link>{" "}
                for bacteria, nitrates, iron, and other contaminants before
                the job is done. We recommend testing every year, especially
                near farmland where spring runoff can carry nitrates into
                shallow groundwater.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">
                Well water vs. city water — which is better?
              </h3>
              <p className="text-gray-700">
                Well water means no monthly bill and no city water
                restrictions. City water is treated and always on, but you pay
                for every gallon. Toledo city water costs a typical household
                $600 to $900 a year. A new well runs $5,000 to $15,000 total
                — a one-time cost that pays for itself and then saves you money
                for decades.
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
            We drill and service wells across {city}, {stateAbbr} and the
            surrounding communities including{" "}
            {suburbs.map((suburb, i) => (
              <span key={suburb}>
                {suburb}
                {i < suburbs.length - 1 ? ", " : ""}
              </span>
            ))}
            , and other nearby areas. If you are anywhere in the greater{" "}
            {city} region and need a well drilled or fixed, call us for a
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
            Call today for a free estimate. No obligation.
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
