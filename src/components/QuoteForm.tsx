"use client";

import Script from "next/script";
import { siteConfig } from "@/data/config";

export default function QuoteForm() {
  return (
    <section id="quote" className="bg-gray-bg pt-10 pb-16 px-4">
      <div className="mx-auto" style={{ maxWidth: "700px" }}>
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-2">
          &#8595; Get Your Free Quote &#8595;
        </h2>
        <p className="text-center text-gray-text mb-6">
          Tell us about your project and we&apos;ll get back to you within 24
          hours.
        </p>
        <iframe
          src={siteConfig.ghlFormUrl}
          style={{ width: "100%", height: "550px", border: "none" }}
          id={`inline-${siteConfig.ghlFormId}`}
          data-layout='{"id":"INLINE"}'
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name={siteConfig.businessName}
          data-height="undefined"
          data-layout-iframe-id={`inline-${siteConfig.ghlFormId}`}
          data-form-id={siteConfig.ghlFormId}
          title={siteConfig.businessName}
        />
      </div>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </section>
  );
}
