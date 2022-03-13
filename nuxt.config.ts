import presetAttributify from '@unocss/preset-attributify';
import { preset as presetIcons } from '@unocss/preset-icons';
import { presetWind } from '@unocss/preset-wind';
import { defineNuxtConfig } from 'nuxt3';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  build: {},
  buildModules: ['@unocss/nuxt', '@pinia/nuxt'],
  meta: {
    title: 'Cookbook',
    link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  },
  privateRuntimeConfig: {
    API_URL: process.env.API_URL,
    API_LOGIN: process.env.API_LOGIN,
    API_PASSWORD: process.env.API_PASSWORD,
  },
  vueuse: {
    ssrHandlers: true,
  },
  unocss: {
    uno: true,
    // attributify: true,
    preflight: true,
    icons: {
      scale: 1.2,
    },
    presets: [
      presetWind({}),
      presetIcons({}),
      presetAttributify({
        // strict: true,
        prefixedOnly: true,
        prefix: 'u:',
      }),
    ],
    exclude: ['node_modules'],
    shortcuts: [
      [
        /^btn-(.*)$/,
        ([, c]) => `bg-${c}-400 text-${c}-100 py-2 px-4 rounded-lg`,
      ],
    ],
  },
});
