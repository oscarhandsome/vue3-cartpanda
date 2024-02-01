<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import LogoImage from '@/assets/images/logo.svg?component'
import LogoIconImage from '@/assets/images/logo-icon.svg?component'
</script>

<template>
  <router-link to="/" class="flex items-center relative cursor-pointer">
    <LogoImage class="h-6" />
    <LogoIconImage class="absolute top-[0] -right-3 h-[14px]" />
  </router-link>
</template>
