<script lang="ts" setup>
import { ref } from 'vue'
import FilterIcon from '@/assets/images/filter.svg?component'
import ArrowUpRightIcon from '@/assets/images/arrow-up-right.svg?component'
// import MastercardIcon from '@/assets/images/Mastercard.svg?component'
// import DotsIcon from '@/assets/images/dots.svg?component'
// import BarChart from '@/components/BarChart.vue'
import BaseApexChart from '@/components/Base/BaseApexChart.vue'

import BaseTitle from '@/components/Base/BaseTitle.vue'
import BaseButton from '@/components/Base/BaseButton.vue'
import BaseCard from '@/components/Base/BaseCard.vue'
import BaseTable from '@/components/Base/BaseTable.vue'

const tableData = ref({
  title: 'Recent transactions',
  headers: ['Transaction date', 'ID', 'Method', 'Amount', 'Status', ''],
  items: [
    {
      date: '10/17/2023, 2:35 PM',
      id: '#325465',
      paymentMethod: 'Mastercard',
      price: '$99,99',
      status: 'Completed'
    }
  ]
})

const filterOpen = () => alert('Here can be filter')
const checkMonth = (period: string) => alert(period)
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
      <div class="border-2 mr-auto bg-gray-light rounded-lg">
        <BaseButton active @clicked="checkMonth('Monthy')">Monthy</BaseButton>
        <BaseButton @clicked="checkMonth('Quarterly')">Quarterly</BaseButton>
        <BaseButton @clicked="checkMonth('Yearly')">Yearly</BaseButton>
      </div>

      <div>
        <BaseButton active @clicked="filterOpen">
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
      <BaseTable :data="tableData" />
    </div>
  </div>
</template>
