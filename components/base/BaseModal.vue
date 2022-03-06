<template>
  <div v-if="modelValue">
    <div>
      <div></div>
      <hr />
      <slot name="default" />
      <hr />
      <slot name="bottom" />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  modelValue: boolean;
}>();
</script>
