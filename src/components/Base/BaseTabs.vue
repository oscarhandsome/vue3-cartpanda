<script lang="ts" setup>
import { ref } from 'vue'
const selectedIndex = ref(0)
const tabs = ref([])

tabs.value = $children
</script>

<template>
  <!-- <div class="flex border border-transparent border-b-gray-300 w-full">
    <ul class="flex">
      <li
        class="text-sm leading-6 border border-transparent border-b-[#1E54F5] text-[#1E54F5] hover:border-b-[#1E54F5] hover:text-[#1E54F5] transition-colors font-medium cursor-pointer px-3 py-2"
      >
        Overview
      </li>
      <li
        class="text-sm leading-6 border border-transparent hover:border-b-[#1E54F5] hover:text-[#1E54F5] transition-colors cursor-pointer px-3 py-2"
      >
        Transactions history
      </li>
    </ul>
  </div> -->

  <tabs>
    <tab>Tab 1</tab>
    <tab>Tab 2</tab>
    <tab>Tab 3</tab>
    <tab>Tab 4</tab>
  </tabs>
</template>
