<template>
  <label>
    <span v-if="label">{{ label }}</span>
    <input v-model="data" type="text" class="border border-black" />
  </label>
</template>

<script lang="ts" setup>
import { useVModel } from '@vueuse/core';
const props = defineProps<{
  modelValue: string;
  label?: string;
}>();
const emit = defineEmits(['update:modelValue']);

const data = useVModel(props, 'modelValue', emit);
</script>
