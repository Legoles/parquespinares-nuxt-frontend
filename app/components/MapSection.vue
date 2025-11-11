<template>
  <section class="bg-white" :class="{ 'fixed inset-0 z-50 fullscreen-map-active': isFullscreen, 'py-12 md:py-24': !isFullscreen }">
    <div class="h-full" :class="{ 'container mx-auto px-4 md:px-6': !isFullscreen }">
      <div v-if="!isFullscreen" class="text-center mb-6 md:mb-12" data-aos="fade-up">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-parque-dark mb-4 md:mb-8">
          Terrenos Barrio <span class="text-parque-lime">Privado</span>
        </h2>
      </div>

      <!-- Map Interactive -->
      <div class="w-full h-full" :class="{ 'mx-auto': !isFullscreen }">
        <div class="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col" :class="[isFullscreen ? 'h-screen' : 'h-full', { 'rounded-none': isFullscreen }]" data-aos="fade-up" data-aos-delay="50">
          <!-- Header con instrucciones -->
          <div v-if="!isFullscreen" class="bg-gray-50 border-b px-4 md:px-8 py-2 md:py-3">
            <p class="text-gray-600 text-xs font-semibold uppercase tracking-wide text-center leading-relaxed">
              <span class="block sm:inline">Usa la ruedita para zoom • Arrastra para navegar</span>
              <span class="block sm:inline sm:before:content-['•'] sm:before:mx-2">Doble click para reiniciar</span>
            </p>
          </div>

          <!-- Map Container -->
          <div class="relative flex-1">
            <div class="map-container overflow-hidden bg-gray-100 w-full" :class="isFullscreen ? 'h-full' : 'h-56 sm:h-64 md:h-80 lg:h-96'" ref="mapContainer">
              <img
                v-if="mapImageUrl"
                ref="mapImage"
                :key="mapImageUrl"
                :src="mapImageUrl"
                alt="Plan maestro interactivo del proyecto Parque Pinares"
                class="select-none cursor-grab active:cursor-grabbing"
                draggable="false"
              >
            </div>

            <!-- Control Buttons -->
            <div class="absolute bottom-4 md:bottom-6 right-4 md:right-6 flex flex-col gap-2 z-10">
              <button
                @click="zoomIn"
                class="bg-parque-lime text-white w-10 md:w-12 h-10 md:h-12 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 flex items-center justify-center"
                aria-label="Aumentar zoom"
                title="Aumentar zoom (+)"
              >
                <span class="text-lg md:text-2xl font-bold">+</span>
              </button>

              <button
                @click="zoomOut"
                class="bg-parque-lime text-white w-10 md:w-12 h-10 md:h-12 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 flex items-center justify-center"
                aria-label="Reducir zoom"
                title="Reducir zoom (-)"
              >
                <span class="text-2xl md:text-3xl font-bold leading-none">−</span>
              </button>

              <button
                @click="resetMap"
                class="bg-parque-dark text-white w-10 md:w-12 h-10 md:h-12 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 flex items-center justify-center"
                aria-label="Reiniciar vista"
                title="Reiniciar vista"
              >
                <svg class="w-5 md:w-6 h-5 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 12a8 8 0 018-8V2.5M4 12a8 8 0 008 8v1.5M20 12a8 8 0 01-8 8M20 12a8 8 0 00-8-8" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>

              <button
                @click="toggleFullscreen"
                class="bg-parque-green text-white w-10 md:w-12 h-10 md:h-12 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 flex items-center justify-center"
                aria-label="Pantalla completa"
                title="Pantalla completa"
              >
                <svg v-if="!isFullscreen" class="w-5 md:w-6 h-5 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                </svg>
                <svg v-else class="w-5 md:w-6 h-5 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>
                </svg>
              </button>
            </div>

            <!-- Zoom Level Indicator -->
            <div class="absolute top-4 md:top-6 left-4 md:left-6 bg-white/90 backdrop-blur px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold text-parque-dark shadow-lg">
              {{ zoomLevel.toFixed(1) }}x
            </div>
          </div>

          <!-- Legend improved - Normal view -->
          <div v-if="!isFullscreen" class="bg-gray-50 px-4 md:px-8 py-4 border-t">
            <p class="text-xs font-semibold text-gray-600 uppercase mb-3">Índice</p>
            <div class="flex flex-wrap items-center gap-4 md:gap-8">
              <div class="flex items-center gap-2 md:gap-3">
                <div class="w-5 md:w-6 h-5 md:h-6 bg-[#01B937] rounded-lg shadow-sm flex-shrink-0"></div>
                <span class="text-xs md:text-sm text-gray-700 font-medium">Terreno Disponible</span>
              </div>
              <div class="flex items-center gap-2 md:gap-3">
                <div class="w-5 md:w-6 h-5 md:h-6 bg-[#FF979C] rounded-lg shadow-sm flex-shrink-0"></div>
                <span class="text-xs md:text-sm text-gray-700 font-medium">Casas Construidas</span>
              </div>
              <div class="flex items-center gap-2 md:gap-3">
                <div class="w-5 md:w-6 h-5 md:h-6 bg-[#E2AD8B] rounded-lg shadow-sm flex-shrink-0"></div>
                <span class="text-xs md:text-sm text-gray-700 font-medium">Amenities</span>
              </div>
            </div>
          </div>

          <!-- Legend improved - Fullscreen view (floating) -->
          <div v-if="isFullscreen" class="absolute bottom-6 left-6 bg-white/95 backdrop-blur px-6 py-5 rounded-lg shadow-xl z-20">
            <p class="text-xs font-semibold text-gray-600 uppercase mb-3">Leyenda</p>
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <div class="w-5 h-5 bg-green-500 rounded shadow-sm"></div>
                <span class="text-xs text-gray-700 font-medium">Terreno Disponible</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-5 h-5 bg-red-300 rounded shadow-sm"></div>
                <span class="text-xs text-gray-700 font-medium">Casas Construidas</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-5 h-5 bg-orange-700 rounded shadow-sm"></div>
                <span class="text-xs text-gray-700 font-medium">Amenities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import panzoom from 'panzoom'

const mapContainer = ref<HTMLElement | null>(null)
const mapImage = ref<HTMLImageElement | null>(null)
const zoomLevel = ref(1)
const isFullscreen = ref(false)
const mapImageUrl = ref('')
let panzoomInstance: ReturnType<typeof panzoom> | null = null

const zoomIn = () => {
  if (panzoomInstance) {
    const transform = panzoomInstance.getTransform()
    const newZoom = Math.min(transform.scale * 1.2, 15)
    panzoomInstance.smoothZoom(0, 0, newZoom / transform.scale)
    zoomLevel.value = newZoom
  }
}

const zoomOut = () => {
  if (panzoomInstance) {
    const transform = panzoomInstance.getTransform()
    const newZoom = Math.max(transform.scale / 1.2, 1)
    panzoomInstance.smoothZoom(0, 0, newZoom / transform.scale)
    zoomLevel.value = newZoom
  }
}

const resetMap = () => {
  if (panzoomInstance && mapImage.value && mapContainer.value) {
    zoomLevel.value = 1

    // Centrar la imagen
    requestAnimationFrame(() => {
      if (panzoomInstance && mapImage.value && mapContainer.value) {
        const containerWidth = mapContainer.value.offsetWidth
        const containerHeight = mapContainer.value.offsetHeight
        const imgWidth = mapImage.value.offsetWidth
        const imgHeight = mapImage.value.offsetHeight

        const x = (containerWidth - imgWidth) / 2
        const y = (containerHeight - imgHeight) / 2

        panzoomInstance.smoothMoveTo(x, y)
      }
    })
  }
}

const toggleFullscreen = () => {
  isFullscreen.value = !isFullscreen.value
}

const centerMapInContainer = () => {
  if (panzoomInstance && mapImage.value && mapContainer.value) {
    requestAnimationFrame(() => {
      if (panzoomInstance && mapImage.value && mapContainer.value) {
        const containerWidth = mapContainer.value.offsetWidth
        const containerHeight = mapContainer.value.offsetHeight
        const imgWidth = mapImage.value.offsetWidth
        const imgHeight = mapImage.value.offsetHeight

        const x = (containerWidth - imgWidth) / 2
        const y = (containerHeight - imgHeight) / 2

        panzoomInstance.smoothMoveTo(x, y)
      }
    })
  }
}

// Watch para recentrar cuando entra/sale de fullscreen
watch(isFullscreen, () => {
  setTimeout(() => {
    centerMapInContainer()
  }, 100)
})

onMounted(async () => {
  // Cargar URL de la imagen desde el API
  try {
    const response = await $fetch('/api/get-map-url')
    mapImageUrl.value = response.url || '/assets/plano.jpg'
  } catch (err) {
    // Si falla, usar imagen por defecto
    mapImageUrl.value = '/assets/plano.jpg'
  }

  // Escuchar cambios de imagen desde la página admin
  window.addEventListener('mapImageUpdated', async (event: any) => {
    const newUrl = event.detail.url || '/assets/plano.jpg'

    // Precargar la imagen antes de actualizar el estado
    try {
      await new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => resolve(true)
        img.onerror = () => reject(new Error('Error al cargar imagen'))
        img.src = newUrl
      })

      mapImageUrl.value = newUrl
    } catch (err) {
      console.error('Error al precargar imagen:', err)
      // Actualizar de todas formas
      mapImageUrl.value = newUrl
    }
  })

  // Esperar un pequeño delay para que la imagen se renderice
  setTimeout(() => {
    if (mapContainer.value && mapImage.value) {
      // Inicializar panzoom con límites personalizados
    panzoomInstance = panzoom(mapImage.value, {
      maxZoom: 15,
      minZoom: 1,
      zoomDoubleClickSpeed: 1.5,
      smoothScroll: true,
      filterKey: () => true,
      beforeWheel: () => false,
      beforeMouseDown: function(e) {
        return false;
      },
      onTouch: function(e) {
        return false;
      }
    })

    // Función para aplicar límites de pan
    const applyPanBounds = () => {
      if (!panzoomInstance || !mapImage.value || !mapContainer.value) return

      const transform = panzoomInstance.getTransform()
      const containerWidth = mapContainer.value.offsetWidth
      const containerHeight = mapContainer.value.offsetHeight
      const imgWidth = mapImage.value.offsetWidth * transform.scale
      const imgHeight = mapImage.value.offsetHeight * transform.scale

      let newX = transform.x
      let newY = transform.y

      // Limitar X
      const minX = containerWidth - imgWidth
      const maxX = 0
      if (imgWidth > containerWidth) {
        newX = Math.max(minX, Math.min(maxX, transform.x))
      } else {
        newX = (containerWidth - imgWidth) / 2
      }

      // Limitar Y
      const minY = containerHeight - imgHeight
      const maxY = 0
      if (imgHeight > containerHeight) {
        newY = Math.max(minY, Math.min(maxY, transform.y))
      } else {
        newY = (containerHeight - imgHeight) / 2
      }

      if (newX !== transform.x || newY !== transform.y) {
        panzoomInstance.moveTo(newX, newY)
      }
    }

    // Aplicar límites en cada transformación
    panzoomInstance.on('transform', applyPanBounds)

    // Agregar listener para zoom con rueda
    mapContainer.value.addEventListener('wheel', (e) => {
      if (panzoomInstance) {
        e.preventDefault()
        const delta = e.deltaY > 0 ? 0.8 : 1.2
        panzoomInstance.smoothZoom(e.clientX, e.clientY, delta)
      }
    }, { passive: false })

    // Centrar imagen al cargar
    const centerImage = () => {
      if (panzoomInstance && mapImage.value && mapContainer.value) {
        requestAnimationFrame(() => {
          const containerWidth = mapContainer.value!.offsetWidth
          const containerHeight = mapContainer.value!.offsetHeight
          const imgWidth = mapImage.value!.offsetWidth
          const imgHeight = mapImage.value!.offsetHeight

          // Centrar: mover el contenedor para mostrar el centro de la imagen
          const x = (containerWidth - imgWidth) / 2
          const y = (containerHeight - imgHeight) / 2

          panzoomInstance!.moveTo(x, y)
        })
      }
    }

    // Si la imagen ya está cargada (caché), ejecutar inmediatamente
    if (mapImage.value.complete) {
      centerImage()
    } else {
      // Si no, esperar a que se cargue
      mapImage.value.addEventListener('load', centerImage)
    }

    // Actualizar zoomLevel en cada cambio (este listener ya está agregado arriba con applyPanBounds)
    // Solo actualizamos el valor del zoom aquí
    const originalTransformHandler = panzoomInstance.on('transform', () => {
      if (panzoomInstance) {
        const transform = panzoomInstance.getTransform()
        zoomLevel.value = transform.scale
      }
    })

    // Permitir pan con click y arrastre con límites
    let isDragging = false
    let startX = 0
    let startY = 0
    let startPan = { x: 0, y: 0 }

    mapImage.value.addEventListener('mousedown', (e) => {
      isDragging = true
      startX = e.clientX
      startY = e.clientY
      if (panzoomInstance) {
        const transform = panzoomInstance.getTransform()
        startPan = { x: transform.x, y: transform.y }
      }
    })

    document.addEventListener('mousemove', (e) => {
      if (isDragging && mapImage.value && panzoomInstance && mapContainer.value) {
        const deltaX = e.clientX - startX
        const deltaY = e.clientY - startY

        const transform = panzoomInstance.getTransform()
        const containerWidth = mapContainer.value.offsetWidth
        const containerHeight = mapContainer.value.offsetHeight
        const imgWidth = mapImage.value.offsetWidth * transform.scale
        const imgHeight = mapImage.value.offsetHeight * transform.scale

        let newX = startPan.x + deltaX
        let newY = startPan.y + deltaY

        // Aplicar límites
        const minX = containerWidth - imgWidth
        const maxX = 0
        if (imgWidth > containerWidth) {
          newX = Math.max(minX, Math.min(maxX, newX))
        } else {
          newX = (containerWidth - imgWidth) / 2
        }

        const minY = containerHeight - imgHeight
        const maxY = 0
        if (imgHeight > containerHeight) {
          newY = Math.max(minY, Math.min(maxY, newY))
        } else {
          newY = (containerHeight - imgHeight) / 2
        }

        panzoomInstance.moveTo(newX, newY)
      }
    })

    document.addEventListener('mouseup', () => {
      isDragging = false
    })

    // Reset zoom en doble click
    mapImage.value.addEventListener('dblclick', () => {
      resetMap()
    })
    }
  }, 100)
})
</script>

<style scoped>
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

:global(section.fullscreen-map-active) {
  z-index: 9999 !important;
}
</style>
