<template>
  <section id="proyectos" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="text-green-600 font-semibold text-sm uppercase tracking-wider">Portfolio</span>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
          Proyectos Realizados
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Más de 500 familias confían en nosotros para construir sus hogares
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="project in projects" :key="project.title" class="group rounded-2xl overflow-hidden shadow-lg hover-lift">
          <div class="aspect-[4/3] flex items-center justify-center" :class="project.bgClass">
            <svg class="w-24 h-24" :class="project.iconClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" :d="project.icon"></path>
            </svg>
          </div>
          <div class="p-6 bg-white">
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <div class="flex items-center text-sm text-green-600 font-medium">
              Ver proyecto
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-2 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'Casa Familiar en Montevideo',
    description: 'Vivienda de 120m² con sistema GIW. Entregada en 90 días.',
    bgClass: 'bg-gradient-to-br from-green-200 to-green-300',
    iconClass: 'text-green-600/40',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
  },
  {
    title: 'Complejo Cooperativa',
    description: '40 viviendas con programa de autoconstrucción asistida.',
    bgClass: 'bg-gradient-to-br from-blue-200 to-blue-300',
    iconClass: 'text-blue-600/40',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  },
  {
    title: 'Inversión Inmobiliaria',
    description: '8 dúplex para alquiler. ROI optimizado con GIW.',
    bgClass: 'bg-gradient-to-br from-purple-200 to-purple-300',
    iconClass: 'text-purple-600/40',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
  }
]
</script>

<style scoped>
.hover-lift {
  transition: all 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}
</style>
