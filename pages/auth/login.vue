<script setup lang='ts'>
definePageMeta({
  layout: 'authen',
})
</script>

<template>
  <div class="flex flex-col items-center">
    <h2 class="text-neutral-dark font-semibold text-2xl mb-2">Sign In</h2>
    <p class="text-neutral-light-800 mb-7">Your Social Campaigns</p>
    <div class="flex gap-2 mb-7">
      <div class="flex items-center px-2 py-1 border border-solid border-stroke rounded-lg cursor-pointer">
        <NuxtImg src="/google.svg" width="32" class="mr-1" />
        <span class="text-neutral-dark">Sign in with Google</span>
      </div>
      <div class="flex items-center px-2 py-1 border border-solid border-stroke rounded-lg cursor-pointer">
        <NuxtImg src="/apple.svg" width="32" class="mr-1" />
        <span class="text-neutral-dark">Sign in with Apple</span>
      </div>
    </div>
    <div class="w-full flex justify-center items-center relative">
      <span class="inline-flex items-center px-4 relative bg-neutral-light z-10">
        Or with email
      </span>
      <div class="absolute top-1/2 left-0 -translate-y-1/2 h-[1px] w-full bg-neutral-dark"></div>
    </div>
  </div>
</template>

<style scoped></style>
