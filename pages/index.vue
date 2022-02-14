<template>
  <div>
    <BaseInput v-model="searchText" />
  </div>
</template>

<script lang="ts" setup>
const searchText = ref('');
</script>
