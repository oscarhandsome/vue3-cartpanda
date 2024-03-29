<script lang="ts" setup>
import { ref } from 'vue'
import FilterIcon from '@/assets/images/filter.svg?component'
import ArrowUpRightIcon from '@/assets/images/arrow-up-right.svg?component'
// import MastercardIcon from '@/assets/images/Mastercard.svg?component'
// import DotsIcon from '@/assets/images/dots.svg?component'
// import BarChart from '@/components/BarChart.vue'
import BaseApexChart from '@/components/Base/BaseApexChart.vue'

// import BaseTitle from '@/components/Base/BaseTitle.vue'
import BaseButton from '@/components/Base/BaseButton.vue'
import BaseCard from '@/components/Base/BaseCard.vue'
import BaseTable from '@/components/Base/BaseTable.vue'

// import TabOverview from '@/components/Tabs/Tab-overview.vue'
// import TabTransactions from '@/components/Tabs/Tab-transactions.vue'

import type { ITable } from '@/types'

const tableData = ref<ITable>({
  title: 'Recent transactions',
  headers: ['Transaction date', 'ID', 'Method', 'Amount', 'Status', ''],
  items: [
    {
      date: '10/17/2023, 2:35 PM',
      id: '#325465',
      paymentMethod: 'Mastercard',
      price: '$99,99',
      status: 'Completed'
    },
    {
      date: '10/17/2023, 2:35 PM',
      id: '#325265',
      paymentMethod: 'Mastercard',
      price: '$80,000',
      status: 'Completed'
    },
    {
      date: '10/17/2023, 2:35 PM',
      id: '#125265',
      paymentMethod: 'Mastercard',
      price: '$1,199.98',
      status: 'Completed'
    }
  ]
})

const series1 = ref([
  {
    name: 'Gross volume',
    data: [40, 20, 85]
  }
])

const colors1 = ref({
  colors: ['#1E54F5'],
  fill: {
    colors: ['#1E54F5']
  }
})
const colors2 = ref({
  colors: ['#BD1EF5'],
  fill: {
    colors: ['#BD1EF5']
  }
})

const series2 = ref([
  {
    name: 'Net volume from sales',
    data: [40, 20, 65]
  }
])

const mainPaymentsStat = ref([
  {
    title: 'Gross volume',
    value: '120,444',
    percent: '4.9',
    graphics: series1,
    palette: colors1
  },
  {
    title: 'Net volume from sales',
    value: '80,214',
    percent: '4.9',
    graphics: series2,
    palette: colors2
  }
])

const statisticsData = ref([
  {
    title: 'Succeeded payments',
    value: '90,294',
    percent: '98'
  },
  {
    title: 'Refunded payments',
    value: '1,924',
    percent: '4'
  },
  {
    title: 'Failed payments',
    value: '10',
    percent: '0,4'
  }
])

const filterOpen = () => alert('Here can be filter')
const checkMonth = (period: string) => alert(period)
</script>

<template>
  <div class="flex flex-col gap-6 w-full">
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
      <div v-for="{ title, value, percent, graphics, palette } in mainPaymentsStat" :key="value">
        <BaseCard>
          <template #card-name>{{ title }}</template>
          <template #card-price>${{ value }}</template>
          <template #card-percent><ArrowUpRightIcon class="inline" />{{ percent }}%</template>
          <BaseApexChart class="mt-8" :series="graphics" :palette="palette" />
        </BaseCard>
      </div>
    </div>

    <div class="grid lg:grid-cols-3 gap-4">
      <div v-for="{ title, value, percent } in statisticsData" :key="value">
        <BaseCard class="py-4">
          <template #card-name>{{ title }}</template>
          <template #card-price>{{ value }}</template>
          <template #card-percent>{{ percent }}%</template>
        </BaseCard>
      </div>
    </div>

    <div class="w-full">
      <BaseTable :data="tableData" />
    </div>
  </div>
</template>
