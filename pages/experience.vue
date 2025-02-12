<script setup>
const colorMode = useColorMode()

// const isEditing = ref(false)

// const toggleEditMode = () => {
//   isEditing.value = !isEditing.value
// }

const visibleDescriptions = ref({});

const toggleDescription = (role) => {
  visibleDescriptions.value[role] = !visibleDescriptions.value[role];
};

</script>

<template>
  <div class="flex justify-center">
  </div>
  <div class="flex w-screen justify-center">
    <div class="grid grid-cols-1 md:w-3/5 sm:w-4/5 w-11/12">
      <div v-for="role in ['specialist', 'sales', 'barista']" :key="role">
        <UCard class="m-5 grow shadow-primary shadow-md hover:shadow-lg hover:shadow-primary hover:scale-105 transition-all duration-300 delay-50" @click="toggleDescription(role)">
          <template #header>
            <div class="md:flex md:flex-row sm:flex-col justify-between">
              <div class="flex flex-col gap-0">
                <h1 class="text-primary-700 dark:text-primary-500">{{$t(`roles.${role}.title`)}}</h1>
                <div class="text-xs text-gray-400 dark:text-gray-400">{{$t(`roles.${role}.timespan`)}}</div>
              </div>
              <UBadge class="m-2 ml-0 whitespace-nowrap" :ui="{ rounded: 'rounded-full' }" variant="soft">@{{$t(`roles.${role}.company`)}}</UBadge>
            </div>
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
          </template>

          <template class="flex flex-col items-center">
            <UIcon name="i-heroicons-chevron-down" class="w-4 h-4" v-if="!visibleDescriptions[role]"/>
            <ul class="pl-2 break-words md:text-lg sm:text-sm text-xs select-none self-start" v-if="visibleDescriptions[role]">
              <li class="list-disc md:p-2 sm:p-1" v-for="description in $tm(`roles.${role}.descriptions`)" :key="description">
                {{ $rt(description) }}
              </li>
            </ul>
            <!-- <UIcon name="i-heroicons-chevron-up" class="w-4 h-4 mt-2 ml-0" v-if="visibleDescriptions[role]"/> -->
          </template>

          <!-- <template #footer>
            <h1 class="h-8 text-primary-300">{{ cards[i - 1].Time }}</h1>
          </template>-->
        </UCard>
      </div>
    </div>
  </div>
</template>
