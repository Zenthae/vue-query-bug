<template>
  <div u:flex="~ col nowrap" u:h="screen max-screen">
    <NavBar u:h="12" />
    <div u:flex="grow" u:p="4">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup></script>
