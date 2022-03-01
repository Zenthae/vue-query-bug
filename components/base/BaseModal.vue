<template>
  <div v-if="modelValue">
    <div>
      <slot name="top" />
      <hr />
      <slot name="default" />
      <hr />
      <slot name="bottom" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  modelValue: boolean;
}>();
</script>
