<script setup>
</script>

<template>
    <div class="flex flex-col h-[100vh] pb-12">
        <div class="h-full flex flex-col items-center justify-center">
            <NuxtImg src="/not-found.svg" alt="not-found" width="120" class="mb-4" />
            <h3 class="mb-2 font-semibold text-2xl text-neutral-dark">404 Not Found</h3>
            <p class="mb-4 text-[#939393]">
                Sorry, we can’t find that page.
            </p>
            <NuxtLink to="/">
                <button
                    class="text-neutral-light px-4 py-2 rounded-lg bg-[#4DA2FF] flex justify-center mb-3 font-semibold text-lg">
                    Back to Home Page
                </button>
            </NuxtLink>
        </div>
        <div class="text-[#939393] text-xs text-center">© 2023 b3santePro.service</div>

    </div>
</template>
