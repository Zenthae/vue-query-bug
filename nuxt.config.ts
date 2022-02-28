import { defineNuxtConfig } from 'nuxt3';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // ssr: false,
  buildModules: ['nuxt-windicss'],
  build: {
    extractCSS: true,
  },
  css: [],
  meta: {
    link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  },
  privateRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
  typescript: {
    shim: false,
    strict: true,
  },
  windicss: {
    analyze: true,
  },
});
