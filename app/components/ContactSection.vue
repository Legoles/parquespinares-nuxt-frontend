<template>
  <section class="py-12 md:py-24 lg:py-40 bg-gradient-to-br from-parque-green via-parque-green to-parque-dark relative overflow-hidden" id="contacto">
    <!-- Animated background elements -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
    </div>

    <!-- Floating accent elements -->
    <div class="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float"></div>
    <div class="absolute -bottom-20 -left-20 w-80 h-80 bg-parque-lime/15 rounded-full blur-3xl animate-float-delay"></div>

    <div class="container mx-auto px-4 md:px-6 relative z-10">
      <div class="max-w-5xl mx-auto">
        <!-- Form Card with Header -->
        <div class="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow-2xl overflow-hidden" data-aos="fade-up" data-aos-delay="150">
          <!-- Header Section WHITE -->
          <div class="px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 text-center border-b-2 md:border-b-3 border-parque-lime/40">
            <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-5 leading-tight" data-aos="fade-up" data-aos-delay="0">
              <span class="text-parque-green">¿Listo para vivir </span>
              <span class="text-parque-lime">tu sueño?</span>
            </h2>
            <p class="text-parque-dark text-sm md:text-base lg:text-lg font-medium leading-relaxed max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="50">
              Contactanos hoy y descubrí todas las oportunidades que tenemos para vos
            </p>
          </div>

          <!-- Form Section -->
          <div class="px-4 md:px-8 lg:px-16 py-6 md:py-8 lg:py-12">
            <!-- Error Message -->
            <div v-if="errorMessage" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p class="text-sm text-red-700">{{ errorMessage }}</p>
            </div>

            <form @submit.prevent="handleSubmit" @focus="onFormInteraction" @change="onFormInteraction" class="space-y-5 md:space-y-6">
              <!-- Honeypot field (anti-bot) - Hidden -->
              <input
                v-model="form.website"
                type="text"
                name="website"
                style="display: none;"
                autocomplete="off"
                tabindex="-1"
              >

              <!-- Name and Phone Row -->
              <div class="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label for="name" class="block text-xs md:text-sm font-medium text-gray-700 mb-1.5 md:mb-2">Nombre</label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    required
                    aria-required="true"
                    class="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-parque-lime focus:ring-1 focus:ring-parque-lime transition-all duration-200 placeholder:text-gray-400 text-sm md:text-base text-gray-900"
                  >
                </div>
                <div>
                  <label for="phone" class="block text-xs md:text-sm font-medium text-gray-700 mb-1.5 md:mb-2">Teléfono</label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    name="phone"
                    placeholder="Tu teléfono"
                    class="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-parque-lime focus:ring-1 focus:ring-parque-lime transition-all duration-200 placeholder:text-gray-400 text-sm md:text-base text-gray-900"
                  >
                </div>
              </div>

              <!-- Email Field -->
              <div>
                <label for="email" class="block text-xs md:text-sm font-medium text-gray-700 mb-1.5 md:mb-2">Email</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  name="email"
                  placeholder="tu@email.com"
                  required
                  aria-required="true"
                  class="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-parque-lime focus:ring-1 focus:ring-parque-lime transition-all duration-200 placeholder:text-gray-400 text-sm md:text-base text-gray-900"
                >
              </div>

              <!-- Message Field -->
              <div>
                <label for="message" class="block text-xs md:text-sm font-medium text-gray-700 mb-1.5 md:mb-2">Mensaje</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  name="message"
                  placeholder="Cuéntanos tu consulta..."
                  required
                  rows="4"
                  aria-required="true"
                  class="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-parque-lime focus:ring-1 focus:ring-parque-lime transition-all duration-200 resize-none placeholder:text-gray-400 text-sm md:text-base text-gray-900"
                ></textarea>
              </div>

              <!-- Privacy Checkbox -->
              <div class="flex items-start space-x-2 md:space-x-3">
                <input
                  v-model="form.privacy"
                  type="checkbox"
                  id="privacy"
                  class="mt-0.5 w-5 h-5 border border-gray-300 rounded cursor-pointer focus:ring-1 focus:ring-parque-lime accent-parque-lime flex-shrink-0"
                >
                <label for="privacy" class="text-xs md:text-sm text-gray-700 leading-relaxed cursor-pointer">
                  Acepto la <a href="#" class="text-parque-green font-medium hover:text-parque-lime transition-colors">Política de Privacidad</a> y el tratamiento de mis datos
                </label>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="isLoading"
                class="w-full bg-parque-lime hover:bg-parque-green disabled:bg-gray-400 text-white font-semibold text-sm md:text-base py-2.5 md:py-3 px-6 md:px-8 rounded-lg transition-all duration-200 hover:shadow-lg active:scale-95 disabled:cursor-not-allowed"
              >
                {{ isLoading ? 'Enviando...' : 'Enviar consulta' }}
              </button>
            </form>
          </div>
        </div>

        <!-- Success Message (hidden by default) -->
        <div v-if="isSubmitted" class="mt-8 p-6 bg-white rounded-xl text-center shadow-xl animate-in border-l-4 border-parque-lime" data-aos="zoom-in-up">
          <div class="flex items-center justify-center mb-3">
            <svg class="w-8 h-8 text-parque-lime animate-bounce" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
          </div>
          <p class="text-parque-green font-bold text-lg">
            ¡Gracias! Tu consulta fue enviada correctamente.
          </p>
          <p class="text-gray-600 text-sm mt-2">
            Nos pondremos en contacto pronto
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  phone: '',
  email: '',
  message: '',
  privacy: false,
  website: '' // Honeypot field
})

const isSubmitted = ref(false)
const isLoading = ref(false)
const errorMessage = ref('')
const formSubmitTime = ref<number | null>(null)

// Registrar tiempo cuando el usuario interactúa por primera vez
const onFormInteraction = () => {
  if (!formSubmitTime.value) {
    formSubmitTime.value = Date.now()
  }
}

const handleSubmit = async () => {
  // Anti-bot checks
  // 1. Honeypot: Si el campo website está lleno, es un bot
  if (form.value.website) {
    console.log('Bot detectado: honeypot field completo')
    return
  }

  // 2. Time check: Si se envía en menos de 2 segundos, probablemente sea un bot
  if (formSubmitTime.value && Date.now() - formSubmitTime.value < 2000) {
    errorMessage.value = 'Por favor espera un momento antes de enviar'
    return
  }

  // 3. Validar que privacy esté aceptado
  if (!form.value.privacy) {
    errorMessage.value = 'Debes aceptar la Política de Privacidad'
    return
  }

  isLoading.value = true
  errorMessage.value = ''

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        phone: form.value.phone,
        message: form.value.message
      })
    })

    if (!response.ok) {
      throw new Error('Error al enviar el formulario')
    }

    // Mostrar mensaje de éxito
    isSubmitted.value = true

    // Reset form
    form.value = {
      name: '',
      phone: '',
      email: '',
      message: '',
      privacy: false,
      website: ''
    }
    formSubmitTime.value = null

    // Ocultar mensaje después de 5 segundos
    setTimeout(() => {
      isSubmitted.value = false
    }, 5000)
  } catch (error) {
    errorMessage.value = 'Error al enviar el formulario. Intenta nuevamente.'
    console.error('Error:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-30px);
  }
}

@keyframes float-delay {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(30px);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-float-delay {
  animation: float-delay 10s ease-in-out infinite;
}

.animate-in {
  animation: slideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.animate-bounce {
  animation: bounce-slow 2s ease-in-out infinite;
}

/* Input focus animations */
:deep(input:focus),
:deep(textarea:focus) {
  box-shadow: 0 10px 30px rgba(61, 103, 0, 0.15);
}

/* Smooth transitions for all interactive elements */
:deep(input),
:deep(textarea) {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
