<template>
  <div class="language-switcher">
    <NuxtLink
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        :class="{ active: currentLocale === locale.code }"
    >
      <NuxtImg v-if="locale.code === 'de'" src="https://flagcdn.com/w40/de.png" alt="Deutsch" class="w-6 h-4" />
      <NuxtImg v-if="locale.code === 'en'" src="https://flagcdn.com/w40/us.png" alt="English" class="w-6 h-4" />
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