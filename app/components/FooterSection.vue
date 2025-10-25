<template>
  <footer class="bg-parque-dark text-white py-12">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <a href="#" @click.prevent="scrollToTop" class="mb-6 md:mb-0 cursor-pointer hover:opacity-80 transition-opacity">
          <img src="/assets/logo.png" alt="Parque Pinares Logo" class="h-16 md:h-20 object-contain opacity-70" style="filter: brightness(0) invert(1);">
        </a>
        <div class="text-center md:text-right">
          <p class="text-sm text-gray-400">
            &copy; 2025 Parque Pinares. Todos los derechos reservados.
          </p>
          <p class="text-xs text-gray-500 mt-2">
            Diseñado con pasión por la sustentabilidad
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
