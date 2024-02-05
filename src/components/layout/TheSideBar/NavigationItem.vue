<script lang="ts" setup>
defineProps({
  item: {
    type: Object,
    requred: true
  }
})
defineEmits(['navigate-to'])
</script>

<template>
  <RouterLink
    :to="{ name: `${item.name.toLowerCase()}` }"
    class="flex items-center text-sm text-secondary text-nowrap rounded-xl transition border border-transparent hover:bg-white hover:border-gray-dark px-3 py-2"
    :class="{ 'bg-white border border-[#E2E8EB] font-medium': item.active }"
    @click="$emit('navigate-to', item.name)"
  >
    <slot />
    {{ item.name }}
  </RouterLink>
</template>
