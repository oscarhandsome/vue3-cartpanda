<script lang="ts" setup>
import { ref } from 'vue'

import NavigationItem from './NavigationItem.vue'
import BaseIcon from '@/components/Base/BaseIcon.vue'

// AS EXAMPLE
type MenuType = {
  id: number
  name: string
  icon: string
  path: string
  active: boolean
}

const menu = ref<MenuType[]>([
  {
    id: 1,
    name: 'Dashboard',
    icon: 'layout',
    path: '/',
    active: true
  },
  {
    id: 2,
    name: 'Orders',
    icon: 'box',
    path: '',
    active: false
  },
  {
    id: 3,
    name: 'Payments',
    icon: 'credit-card',
    path: '/payments',
    active: false
  },
  {
    id: 4,
    name: 'Products',
    icon: 'tag',
    path: '',
    active: false
  },
  {
    id: 5,
    name: 'Clients',
    icon: 'users',
    path: '',
    active: false
  },
  {
    id: 6,
    name: 'Metrics',
    icon: 'bar-chart',
    path: '',
    active: false
  },
  {
    id: 7,
    name: 'Discounts',
    icon: 'percent',
    path: '',
    active: false
  },
  {
    id: 8,
    name: 'Apps',
    icon: 'grid',
    path: '',
    active: false
  }
])

const menuBottom = ref<MenuType[]>([
  {
    id: 1,
    name: 'Admin',
    icon: 'settings',
    path: '',
    active: false
  },
  {
    id: 2,
    name: 'Online-Store',
    icon: 'shopping-bag',
    path: '',
    active: false
  }
])

const navigateTo = (path: string) => {
  const idx = menu.value.findIndex((item) => item.name === path)
  menu.value = menu.value.map((item) => ({ ...item, active: false }))
  menu.value[idx].active = true
}
</script>

<template>
  <nav class="flex flex-col flex-grow justify-between">
    <div class="flex flex-col flex-grow gap-2 mb-auto">
      <NavigationItem v-for="item in menu" :key="item.id" :item="item" @navigate-to="navigateTo">
        <!-- <component :is="item.icon" class="inline mr-3" /> -->
        <BaseIcon :name="item.icon" class="mr-3" />
      </NavigationItem>
    </div>
    <div class="flex flex-col gap-2 mb-0 mt-auto sticky bottom-0">
      <NavigationItem
        v-for="item in menuBottom"
        :key="item.id"
        :item="item"
        @navigate-to="navigateTo"
      >
        <!-- <component :is="item.icon" class="inline mr-3" /> -->
        <BaseIcon :name="item.icon" class="mr-3" />
      </NavigationItem>
    </div>
  </nav>
</template>
