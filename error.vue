<template>
  <div>
    <h1>{{ error.statusCode }}</h1>
    <p>{{ error.statusMessage }}</p>
    <NuxtLink to="/">Go back home</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{
  error: NuxtError;
}>();
</script>

<style scoped></style>
