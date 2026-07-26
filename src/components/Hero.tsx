import { siteConfig } from "@/data/config";

interface HeroProps {
  title: string;
  subtitle: string;
  bgImage?: string;
}

export default function Hero({ title, subtitle, bgImage = "/hero-bg.webp" }: HeroProps) {
  return (
    <section className="relative text-white py-10 md:py-16 px-4 overflow-hidden">
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
      <div className="absolute inset-0 bg-navy/80" />

      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="inline-block bg-accent hover:bg-accent-dark text-white text-xl md:text-2xl font-bold px-8 py-4 rounded-lg transition-colors tracking-wide"
        >
          Call Now {siteConfig.phone}
        </a>
        <p className="mt-4 text-sm text-gray-400">
          Free Estimates &bull; Licensed &amp; Insured
        </p>
      </div>
    </section>
  );
}
