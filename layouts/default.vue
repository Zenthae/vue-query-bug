<template>
  <div u:flex="~ col nowrap" u:h="screen max-screen">
    <div u:flex="grow">
      <slot />
    </div>
    <VueQueryDevTools />
  </div>
</template>

<script lang="ts" setup>
import { VueQueryDevTools } from 'vue-query/devtools';
</script>
