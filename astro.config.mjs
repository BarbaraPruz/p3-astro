import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
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
});
