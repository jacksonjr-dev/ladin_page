import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

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
