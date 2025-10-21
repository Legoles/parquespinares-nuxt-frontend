<template>
  <section id="inicio" class="hero-gradient pt-32 pb-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Hero Content -->
        <div class="text-white fade-in">
          <span class="inline-block bg-white/20 glass px-4 py-2 rounded-full text-sm font-medium mb-6">
            🏆 Líderes en Construcción Sustentable desde 1998
          </span>
          <h2 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Construimos el Futuro
            <span class="block text-green-200">de Forma Sustentable</span>
          </h2>
          <p class="text-xl text-green-50 mb-8 leading-relaxed">
            Sistema constructivo Green Intelligent Wall: <strong>30% más rápido</strong>, <strong>30% más económico</strong> y con la <strong>menor huella de carbono</strong> del mercado uruguayo.
          </p>

          <!-- USPs -->
          <div class="grid grid-cols-3 gap-4 mb-8">
            <div class="glass rounded-lg p-4 text-center">
              <p class="text-3xl font-bold">30%</p>
              <p class="text-sm text-green-100">Más rápido</p>
            </div>
            <div class="glass rounded-lg p-4 text-center">
              <p class="text-3xl font-bold">30%</p>
              <p class="text-sm text-green-100">Más económico</p>
            </div>
            <div class="glass rounded-lg p-4 text-center">
              <p class="text-3xl font-bold">100%</p>
              <p class="text-sm text-green-100">Sustentable</p>
            </div>
          </div>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="#contacto" class="pulse-slow bg-white text-green-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition text-center">
              Solicitar Cotización
            </a>
            <a href="#sistema" class="glass px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition text-center">
              Ver Sistema GIW
            </a>
          </div>
        </div>

        <!-- Hero Image Placeholder -->
        <div class="hidden md:block">
          <div class="relative">
            <div class="aspect-square rounded-3xl bg-white/10 glass backdrop-blur-lg p-8 flex items-center justify-center">
              <svg class="w-full h-full text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <!-- Floating badges -->
            <div class="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
              <p class="text-sm text-gray-600">Certificado</p>
              <p class="text-2xl font-bold text-green-600">MVOT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-gradient {
  background: linear-gradient(135deg, #059669 0%, #047857 50%, #065f46 100%);
}

.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.fade-in {
  animation: fadeIn 0.8s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.pulse-slow {
  animation: pulse 3s infinite;
}
</style>
