<template>
  <div>
    <div u:flex="~">
      <span u:flex="grow" />
      <button
        u:color="white"
        u:bg="blue-700"
        u:p="x-4 y-2"
        @click="toggleModal"
      >
        Nouvelle Recette
      </button>
    </div>
    <table>
      <thead>
        <tr>
          <th>nom</th>
          <th>categorie</th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script lang="ts" setup>
const showModal = ref(false);
const toggleModal = () => (showModal.value = !showModal.value);
</script>
