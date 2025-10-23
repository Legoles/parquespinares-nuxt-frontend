<template>
  <header
    class="fixed w-full top-0 z-50 transition-all duration-300"
    :class="[
      isScrolled
        ? 'bg-white/95 backdrop-blur-lg shadow-lg'
        : 'bg-transparent'
    ]"
  >
    <nav class="container mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-3 group">
          <img
            src="/assets/logo.png"
            alt="Parque Pinares Logo"
            class="w-10 h-10 rounded-xl object-contain shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"
          />
          <div class="hidden sm:block">
            <p class="text-sm font-light tracking-wider" :class="isScrolled ? 'text-parque-dark' : 'text-white'">
              parque
              <span class="font-bold">pinares</span>
            </p>
            <p class="text-xs text-opacity-70" :class="isScrolled ? 'text-gray-500' : 'text-white'">
              Barrio Privado
            </p>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-2">
          <a
            href="#proyecto"
            @click="smoothScroll"
            class="px-4 py-2.5 text-sm font-medium transition-all duration-300 rounded-lg"
            :class="[
              isScrolled
                ? 'text-gray-700 hover:bg-parque-lime/10 hover:text-parque-lime'
                : 'text-white hover:bg-white/10'
            ]"
          >
            El Proyecto
          </a>
          <a
            href="#amenities"
            @click="smoothScroll"
            class="px-4 py-2.5 text-sm font-medium transition-all duration-300 rounded-lg"
            :class="[
              isScrolled
                ? 'text-gray-700 hover:bg-parque-lime/10 hover:text-parque-lime'
                : 'text-white hover:bg-white/10'
            ]"
          >
            Amenities
          </a>
          <a
            href="#contacto"
            @click="smoothScroll"
            class="ml-4 px-8 py-3 bg-gradient-to-r from-parque-lime via-parque-green to-parque-green text-white rounded-lg font-bold text-sm shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 transform whitespace-nowrap relative overflow-hidden group border border-white/20"
          >
            <span class="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span class="relative z-10 flex items-center justify-center">
              Contacto
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </span>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden p-2 rounded-lg transition-colors duration-300"
          :class="isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'"
        >
          <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition-all duration-300"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-300"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="isMobileMenuOpen"
          class="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-xl mt-2 mx-4 rounded-2xl overflow-hidden"
        >
          <div class="flex flex-col space-y-2 p-4">
            <a
              href="#proyecto"
              @click="handleMobileLink"
              class="px-4 py-3 text-gray-700 hover:bg-parque-lime/10 hover:text-parque-lime rounded-lg font-medium transition-colors duration-300"
            >
              El Proyecto
            </a>
            <a
              href="#amenities"
              @click="handleMobileLink"
              class="px-4 py-3 text-gray-700 hover:bg-parque-lime/10 hover:text-parque-lime rounded-lg font-medium transition-colors duration-300"
            >
              Amenities
            </a>
            <a
              href="#contacto"
              @click="handleMobileLink"
              class="px-4 py-3 bg-gradient-to-r from-parque-lime via-parque-green to-parque-green text-white rounded-lg font-bold transition-all duration-300 text-center relative overflow-hidden group border border-white/20"
            >
              <span class="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span class="relative z-10">
                Contacto
              </span>
            </a>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const smoothScroll = (e: Event) => {
  e.preventDefault()
  isMobileMenuOpen.value = false
  const target = (e.currentTarget as HTMLAnchorElement).getAttribute('href')
  if (target) {
    const element = document.querySelector(target)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}

const handleMobileLink = (e: Event) => {
  smoothScroll(e)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
