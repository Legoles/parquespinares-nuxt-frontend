<template>
  <section id="amenities" class="py-24 bg-gradient-to-b from-white to-gray-50">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12 fade-in">
          <h2 class="text-4xl md:text-5xl font-bold text-parque-dark mb-4">
            <span class="text-parque-lime">Amenities</span> Pensados para Tu Bienestar
          </h2>
          <p class="text-gray-600 text-lg max-w-2xl mx-auto">
            Infraestructura moderna donde la calidad de vida convive con la sustentabilidad del entorno
          </p>
        </div>
        <div class="hover-lift rounded-2xl overflow-hidden shadow-2xl">
          <img src="/assets/1.jpg" alt="Vista 3D de Amenities" class="w-full">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-in {
  animation: fadeIn 0.8s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}
</style>
