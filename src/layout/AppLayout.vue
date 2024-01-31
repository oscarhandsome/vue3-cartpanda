<script lang="ts" setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

import TheLogo from '@/components/TheLogo.vue'
import {
  BellIcon,
  MagnifyingGlassIcon,
  Cog6ToothIcon
  // ShoppingBagIcon
} from '@heroicons/vue/24/solid'

const menu = ref([
  {
    id: 1,
    name: 'Dashboard',
    icon: '',
    path: '',
    active: false
  },
  {
    id: 2,
    name: 'Orders',
    icon: '',
    path: '',
    active: false
  },
  {
    id: 3,
    name: 'Payments',
    icon: '',
    path: '',
    active: true
  },
  {
    id: 4,
    name: 'Products',
    icon: '',
    path: '',
    active: false
  },
  {
    id: 5,
    name: 'Clients',
    icon: '',
    path: '',
    active: false
  },
  {
    id: 6,
    name: 'Metrics',
    icon: '',
    path: '',
    active: false
  },
  {
    id: 7,
    name: 'Discounts',
    icon: '',
    path: '',
    active: false
  },
  {
    id: 8,
    name: 'Apps',
    icon: '',
    path: '',
    active: false
  }
])

const menuBottom = ref([
  {
    id: 1,
    name: 'Admin',
    icon: '',
    path: '',
    active: false
  },
  {
    id: 2,
    name: 'Online-Store',
    icon: '',
    path: '',
    active: false
  }
])
</script>

<template>
  <div class="flex flex-col w-full h-full min-h-screen">
    <header class="flex items-center justify-between px-6 py-4 border border-b-gray-300 w-full">
      <TheLogo />

      <div class="flex items-center bg-[#F6F8FA] rounded-full w-[480px] px-6">
        <MagnifyingGlassIcon class="h-4 w-4 text-gray-500 mr-3" />
        <input
          type="text"
          placeholder="Search"
          class="flex flex-grow text-sm text-gray-500 bg-transparent outline-none py-2"
        />
        <!-- <MagnifyingGlassIcon class="h-6 w-6 text-gray-500" /> -->
        <div class="text-sm text-[#091740] opacity-50">⌘K</div>
      </div>

      <div class="flex items-center mr-6">
        <router-link to="/notifications">
          <BellIcon class="h-6 w-6 text-gray-400 mr-4 cursor-pointer" />
        </router-link>
        <router-link to="/user" class="rounded-full overflow-hidden cursor-pointer">
          <img src="https://i.pravatar.cc/32" alt="avatar" class="h-8" />
        </router-link>
      </div>
    </header>

    <div class="flex flex-grow">
      <div class="flex flex-col bg-[#F6F8FA] min-w-[240px] border border-r-gray-300 p-6">
        <nav class="flex flex-col flex-grow justify-between">
          <div class="flex flex-col flex-grow gap-2 mb-auto">
            <RouterLink
              :to="{ name: `${item.name.toLowerCase()}` }"
              v-for="item in menu"
              :key="item.id"
              class="text-gray-500 text-nowrap rounded-2xl transition-colors hover:text-blue-500 hover:bg-white px-3 py-2"
              :class="{ 'bg-white border border-gray-300 text-black font-medium': item.active }"
            >
              <BellIcon class="inline h-6 w-6 text-gray-300 mr-3" />
              {{ item.name }}
            </RouterLink>
          </div>
          <div class="flex flex-col gap-2 mb-0 mt-auto">
            <RouterLink
              :to="{ name: `${item.name.toLowerCase()}` }"
              v-for="item in menuBottom"
              :key="item.id"
              class="text-gray-500 text-nowrap rounded-2xl transition-colors hover:text-blue-500 hover:bg-white px-3 py-2"
              :class="{ 'bg-white border border-gray-300 text-black': item.active }"
            >
              <Cog6ToothIcon class="inline h-6 w-6 text-gray-300 mr-3" />
              {{ item.name }}
            </RouterLink>
          </div>
        </nav>
      </div>

      <main class="flex flex-col flex-grow px-20 py-8">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped></style>
