<template>
  <nav class="fixed w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <a href="#inicio" class="flex items-center">
          <Logo class="h-16 w-auto" />
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-8">
          <a href="#inicio" class="text-gray-700 hover:text-green-600 font-medium transition">Inicio</a>
          <a href="#nosotros" class="text-gray-700 hover:text-green-600 font-medium transition">Nosotros</a>
          <a href="#sistema" class="text-gray-700 hover:text-green-600 font-medium transition">Sistema GIW</a>
          <a href="#servicios" class="text-gray-700 hover:text-green-600 font-medium transition">Servicios</a>
          <a href="#proyectos" class="text-gray-700 hover:text-green-600 font-medium transition">Proyectos</a>
          <a href="#contacto" class="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 font-medium transition">Contacto</a>
        </div>

        <!-- Mobile menu button -->
        <button class="md:hidden text-gray-700" @click="toggleMenu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="isMenuOpen" class="md:hidden bg-white border-t">
      <div class="px-4 py-4 space-y-3">
        <a href="#inicio" class="block text-gray-700 hover:text-green-600 font-medium" @click="toggleMenu">Inicio</a>
        <a href="#nosotros" class="block text-gray-700 hover:text-green-600 font-medium" @click="toggleMenu">Nosotros</a>
        <a href="#sistema" class="block text-gray-700 hover:text-green-600 font-medium" @click="toggleMenu">Sistema GIW</a>
        <a href="#servicios" class="block text-gray-700 hover:text-green-600 font-medium" @click="toggleMenu">Servicios</a>
        <a href="#proyectos" class="block text-gray-700 hover:text-green-600 font-medium" @click="toggleMenu">Proyectos</a>
        <a href="#contacto" class="block bg-green-600 text-white px-6 py-3 rounded-full text-center font-medium" @click="toggleMenu">Contacto</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Close menu on scroll
if (process.client) {
  window.addEventListener('scroll', () => {
    if (isMenuOpen.value) {
      isMenuOpen.value = false
    }
  })
}
</script>
