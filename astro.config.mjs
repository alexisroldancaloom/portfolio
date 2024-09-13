import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/functions";
import "../portfolioAlexis/src/global.css";

export default defineConfig({
  output: "server",
  adapter: netlify(),
});
