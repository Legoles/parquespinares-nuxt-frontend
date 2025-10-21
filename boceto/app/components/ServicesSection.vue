<template>
  <section id="servicios" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="text-green-600 font-semibold text-sm uppercase tracking-wider">Soluciones Integrales</span>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
          Servicios Llave en Mano
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Nos encargamos de todo el proceso: desde el diseño hasta la entrega final
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="service in services" :key="service.title" class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition">
          <div class="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
            <svg class="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.icon"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">{{ service.title }}</h3>
          <p class="text-gray-600">{{ service.description }}</p>
        </div>
      </div>

      <!-- Process Timeline -->
      <div class="mt-20">
        <h3 class="text-3xl font-bold text-center text-gray-900 mb-12">Nuestro Proceso de Trabajo</h3>
        <div class="grid md:grid-cols-5 gap-4">
          <div v-for="(step, index) in processSteps" :key="step.title" class="text-center">
            <div class="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              {{ index + 1 }}
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">{{ step.title }}</h4>
            <p class="text-sm text-gray-600">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Diseño Arquitectónico',
    description: 'Planos profesionales adaptados a tus necesidades y presupuesto. Optimización de espacios y funcionalidad.',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  },
  {
    title: 'Gestión de Permisos',
    description: 'Tramitamos todos los permisos municipales, DAT y autorizaciones necesarias para tu proyecto.',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    title: 'Construcción Completa',
    description: 'Ejecución de obra con mano de obra calificada. Control de calidad en cada etapa del proceso.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  },
  {
    title: 'Cooperativismo',
    description: 'Programas especiales para cooperativas de vivienda con capacitación y autoconstrucción asistida.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  }
]

const processSteps = [
  { title: 'Consulta Inicial', description: 'Analizamos tus necesidades y presupuesto' },
  { title: 'Diseño', description: 'Creamos el proyecto arquitectónico' },
  { title: 'Permisos', description: 'Gestionamos toda la documentación' },
  { title: 'Construcción', description: 'Ejecutamos la obra con calidad' },
  { title: 'Entrega', description: 'Tu casa lista para habitar' }
]
</script>
