import { defineConfig } from "astro/config";
import vercel from '@astrojs/vercel/serverless';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: "https://alexisroldan.vercel.app",
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  integrations: [tailwind(), sitemap()],
});
