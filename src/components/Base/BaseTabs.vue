<script lang="ts" setup>
import {
  // defineAsyncComponent,
  ref,
  computed
} from 'vue'
// const TabOverview = defineAsyncComponent(() => import('@/components/Tabs/Tab-overview.vue'))
// const TabTransactionsHistory = defineAsyncComponent(
//   () => import('@/components/Tabs/Tab-transactions-history.vue')
// )

const currentTab = ref('Overview')
const tabs = ref(['Overview', 'Transactions-history'])

const currentTabComponent = computed(() => 'tab-' + currentTab.value.toLowerCase())
</script>

<template>
  <div class="flex border border-transparent border-b-gray-300 w-full">
    <button
      v-for="tab in tabs"
      :key="tab"
      :class="[
        'text-sm leading-6 border border-transparent  hover:border-b-[#1E54F5] hover:text-[#1E54F5] transition-colors font-medium cursor-pointer px-3 py-2',
        { 'border-b-[#1E54F5] text-[#1E54F5]': currentTab === tab }
      ]"
      @click="currentTab = tab"
    >
      {{ tab.replace(/-/g, ' ') }}
    </button>
  </div>

  <!-- Inactive components will be cached! -->
  <keep-alive>
    <component :is="currentTabComponent"> </component>
  </keep-alive>
</template>
