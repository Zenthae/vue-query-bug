<template>
  <div class="page">
    <BaseInput v-model="searchText" class="mb-16" />
    <div class="flex gap-4 flex-wrap">
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, aliquid.
      </div>
      <div>
        Vitae eius non doloremque nam consequatur cupiditate qui commodi ut!
      </div>
      <div>
        Iure dolorem fugit optio, modi expedita totam et corporis quasi.
      </div>
      <div>
        Molestiae, excepturi ab sunt dolorum rerum consequatur quia culpa
        minima.
      </div>
      <div>
        Eum nihil aspernatur atque odio excepturi voluptate soluta molestiae
        ducimus.
      </div>
      <div>
        Est possimus ab pariatur deleniti soluta placeat id ex aspernatur!
      </div>
      <div>
        Obcaecati saepe adipisci rerum libero ducimus ad architecto neque
        doloremque.
      </div>
      <div>
        Rem, corrupti. Beatae aut alias praesentium odit quae delectus ratione.
      </div>
      <div>
        Quam quae maiores ad similique itaque veniam pariatur a nesciunt!
      </div>
      <div>
        Qui cupiditate delectus placeat aliquid non inventore impedit, rerum
        officiis?
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const searchText = ref('');
</script>

<style lang="scss">
.page {
  @apply flex flex-col items-center justify-center h-full;

  input {
    width: 50%;
  }

  div > div {
    @apply shadow-xl p-2 w-32;
  }
}
</style>
