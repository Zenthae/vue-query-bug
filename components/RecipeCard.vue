<template>
  <div u:shadow="black md" u:p="2">
    <img :src="image" width="100px" height="100px" />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  image: {
    type: String,
    default: 'https://via.placeholder.com/100x100',
  },
});
</script>
