<script lang="ts" setup>
import MastercardIcon from '@/assets/images/Mastercard.svg?component'
import DotsIcon from '@/assets/images/dots.svg?component'

import BaseBadge from './BaseBadge.vue'

defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <h5 class="font-medium leading-5 mb-4">{{ data.title }}</h5>

  <table class="table-auto font-normal text-[13px] leading-4 w-full">
    <thead>
      <tr class="text-left text-[#5D626C] bg-gray-light">
        <th
          v-for="(headerName, idx) in data.headers"
          :key="headerName"
          class="px-2 py-2"
          :class="{
            'pl-4 rounded-l-lg': idx === 0
          }"
        >
          {{ headerName }}
        </th>
        <th class="rounded-r-lg"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="{ date, id, price, status, paymentMethod } in data.items" :key="id">
        <td class="py-6 pl-4 w-1/6">{{ date }}</td>
        <td class="py-6">{{ id }}</td>
        <td class="py-6">
          <MastercardIcon v-if="paymentMethod === 'Mastercard'" />
        </td>
        <td class="py-6">{{ price }}</td>
        <td class="py-6">
          <BaseBadge :status="status">{{ status }}</BaseBadge>
        </td>
        <td class="w-10 py-6 pr-4">
          <button class="outline-none"><DotsIcon /></button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
