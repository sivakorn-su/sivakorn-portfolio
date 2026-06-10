<script setup>
import { Analytics } from '@vercel/analytics/nuxt';
</script>
<template>
  <NuxtLoadingIndicator/>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
  <Analytics/>
</template>
