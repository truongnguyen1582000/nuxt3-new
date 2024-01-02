<script setup lang='ts'>
definePageMeta({
  layout: 'authen',
})
</script>

<template>
  <div class="flex flex-col items-center w-[388px]">
    <h2 class="text-neutral-dark font-semibold text-2xl mb-2">Forgot Password ?</h2>
    <p class="text-neutral-light-800 mb-7">Enter your email to reset your password.</p>

    <input type="email" placeholder="Email"
      class="mb-4 w-full bg-neutral-light rounded-lg border border-solid border-stroke py-2 px-4 text-sm">
    <button
      class="w-full text-neutral-light px-4 py-2 rounded-lg bg-[#4DA2FF] flex justify-center mb-3 font-semibold text-lg">
      Submit
    </button>
    <NuxtLink to="/auth/login">
      <span class="text-[#95A4FC] text-sm">
        Back
      </span>
    </NuxtLink>
  </div>
</template>

<style scoped></style>
