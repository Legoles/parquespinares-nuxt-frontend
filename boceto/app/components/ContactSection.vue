<template>
  <section id="contacto" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="text-green-600 font-semibold text-sm uppercase tracking-wider">Contacto</span>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
          Conversemos sobre tu Proyecto
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Completa el formulario y te responderemos en menos de 24 horas
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <!-- Contact Form -->
        <div class="bg-white p-8 rounded-2xl shadow-lg">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Nombre completo</label>
              <input v-model="form.name" type="text" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition" placeholder="Juan Pérez" required>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input v-model="form.email" type="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition" placeholder="juan@ejemplo.com" required>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
              <input v-model="form.phone" type="tel" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition" placeholder="+598 99 123 456" required>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Tipo de proyecto</label>
              <select v-model="form.projectType" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition" required>
                <option value="vivienda">Vivienda unifamiliar</option>
                <option value="cooperativa">Proyecto cooperativa</option>
                <option value="inversion">Inversión inmobiliaria</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
              <textarea v-model="form.message" rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition" placeholder="Cuéntanos sobre tu proyecto..." required></textarea>
            </div>

            <button type="submit" class="w-full bg-green-600 text-white py-4 rounded-full font-bold text-lg hover:bg-green-700 transition shadow-lg hover:shadow-xl">
              Enviar Consulta
            </button>
          </form>
        </div>

        <!-- Contact Info -->
        <div class="space-y-8">
          <div v-for="info in contactInfo" :key="info.title" class="bg-white p-6 rounded-2xl shadow-sm flex items-start space-x-4">
            <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="info.icon"></path>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-1">{{ info.title }}</h3>
              <p class="text-gray-600">{{ info.value }}</p>
              <p class="text-sm text-gray-500 mt-1">{{ info.subtitle }}</p>
            </div>
          </div>

          <div class="bg-gradient-to-br from-green-600 to-green-800 p-8 rounded-2xl text-white">
            <h3 class="text-2xl font-bold mb-4">¿Necesitas Asesoramiento?</h3>
            <p class="text-green-50 mb-6">
              Agenda una videollamada gratuita con nuestro equipo técnico para discutir tu proyecto en detalle.
            </p>
            <a href="#" class="inline-flex items-center bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition">
              Agendar Videollamada
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  phone: '',
  projectType: 'vivienda',
  message: ''
})

const contactInfo = [
  {
    title: 'Teléfono',
    value: '+598 9x xxx xxx',
    subtitle: 'Lunes a Viernes: 9:00 - 18:00',
    icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
  },
  {
    title: 'Email',
    value: 'xxxxx@xxxxx.com',
    subtitle: 'Respondemos en 24 horas',
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
  {
    title: 'Ubicación',
    value: 'Montevideo, Uruguay',
    subtitle: 'Atendemos todo el país',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
  }
]

const handleSubmit = () => {
  alert('¡Gracias por tu consulta! Te contactaremos pronto.')
  form.value = {
    name: '',
    email: '',
    phone: '',
    projectType: 'vivienda',
    message: ''
  }
}
</script>
