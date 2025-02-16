<script setup>
    const colorMode = useColorMode()

    const links = [{
      label: 'About Me',
      to: '/'
      },
      {
      label: 'Experience',
      to: '/experience'
    }]
</script>

<template>
  <div class="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] shadow-md dark:shadow dark:shadow-primary-900">
    <div class="flex gap-3 items-center ml-2 mt-0.5">
      <UAvatar
          src="https://avatars.githubusercontent.com/u/25401750?v=4"
          alt="Avatar"
          class="md:block hidden"
      />
      <h1 class="sm:text-lg text-xs sm:whitespace-nowrap">
        Marc Honegger
      </h1>
    </div>
    <UHorizontalNavigation :links="links">
      <template #default="{ link }">
        <span class="group-hover:text-primary relative">{{ link.label }}</span>
      </template>
    </UHorizontalNavigation>
    <div class="mr-2 mt-2">
      <Themechooser/>
    </div>
  </div>
</template>

