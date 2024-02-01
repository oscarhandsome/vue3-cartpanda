<script lang="ts" setup>
import { ref } from 'vue'

import LayoutIcon from '@/assets/images/layout.svg?component'
import BoxIcon from '@/assets/images/box.svg?component'
import CreditCardIcon from '@/assets/images/credit-card.svg?component'
import TagIcon from '@/assets/images/tag.svg?component'
import UsersIcon from '@/assets/images/users.svg?component'
import BarChartIcon from '@/assets/images/bar-chart.svg?component'
import PercentIcon from '@/assets/images/percent.svg?component'
import GridIcon from '@/assets/images/grid.svg?component'

import SettingsIcon from '@/assets/images/settings.svg?component'
import ShoppingBagIcon from '@/assets/images/shopping-bag.svg?component'

import NavigationItem from './NavigationItem.vue'

const menu = ref([
  {
    id: 1,
    name: 'Dashboard',
    icon: LayoutIcon,
    path: '/',
    active: true
  },
  {
    id: 2,
    name: 'Orders',
    icon: BoxIcon,
    path: '',
    active: false
  },
  {
    id: 3,
    name: 'Payments',
    icon: CreditCardIcon,
    path: '/payments',
    active: false
  },
  {
    id: 4,
    name: 'Products',
    icon: TagIcon,
    path: '',
    active: false
  },
  {
    id: 5,
    name: 'Clients',
    icon: UsersIcon,
    path: '',
    active: false
  },
  {
    id: 6,
    name: 'Metrics',
    icon: BarChartIcon,
    path: '',
    active: false
  },
  {
    id: 7,
    name: 'Discounts',
    icon: PercentIcon,
    path: '',
    active: false
  },
  {
    id: 8,
    name: 'Apps',
    icon: GridIcon,
    path: '',
    active: false
  }
])

const menuBottom = ref([
  {
    id: 1,
    name: 'Admin',
    icon: SettingsIcon,
    path: '',
    active: false
  },
  {
    id: 2,
    name: 'Online-Store',
    icon: ShoppingBagIcon,
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
        <component :is="item.icon" class="inline mr-3" />
      </NavigationItem>
    </div>
    <div class="flex flex-col gap-2 mb-0 mt-auto">
      <NavigationItem
        v-for="item in menuBottom"
        :key="item.id"
        :item="item"
        @navigate-to="navigateTo"
      >
        <component :is="item.icon" class="inline mr-3" />
      </NavigationItem>
    </div>
  </nav>
</template>
