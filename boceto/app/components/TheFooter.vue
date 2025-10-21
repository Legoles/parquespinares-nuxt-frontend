<template>
  <footer class="bg-gray-900 text-gray-300 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-4 gap-12 mb-12">
        <!-- Company Info -->
        <div>
          <div class="mb-6">
            <Logo class="h-12 w-auto [&_path]:!fill-white" />
          </div>
          <p class="text-sm leading-relaxed mb-4">
            Construcción sustentable e innovadora desde 1998. Comprometidos con el medio ambiente y tu futuro.
          </p>
          <div class="flex space-x-4">
            <a href="https://www.facebook.com/giwuruguay/" target="_blank" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
              </svg>
            </a>
          </div>
        </div>

        <!-- Links Column 1 -->
        <div>
          <h4 class="text-white font-semibold mb-4">Empresa</h4>
          <ul class="space-y-3 text-sm">
            <li><a href="#nosotros" class="hover:text-green-400 transition">Quiénes Somos</a></li>
            <li><a href="#sistema" class="hover:text-green-400 transition">Sistema GIW</a></li>
            <li><a href="#proyectos" class="hover:text-green-400 transition">Proyectos</a></li>
            <li><a href="#" class="hover:text-green-400 transition">Blog</a></li>
          </ul>
        </div>

        <!-- Links Column 2 -->
        <div>
          <h4 class="text-white font-semibold mb-4">Servicios</h4>
          <ul class="space-y-3 text-sm">
            <li><a href="#servicios" class="hover:text-green-400 transition">Casas Llave en Mano</a></li>
            <li><a href="#servicios" class="hover:text-green-400 transition">Cooperativas</a></li>
            <li><a href="#servicios" class="hover:text-green-400 transition">Inversión Inmobiliaria</a></li>
            <li><a href="#contacto" class="hover:text-green-400 transition">Asesoramiento</a></li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h4 class="text-white font-semibold mb-4">Newsletter</h4>
          <p class="text-sm mb-4">Recibe novedades sobre construcción sustentable</p>
          <form @submit.prevent="handleNewsletter" class="space-y-3">
            <input v-model="newsletterEmail" type="email" placeholder="tu@email.com" class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none text-sm" required>
            <button type="submit" class="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition text-sm">
              Suscribirse
            </button>
          </form>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
        <p class="text-gray-400">
          © 2025 GIWU - Green Intelligent Wall Uruguay. Todos los derechos reservados.
        </p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <a href="#" class="text-gray-400 hover:text-green-400 transition">Privacidad</a>
          <a href="#" class="text-gray-400 hover:text-green-400 transition">Términos</a>
          <a href="#" class="text-gray-400 hover:text-green-400 transition">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const newsletterEmail = ref('')

const handleNewsletter = () => {
  alert('¡Gracias por suscribirte!')
  newsletterEmail.value = ''
}
</script>
