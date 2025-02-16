<script setup>
    const colorMode = useColorMode()
    
    // const isEditing = ref(false)

    // const toggleEditMode = () => {
    //   isEditing.value = !isEditing.value
    // }

    const totalImages = 12;
    const items = Array.from({ length: totalImages }, (_, i) => `/pictures/fav${i + 1}.jpeg`);

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
  <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/3 snap-start' }" indicators class="overflow-hidden mt-1">
    <NuxtImg :src="item" class="w-full" width="800" height="600"/>
  </UCarousel>
</template>