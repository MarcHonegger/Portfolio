<script setup>
    const colorMode = useColorMode()
</script>

<template>
    <div class="h-11 w-full z-10 border-b-2 border-slate-800">
        <div class="m-3">
            <div class="max-w-6xl mx-auto grid grid-cols-2">
            <div>
                <div class="flex gap-3 items-center">
                    <UAvatar
                        src="https://avatars.githubusercontent.com/u/25401750?v=4"
                        alt="Avatar"
                    />
                    <h1>
                        Marc Honegger
                    </h1>
                </div>
            </div>
            <Themechooser/>
        </div>
        </div>
    </div>
</template>

