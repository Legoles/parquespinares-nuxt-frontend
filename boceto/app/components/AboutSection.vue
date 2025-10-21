<template>
  <section id="nosotros" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="text-green-600 font-semibold text-sm uppercase tracking-wider">Quiénes Somos</span>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
          Pioneros en Construcción Sustentable
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Desde 1998 transformando la industria de la construcción con tecnología innovadora y compromiso ambiental
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <p class="text-lg text-gray-700 leading-relaxed">
            En <strong>GIWU</strong> nos apasiona construir casas llave en mano con el revolucionario Sistema Green Intelligent Wall. Trabajamos con <strong>familias, cooperativas y grupos de inversión</strong> que buscan concretar sus proyectos sin preocupaciones.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed">
            Nuestra trayectoria nace de la necesidad de resolver los problemas crónicos de la construcción tradicional: humedad en cimientos, rajaduras, deficiente aislación térmica y costos impredecibles.
          </p>

          <div class="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
            <p class="text-green-900 font-medium">
              "Desarrollamos un sistema constructivo evolucionado que utiliza 100% de mano de obra y materias primas nacionales, generando la menor huella de carbono por metro cuadrado del mercado."
            </p>
          </div>

          <div class="grid grid-cols-2 gap-4 pt-4">
            <div v-for="feature in features" :key="feature" class="flex items-start space-x-3">
              <svg class="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <p class="text-gray-700">{{ feature }}</p>
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="aspect-[4/3] rounded-2xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
            <svg class="w-32 h-32 text-green-600/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  'Tecnología Certificada MVOT',
  'Proyectos Llave en Mano',
  'Construcción Ecológica',
  'Cooperativismo'
]
</script>
