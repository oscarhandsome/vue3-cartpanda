<script lang="ts" setup>
defineProps<{ active?: boolean }>()
</script>

<template>
  <button
    class="text-secondary text-sm font-medium leading-5 bg-transparent hover:bg-secondary hover:bg-opacity-20 hover:text-white outline-none rounded-lg transition-colors px-2 py-1"
    :class="{ 'bg-white border border-gray-dark': active }"
    @click="$emit('clicked')"
  >
    <slot name="before-content" />
    <slot />
  </button>
</template>
