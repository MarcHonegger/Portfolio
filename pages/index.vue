<script setup>
    import {computed} from "vue";

    const colorMode = useColorMode()

    const isDark = computed({
      get () {
        return colorMode.value === 'dark'
      },
      set () {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
      }
    })

    const { locale } = useI18n()
    const currentLocale = computed(() => locale.value)

    const totalImages = 14;
    const items = Array.from({ length: totalImages }, (_, i) => `/pictures/fav${i + 1}.jpeg`);

    const carouselRef = ref()

    onMounted(() => {
      setInterval(() => {
        if (!carouselRef.value) return

        if (carouselRef.value.page === carouselRef.value.pages) {
          return carouselRef.value.select(0)
        }

        carouselRef.value.next()
      }, 3000)
    })

    const greetings_morning = ['Grüezi', 'Guten Morgen', 'Good Morning', 'Bonjour', 'おはようございます', '안녕하세요']
    const greetings_evening = ['Guete Abig', 'Guten Abend', 'Good Evening', 'Bonsoir', 'こんばんは', '안녕하세요']
</script>

<!-- <template>
  <div class="relative text-center z-0">
    <div class="w-full absolute top-0 left-0 z-10 text-center">
      <h1 class="text-4xl font-bold text-white p-2 bg-primary-900 bg-opacity-80 text-center"> Hey! I am Marc </h1>
    </div>
    <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/3' }" indicators class="overflow-hidden mt-1">
      <img :src="item" class="w-full" draggable="false">
    </UCarousel>
  </div>
 </template> -->

<template>
  <div class="text-center">
    <UCarousel
        ref="carouselRef"
        v-slot="{ item }"
        :items="items"
        :ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/3 snap-start' }"
        indicators
        class="overflow-hidden mt-1">
      <NuxtImg :src="item" class="w-full" width="800" height="600"/>
    </UCarousel>
    <p class="lg:text-8xl md:text-6xl text-4xl text-primary-600 dark:text-primary-400 m-5 mb-3">{{ $t('me.greeting') }}</p>
    <p class="text-xl md:w-4/5 lg:w-3/5 mx-auto break-words space-y-4 p-2">
      <div>
        <UDivider icon="i-heroicons-academic-cap" :ui="{ icon: 'base-primary-500 dark:text-primary-400' }" class="p-3 pb-0"/>
        <p>{{ $t('me.education') }}</p>
      </div>
      <div>
        <UDivider icon="i-heroicons-star" :ui="{ icon: 'text-primary-500 dark:text-primary-400' }" class="p-3 pb-0"/>
        <p>{{ $t('me.recreation') }}</p>
      </div>
      <div>
        <UDivider icon="i-heroicons-language" :ui="{ icon: 'text-primary-500 dark:text-primary-400' }" class="p-3 pb-0">

          <UButton
              class="flex justify-center"
              :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
              color="primary"
              variant="soft"
              aria-label="Theme"
              size="2xs"
              @click="isDark = !isDark"
          />
        </UDivider>
        <!-- Good Evening in dark mode only -->
        <div class="hidden dark:block">
          <div class="grid md:grid-cols-6 grid-cols-3 text-primary-500">
            <p v-for="greeting in greetings_evening">
              {{ greeting }}
            </p>
          </div>
        </div>

        <!-- Good Day in light mode only -->
        <div class="dark:hidden">
          <div class="grid md:grid-cols-6 grid-cols-3 text-primary-500">
            <p v-for="greeting in greetings_morning">
              {{ greeting }}
            </p>
          </div>
        </div>

        <p>{{ $t('me.culture') }}</p>
      </div>
    </p>

    <div class="mt-8">
      <UButton
          icon="i-simple-icons-github"
          variant="link"
          size="xs"
          to="https://github.com/MarcHonegger"
      >
      </UButton>
      <UButton
          icon="i-simple-icons-linkedin"
          variant="link"
          size="xs"
          to="https://www.linkedin.com/in/marc-honegger/"
      >
      </UButton>
    </div>
  </div>
</template>