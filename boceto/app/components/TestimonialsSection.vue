<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="text-green-600 font-semibold text-sm uppercase tracking-wider">Testimonios</span>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
          Lo Que Dicen Nuestros Clientes
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="testimonial in testimonials" :key="testimonial.name" class="bg-white p-8 rounded-2xl shadow-sm">
          <div class="flex mb-4">
            <svg v-for="n in 5" :key="n" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>
          <p class="text-gray-700 mb-6 italic">
            "{{ testimonial.quote }}"
          </p>
          <div class="flex items-center">
            <div class="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
              {{ testimonial.initials }}
            </div>
            <div>
              <p class="font-semibold text-gray-900">{{ testimonial.name }}</p>
              <p class="text-sm text-gray-600">{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    name: 'María Rodríguez',
    role: 'Montevideo',
    initials: 'MR',
    quote: 'Excelente trabajo. La casa se construyó en tiempo récord y la calidad es impecable. La aislación térmica realmente hace la diferencia.'
  },
  {
    name: 'Carlos Pérez',
    role: 'Cooperativa La Unión',
    initials: 'CP',
    quote: 'Como cooperativa estamos muy satisfechos. El programa de autoconstrucción nos permitió ahorrar y aprender. Altamente recomendable.'
  },
  {
    name: 'Laura González',
    role: 'Inversora Inmobiliaria',
    initials: 'LG',
    quote: 'La inversión se recuperó más rápido de lo esperado. El sistema GIW redujo costos y los inquilinos valoran mucho la eficiencia energética.'
  }
]
</script>
