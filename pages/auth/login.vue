<script setup lang='ts'>
definePageMeta({
  layout: 'authen',
})
</script>

<template>
  <div class="flex flex-col items-center w-[388px]">
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
    <div class="w-full flex justify-center items-center relative mb-7">
      <span class="inline-flex items-center px-4 relative bg-neutral-light z-10">
        Or with email
      </span>
      <div class="absolute top-1/2 left-0 -translate-y-1/2 h-[1px] w-full bg-neutral-dark"></div>
    </div>
    <form class="flex flex-col w-full">
      <input type="email" placeholder="Email"
        class="mb-4 w-full bg-neutral-light rounded-lg border border-solid border-stroke py-2 px-4 text-sm">
      <input type="password" placeholder="Password"
        class="w-full bg-neutral-light rounded-lg border border-solid border-stroke py-2 px-4 text-sm mb-2">
      <NuxtLink to="/auth/forgot-password" class="flex justify-end">
        <span class="inline-block text-[#95A4FC] self-end mb-7">Forgot password?</span>
      </NuxtLink>
      <button
        class="w-full text-neutral-light px-4 py-2 rounded-lg bg-[#4DA2FF] flex justify-center mb-3 font-semibold text-lg">
        Login
      </button>
    </form>
    <span class="text-[#939393] text-sm">
      Not a Member yet? <NuxtLink to="/auth/sign-up"><span class="text-[#95A4FC]"> Sign Up </span></NuxtLink>
    </span>
  </div>
</template>

<style scoped></style>
