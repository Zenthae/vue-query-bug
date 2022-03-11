<template>
  <div u:shadow="gray-600 md" u:p="2">
    <img :src="image" width="200px" height="200px" />
    {{ JSON.stringify(data) }}
  </div>
</template>

<script lang="ts" setup>
import { useQuery } from 'vue-query';

defineProps({
  image: {
    type: String,
    default: 'https://via.placeholder.com/200x200',
  },
});

const { data } = useQuery('test', () =>
  fetch('https://jsonplaceholder.typicode.com/posts/1').then((res) =>
    res.json(),
  ),
);
</script>
