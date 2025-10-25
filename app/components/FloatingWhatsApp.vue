<template>
  <a
    href="https://wa.me/59894390000?text=Hola%20Parque%20Pinares%2C%20quisiera%20informaci%C3%B3n"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed bottom-8 right-8 z-40 group"
  >
    <div class="relative">
      <!-- Animated background circle -->
      <div class="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-pulse opacity-75"></div>

      <!-- Main button -->
      <div class="relative w-14 h-14 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 group">
        <Icon name="mdi:whatsapp" class="w-7 h-7 text-white" />
      </div>
    </div>

    <!-- Tooltip appears after 3 seconds -->
    <div class="absolute bottom-full right-0 mb-3 opacity-0 transition-opacity duration-500" :class="{ 'opacity-100': showTooltip }">
      <div class="bg-gray-900 text-white text-xs font-semibold py-2 px-4 rounded-lg whitespace-nowrap shadow-lg">
        ¡Chateá con nosotros!
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showTooltip = ref(false)

onMounted(() => {
  setTimeout(() => {
    showTooltip.value = true
  }, 3000)
})
</script>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 0.75;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
