<template>
  <div class="min-h-screen">
    <PageHeader />
    <HeroSectionCrypto />
    <MapSection />
    <FeaturesSection />
    <CarouselSection />
    <ContactSection />
    <FooterSection />
    <FloatingWhatsApp />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// SEO: Marcar esta página como copia de la home
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.barrioprivadoparquepinares.com'
    }
  ]
})

onMounted(() => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e: Event) => {
      e.preventDefault()
      const href = (anchor as HTMLAnchorElement).getAttribute('href')
      const target = href ? document.querySelector(href) : null
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })

  // Header scroll effect
  const header = document.querySelector('header')

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset

    if (currentScroll > 100) {
      header?.classList.add('shadow-lg')
    } else {
      header?.classList.remove('shadow-lg')
    }
  })
})
</script>
