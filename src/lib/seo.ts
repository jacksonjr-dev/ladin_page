import { contact } from "@/lib/contact";

export const siteName = "JPGLabs";

// Public address of the site (e.g. https://www.jpglabs.com.br), set at build time in the host's
// environment variables. Without it the site still works: sitemap.xml and robots.txt use the
// address of each request, and tags that require an absolute URL (canonical, og:image) are omitted
// instead of pointing to a wrong domain.
const configured = import.meta.env["VITE_SITE_URL"] as string | undefined;
export const siteUrl = configured ? configured.replace(/\/+$/, "") : undefined;

export function requestOrigin(request: Request) {
  return siteUrl ?? new URL(request.url).origin;
}

type PageHeadInput = { path: string; title: string; description: string };

export function pageHead({ path, title, description }: PageHeadInput) {
  const url = siteUrl ? `${siteUrl}${path}` : undefined;
  const image = siteUrl ? `${siteUrl}/og-image.png` : undefined;
  const imageAlt = "JPGLabs: transformando processos em soluções";

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: siteName },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      ...(url ? [{ property: "og:url", content: url }] : []),
      ...(image
        ? [
            { property: "og:image", content: image },
            { property: "og:image:width", content: "1200" },
            { property: "og:image:height", content: "630" },
            { property: "og:image:alt", content: imageAlt },
            { name: "twitter:image", content: image },
          ]
        : []),
    ],
    links: url ? [{ rel: "canonical", href: url }] : [],
  };
}

/** Structured data that tells Google who the company is and how to reach it. */
export function organizationJsonLd(description: string) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    description,
    ...(siteUrl ? { url: siteUrl, logo: `${siteUrl}/favicon-192.png` } : {}),
    sameAs: [contact.instagramUrl],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+5585986304497",
        areaServed: "BR",
        availableLanguage: "pt-BR",
      },
    ],
  });
}
