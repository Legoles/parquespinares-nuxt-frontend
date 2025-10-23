<template>
  <div class="min-h-screen">
    <PageHeader />
    <HeroSectionPage />
    <MapSection />
    <FeaturesSection />
    <AmenitiesShowcaseSection />
    <CarouselSection />
    <ContactSection />
    <FooterSection />
    <FloatingWhatsApp />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

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
