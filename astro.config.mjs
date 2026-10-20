// @ts-check
import { defineConfig } from 'astro/config';

// `site` and `base` are set when hosting is decided (e.g. GitHub Pages: base '/portfolio').
export default defineConfig({
  site: process.env.SITE_URL || 'https://example.com',
  base: process.env.BASE_PATH || '/',
});
