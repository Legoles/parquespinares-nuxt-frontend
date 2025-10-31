<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <SpeedInsights />
  </div>
</template>

<script setup>
import { SpeedInsights } from '@vercel/speed-insights/nuxt'
</script>
