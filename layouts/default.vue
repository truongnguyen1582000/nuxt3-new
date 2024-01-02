<script setup lang='ts'>
</script>

<template>
  <NuxtLoadingIndicator />
  <div class="flex flex-col h-[100vh] pb-12">
    <slot />
    <div class="text-[#939393] text-xs text-center">© 2023 b3santePro.service</div>
  </div>
</template>

<style lang="scss" scoped></style>
