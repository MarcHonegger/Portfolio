<script setup>
import rolesData from '@/locales/en.json';

const colorMode = useColorMode();
const visibleDescriptions = ref({});
const selectedRoleType = ref('Work'); // Standardmäßig wird 'Work' angezeigt

const toggleDescription = (role) => {
  visibleDescriptions.value[role] = !visibleDescriptions.value[role];
};

const setRoleType = (roleType) => {
  selectedRoleType.value = roleType;
};

const TypeOfWork = [
  'Work', 'Volunteering', 'Programming', 'Education', 'Certification'
];

const roles_list = Object.keys(rolesData.roles);
</script>

<template>
  <client-only>
    <div class="flex flex-wrap justify-center mt-5 m-2">
      <UButton v-for="type in TypeOfWork" :key="type" @click="setRoleType(type)"
               :class="selectedRoleType === type ? 'bg-primary-500 text-white dark:bg-primary-400 dark:text-black' : 'bg-white text-primary-500 dark:bg-gray-800 dark:text-primary-800'"
               class="rounded-full m-1" variant="soft">
        {{ type }}
      </UButton>
    </div>
    <div class="flex w-screen justify-center">
      <div class="grid grid-cols-1 md:w-3/5 sm:w-4/5 w-11/12">
        <div v-for="role in roles_list" :key="role">
          <UCard v-if="$t(`roles.${role}.type`) === selectedRoleType"
                 class="m-5 grow shadow-primary shadow-md hover:shadow-lg hover:shadow-primary hover:scale-105 transition-all duration-300 delay-50"
                 @click="toggleDescription(role)">
            <template #header>
              <div class="md:flex md:flex-row sm:flex-col justify-between">
                <div class="flex flex-col gap-0">
                  <h1 class="text-primary-700 dark:text-primary-500">{{$t(`roles.${role}.title`)}}</h1>
                  <div class="flex flex-row gap-1">
                    <div class="text-xs text-gray-400 dark:text-gray-400">{{$t(`roles.${role}.timespan`)}}</div>
                    <UButton size="5xs" :to="$t(`roles.${role}.credential_link`)" target="_blank" icon="i-heroicons-link" variant="ghost" v-if="$t(`roles.${role}.type`) === 'Certification'"></UButton>
                    <UButton size="5xs" :to="$t(`roles.${role}.link`)" target="_blank" icon="i-simple-icons-github" variant="ghost" v-if="$t(`roles.${role}.type`) === 'Programming'"></UButton>
                  </div>
                </div>
                <UBadge class="m-2 ml-0 whitespace-nowrap" :ui="{ rounded: 'rounded-full' }" variant="soft">@{{$t(`roles.${role}.company`)}}</UBadge>
              </div>
            </template>
            <template class="flex flex-col items-center">
              <client-only>
                <UIcon name="i-heroicons-chevron-down" class="w-4 h-4" v-if="!visibleDescriptions[role]"/>
                <ul class="pl-2 break-words md:text-lg sm:text-sm text-xs select-none self-start" v-if="visibleDescriptions[role]">
                  <li class="list-disc md:p-2 sm:p-1 md:ml-6 sm:ml-2" v-for="description in $tm(`roles.${role}.descriptions`)" :key="description">
                    {{ $rt(description) }}
                  </li>
                </ul>
              </client-only>
            </template>
          </UCard>
        </div>
      </div>
    </div>
  </client-only>
</template>
