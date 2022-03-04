<template>
  <div flex="~ col nowrap" h="screen max-screen">
    <NavBar h="12" />
    <div flex="grow">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup></script>
