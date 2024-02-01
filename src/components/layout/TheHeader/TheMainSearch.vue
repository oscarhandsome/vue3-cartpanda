<script lang="ts" setup>
import SearchIcon from '@/assets/images/search.svg?component'
import CommandIcon from '@/assets/images/command.svg?component'
</script>

<template>
  <div class="flex items-center bg-[#F6F8FA] rounded-full w-[480px] px-4">
    <SearchIcon class="inline mr-3" />
    <input
      type="text"
      placeholder="Search"
      class="flex flex-grow text-sm text-[#091740] bg-transparent outline-none py-2 placeholder:text-[#091740]"
    />
    <CommandIcon class="opacity-50" />
  </div>
</template>
