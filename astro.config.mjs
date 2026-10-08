import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://yasakapagodakyoto.com',
  output: 'static',
  // Always emit and link the trailing-slash form so canonical / hreflang /
  // sitemap all agree on a single URL (Google otherwise indexes `/en` and `/en/`
  // as duplicates).
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'ja',
    locales: ['zh', 'en', 'ja', 'ko'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
