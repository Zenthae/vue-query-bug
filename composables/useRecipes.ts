import { useQuery } from 'vue-query';
import { useFetch } from './useFetch';

export const useCreateRecipe = () => {
  return useQuery('create-recipe', () => useFetch('/'));
};
