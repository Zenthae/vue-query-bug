import config from '#config';

export const baseUrl = config.API_URL;

export const makeUrl = (path: string) => `${baseUrl}${path}`;

export const APIEndpoint = {
  ALL_RECIPES: makeUrl('/recipes'),
  PING: makeUrl('/ping'),
};
