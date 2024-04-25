<script setup lang="ts">
    const config = useAppConfig()   
    const props = defineProps<{
        pencolor: string
    }>() 
</script>

<template>
    <UButton
        icon="i-heroicons-paint-brush-20-solid"
        :color="props.pencolor"
        variant="ghost"
        size="xs"
        :aria-label="props.pencolor"
        @click="() => config.ui.primary = props.pencolor"
    />
</template>