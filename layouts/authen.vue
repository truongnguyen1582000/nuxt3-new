<script setup lang='ts'>
</script>

<template>
    <div class="flex flex-col h-[100vh] bg-[#F7F9FB] pb-12">
        <div class="header py-4 px-6 flex justify-between">
            <NuxtLink to="/">
                <NuxtImg src="/omnibus-logo.svg" alt="omnibus-logo" width="120" />
            </NuxtLink>
            <div class="flex gap-2">
                <NuxtLink to="/auth/sign-up">
                    <span class="text-sm flex items-center justify-center">
                        Sign Up
                    </span>
                </NuxtLink>
                <NuxtLink to="/auth/login">
                    <span
                        class="flex items-center justify-center text-sm border border-solid border-stroke rounded-lg px-2">
                        Login
                    </span>
                </NuxtLink>
            </div>
        </div>
        <div class="flex grow justify-center items-center">

            <div class="rounded-2xl py-12 px-36 bg-neutral-light">
                <slot />
            </div>
        </div>
        <div class="text-[#939393] text-xs text-center">© 2023 b3santePro.service</div>
    </div>
</template>

<style lang="scss" scoped></style>
