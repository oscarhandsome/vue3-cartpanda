<script lang="ts" setup>
import { FunnelIcon, ArrowUpRightIcon } from '@heroicons/vue/24/solid'
// import BarChart from '@/components/BarChart.vue'
import ApexChart from '@/components/ApexChart.vue'
</script>

<template>
  <div class="flex flex-col gap-6 w-full">
    <h2 class="font-medium text-2xl leading-[26px] tracking-[-0.2px]">Payments</h2>

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
        <button
          class="text-sm font-medium leading-5 bg-white hover:bg-white border rounded-lg transition-colors px-2 py-1"
        >
          <FunnelIcon class="inline h-4 w-4 text-gray-300 mr-2" />
          Filter
        </button>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div>
        <div class="card flex flex-col gap-8 border rounded-2xl p-6">
          <div>
            <h4 class="text-gray-400 mb-2">Gross volume</h4>
            <div>
              <span class="font-bold text-lg mr-2">$120,444</span>
              <span class="bg-[#E2F0EC] text-[#007E46] rounded-md">
                <ArrowUpRightIcon class="inline h-4 w-4" />
                4.9
              </span>
            </div>
            <!-- <BarChart /> -->
            <ApexChart />
          </div>
        </div>
      </div>

      <div>
        <div class="card flex flex-col gap-8 border rounded-2xl p-6">
          <div>
            <h4 class="text-gray-400 mb-2">Gross volume</h4>
            <div>
              <span class="font-bold text-lg mr-2">$120,444</span>
              <span class="bg-[#E2F0EC] text-[#007E46] rounded-md">
                <ArrowUpRightIcon class="inline h-4 w-4" />
                4.9
              </span>
            </div>
            <!-- <BarChart /> -->
            <ApexChart />
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-4">
      <div v-for="item in 3" :key="item">
        <div class="card flex flex-col gap-8 border rounded-2xl p-6">
          <div>
            <h4 class="text-gray-400 mb-2">Succeeded payments</h4>
            <div>
              <span class="font-bold text-lg mr-2">90,294</span>
              <span class="bg-green-400 text-green-700 rounded-md"> 4.9%</span>
            </div>
          </div>
        </div>
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
              <img
                alt="Method-MasterCard"
                src="@/assets/images/Mastercard.svg"
                width="35"
                height="24"
              />
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
