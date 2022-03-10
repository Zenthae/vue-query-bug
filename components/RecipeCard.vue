<template>
  <div u:shadow="gray-600 md" u:p="2">
    <img :src="image" width="200px" height="200px" />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  image: {
    type: String,
    default: 'https://via.placeholder.com/200x200',
  },
});
</script>
