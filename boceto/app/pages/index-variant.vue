<template>
  <div class="antialiased bg-white overflow-x-hidden">
    <!-- Header con estilo alternativo -->
    <header class="bg-white/95 backdrop-blur-sm shadow-md fixed w-full top-0 z-50 border-b-2 border-parque-lime/20 transition-all duration-300">
      <nav class="container mx-auto px-6 py-3">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center group">
            <img src="/logo.png" alt="Parque Pinares" class="h-14 w-auto transition-all duration-300 group-hover:brightness-110">
          </NuxtLink>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex space-x-2 items-center">
            <a href="#proyecto" class="px-5 py-2.5 text-gray-700 hover:text-white hover:bg-parque-lime rounded-xl transition-all duration-300 font-semibold text-sm">
              El proyecto
            </a>
            <a href="#amenities" class="px-5 py-2.5 text-gray-700 hover:text-white hover:bg-parque-lime rounded-xl transition-all duration-300 font-semibold text-sm">
              Amenities
            </a>
            <a href="#contacto" class="ml-2 px-7 py-3 bg-gradient-to-r from-parque-lime to-parque-green text-white rounded-full hover:shadow-xl transition-all duration-300 font-bold text-sm transform hover:scale-105">
              Contacto
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button @click="toggleMobileMenu" class="md:hidden text-gray-700 hover:text-parque-lime transition-colors duration-300 p-2">
            <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4 space-y-2">
            <a href="#proyecto" @click="closeMobileMenu" class="block px-4 py-3 text-gray-700 hover:text-white hover:bg-parque-lime rounded-xl transition-all duration-300 font-semibold">
              El proyecto
            </a>
            <a href="#amenities" @click="closeMobileMenu" class="block px-4 py-3 text-gray-700 hover:text-white hover:bg-parque-lime rounded-xl transition-all duration-300 font-semibold">
              Amenities
            </a>
            <a href="#contacto" @click="closeMobileMenu" class="block px-4 py-3 bg-gradient-to-r from-parque-lime to-parque-green text-white rounded-xl hover:shadow-lg transition-all duration-300 font-bold text-center">
              Contacto
            </a>
          </div>
        </Transition>
      </nav>
    </header>

    <!-- Hero Section - Variante -->
    <section class="relative h-screen pt-16">
      <!-- Background con overlay diferente -->
      <div class="absolute inset-0 overflow-hidden">
        <img src="/hero-beach.jpg" alt="Vista de la playa" class="w-full h-full object-cover scale-105 animate-subtle-zoom">
        <div class="absolute inset-0 bg-gradient-to-br from-parque-dark/40 via-transparent to-parque-lime/20"></div>
      </div>

      <div class="relative h-full flex flex-col justify-center items-center text-center px-6">
        <div class="space-y-6 max-w-5xl animate-fade-in-up">
          <!-- Badge diferente -->
          <div class="inline-flex items-center space-x-2 px-5 py-2.5 bg-parque-lime/90 backdrop-blur-sm rounded-xl shadow-xl">
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
            </svg>
            <span class="text-white font-bold text-sm tracking-wide">¡Últimas Oportunidades!</span>
          </div>

          <!-- Título con diseño alternativo -->
          <div class="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4">
              ÚLTIMOS TERRENOS
              <br>
              <span class="text-parque-lime">DISPONIBLES</span>
            </h1>
            <p class="text-xl md:text-2xl text-white/90 font-medium">
              A dos cuadras de la playa
            </p>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style="animation-delay: 0.3s">
            <a href="#contacto" class="inline-flex items-center space-x-2 px-8 py-4 bg-parque-lime text-parque-dark rounded-full hover:bg-white transition-all duration-300 font-bold text-lg shadow-2xl transform hover:scale-105">
              <span>Consultar Disponibilidad</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </a>
            <a href="#proyecto" class="inline-flex items-center space-x-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-full hover:bg-white hover:text-parque-dark transition-all duration-300 font-bold text-lg shadow-xl">
              <span>Ver Proyecto</span>
            </a>
          </div>
        </div>

        <!-- Logo en la esquina -->
        <div class="absolute bottom-8 right-8 md:bottom-12 md:right-12 animate-fade-in">
          <div class="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-2xl">
            <img src="/logo.png" alt="Parque Pinares" class="h-14 md:h-16 w-auto">
          </div>
        </div>

        <!-- Scroll indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div class="flex flex-col items-center space-y-2">
            <span class="text-white text-xs font-semibold uppercase tracking-wider">Descubrí más</span>
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative">
      <!-- Decorative elements -->
      <div class="absolute top-0 left-0 w-72 h-72 bg-parque-lime/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-parque-green/5 rounded-full blur-3xl"></div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-6xl mx-auto">
          <!-- Section Title -->
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-5xl font-bold text-parque-dark mb-4">Ubicación Privilegiada</h2>
            <p class="text-gray-600 text-lg">Descubrí tu futuro hogar en el mapa</p>
          </div>

          <!-- Legend -->
          <div class="flex flex-wrap justify-center gap-4 md:gap-6 mb-10">
            <div class="flex items-center space-x-3 px-4 py-3 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div class="w-10 h-8 bg-green-500 rounded-lg border-2 border-green-600 shadow-sm"></div>
              <span class="text-sm md:text-base font-bold text-gray-800">Terreno Disponible</span>
            </div>
            <div class="flex items-center space-x-3 px-4 py-3 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div class="w-10 h-8 bg-red-300 rounded-lg border-2 border-red-400 shadow-sm"></div>
              <span class="text-sm md:text-base font-bold text-gray-800">Casas Construidas</span>
            </div>
            <div class="flex items-center space-x-3 px-4 py-3 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div class="w-10 h-8 bg-orange-700 rounded-lg border-2 border-orange-800 shadow-sm"></div>
              <span class="text-sm md:text-base font-bold text-gray-800">Amenities</span>
            </div>
          </div>

          <!-- Map Image con lupa -->
          <div class="relative group rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white p-4">
            <!-- Indicador de lupa - esquina superior derecha -->
            <div class="absolute top-8 right-8 z-20 bg-white rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6 text-parque-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path>
              </svg>
            </div>

            <!-- Texto hint -->
            <div class="absolute top-8 right-24 z-20 bg-parque-dark text-white px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Click para ampliar
            </div>

            <div class="rounded-xl overflow-hidden cursor-zoom-in">
              <img src="/mapa-parque.png" alt="Mapa Parque Pinares" class="w-full group-hover:scale-105 transition-transform duration-500">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Logo Central -->
    <section id="proyecto" class="py-16 md:py-20 bg-white relative">
      <div class="container mx-auto px-6 text-center relative z-10">
        <div class="inline-block animate-fade-in">
          <div class="relative">
            <div class="absolute inset-0 bg-parque-lime/20 blur-2xl rounded-full"></div>
            <img src="/logo.png" alt="Parque Pinares" class="h-24 md:h-32 w-auto mx-auto mb-6 relative z-10">
          </div>
        </div>
        <h2 class="text-2xl md:text-3xl text-parque-dark uppercase tracking-widest font-bold mb-4">BARRIO PRIVADO</h2>
        <div class="flex items-center justify-center space-x-2">
          <div class="w-12 h-0.5 bg-parque-lime"></div>
          <div class="w-3 h-3 bg-parque-lime rounded-full"></div>
          <div class="w-12 h-0.5 bg-parque-lime"></div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <!-- Section Title -->
          <div class="text-center mb-16">
            <div class="inline-block px-4 py-2 bg-parque-lime/10 rounded-full mb-4">
              <span class="text-parque-dark font-bold text-sm uppercase tracking-wider">Características</span>
            </div>
            <h2 class="text-3xl md:text-5xl font-bold text-parque-dark mb-4">¿Por qué Parque Pinares?</h2>
            <p class="text-gray-600 text-lg max-w-2xl mx-auto">Un proyecto único que combina naturaleza, seguridad y confort</p>
          </div>

          <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
            <!-- Columna Izquierda -->
            <div class="space-y-4">
              <div class="group flex items-start space-x-4 p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-parque-lime/20">
                <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-parque-lime to-parque-green rounded-2xl flex items-center justify-center shadow-lg">
                  <Icon name="heroicons:map-pin-20-solid" class="w-7 h-7 text-white" />
                </div>
                <p class="text-gray-800 text-base md:text-lg leading-relaxed pt-3 font-medium">A dos cuadras de la playa</p>
              </div>

              <div class="group flex items-start space-x-4 p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-parque-lime/20">
                <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-parque-lime to-parque-green rounded-2xl flex items-center justify-center shadow-lg">
                  <Icon name="heroicons:clock-20-solid" class="w-7 h-7 text-white" />
                </div>
                <p class="text-gray-800 text-base md:text-lg leading-relaxed pt-3 font-medium">A 15 minutos del centro</p>
              </div>

              <div class="group flex items-start space-x-4 p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-parque-lime/20">
                <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-parque-lime to-parque-green rounded-2xl flex items-center justify-center shadow-lg">
                  <Icon name="heroicons:video-camera-20-solid" class="w-7 h-7 text-white" />
                </div>
                <p class="text-gray-800 text-base md:text-lg leading-relaxed pt-3 font-medium">Cámaras de seguridad</p>
              </div>

              <div class="group flex items-start space-x-4 p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-parque-lime/20">
                <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-parque-lime to-parque-green rounded-2xl flex items-center justify-center shadow-lg">
                  <Icon name="heroicons:lock-closed-20-solid" class="w-7 h-7 text-white" />
                </div>
                <p class="text-gray-800 text-base md:text-lg leading-relaxed pt-3 font-medium">Acceso controlado portería</p>
              </div>

              <div class="group flex items-start space-x-4 p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-parque-lime/20">
                <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-parque-lime to-parque-green rounded-2xl flex items-center justify-center shadow-lg">
                  <Icon name="heroicons:beaker-20-solid" class="w-7 h-7 text-white" />
                </div>
                <p class="text-gray-800 text-base md:text-lg leading-relaxed pt-3 font-medium">Riego automatizado</p>
              </div>

              <div class="group flex items-start space-x-4 p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-parque-lime/20">
                <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-parque-lime to-parque-green rounded-2xl flex items-center justify-center shadow-lg">
                  <Icon name="heroicons:bolt-20-solid" class="w-7 h-7 text-white" />
                </div>
                <p class="text-gray-800 text-base md:text-lg leading-relaxed pt-3 font-medium">Único con saneamiento</p>
              </div>

              <div class="group flex items-start space-x-4 p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-parque-lime/20">
                <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-parque-lime to-parque-green rounded-2xl flex items-center justify-center shadow-lg">
                  <Icon name="heroicons:bolt-20-solid" class="w-7 h-7 text-white" />
                </div>
                <p class="text-gray-800 text-base md:text-lg leading-relaxed pt-3 font-medium">Electricidad subterránea</p>
              </div>
            </div>

            <!-- Columna Derecha -->
            <div class="space-y-4">
              <div class="group flex items-start space-x-4 p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-parque-lime/20">
                <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-parque-lime to-parque-green rounded-2xl flex items-center justify-center shadow-lg">
                  <Icon name="heroicons:sparkles-20-solid" class="w-7 h-7 text-white" />
                </div>
                <p class="text-gray-800 text-base md:text-lg leading-relaxed pt-3 font-medium">Piscinas climatizadas</p>
              </div>

              <div class="group flex items-start space-x-4 p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-parque-lime/20">
                <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-parque-lime to-parque-green rounded-2xl flex items-center justify-center shadow-lg">
                  <Icon name="heroicons:building-office-20-solid" class="w-7 h-7 text-white" />
                </div>
                <p class="text-gray-800 text-base md:text-lg leading-relaxed pt-3 font-medium">Club house Sala de juegos</p>
              </div>

              <div class="group flex items-start space-x-4 p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-parque-lime/20">
                <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-parque-lime to-parque-green rounded-2xl flex items-center justify-center shadow-lg">
                  <Icon name="heroicons:building-office-2-20-solid" class="w-7 h-7 text-white" />
                </div>
                <p class="text-gray-800 text-base md:text-lg leading-relaxed pt-3 font-medium">Gimnasio y vestuarios</p>
              </div>

              <div class="group flex items-start space-x-4 p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-parque-lime/20">
                <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-parque-lime to-parque-green rounded-2xl flex items-center justify-center shadow-lg">
                  <Icon name="heroicons:trophy-20-solid" class="w-7 h-7 text-white" />
                </div>
                <p class="text-gray-800 text-base md:text-lg leading-relaxed pt-3 font-medium">Canchas paddel y tennis</p>
              </div>

              <div class="group flex items-start space-x-4 p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-parque-lime/20">
                <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-parque-lime to-parque-green rounded-2xl flex items-center justify-center shadow-lg">
                  <Icon name="heroicons:currency-dollar-20-solid" class="w-7 h-7 text-white" />
                </div>
                <p class="text-gray-800 text-base md:text-lg leading-relaxed pt-3 font-medium">Gastos comunes accesibles</p>
              </div>

              <div class="group flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-parque-lime/10 to-parque-green/10 border-2 border-parque-lime hover:shadow-xl transition-all duration-300">
                <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-parque-lime to-parque-green rounded-2xl flex items-center justify-center shadow-lg">
                  <Icon name="heroicons:check-circle-20-solid" class="w-7 h-7 text-white" />
                </div>
                <p class="text-gray-900 text-base md:text-lg font-bold leading-relaxed pt-3">21 casas ya vendidas</p>
              </div>

              <div class="group flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-parque-lime/10 to-parque-green/10 border-2 border-parque-lime hover:shadow-xl transition-all duration-300">
                <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-parque-lime to-parque-green rounded-2xl flex items-center justify-center shadow-lg">
                  <Icon name="heroicons:check-badge-20-solid" class="w-7 h-7 text-white" />
                </div>
                <p class="text-gray-900 text-base md:text-lg font-bold leading-relaxed pt-3">Todo totalmente terminado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Photo Section -->
    <section id="amenities" class="py-16 md:py-24 bg-white relative overflow-hidden">
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-6xl mx-auto">
          <!-- Section Title -->
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-5xl font-bold text-parque-dark mb-4">Naturaleza y Confort</h2>
            <p class="text-gray-600 text-lg">Un entorno único rodeado de naturaleza</p>
          </div>

          <div class="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-4 border-white group">
            <div class="absolute inset-0 bg-gradient-to-t from-parque-dark/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <img src="/clubhouse-real.png" alt="Parque Pinares - Vista de la naturaleza" class="w-full transform group-hover:scale-105 transition-transform duration-700">
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section id="contacto" class="py-20 md:py-28 bg-gradient-to-br from-parque-dark via-parque-green to-parque-dark relative overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute top-0 left-0 w-full h-full opacity-10">
        <div class="absolute top-20 left-20 w-64 h-64 bg-parque-lime rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-3xl mx-auto">
          <!-- Header -->
          <div class="text-center mb-12">
            <div class="inline-flex items-center justify-center w-20 h-20 bg-parque-lime rounded-full mb-6 shadow-2xl">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Ponete en contacto con nosotros
            </h2>
            <p class="text-white/90 text-lg md:text-xl">
              por más información
            </p>
          </div>

          <div class="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div class="group">
                  <label class="block text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">Nombre *</label>
                  <input
                    v-model="form.name"
                    type="text"
                    required
                    class="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-parque-lime focus:border-parque-lime transition-all"
                    placeholder="Tu nombre completo"
                  >
                </div>
                <div class="group">
                  <label class="block text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">Email *</label>
                  <input
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-parque-lime focus:border-parque-lime transition-all"
                    placeholder="tu@email.com"
                  >
                </div>
              </div>

              <div class="group">
                <label class="block text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">Teléfono *</label>
                <input
                  v-model="form.phone"
                  type="tel"
                  required
                  class="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-parque-lime focus:border-parque-lime transition-all"
                  placeholder="+598 99 123 456"
                >
              </div>

              <div class="group">
                <label class="block text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">Mensaje *</label>
                <textarea
                  v-model="form.message"
                  required
                  rows="5"
                  class="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-parque-lime focus:border-parque-lime resize-none transition-all"
                  placeholder="Contanos sobre tu consulta..."
                ></textarea>
              </div>

              <div class="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                <input
                  v-model="form.privacy"
                  type="checkbox"
                  id="privacy"
                  required
                  class="w-5 h-5 text-parque-lime border-gray-300 rounded focus:ring-parque-lime mt-0.5 cursor-pointer"
                >
                <label for="privacy" class="text-sm text-gray-700 leading-relaxed cursor-pointer">
                  No soy un robot
                </label>
              </div>

              <div class="pt-2">
                <button
                  type="submit"
                  class="group relative w-full bg-gradient-to-r from-parque-lime via-parque-green to-parque-dark text-white px-8 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                >
                  <span class="relative z-10 flex items-center justify-center space-x-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <span>Enviar Mensaje</span>
                  </span>
                  <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </button>
              </div>
            </form>
          </div>

          <!-- Contact info -->
          <div class="mt-12 text-center">
            <p class="text-white/80 text-sm">
              O comunicate directamente con nosotros
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gradient-to-b from-gray-900 to-black py-12 relative overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-0 left-1/4 w-64 h-64 bg-parque-lime rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-64 h-64 bg-parque-green rounded-full blur-3xl"></div>
      </div>

      <div class="container mx-auto px-6 text-center relative z-10">
        <div class="mb-8">
          <div class="inline-block bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-6">
            <img src="/logo.png" alt="Parque Pinares" class="h-16 w-auto mx-auto">
          </div>
          <div class="flex items-center justify-center space-x-2 mb-6">
            <div class="w-12 h-0.5 bg-parque-lime"></div>
            <div class="w-3 h-3 bg-parque-lime rounded-full"></div>
            <div class="w-12 h-0.5 bg-parque-lime"></div>
          </div>
        </div>

        <p class="text-gray-400 text-sm mb-2">
          © {{ currentYear }} Parque Pinares - Barrio Privado
        </p>
        <p class="text-gray-500 text-xs">
          Todos los derechos reservados
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// SEO Meta tags
useHead({
  title: 'Parque Pinares - Barrio Privado | Últimos Terrenos Disponibles',
  meta: [
    {
      name: 'description',
      content: 'Últimos terrenos disponibles a dos cuadras de la playa. Barrio privado con amenities de primera: piscinas climatizadas, club house, gimnasio, canchas de pádel y tenis. 21 casas vendidas, proyecto 100% terminado.'
    },
    {
      name: 'keywords',
      content: 'parque pinares, barrio privado, terrenos playa, uruguay, amenities, piscina climatizada, seguridad, club house, gimnasio, canchas padel, tennis'
    },
    // Open Graph
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Parque Pinares - Barrio Privado' },
    { property: 'og:description', content: 'Últimos terrenos disponibles a dos cuadras de la playa. Barrio privado con amenities de primera categoría.' },
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Parque Pinares - Barrio Privado' },
    { name: 'twitter:description', content: 'Últimos terrenos disponibles a dos cuadras de la playa' },
  ],
  htmlAttrs: {
    lang: 'es'
  }
})

// Form state
const form = ref({
  name: '',
  phone: '',
  email: '',
  message: '',
  privacy: false
})

// Mobile menu state
const mobileMenuOpen = ref(false)

// Current year for footer
const currentYear = new Date().getFullYear()

// Toggle mobile menu
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// Close mobile menu
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Form submission
const handleSubmit = () => {
  console.log('Form submitted:', form.value)

  // Show success message
  alert('¡Gracias por tu consulta! Nos pondremos en contacto contigo pronto.')

  // Reset form
  form.value = {
    name: '',
    phone: '',
    email: '',
    message: '',
    privacy: false
  }
}

// Smooth scroll behavior
if (process.client) {
  document.documentElement.style.scrollBehavior = 'smooth'
}
</script>

<style scoped>
/* Smooth scroll */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #ACC348, #5a6b2c);
  border-radius: 10px;
  border: 2px solid #f1f5f9;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #5a6b2c, #2d3516);
}

/* Animaciones personalizadas */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes subtle-zoom {
  0%, 100% {
    transform: scale(1.05);
  }
  50% {
    transform: scale(1.08);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}

.animate-subtle-zoom {
  animation: subtle-zoom 20s ease-in-out infinite;
}

/* Transiciones suaves globales */
* {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Mejorar sombras 3D */
.hover\:shadow-3xl:hover {
  box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3),
              0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
</style>
