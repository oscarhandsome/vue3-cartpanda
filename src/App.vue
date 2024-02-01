<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppLayout from './layout/AppLayout.vue'
</script>

<template>
  <AppLayout>
    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view>
    <!-- old?  -->
    <!-- <Transition>
      <RouterView />
    </Transition> -->
  </AppLayout>
</template>

<style>
body {
  min-height: 100vh;
  font-family: Inter, sans-serif;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.85s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
