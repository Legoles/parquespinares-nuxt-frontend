<template>
  <section class="py-24 bg-gray-50" id="amenities">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="text-4xl md:text-5xl font-bold text-parque-dark mb-4">
            Nuestro <span class="text-parque-lime">Club House</span>
          </h2>
          <p class="text-gray-600 text-lg max-w-2xl mx-auto">
            Un espacio diseñado para compartir momentos únicos con familia y amigos
          </p>
        </div>
        <div class="hover-lift rounded-2xl overflow-hidden shadow-2xl" data-aos="zoom-in-up" data-aos-delay="200">
          <img src="/assets/2.jpg" alt="Club House" class="w-full">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}
</style>
