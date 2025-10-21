<template>
  <section id="sistema" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="text-green-600 font-semibold text-sm uppercase tracking-wider">Tecnología Innovadora</span>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
          Sistema Green Intelligent Wall
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          El sistema constructivo más avanzado y sustentable de Uruguay
        </p>
      </div>

      <!-- Key Features Grid -->
      <div class="grid md:grid-cols-3 gap-8 mb-16">
        <div v-for="feature in features" :key="feature.title" class="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100 hover-lift">
          <div class="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-3">{{ feature.title }}</h3>
          <p class="text-gray-600 mb-4">{{ feature.description }}</p>
          <ul class="space-y-2 text-sm text-gray-700">
            <li v-for="item in feature.items" :key="item" class="flex items-start">
              <span class="text-green-600 mr-2">✓</span>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Technical Specs -->
      <div class="bg-gray-900 text-white rounded-3xl p-10 md:p-16">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 class="text-3xl md:text-4xl font-bold mb-6">Especificaciones Técnicas</h3>
            <p class="text-gray-300 text-lg mb-8">
              Sistema constructivo industrializado que combina innovación tecnológica con respeto al medio ambiente.
            </p>

            <div class="space-y-4">
              <div v-for="spec in specs" :key="spec.title" class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-lg">{{ spec.title }}</h4>
                  <p class="text-gray-400">{{ spec.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div v-for="stat in stats" :key="stat.value" class="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <p class="text-4xl font-bold text-green-400 mb-2">{{ stat.value }}</p>
              <p class="text-sm text-gray-300">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    title: 'Eficiencia Energética',
    description: 'Aislación térmica superior que reduce hasta un 35% el consumo energético de tu hogar.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    items: [
      'Sin necesidad de aislantes adicionales',
      'Confort térmico durante todo el año'
    ]
  },
  {
    title: 'Aislación Acústica',
    description: 'Coeficiente de 49 decibelios que garantiza privacidad y tranquilidad absoluta.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    items: [
      'Bloqueo de ruido exterior',
      'Aislación entre ambientes'
    ]
  },
  {
    title: 'Sustentabilidad',
    description: 'Menor huella de carbono del mercado. 100% materiales nacionales y ecológicos.',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    items: [
      'Reducción de CO₂',
      'Construcción limpia'
    ]
  }
]

const specs = [
  {
    title: 'Resistencia Estructural',
    description: 'Certificado para construcción en altura y zonas sísmicas'
  },
  {
    title: 'Durabilidad Garantizada',
    description: 'Vida útil superior a 100 años con mantenimiento mínimo'
  },
  {
    title: 'Sin Patologías',
    description: 'Elimina humedad, rajaduras y problemas de construcción tradicional'
  }
]

const stats = [
  { value: '30%', label: 'Más Rápido' },
  { value: '30%', label: 'Más Económico' },
  { value: '35%', label: 'Menos Energía' },
  { value: '49 dB', label: 'Aislación' }
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
