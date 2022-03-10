<template>
  <div u:text="center" u:m="t-64">
    <input type="text" u:border="black 1" u:w="64" u:h="8" />
    <div u:grid="~ gap-2 cols-6" u:m="t-16 x-16">
      <RecipeCard v-for="n of 10" :key="n" />
    </div>
  </div>
</template>

<script lang="ts" setup></script>
