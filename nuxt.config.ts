// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            'parque-green': '#5a6b2c',
            'parque-lime': '#ACC348',
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
