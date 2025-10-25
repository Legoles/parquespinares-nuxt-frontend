import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin(() => {
  if (process.client) {
    AOS.init({
      duration: 500,        // Duración más corta (500ms)
      offset: 80,           // Se activa más cerca
      once: true,           // Solo animar una vez
      easing: 'ease-out',   // Easing más sutil
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
