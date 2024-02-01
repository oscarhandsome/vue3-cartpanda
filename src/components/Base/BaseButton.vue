<script lang="ts" setup></script>

<template>
  <button
    class="text-secondary text-sm font-medium leading-5 bg-white hover:bg-secondary hover:bg-opacity-20 hover:text-white border border-gray-dark rounded-lg transition-colors px-2 py-1"
    @click="$emit('clicked')"
  >
    <slot name="before-content" />
    Filter
  </button>
</template>
