import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  preflight: true,

  attributify: {
    prefix: 'w:',
  },

  shortcuts: {
    btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',
  },
});
