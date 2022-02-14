import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  preflight: true,

  extract: {
    include: [
      '**/*.css',
      '**/*.scss',
      '**/*.sass',
      '**/*.vue',
      '**/*.ts',
      'windi.config.ts',
    ],
  },

  // TODO: not working
  // attributify: {
  //   prefix: 'w:',
  // },
});
