<script lang="ts" setup>
import BaseBadge from './BaseBadge.vue'
</script>

<template>
  <div class="flex flex-col border rounded-2xl p-6">
    <h4 class="text-[#707581] mb-2">
      <slot name="card-name">Default name</slot>
    </h4>
    <div>
      <span class="font-bold text-[22px] text-secondary mr-2">
        <slot name="card-price">120,444</slot>
      </span>
      <BaseBadge class="bg-[#E2F0EC] text-[#007E46] rounded-md">
        <slot name="card-percent">4.9%</slot>
      </BaseBadge>
    </div>
    <slot name="default" />
  </div>
</template>
