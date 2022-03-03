import presetAttributify from '@unocss/preset-attributify';
import { presetWind } from '@unocss/preset-wind';
import { defineNuxtConfig } from 'nuxt3';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@vueuse/nuxt', '@unocss/nuxt'],
  meta: {
    title: 'Cookbook',
    link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  },
  privateRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
  vueuse: {
    ssrHandlers: true,
  },
  unocss: {
    uno: true,
    attributify: true,
    preflight: true,
    icons: {
      scale: 1.2,
    },
    presets: [presetWind({}), presetAttributify({})],
  },
});
