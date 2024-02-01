<script lang="ts" setup>
import FilterIcon from '@/assets/images/filter.svg'
import ArrowUpRightIcon from '@/assets/images/arrow-up-right.svg'
import MastercardIcon from '@/assets/images/Mastercard.svg'
// import BarChart from '@/components/BarChart.vue'
import BaseApexChart from '@/components/Base/BaseApexChart.vue'

import BaseTitle from '@/components/Base/BaseTitle.vue'
import BaseButton from '@/components/Base/BaseButton.vue'
import BaseCard from '@/components/Base/BaseCard.vue'

const filterOpen = () => alert('Here can be filter')
</script>

<template>
  <div class="flex flex-col gap-6 w-full">
    <BaseTitle>Payments</BaseTitle>

    <div class="flex border border-transparent border-b-gray-300 w-full">
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
    </div>

    <div class="flex justify-between">
      <div class="border-2 mr-auto bg-gray-100 rounded-lg">
        <button
          class="text-sm font-medium leading-5 bg-white hover:bg-white border rounded-lg transition-colors px-2 py-1"
        >
          Monthy
        </button>
        <button class="text-sm hover:bg-white rounded-lg transition-colors px-2 py-1">
          Quarterly
        </button>
        <button class="text-sm hover:bg-white rounded-lg transition-colors px-2 py-1">
          Yearly
        </button>
      </div>

      <div>
        <BaseButton @clicked="filterOpen">
          <template #before-content>
            <FilterIcon class="inline mr-2" />
          </template>
          Filter
        </BaseButton>
      </div>
    </div>

    <div class="grid lg:grid-cols-2 gap-4">
      <div v-for="item in 2" :key="item">
        <BaseCard>
          <template #card-name>Gross volume</template>
          <template #card-price>$120,444</template>
          <template #card-percent><ArrowUpRightIcon class="inline" />4.9%</template>
          <BaseApexChart class="mt-8" />
        </BaseCard>
      </div>
    </div>

    <div class="grid lg:grid-cols-3 gap-4">
      <div v-for="item in 3" :key="item">
        <BaseCard class="py-4">
          <template #card-name>Succeeded payments</template>
          <template #card-price>90,294</template>
          <template #card-percent>98%</template>
        </BaseCard>
      </div>
    </div>

    <div class="w-full">
      <h5 class="font-medium leading-5 mb-4">Recent transactions</h5>
      <table class="table-auto w-full text-[13px]">
        <thead>
          <tr class="text-left text-gray-500 font-normal bg-gray-200 rounded-lg overflow-hidden">
            <th class="px-2 pl-4">Transaction date</th>
            <th class="px-2">ID</th>
            <th class="px-2">Method</th>
            <th class="px-2">Amount</th>
            <th class="px-2">Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in 10" :key="item">
            <td class="py-6 pl-4">10/17/2023, 2:35 PM</td>
            <td class="py-6">#325465</td>
            <td class="py-6">
              <MastercardIcon />
            </td>
            <td class="py-6">$99,99</td>
            <td class="py-6">
              <span class="bg-[#E2F0EC] text-[#007E46] xpy-1 px-2 rounded-lg">Completed</span>
            </td>
            <td class="py-6 pr-4">
              <button class="border rounded-lg px-2">...</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
