import type { Metadata } from "next";
import { siteConfig } from "@/data/config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `Water Well Drilling ${siteConfig.city}, ${siteConfig.stateAbbr} | ${siteConfig.titleSuffix}`,
    template: `%s | ${siteConfig.titleSuffix}`,
  },
  description: `Professional water well drilling in ${siteConfig.city}, ${siteConfig.stateAbbr}. Well pump repair, well inspection, and water testing. Licensed and insured. Call ${siteConfig.phone} for a free quote.`,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `Water Well Drilling ${siteConfig.city}, ${siteConfig.stateAbbr} | ${siteConfig.titleSuffix}`,
    description: `Professional water well drilling in ${siteConfig.city}, ${siteConfig.stateAbbr}. Well pump repair, well inspection, and water testing. Licensed and insured.`,
    url: siteConfig.url,
    siteName: siteConfig.businessName,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Ahrefs Analytics */}
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="Sdu3ypDte6NKaJUAzZN3zg"
          async
        />

        {/* GA4 */}
        {siteConfig.ga4Id && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.ga4Id}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${siteConfig.ga4Id}');

                  // Click-to-call tracking
                  document.addEventListener('click', function(e) {
                    var link = e.target.closest('a[href^="tel:"]');
                    if (link) {
                      gtag('event', 'click_to_call', {
                        event_category: 'engagement',
                        event_label: link.href,
                        value: 1
                      });
                    }
                  });
                `,
              }}
            />
          </>
        )}

        {/* Microsoft Clarity */}
        {siteConfig.clarityId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window,document,"clarity","script","${siteConfig.clarityId}");
              `,
            }}
          />
        )}
      </head>
      <body className="font-sans text-gray-900 bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: siteConfig.businessName,
              telephone: siteConfig.phone,
              email: siteConfig.email,
              url: siteConfig.url,
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.address,
                addressLocality: siteConfig.city,
                addressRegion: siteConfig.stateAbbr,
                postalCode: siteConfig.zip,
                addressCountry: "US",
              },
              areaServed: [
                siteConfig.city,
                ...siteConfig.suburbs,
              ].map((city) => ({
                "@type": "City",
                name: `${city}, ${siteConfig.stateAbbr}`,
              })),
              openingHours: "Mo-Fr 07:00-18:00, Sa 08:00-14:00",
              priceRange: "Call for estimate",
              image: `${siteConfig.url}/well-drilling-hero.jpg`,
              description: `Professional water well drilling services in ${siteConfig.city}, ${siteConfig.stateAbbr}. Licensed and insured well driller serving ${siteConfig.city} and surrounding areas.`,
            }),
          }}
        />
      </body>
    </html>
  );
}
