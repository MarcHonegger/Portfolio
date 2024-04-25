<script setup>
    const colorMode = useColorMode()
</script>

<template>
    <div class="flex w-screen justify-center">
        <div class="grid grid-cols-3 w-full">
            <div v-for="i in 20" :key="i">
                <UCard class="m-5 grow">
                    <template #header>
                        <h1 class="text-primary-500 dark:text-primary-300">Header</h1>
                    </template>

                    <h1 class="h-32"> Content </h1>

                    <template #footer>
                        <h1 class="h-8" color="primary">Footer</h1>
                    </template>
                </UCard>
            </div>
        </div>
    </div>
 </template>
