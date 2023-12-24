<script setup lang='ts'>
import AdvertiseBox from '@/components/AdvertiseBox.vue'
</script>

<template>
  <div class="h-[100vh] flex justify-center items-center">
    <div class="flex flex-col items-center">
      <h1 class="text-5xl font-semibold">B3santePro.services</h1>
      <p class="text-2xl mb-8">B3santePro’s services platform for your studies with HCPs</p>
      <NuxtImg src="/omnibus_logo.svg" alt="omnibus_logo" width="198px" />

      <div class="auth-action mt-16">
        <button class="login w-[388px] text-neutral-light px-4 py-2 rounded-lg bg-[#4DA2FF] flex justify-center mb-3">
          Login
        </button>

        <button class="signup w-[388px] text-neutral-light px-4 py-2 rounded-lg bg-[#4DA2FF] flex justify-center">
          Sign up
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
