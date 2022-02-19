<template>
  <div>
    <BaseInput v-model="recipe.name" label="Name" />
  </div>
</template>

<script lang="ts" setup>
const recipe = ref({
  name: '',
  description: '',
  ingredients: [],
  instructions: [],
  image: '',
  tags: [],
  category: '',
  servings: '',
  prepTime: '',
  cookTime: '',
  totalTime: '',
  notes: '',
});
</script>
