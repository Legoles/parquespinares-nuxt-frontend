import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin(() => {
  if (process.client) {
    AOS.init({
      duration: 800,        // Duración de animación en ms
      offset: 100,          // Distancia desde viewport antes de activar
      once: false,          // Permitir que se animen múltiples veces
      easing: 'ease-in-out', // Función de animación
      delay: 0,             // Delay inicial
      anchorPlacement: 'top-bottom' // Punto de anclaje
    })

    // Reinicializar después de cambios dinámicos
    watch(
      () => useRoute().path,
      () => {
        setTimeout(() => {
          AOS.refresh()
        }, 500)
      }
    )
  }
})
