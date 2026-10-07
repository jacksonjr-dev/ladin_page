import { createFileRoute } from "@tanstack/react-router";
import { requestOrigin } from "@/lib/seo";
import { navItems } from "@/lib/site";
import { solutions } from "@/lib/solutions";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = requestOrigin(request);
        const paths: string[] = [
          ...navItems.map((item) => item.to as string),
          ...solutions.map((solution) => `/solucoes/${solution.slug}`),
          "/privacidade",
        ];
        const urls = paths.map((path) => `  <url><loc>${origin}${path}</loc></url>`).join("\n");
        const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

        return new Response(body, {
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
