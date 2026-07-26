import Link from "next/link";
import { siteConfig } from "@/data/config";

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="bg-white border-b border-gray-border px-4 py-3"
      >
        <ol className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-gray-text">
          {allItems.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              {i > 0 && <span>/</span>}
              {item.href && i < allItems.length - 1 ? (
                <Link
                  href={item.href}
                  className="hover:text-navy transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-navy font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: allItems.map((item, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: item.label,
              item: item.href
                ? `${siteConfig.url}${item.href === "/" ? "" : item.href}`
                : undefined,
            })),
          }),
        }}
      />
    </>
  );
}
