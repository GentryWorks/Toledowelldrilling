"use client";

import { siteConfig } from "@/data/config";

export default function QuoteForm() {
  return (
    <section id="quote" className="bg-gray-bg pt-10 pb-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-2">
          &#8595; Get Your Free Quote &#8595;
        </h2>
        <p className="text-center text-gray-text mb-6">
          Tell us about your project and we&apos;ll get back to you within 24
          hours.
        </p>
        <form
          action={`https://formsubmit.co/${siteConfig.email}`}
          method="POST"
          className="bg-white rounded-lg shadow-md p-6 md:p-8 space-y-5"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value={`New quote request — ${siteConfig.businessName}`}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border border-gray-border rounded px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full border border-gray-border rounded px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-border rounded px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Service Needed *
            </label>
            <select
              id="service"
              name="service"
              required
              className="w-full border border-gray-border rounded px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="">Select a service</option>
              <option value="Water Well Drilling">Water Well Drilling</option>
              <option value="Well Pump Repair">
                Well Pump Installation / Repair
              </option>
              <option value="Well Inspection">Well Inspection</option>
              <option value="Water Testing">Water Testing</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Project Details
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full border border-gray-border rounded px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Tell us about your property, well depth needs, or any issues you're experiencing..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Request Free Quote
          </button>
        </form>
      </div>
    </section>
  );
}
