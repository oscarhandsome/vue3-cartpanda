<script lang="ts" setup>
import TheLogo from './TheLogo.vue'
import TheMainSearch from './TheMainSearch.vue'
import TheUserInfo from './TheUserInfo.vue'
</script>

<template>
  <header
    class="flex items-center justify-between border border-b-gray-300 bg-white w-full h-[64px] px-6 py-4"
  >
    <TheLogo />
    <TheMainSearch />
    <TheUserInfo />
  </header>
</template>
