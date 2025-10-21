<template>
  <section class="bg-white py-8 border-b">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-wrap justify-around items-center gap-8 text-center">
        <div v-for="stat in stats" :key="stat.value">
          <p class="text-4xl font-bold text-green-600">{{ stat.value }}</p>
          <p class="text-sm text-gray-600">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '26+', label: 'Años de Experiencia' },
  { value: '500+', label: 'Proyectos Completados' },
  { value: '100%', label: 'Materiales Nacionales' },
  { value: '49 dB', label: 'Aislación Acústica' }
]
</script>
