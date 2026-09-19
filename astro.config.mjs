import { defineConfig, fontProviders } from "astro/config";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://p3studiohawaii.com",
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Playfair Display",
      cssVariable: "--font-playfair",
    },
    {
      provider: fontProviders.fontsource(),
      name: "Montserrat",
      cssVariable: "--font-montserrat",
    },
  ],
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/success/"),
    }),
  ],
});
