<template>
  <header class="bg-white/95 backdrop-blur-md shadow-sm fixed w-full top-0 z-50 transition-all">
    <nav class="container mx-auto px-4 md:px-6 py-4 md:py-3">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <a href="#" @click.prevent="scrollToTop" class="flex items-center cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0">
          <img src="/assets/logo.png" alt="Parque Pinares Logo" class="h-8 md:h-10 w-auto">
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-8 items-center">
          <a
            href="#proyecto"
            class="text-gray-700 hover:text-parque-lime transition-colors duration-300 font-medium text-sm"
          >
            El proyecto
          </a>
          <a
            href="#amenities"
            class="text-gray-700 hover:text-parque-lime transition-colors duration-300 font-medium text-sm"
          >
            Amenities
          </a>
          <a
            href="#contacto"
            class="px-8 py-3 bg-gradient-to-r from-parque-lime to-parque-green text-white rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contacto
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden flex items-center gap-2 text-gray-700 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
          :aria-expanded="isMenuOpen"
          aria-label="Abrir menú"
        >
          <span class="text-sm font-semibold">Menú</span>
          <svg
            v-if="!isMenuOpen"
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <svg
            v-else
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition name="slide-down">
        <div
          v-if="isMenuOpen"
          class="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4 space-y-3"
        >
          <a
            href="#proyecto"
            @click="isMenuOpen = false"
            class="block px-4 py-3 text-gray-700 hover:text-parque-lime hover:bg-gray-50 rounded-lg transition-all duration-300 font-medium text-sm"
          >
            El proyecto
          </a>
          <a
            href="#amenities"
            @click="isMenuOpen = false"
            class="block px-4 py-3 text-gray-700 hover:text-parque-lime hover:bg-gray-50 rounded-lg transition-all duration-300 font-medium text-sm"
          >
            Amenities
          </a>
          <a
            href="#contacto"
            @click="isMenuOpen = false"
            class="block px-4 py-3 bg-gradient-to-r from-parque-lime to-parque-green text-white rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 text-center"
          >
            Contacto
          </a>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  isMenuOpen.value = false
}
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
