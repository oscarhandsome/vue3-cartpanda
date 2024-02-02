<script lang="ts" setup></script>

<template>
  <div>
    <h1>Admin</h1>

    <router-link to="/admin" class="underline mr-2">Back</router-link>
    <router-link to="/admin/settings" class="underline">Open admin settings</router-link>

    <div class="border drop-shadow-sm p-2">
      Child rourte:

      <router-view></router-view>
    </div>
  </div>
</template>
