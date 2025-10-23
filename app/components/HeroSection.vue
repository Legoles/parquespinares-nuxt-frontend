<template>
  <section class="relative h-screen w-full overflow-hidden">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0">
      <img
        src="/assets/head.jpg"
        alt="Vista de la playa"
        class="w-full h-full object-cover"
      >
      <!-- Enhanced Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      <!-- Decorative gradient accent -->
      <div class="absolute inset-0 bg-gradient-to-r from-parque-green/20 to-parque-lime/10"></div>
    </div>

    <!-- Content Container -->
    <div class="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6">
      <div class="max-w-4xl space-y-6 md:space-y-8 animate-fade-in">
        <!-- Badge -->
        <div class="inline-flex items-center justify-center">
          <div class="relative inline-block">
            <div class="absolute inset-0 bg-gradient-to-r from-parque-lime to-parque-green rounded-full blur-xl opacity-40"></div>
            <span class="relative inline-block bg-gradient-to-r from-parque-lime to-parque-green text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-2xl backdrop-blur-sm">
              🎯 Últimas Oportunidades
            </span>
          </div>
        </div>

        <!-- Main Heading -->
        <div class="space-y-3">
          <h1 class="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white drop-shadow-2xl tracking-tighter leading-[1.1]">
            ÚLTIMOS<br class="hidden sm:block" />
            TERRENOS
          </h1>
          <div class="h-1 w-20 mx-auto bg-gradient-to-r from-parque-lime to-parque-green rounded-full"></div>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-parque-lime via-green-300 to-parque-lime bg-clip-text text-transparent">
            DISPONIBLES
          </h2>
        </div>

        <!-- Subtitle -->
        <p class="text-lg sm:text-xl md:text-2xl text-white/95 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
          A dos cuadras de la playa en un <br class="hidden sm:block" />
          <span class="font-semibold text-parque-lime">Barrio Privado Sustentable</span>
        </p>

        <!-- Trust Indicators -->
        <div class="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 pt-4">
          <div class="flex items-center justify-center space-x-2">
            <div class="w-2 h-2 bg-parque-lime rounded-full"></div>
            <span class="text-sm text-white/90 font-medium">21 casas vendidas</span>
          </div>
          <div class="hidden sm:block w-px h-5 bg-white/30"></div>
          <div class="flex items-center justify-center space-x-2">
            <div class="w-2 h-2 bg-parque-green rounded-full"></div>
            <span class="text-sm text-white/90 font-medium">100% terminado</span>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center pt-8 md:pt-12">
          <a
            href="#contacto"
            @click="handleClick"
            class="group relative px-8 sm:px-12 py-4 sm:py-5 bg-white text-parque-green font-bold text-base sm:text-lg rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <div class="absolute inset-0 bg-gradient-to-r from-parque-lime to-parque-green opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <span class="relative flex items-center justify-center">
              Conocé más
              <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </span>
          </a>

          <a
            href="#proyecto"
            @click="handleClick"
            class="group relative px-8 sm:px-12 py-4 sm:py-5 border-2 border-white text-white font-bold text-base sm:text-lg rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            <span class="flex items-center justify-center">
              Descubre el proyecto
              <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </span>
          </a>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div class="flex flex-col items-center space-y-2">
          <span class="text-white/70 text-xs font-semibold uppercase tracking-widest">Scroll</span>
          <svg class="w-5 h-5 text-white/70 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const handleClick = (e: Event) => {
  e.preventDefault()
  const target = (e.currentTarget as HTMLAnchorElement).getAttribute('href')
  if (target) {
    const element = document.querySelector(target)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}
</style>
