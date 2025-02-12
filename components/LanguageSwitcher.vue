<template>
  <div class="language-switcher p-1">
    <NuxtLink
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        :class="{ active: currentLocale === locale.code }"
        class="m-0.5"
    >
      {{ locale.name }}
    </NuxtLink>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { useSwitchLocalePath } from '#imports'

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})

const currentLocale = computed(() => locale.value)
</script>