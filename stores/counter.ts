import { acceptHMRUpdate, defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const test = ref(null);

  function increment(v: number = 1) {
    count.value += v;
  }

  function decrement(v: number = 1) {
    count.value -= v;
  }

  const double = computed(() => count.value * 2);

  return {
    count,
    test,
    double,
    increment,
    decrement,
    n: null,
  };
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot));
