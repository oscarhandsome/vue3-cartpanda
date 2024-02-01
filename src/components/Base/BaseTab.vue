<script lang="ts" setup>
import { ref } from 'vue'
defineProps({
  title: {
    type: String,
    default: 'Tab'
  }
})

const isActive = ref(true)
</script>

<template>
  <div v-show="isActive">
    <slot></slot>
  </div>
</template>
