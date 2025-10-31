// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', 'nuxt-gtag'],
  css: ['~/assets/css/main.css'],

  // Google Analytics Configuration
  gtag: {
    id: 'G-SKZMVN370X'
  },

  // SEO Configuration
  app: {
    head: {
      title: 'Barrio Privado Parque Pinares - Terrenos en Maldonado, Uruguay',
      meta: [
        // Essential Meta Tags
        {
          name: 'description',
          content: 'Barrio Privado Parque Pinares: Terrenos a 2 cuadras de la playa en Maldonado. Seguridad 24/7, club house, piscina, canchas deportivas. Inversión segura en Uruguay. Últimos lotes disponibles.'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          'http-equiv': 'X-UA-Compatible',
          content: 'IE=edge'
        },
        {
          charset: 'utf-8'
        },
        // Keywords
        {
          name: 'keywords',
          content: 'terrenos venta Maldonado, barrio privado Punta del Este, lotes cerca playa, inversión inmobiliaria Uruguay, barrio cerrado, terrenos con amenities'
        },
        // Open Graph (Social Media)
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:title',
          content: 'Barrio Privado Parque Pinares - Terrenos en Maldonado'
        },
        {
          property: 'og:description',
          content: 'Terrenos en barrio privado a 2 cuadras de la playa. Seguridad 24/7, club house, piscina climatizada, canchas deportivas y más amenities.'
        },
        {
          property: 'og:image',
          content: '/og-image.jpg'
        },
        {
          property: 'og:url',
          content: 'https://www.barrioprivadoparquepinares.com'
        },
        {
          property: 'og:locale',
          content: 'es_UY'
        },
        // Twitter Card
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:title',
          content: 'Barrio Privado Parque Pinares - Terrenos en Maldonado'
        },
        {
          name: 'twitter:description',
          content: 'Terrenos en barrio privado a 2 cuadras de la playa en Maldonado, Uruguay'
        },
        {
          name: 'twitter:image',
          content: '/og-image.jpg'
        },
        // Additional SEO Tags
        {
          name: 'author',
          content: 'Barrio Privado Parque Pinares'
        },
        {
          name: 'robots',
          content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        },
        {
          name: 'language',
          content: 'Spanish'
        },
        {
          name: 'geo.region',
          content: 'UY-MA'
        },
        {
          name: 'geo.placename',
          content: 'Maldonado'
        },
        {
          name: 'geo.position',
          content: '-34.908548387246526;-54.989585122957266'
        },
        {
          name: 'ICBM',
          content: '-34.908548387246526, -54.989585122957266'
        }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Barrio Privado Parque Pinares",
            "url": "https://www.barrioprivadoparquepinares.com",
            "telephone": "+59894390000",
            "email": "info@barrioprivadoparquepinares.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Cno. de la Laguna - P34 y medio - La Mansa",
              "addressLocality": "Maldonado",
              "addressRegion": "Maldonado",
              "postalCode": "8300",
              "addressCountry": "UY"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-34.908548387246526",
              "longitude": "-54.989585122957266"
            },
            "description": "Terrenos en barrio privado a 2 cuadras de la playa en Maldonado, Uruguay",
            "image": "https://www.barrioprivadoparquepinares.com/og-image.jpg",
            "areaServed": {
              "@type": "City",
              "name": "Maldonado"
            }
          })
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://www.barrioprivadoparquepinares.com'
        },
        {
          rel: 'alternate',
          hreflang: 'es',
          href: 'https://www.barrioprivadoparquepinares.com'
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon.png'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous'
        }
      ]
    }
  },

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
