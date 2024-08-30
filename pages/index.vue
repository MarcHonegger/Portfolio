<script setup>
    const colorMode = useColorMode()

    const cards = [
      {Title: "Specialist",
        Description:
            "• Advise our customers on product selection and solve their technical problems\n" +
            "• Optimized the team’sWorkflow with an Apple Shortcut\n" +
            "• Trained new employees,e.g. through role-playing customer scenarios\n" +
            "• Pursued additional skills through Coursera courses,e.g. Pricing",
        Time: "02 2024 - today"},
      {Title: "Title 2", Description: "Description 2", Time: "Time 2"},
      {Title: "Title 3", Description: "Description 3", Time: "Time 3"},
      {Title: "Title 4", Description: "Description 4", Time: "Time 4"},
      {Title: "Title 5", Description: "Description 5", Time: "Time 5"}
    ]
</script>

<template>
    <div class="flex w-screen justify-center">
        <div class="grid grid-cols-1 w-3/5">
            <div v-for="i in cards.length" :key="i">
                <UCard class="m-5 grow">
                    <template #header>
                        <h1 class="text-primary-600 dark:text-primary-500">{{cards[i-1].Title}}</h1>
                        <h1 class="text-gray-300 dark:text-gray-500">{{cards[i-1].Time}}</h1>
                    </template>

                    <h1 class="h-32 whitespace-pre"> {{cards[i-1].Description}} </h1>
                  <!-- <template #footer>
                    <h1 class="h-8 text-primary-300">{{ cards[i - 1].Time }}</h1>
                  </template>-->
                </UCard>
            </div>
        </div>
    </div>
 </template>
