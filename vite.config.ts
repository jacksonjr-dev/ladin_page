import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// On Vercel the production address is exposed at build time. Use it as the site URL unless
// VITE_SITE_URL was set by hand (for example to a custom domain), so canonical, og:image and the
// structured data are correct without any manual step.
const vercelProductionUrl = process.env["VERCEL_PROJECT_PRODUCTION_URL"];
if (!process.env["VITE_SITE_URL"] && vercelProductionUrl) {
  process.env["VITE_SITE_URL"] = `https://${vercelProductionUrl}`;
}

export default defineConfig(({ command }) => ({
  server: { host: "::", port: 8080 },
  resolve: { dedupe: ["react", "react-dom", "@tanstack/react-router"] },
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    // Redirects TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    tanstackStart({ server: { entry: "server" } }),
    viteReact(),
    ...(command === "build" ? [nitro()] : []),
  ],
}));
