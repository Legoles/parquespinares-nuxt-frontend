<template>
  <section class="py-24 bg-white" id="proyecto">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <div class="flex justify-center mb-6">
          <img src="/assets/logo.png" alt="Logo Parque Pinares" class="max-w-xs h-auto">
        </div>
        <div class="inline-flex items-center justify-center mb-6">
          <div class="h-1 w-16 bg-parque-lime rounded-full"></div>
          <div class="h-1 w-16 bg-parque-lime rounded-full"></div>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-parque-dark mb-4">
          Un lugar para vivir,<br>
          <span class="text-parque-lime">una inversión segura</span>
        </h2>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div v-for="feature in features" :key="feature.id" class="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
          <div class="w-14 h-14 bg-parque-lime/10 rounded-xl flex items-center justify-center mb-4">
            <Icon :name="feature.icon" class="w-8 h-8 text-parque-lime" />
          </div>
          <h3 class="text-lg font-semibold text-parque-dark mb-2">{{ feature.title }}</h3>
          <p class="text-gray-600 text-sm">{{ feature.description }}</p>
        </div>
      </div>

      <div class="mt-16 text-center">
        <div class="inline-flex flex-col md:flex-row gap-4 items-center justify-center bg-parque-lime/10 rounded-2xl p-8 max-w-3xl mx-auto">
          <div class="text-center md:text-left">
            <p class="text-3xl font-bold text-parque-dark">21 casas vendidas</p>
            <p class="text-gray-600">Únete a una comunidad consolidada</p>
          </div>
          <div class="hidden md:block w-px h-12 bg-parque-lime/30"></div>
          <div class="text-center md:text-left">
            <p class="text-3xl font-bold text-parque-lime">100% terminado</p>
            <p class="text-gray-600">Obra totalmente finalizada</p>
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
    description: 'Conectividad ideal con todas las comodidades',
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
    title: 'Acceso controlado portería',
    description: 'Seguridad premium y control de accesos',
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
    description: 'Infraestructura moderna y estética',
    icon: 'mdi:lightning-bolt'
  },
  {
    id: 7,
    title: 'Piscinas climatizadas',
    description: 'Disfruta todo el año del confort',
    icon: 'mdi:pool'
  },
  {
    id: 8,
    title: 'Club house completo',
    description: 'Sala de juegos, gimnasio y vestuarios',
    icon: 'mdi:home'
  },
  {
    id: 9,
    title: 'Canchas de pádel y tenis',
    description: 'Espacios deportivos de primer nivel',
    icon: 'mdi:tennis'
  }
])
</script>
