<script setup lang='ts'>

</script>

<template>
  <div class="h-[100vh] flex justify-center items-center">
    <div class="flex flex-col items-center">
      <h1 class="text-5xl font-semibold">B3santePro.services</h1>
      <p class="text-2xl mb-8">B3santePro’s services platform for your studies with HCPs</p>
      <NuxtImg src="/omnibus-logo.svg" alt="omnibus-logo" width="198" />

      <div class="auth-action mt-16">
        <NuxtLink to="/auth/login">
          <button class="login w-[388px] text-neutral-light px-4 py-2 rounded-lg bg-[#4DA2FF] flex justify-center mb-3">
            Login
          </button>
        </NuxtLink>

        <NuxtLink to="/auth/sign-up">
          <button class="signup w-[388px] text-neutral-light px-4 py-2 rounded-lg bg-[#4DA2FF] flex justify-center">
            Sign up
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
