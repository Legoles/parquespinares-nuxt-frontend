<template>
  <section class="py-12 md:py-24 bg-gray-50" id="amenities">
    <div class="container mx-auto px-4 md:px-6">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-8 md:mb-12">
          <h2 class="text-2xl md:text-4xl lg:text-5xl font-bold text-parque-dark mb-3 md:mb-4" data-aos="fade-up">
            Galería de <span class="text-parque-lime">Imágenes</span>
          </h2>
          <p class="text-gray-600 text-base md:text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="50">
            Conocé los espacios y amenidades de Parque Pinares
          </p>
        </div>

        <!-- Carousel Container -->
        <div class="overflow-hidden relative group bg-white rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            ref="swiperRef"
            :modules="modules"
            :slides-per-view="1"
            :space-between="0"
            :pagination="{ clickable: true, type: 'bullets' }"
            :autoplay="autoplayConfig"
            :navigation="false"
            :touch-ratio="1"
            :touch-angle="45"
            :simulate-touch="true"
            :grab-cursor="true"
            :speed="300"
            class="mySwiper h-56 md:h-96 lg:h-[600px]"
            @swiper="onSwiperInit"
            @slide-change="onSlideChange"
            role="region"
            aria-label="Galería de imágenes del proyecto"
          >
            <SwiperSlide v-for="(image, index) in carouselImages" :key="index">
              <div
                class="relative w-full h-full cursor-pointer"
                @click="openLightbox(index)"
                :role="index === currentSlide ? 'img' : undefined"
                :aria-label="`Imagen ${index + 1} de ${carouselImages.length}. Haz click para ampliar.`"
              >
                <img
                  :src="image"
                  :alt="`Imagen ${index + 1} de ${carouselImages.length}`"
                  class="w-full h-full object-cover"
                  loading="lazy"
                >
                <!-- Subtle overlay on hover -->
                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>

                <!-- Zoom icon - Subtle -->
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div class="bg-white/80 text-parque-dark p-2 md:p-2.5 rounded-full shadow-lg flex items-center justify-center">
                    <Icon name="mdi:magnify-plus" class="w-4 md:w-5 h-4 md:h-5" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <!-- Navigation Buttons - Clean but visible -->
          <button
            @click.prevent="handlePrevSlide"
            class="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 md:p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-parque-lime group backdrop-blur-sm flex items-center justify-center"
            type="button"
            title="Imagen anterior (Flecha izquierda)"
            aria-label="Anterior"
          >
            <Icon name="mdi:chevron-left" class="w-5 md:w-6 h-5 md:h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            @click.prevent="handleNextSlide"
            class="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 md:p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-parque-lime group backdrop-blur-sm flex items-center justify-center"
            type="button"
            title="Imagen siguiente (Flecha derecha)"
            aria-label="Siguiente"
          >
            <Icon name="mdi:chevron-right" class="w-5 md:w-6 h-5 md:h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <!-- Bottom Controls - Elegant and accessible -->
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent pt-8 md:pt-12 pb-3 md:pb-4 px-4 md:px-6 z-10">
            <div class="flex items-center justify-between max-w-6xl mx-auto">
              <div class="flex items-center gap-3 md:gap-4">
                <!-- Play/Pause -->
                <button
                  @click="toggleAutoplay"
                  class="text-white/80 hover:text-white transition-colors p-1.5 md:p-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-parque-lime flex items-center justify-center"
                  :title="isAutoplayActive ? 'Pausar (P)' : 'Reanudar (P)'"
                  :aria-label="isAutoplayActive ? 'Pausar carrusel' : 'Reanudar carrusel'"
                >
                  <Icon v-if="isAutoplayActive" name="mdi:pause" class="w-4 md:w-5 h-4 md:h-5" aria-hidden="true" />
                  <Icon v-else name="mdi:play" class="w-4 md:w-5 h-4 md:h-5" aria-hidden="true" />
                </button>

                <!-- Counter -->
                <div class="text-white/80 text-xs md:text-sm font-medium" aria-live="polite">
                  {{ currentSlide + 1 }} / {{ carouselImages.length }}
                </div>
              </div>

              <!-- Fullscreen Button -->
              <button
                @click="openLightbox(currentSlide)"
                class="text-white hover:text-parque-lime transition-colors p-1.5 md:p-2.5 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-parque-lime flex items-center justify-center"
                title="Ampliar (Enter)"
                aria-label="Ampliar imagen a pantalla completa"
              >
                <Icon name="mdi:fullscreen" class="w-5 md:w-6 h-5 md:h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="showLightbox"
          class="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4"
          @click="closeLightbox"
          @touchmove.prevent
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada de imagen"
        >
          <!-- Close Button -->
          <button
            @click.stop="closeLightbox"
            class="absolute top-4 md:top-6 right-4 md:right-6 text-white/80 hover:text-white transition-colors p-2 md:p-3 z-[10000] flex items-center justify-center gap-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-parque-lime"
            title="Cerrar (ESC)"
            aria-label="Cerrar vista ampliada"
          >
            <span class="text-xs md:text-sm font-medium hidden sm:inline">Cerrar</span>
            <Icon name="mdi:close" class="w-5 md:w-6 h-5 md:h-6" />
          </button>

          <!-- Image Container -->
          <div
            class="relative w-full h-full flex items-center justify-center"
            @click.self="closeLightbox"
            @touchstart="handleTouchStart"
            @touchend="handleTouchEnd"
          >
            <img
              :src="carouselImages[lightboxIndex]"
              :alt="`Imagen ${lightboxIndex + 1}`"
              class="max-w-5xl max-h-[90vh] object-contain select-none pointer-events-none"
              loading="eager"
            >

            <!-- Counter -->
            <div class="absolute bottom-4 md:bottom-8 left-4 md:left-8 text-white text-xs md:text-sm opacity-70" aria-live="polite">
              {{ lightboxIndex + 1 }} / {{ carouselImages.length }}
            </div>

            <!-- Previous Button -->
            <button
              v-if="lightboxIndex > 0"
              @click.stop="lightboxIndex--"
              class="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors p-2 md:p-3 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-parque-lime z-[10000] flex items-center justify-center"
              title="Anterior (Flecha izquierda o desliza)"
              aria-label="Imagen anterior"
            >
              <Icon name="mdi:chevron-left" class="w-6 md:w-8 h-6 md:h-8" />
            </button>

            <!-- Next Button -->
            <button
              v-if="lightboxIndex < carouselImages.length - 1"
              @click.stop="lightboxIndex++"
              class="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors p-2 md:p-3 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-parque-lime z-[10000] flex items-center justify-center"
              title="Siguiente (Flecha derecha o desliza)"
              aria-label="Imagen siguiente"
            >
              <Icon name="mdi:chevron-right" class="w-6 md:w-8 h-6 md:h-8" />
            </button>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay, Keyboard } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

const modules = [Pagination, Autoplay, Keyboard]
const swiperRef = ref<any>(null)
let swiperInstance: SwiperType | null = null

const carouselImages = [
  '/carrousel/4.JPG',
  '/carrousel/5.jpg',
  '/carrousel/6.JPG',
  '/carrousel/7.JPG',
  '/carrousel/1.jpeg',
  '/carrousel/2.jpg',
  '/carrousel/3.jpg',
  '/carrousel/8.jpg',
]

const currentSlide = ref(0)
const isAutoplayActive = ref(true)
const showLightbox = ref(false)
const lightboxIndex = ref(0)

const autoplayConfig = reactive({
  delay: 5000,
  disableOnInteraction: false,
  pauseOnMouseEnter: true
})

const onSwiperInit = (swiper: any) => {
  swiperRef.value = swiper
  swiperInstance = swiper
  console.log('Swiper initialized:', swiper)
}

const onSlideChange = (swiper: SwiperType) => {
  currentSlide.value = swiper.activeIndex
}

const handlePrevSlide = () => {
  if (swiperInstance && typeof swiperInstance.slidePrev === 'function') {
    swiperInstance.slidePrev()
  }
}

const handleNextSlide = () => {
  if (swiperInstance && typeof swiperInstance.slideNext === 'function') {
    swiperInstance.slideNext()
  }
}

const toggleAutoplay = () => {
  if (!swiperInstance) return

  if (isAutoplayActive.value) {
    swiperInstance.autoplay?.stop()
    isAutoplayActive.value = false
  } else {
    swiperInstance.autoplay?.start()
    isAutoplayActive.value = true
  }
}

const openLightbox = (index: number) => {
  lightboxIndex.value = index
  showLightbox.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  showLightbox.value = false
  document.body.style.overflow = ''
}

let touchStartX = 0
let touchEndX = 0

const handleTouchStart = (e: TouchEvent) => {
  const touch = e.changedTouches[0]
  if (touch) touchStartX = touch.screenX
}

const handleTouchEnd = (e: TouchEvent) => {
  const touch = e.changedTouches[0]
  if (touch) {
    touchEndX = touch.screenX
    handleSwipe()
  }
}

const handleSwipe = () => {
  const diff = touchStartX - touchEndX
  const threshold = 50 // Mínimo de píxeles para considerar un swipe

  if (Math.abs(diff) > threshold) {
    if (diff > 0) {
      // Swipe izquierda = siguiente imagen
      if (lightboxIndex.value < carouselImages.length - 1) {
        lightboxIndex.value++
      }
    } else {
      // Swipe derecha = imagen anterior
      if (lightboxIndex.value > 0) {
        lightboxIndex.value--
      }
    }
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (!showLightbox.value) return

  switch (event.key) {
    case 'Escape':
      closeLightbox()
      break
    case 'ArrowLeft':
      if (lightboxIndex.value > 0) {
        lightboxIndex.value--
      }
      break
    case 'ArrowRight':
      if (lightboxIndex.value < carouselImages.length - 1) {
        lightboxIndex.value++
      }
      break
  }
}

const handleCarouselKeydown = (event: KeyboardEvent) => {
  if (showLightbox.value) return

  switch (event.key) {
    case 'p':
    case 'P':
      toggleAutoplay()
      break
    case 'Enter':
      openLightbox(currentSlide.value)
      break
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  document.addEventListener('keydown', handleCarouselKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.removeEventListener('keydown', handleCarouselKeydown)
})
</script>

<style scoped>
:deep(.swiper-pagination-bullet) {
  background: #3d6700;
  opacity: 0.4;
  transition: opacity 0.3s ease;
  width: 6px;
  height: 6px;
}

:deep(.swiper-pagination-bullet-active) {
  background: #3d6700;
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.mySwiper {
  width: 100%;
}
</style>
