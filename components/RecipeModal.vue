<template>
  <Teleport to="body">
    <div
      v-if="modelValue"
      u:pos="fixed top-0 left-0 right-0 bottom-0"
      u:flex="~"
      u:justify="center"
      u:items="center"
      u:bg=" black"
      u:opacity="50"
      u:z="9999"
    >
      <div u:bg="white" u:min-w="64" u:p="2">
        <div
          u:flex="~"
          u:items="center"
          u:justify="center"
          u:font="bold"
          u:text="xl"
        >
          <h2>Recette</h2>
          <span u:flex="grow" />
          <button class="i-mdi-close"></button>
        </div>
        <div u:grid="~" u:gap="4" u:m="2"></div>
        <div u:flex="~" u:gap="4" u:justify="end">
          <button>Annuler</button>
          <button>Enregister</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
defineProps<{
  modelValue: boolean;
}>();

defineEmits<{
  (event: 'update:modelValue'): void;
}>();
</script>
