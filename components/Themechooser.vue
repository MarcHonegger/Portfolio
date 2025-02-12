<script setup>
    const colorMode = useColorMode()
    const isDark = computed({
        get () {
            return colorMode.value === 'dark'
        },
        set () {
            colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
        }
    })
    const themecolors = ['yellow', 'orange', 'red', 'cyan', 'blue', 'violet']
</script>

<template>
    <ClientOnly>
        <div class="flex justify-end">
            <UPopover class="w-8 h-8">
                <UButton icon="i-heroicons-cog-6-tooth-20-solid"/>
                <template #panel>
                    <LanguageSwitcher/>
                    <div class="grid grid-cols-3">
                        <UButton
                        class="col-start-2"
                        :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
                        color="gray"
                        variant="ghost"
                        aria-label="Theme"
                        @click="isDark = !isDark"
                        />
                    </div>
                    <div class="grid grid-cols-3 gap-1 m-1">
                        <div v-for="i in themecolors.length" :key="i">
                            <Pencil :pencolor="themecolors[i-1]"/>
                    </div>
                    </div>
                </template>
            </UPopover>
        </div>
    </ClientOnly>
</template>
