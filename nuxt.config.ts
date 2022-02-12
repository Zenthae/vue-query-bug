import { quasar } from '@quasar/vite-plugin';
import { defineNuxtConfig } from 'nuxt3';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  css: [
    '@quasar/extras/material-icons/material-icons.css',
    'quasar/src/css/index.sass',
  ],
  build: {
    transpile: ['quasar'],
  },
  typescript: {
    shim: false,
    strict: true,
  },
  vite: {
    plugins: [
      quasar({
        autoImportComponentCase: 'pascal',
        sassVariables: 'assets/styles/quasar.variables.sass',
      }),
    ],
  },
});
