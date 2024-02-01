<script lang="ts" setup>
import { defineAsyncComponent, computed } from 'vue'
const props = defineProps({
  name: String
})

const icon = computed(() => {
  return defineAsyncComponent(() => import(`../../assets/images/${props.name}.svg`))
})
</script>

<template>
  <component :is="icon" class="inline" />
</template>
