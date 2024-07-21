<template>
  <div class="flex flex-row">
    <SideNav />
    <div class="w-full h-full">
      <topNav />
      <div class="w-full h-full">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import topNav from '~/components/topNav.vue';

</script>

<style scoped></style>
