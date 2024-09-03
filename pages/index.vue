<script setup>
    const colorMode = useColorMode()
    
    // const isEditing = ref(false)

    // const toggleEditMode = () => {
    //   isEditing.value = !isEditing.value
    // }

</script>

<template>
    <div class="flex justify-center">
      <h1>My Experience</h1>
      </div>
    <div class="flex w-screen justify-center">
        <div class="grid grid-cols-1 w-3/5">
            <div v-for="i in $t('roles')" :key="i">
                <UCard class="m-5 grow">
                    <template #header>
                      <div class="flex flex-row w-4/5">
                        <h1 class="text-primary-600 dark:text-primary-500">{{$t("roles.specialist.title")}}</h1>
                        <!--
                        <UButton
                            :icon="isEditing ? 'i-heroicons-check-solid' : 'i-heroicons-pencil-square'"
                            size="sm"
                            color="primary"
                            square
                            variant="ghost"
                            @click="toggleEditMode"
                            class="flex justify-end">
                        </UButton>
                        -->
                      </div>

                      <UBadge class="text-gray-500 dark:text-gray-400" :ui="{ rounded: 'rounded-full'}" variant="soft©">{{$t('roles.specialist.timespan')}}</UBadge>
                    </template>

                    <template class="flex whitespace-pre">
                      <ul>
                        <li v-for="description in $tm('roles.specialist.descriptions')" :key="description">
                          {{ $rt(description) }}
                        </li>
                      </ul>
                    </template>

                  <!-- <template #footer>
                    <h1 class="h-8 text-primary-300">{{ cards[i - 1].Time }}</h1>
                  </template>-->
                </UCard>
            </div>
        </div>
    </div>
 </template>
