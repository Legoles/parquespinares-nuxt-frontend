<template>
  <section class="py-12 md:py-24 bg-white" id="proyecto">
    <div class="container mx-auto px-4 md:px-6">
      <!-- Header -->
      <div class="text-center mb-8 md:mb-16">
        <!-- Logo -->
        <div class="flex justify-center mb-4 md:mb-6" data-aos="fade-up">
          <img src="/assets/logo.png" alt="Logo Parque Pinares" class="h-12 md:h-auto md:max-w-xs w-auto">
        </div>

        <!-- Decorative lines -->
        <div class="inline-flex items-center justify-center mb-4 md:mb-6 gap-2" data-aos="fade-up" data-aos-delay="50">
          <div class="h-1 w-12 md:w-16 bg-parque-lime rounded-full"></div>
          <div class="h-1 w-12 md:w-16 bg-parque-lime rounded-full"></div>
        </div>

        <!-- Title -->
        <h2 class="text-2xl md:text-4xl lg:text-5xl font-bold text-parque-dark mb-3 md:mb-4 leading-tight" data-aos="fade-up" data-aos-delay="100">
          Un lugar para vivir,<br class="hidden sm:block" />
          <span class="text-parque-lime">una inversión segura</span>
        </h2>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto mb-12 md:mb-16">
        <div
          v-for="feature in features"
          :key="feature.id"
          :data-aos="`fade-up`"
          :data-aos-delay="`${(feature.id - 1) * 50}`"
          class="bg-gradient-to-br from-white to-gray-50 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
        >
          <!-- Icon -->
          <div class="w-12 md:w-14 h-12 md:h-14 bg-parque-lime/10 rounded-xl flex items-center justify-center mb-4">
            <Icon :name="feature.icon" class="w-6 md:w-8 h-6 md:h-8 text-parque-lime" />
          </div>

          <!-- Title -->
          <h3 class="text-base md:text-lg font-semibold text-parque-dark mb-2">{{ feature.title }}</h3>

          <!-- Description -->
          <p class="text-gray-600 text-xs md:text-sm leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="text-center">
        <div class="inline-flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center bg-parque-lime/10 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <!-- Stat 1 -->
          <div class="text-center md:text-left w-full md:w-auto">
            <p class="text-2xl md:text-3xl font-bold text-parque-dark">21 casas vendidas</p>
            <p class="text-sm md:text-base text-gray-600">Únete a una comunidad consolidada</p>
          </div>

          <!-- Divider -->
          <div class="hidden md:block w-px h-12 bg-parque-lime/30"></div>
          <div class="md:hidden w-12 h-px bg-parque-lime/30"></div>

          <!-- Stat 2 -->
          <div class="text-center md:text-left w-full md:w-auto">
            <p class="text-2xl md:text-3xl font-bold text-parque-lime">100% terminado</p>
            <p class="text-sm md:text-base text-gray-600">Obra totalmente finalizada</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const features = ref([
  {
    id: 1,
    title: 'A dos cuadras de la playa',
    description: 'Ubicación privilegiada cerca del mar',
    icon: 'mdi:map-marker-distance'
  },
  {
    id: 2,
    title: 'A 15 minutos del centro',
    description: 'Cerca de todo y lejos del ruido',
    icon: 'mdi:clock'
  },
  {
    id: 3,
    title: 'Cámaras de seguridad',
    description: 'Vigilancia 24/7 para tu tranquilidad',
    icon: 'mdi:cctv'
  },
  {
    id: 4,
    title: 'Acceso privado y automático',
    description: 'Calles privadas y seguridad premium',
    icon: 'mdi:lock'
  },
  {
    id: 5,
    title: 'Riego automatizado',
    description: 'Mantenimiento de áreas verdes eficiente',
    icon: 'mdi:water-drop'
  },
  {
    id: 6,
    title: 'Electricidad subterránea',
    description: 'Para disfrutar del paisaje natural',
    icon: 'mdi:lightning-bolt'
  },
  {
    id: 7,
    title: 'Piscinas climatizadas',
    description: 'Para adultos y niños',
    icon: 'mdi:pool'
  },
  {
    id: 8,
    title: 'Club house completo',
    description: 'Apto para reuniones, hasta 50 personas',
    icon: 'mdi:home'
  },
  {
    id: 9,
    title: 'Canchas de pádel y tenis',
    description: 'Canchas blandas de Lisonda',
    icon: 'mdi:tennis'
  },
  {
    id: 10,
    title: 'Sala de juegos',
    description: 'Espacio de entretenimiento para toda la familia',
    icon: 'mdi:gamepad-variant'
  },
  {
    id: 11,
    title: 'Gimnasio',
    description: 'Con equipo de última generación',
    icon: 'mdi:dumbbell'
  },
  {
    id: 12,
    title: 'Vestuario',
    description: 'Para damas y caballeros',
    icon: 'mdi:hanger'
  }
])
</script>
