import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// TODO: oppdater 'site' med din GitHub-bruker når repoet er pushet.
// Eksempel: https://roykollensvendsen.github.io
// 'base' må matche repo-navnet hvis du IKKE bruker custom domene.
export default defineConfig({
  site: 'https://roykollensvendsen.github.io',
  base: '/middager',
  trailingSlash: 'always',
  integrations: [tailwind()],
});
