<template>
  <section class="relative h-screen overflow-hidden">
    <div class="absolute inset-0 image-wrapper">
      <!-- Background image with continuous motion -->
      <img
        src="/assets/head.jpg"
        alt="Vista de la playa"
        class="w-full h-full object-cover image-animate"
      >

      <!-- Main overlay - radial gradient for better text contrast -->
      <div class="absolute inset-0" style="background: radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.2) 100%);"></div>

      <!-- Animated gradient layer - visible movement -->
      <div class="absolute inset-0 animate-[subtleShift_10s_ease-in-out_infinite] opacity-60">
        <div class="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/10"></div>
      </div>

      <!-- Floating accent lights - more visible -->
      <div class="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-br from-white/8 to-transparent rounded-full blur-3xl animate-[gentleFloat_14s_ease-in-out_infinite]"></div>
      <div class="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tl from-white/6 to-transparent rounded-full blur-3xl animate-[gentleFloat_16s_ease-in-out_infinite_2s]"></div>

      <!-- Vignette for depth -->
      <div class="absolute inset-0 bg-radial-vignette opacity-40"></div>
    </div>
    <div class="relative h-full flex flex-col justify-center items-center text-center px-4 md:px-6">
      <div class="fade-in space-y-4 md:space-y-6 max-w-4xl w-full">
        <!-- Badge -->
        <span class="inline-block bg-parque-lime text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest shadow-2xl" data-aos="fade-up" data-aos-delay="0">
          Últimas Oportunidades
        </span>

        <!-- Main Title -->
        <h1 class="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight" style="text-shadow: 0 1px 3px rgba(0,0,0,0.2);" data-aos="fade-up" data-aos-delay="50">
          <span class="text-white block">ÚLTIMOS</span>
          <span class="text-white block">TERRENOS</span>
          <span class="text-lime-400 block">DISPONIBLES</span>
        </h1>

        <!-- Subtitle -->
        <p class="text-base md:text-lg lg:text-xl text-white font-light px-2" style="text-shadow: 0 1px 2px rgba(0,0,0,0.15);" data-aos="fade-up" data-aos-delay="100">
          A dos cuadras de la playa<br class="md:hidden"> en Barrio Privado Sustentable
        </p>

        <!-- CTA Button -->
        <div class="pt-2 md:pt-6" data-aos="fade-up" data-aos-delay="150">
          <a
            href="#contacto"
            class="inline-block bg-white text-parque-green px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 active:scale-95"
          >
            Conocé más
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.image-wrapper {
  overflow: hidden;
}

.image-animate {
  animation: imageFlow 20s linear infinite !important;
  transform-origin: center center;
}

.fade-in {
  animation: fadeIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

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

/* Image zoom animation - subtle and slow */
@keyframes imageFlow {
  0% {
    transform: scale(1) translate(0, 0);
  }
  25% {
    transform: scale(1.03) translate(8px, -8px);
  }
  50% {
    transform: scale(1.05) translate(-10px, 10px);
  }
  75% {
    transform: scale(1.03) translate(8px, -8px);
  }
  100% {
    transform: scale(1) translate(0, 0);
  }
}

/* Continuous gradient shift - visible movement */
@keyframes subtleShift {
  0%, 100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(40px, -30px);
  }
  50% {
    transform: translate(-30px, 40px);
  }
  75% {
    transform: translate(25px, -25px);
  }
}

/* Floating animation - visible movement in loop */
@keyframes gentleFloat {
  0%, 100% {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(-35px);
  }
  50% {
    transform: translateY(35px);
  }
  75% {
    transform: translateY(-20px);
  }
}

/* Radial vignette effect */
.bg-radial-vignette {
  background: radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%);
}

/* Accessibility: respect prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  [class*="animate-"] {
    animation: none !important;
  }
}
</style>
