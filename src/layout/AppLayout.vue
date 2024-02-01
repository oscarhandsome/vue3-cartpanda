<script lang="ts" setup>
import TheHeader from '@/components/layout/TheHeader/index.vue'
import TheSideBar from '@/components/layout/TheSideBar/index.vue'
</script>

<template>
  <div class="flex flex-col w-full h-full min-h-screen">
    <TheHeader />

    <div class="flex flex-grow">
      <TheSideBar />

      <main class="flex flex-col flex-grow px-20 py-8">
        <slot />
      </main>
    </div>
  </div>
</template>

<style>
body {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    6deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 88%,
    rgba(190, 244, 255, 1) 99%,
    rgba(143, 236, 255, 1) 100%
  );
}
</style>
