<template>
  <div>
    <input type="text" />
    <div u:flex="~" u:gap="2">
      <RecipeCard v-for="n of 10" :key="n" />
    </div>
  </div>
</template>

<script lang="ts" setup></script>
