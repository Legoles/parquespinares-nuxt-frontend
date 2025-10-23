<template>
  <header class="bg-white/95 backdrop-blur-md shadow-sm fixed w-full top-0 z-50 transition-all">
    <nav class="container mx-auto px-6 py-3">
      <div class="flex justify-between items-center">
        <a href="#" @click.prevent="scrollToTop" class="flex items-center cursor-pointer hover:opacity-80 transition-opacity">
          <img src="/assets/logo.png" alt="Parque Pinares Logo" class="h-10 w-auto">
        </a>
        <div class="hidden md:flex space-x-8 items-center">
          <a href="#proyecto" class="text-gray-700 hover:text-parque-lime transition-colors duration-300 font-medium text-sm">El proyecto</a>
          <a href="#amenities" class="text-gray-700 hover:text-parque-lime transition-colors duration-300 font-medium text-sm">Amenities</a>
          <a href="#contacto" class="px-8 py-3 bg-gradient-to-r from-parque-lime to-parque-green text-white rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300">Contacto</a>
        </div>
        <button class="md:hidden text-gray-700">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
