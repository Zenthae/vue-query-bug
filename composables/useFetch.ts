import { privateConfig } from '#config';
import { createFetch, useBase64 } from '@vueuse/core';

export const useFetch = createFetch({
  baseUrl: 'https://restheart.zenthae.xyz/cookbook',
  fetchOptions: {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${useBase64(
        privateConfig.API_LOGIN + ':' + privateConfig.API_PASSWORD,
      )}`,
    },
  },
});
