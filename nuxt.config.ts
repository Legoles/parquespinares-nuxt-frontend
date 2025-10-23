// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],
  css: ['~/assets/css/main.css'],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            'parque-green': '#3d6700',
            'parque-lime': '#3d6700',
            'parque-dark': '#2d3516',
          },
          fontFamily: {
            'sans': ['Montserrat', 'sans-serif'],
          }
        }
      }
    }
  }
})
