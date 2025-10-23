<template>
  <section class="py-24 md:py-40 bg-gradient-to-br from-parque-green via-parque-green to-parque-dark relative overflow-hidden" id="contacto">
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
        <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <!-- Header Section WHITE -->
          <div class="px-8 md:px-12 lg:px-16 py-14 md:py-16 text-center border-b-3 border-parque-lime/40">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
              <span class="text-parque-green">¿Listo para vivir </span>
              <span class="text-parque-lime">tu sueño?</span>
            </h2>
            <p class="text-parque-dark text-base md:text-lg font-medium leading-relaxed max-w-3xl mx-auto">
              Contactanos hoy y descubrí todas las oportunidades que tenemos para vos
            </p>
          </div>

          <!-- Form Section -->
          <div class="px-8 md:px-12 lg:px-16 pt-6 md:pt-8 pb-12 md:pb-16">
            <form @submit.prevent="handleSubmit" class="space-y-8">
              <!-- Name and Phone Row -->
              <div class="grid md:grid-cols-2 gap-6">
                <div class="group">
                  <label for="name" class="block text-sm font-semibold text-gray-900 mb-3 tracking-wide">Nombre completo</label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    name="name"
                    placeholder="Tu nombre completo"
                    required
                    aria-required="true"
                    class="w-full px-6 py-4 bg-gradient-to-b from-gray-50 to-gray-100 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-parque-lime focus:border-parque-lime focus:bg-white focus:shadow-lg transition-all duration-300 placeholder:text-gray-400 text-gray-900 font-medium group-hover:border-gray-300"
                  >
                </div>
                <div class="group">
                  <label for="phone" class="block text-sm font-semibold text-gray-900 mb-3 tracking-wide">Teléfono</label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    name="phone"
                    placeholder="Tu número de teléfono"
                    class="w-full px-6 py-4 bg-gradient-to-b from-gray-50 to-gray-100 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-parque-lime focus:border-parque-lime focus:bg-white focus:shadow-lg transition-all duration-300 placeholder:text-gray-400 text-gray-900 font-medium group-hover:border-gray-300"
                  >
                </div>
              </div>

              <!-- Email Field -->
              <div class="group">
                <label for="email" class="block text-sm font-semibold text-gray-900 mb-3 tracking-wide">Email</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  name="email"
                  placeholder="tu.email@ejemplo.com"
                  required
                  aria-required="true"
                  class="w-full px-6 py-4 bg-gradient-to-b from-gray-50 to-gray-100 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-parque-lime focus:border-parque-lime focus:bg-white focus:shadow-lg transition-all duration-300 placeholder:text-gray-400 text-gray-900 font-medium group-hover:border-gray-300"
                >
              </div>

              <!-- Message Field -->
              <div class="group">
                <label for="message" class="block text-sm font-semibold text-gray-900 mb-3 tracking-wide">Mensaje</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  name="message"
                  placeholder="Cuéntanos sobre tu proyecto o consulta..."
                  required
                  rows="6"
                  aria-required="true"
                  class="w-full px-6 py-4 bg-gradient-to-b from-gray-50 to-gray-100 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-parque-lime focus:border-parque-lime focus:bg-white focus:shadow-lg transition-all duration-300 resize-none placeholder:text-gray-400 text-gray-900 font-medium group-hover:border-gray-300"
                ></textarea>
              </div>

              <!-- Privacy Checkbox -->
              <div class="bg-gradient-to-r from-parque-lime/5 to-parque-green/5 rounded-xl p-5 border-2 border-parque-lime/20">
                <div class="flex items-start space-x-4">
                  <input
                    v-model="form.privacy"
                    type="checkbox"
                    id="privacy"
                    class="mt-1.5 w-6 h-6 text-parque-lime bg-white border-2 border-parque-green rounded-lg cursor-pointer focus:ring-2 focus:ring-parque-lime transition-all appearance-none checked:bg-gradient-to-r checked:from-parque-lime checked:to-parque-green"
                  >
                  <label for="privacy" class="text-sm text-gray-800 leading-relaxed cursor-pointer font-medium">
                    Acepto la <a href="#" class="text-parque-green font-bold hover:text-parque-lime transition-all duration-200 underline decoration-transparent hover:decoration-current">Política de Privacidad</a> y el tratamiento de mis datos personales
                  </label>
                </div>
              </div>

              <!-- Submit Button -->
              <div class="pt-4">
                <button
                  type="submit"
                  class="w-full bg-gradient-to-r from-parque-lime via-parque-green to-parque-green text-white font-bold text-lg py-5 px-8 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 active:scale-100 transition-all duration-300 ease-out relative overflow-hidden group border-2 border-transparent hover:border-white/30"
                >
                  <span class="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span class="relative z-10 flex items-center justify-center font-black tracking-wide">
                    Enviar consulta
                    <svg class="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <!-- Success Message (hidden by default) -->
        <div v-if="isSubmitted" class="mt-8 p-6 bg-white rounded-xl text-center shadow-xl animate-in border-l-4 border-parque-lime">
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
  privacy: false
})

const isSubmitted = ref(false)

const handleSubmit = async () => {
  console.log('Formulario enviado:', form.value)

  // Reset form and show success message
  isSubmitted.value = true

  // Reset form fields
  form.value = {
    name: '',
    phone: '',
    email: '',
    message: '',
    privacy: false
  }

  // Hide success message after 5 seconds
  setTimeout(() => {
    isSubmitted.value = false
  }, 5000)

  // Aquí iría la lógica para enviar el formulario
  // por ejemplo: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form.value) })
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
