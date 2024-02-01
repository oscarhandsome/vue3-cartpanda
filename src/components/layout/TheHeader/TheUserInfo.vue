<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import BellIcon from '@/assets/images/bell.svg?component'
</script>

<template>
  <div class="flex items-center mr-6">
    <router-link to="/notifications" class="cursor-pointer transition-shadow">
      <!-- <BellIcon class="h-6 w-6 text-gray-400 mr-4 cursor-pointer" /> -->
      <BellIcon class="hover:drop-shadow-lg mr-4" />
    </router-link>
    <router-link to="/user" class="rounded-full overflow-hidden cursor-pointer">
      <img src="https://i.pravatar.cc/32" alt="avatar" class="h-8" />
    </router-link>
  </div>
</template>
