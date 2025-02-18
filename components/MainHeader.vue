<script setup>
  import { useI18n } from 'vue-i18n'
  const { locale } = useI18n()
  const colorMode = useColorMode()
  const localePath = useLocalePath()

  // Reactive links
  const links = ref([])

  // Update the links whenever the locale changes
  watch(() => locale.value, () => {
    links.value = [
      {
        label: locale.value === 'de' ? 'Über mich' : 'About Me',
        to: localePath('/')
      },
      {
        label: locale.value === 'de' ? 'Erfahrungen' : 'Experience',
        to: localePath('/experience')
      }
    ]
  }, { immediate: true })
</script>

<template>
  <div class="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] shadow-md dark:shadow dark:shadow-primary-900">
    <div class="flex gap-3 items-center ml-2 mt-0.5">
      <UAvatar
          src="https://avatars.githubusercontent.com/u/25401750?v=4"
          alt="Avatar"
          class="md:block hidden"
      />
      <h1 class="sm:text-lg text-xs pr-5">
        Marc Honegger
      </h1>
    </div>
    <UHorizontalNavigation :links="links">
      <template #default="{ link }">
        <span class="group-hover:text-primary relative">{{ link.label }}</span>
      </template>
    </UHorizontalNavigation>
    <div class="flex items-center gap-2 justify-end mr-2">
      <LanguageSwitcher/>
      <Themechooser/>
    </div>
  </div>
</template>

