<template>
  <div class="antialiased bg-white overflow-x-hidden">
    <!-- Header con Glassmorphism -->
    <header class="backdrop-blur-md bg-white/90 shadow-lg fixed w-full top-0 z-50 border-b border-gray-100 transition-all duration-300">
      <nav class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <!-- Logo con animación -->
          <NuxtLink to="/" class="flex items-center group">
            <img src="/logo.png" alt="Parque Pinares" class="h-12 w-auto transition-transform duration-300 group-hover:scale-105">
          </NuxtLink>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex space-x-1 items-center">
            <a href="#proyecto" class="px-4 py-2 text-gray-700 hover:text-parque-lime hover:bg-parque-lime/5 rounded-lg transition-all duration-300 font-medium text-sm relative group">
              <span class="relative z-10">El proyecto</span>
              <span class="absolute inset-0 bg-parque-lime/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </a>
            <a href="#amenities" class="px-4 py-2 text-gray-700 hover:text-parque-lime hover:bg-parque-lime/5 rounded-lg transition-all duration-300 font-medium text-sm relative group">
              <span class="relative z-10">Amenities</span>
              <span class="absolute inset-0 bg-parque-lime/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </a>
            <a href="#contacto" class="ml-2 px-6 py-2.5 bg-parque-lime text-white rounded-lg hover:bg-parque-green transition-all duration-300 font-semibold text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
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
            <a href="#proyecto" @click="closeMobileMenu" class="block px-4 py-3 text-gray-700 hover:text-parque-lime hover:bg-parque-lime/5 rounded-lg transition-all duration-300 font-medium">
              El proyecto
            </a>
            <a href="#amenities" @click="closeMobileMenu" class="block px-4 py-3 text-gray-700 hover:text-parque-lime hover:bg-parque-lime/5 rounded-lg transition-all duration-300 font-medium">
              Amenities
            </a>
            <a href="#contacto" @click="closeMobileMenu" class="block px-4 py-3 bg-parque-lime text-white rounded-lg hover:bg-parque-green transition-all duration-300 font-semibold text-center">
              Contacto
            </a>
          </div>
        </Transition>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="relative h-screen pt-16">
      <!-- Background con parallax -->
      <div class="absolute inset-0 overflow-hidden">
        <img src="/hero-beach.jpg" alt="Vista de la playa" class="w-full h-full object-cover scale-105 animate-subtle-zoom">
        <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-white/40"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-parque-lime/5"></div>
      </div>

      <div class="relative h-full flex flex-col justify-center items-center text-center px-6">
        <div class="space-y-8 max-w-5xl animate-fade-in-up">
          <!-- Badge decorativo -->
          <div class="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 shadow-lg">
            <span class="w-2 h-2 bg-parque-lime rounded-full animate-pulse"></span>
            <span class="text-white font-semibold text-sm tracking-wide">Últimas Unidades Disponibles</span>
          </div>

          <!-- Título principal con efecto -->
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
            <span class="inline-block animate-fade-in-up" style="animation-delay: 0.1s">ÚLTIMOS TERRENOS</span>
            <br>
            <span class="inline-block animate-fade-in-up" style="animation-delay: 0.2s">DISPONIBLES</span>
            <br>
            <span class="inline-block text-parque-lime animate-fade-in-up" style="animation-delay: 0.3s">A DOS CUADRAS DE LA PLAYA</span>
          </h1>

          <!-- CTA Button -->
          <div class="animate-fade-in-up" style="animation-delay: 0.4s">
            <a href="#contacto" class="inline-flex items-center space-x-2 px-8 py-4 bg-parque-lime text-white rounded-full hover:bg-white hover:text-parque-dark transition-all duration-300 font-bold text-lg shadow-2xl hover:shadow-parque-lime/50 transform hover:scale-105">
              <span>Consultar Ahora</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>

        <!-- Logo en la esquina inferior derecha -->
        <div class="absolute bottom-8 right-8 md:bottom-12 md:right-12 animate-fade-in">
          <img src="/logo.png" alt="Parque Pinares" class="h-16 md:h-20 w-auto opacity-90 drop-shadow-xl">
        </div>

        <!-- Scroll indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>

    <!-- Map Section (Justo después del Hero) -->
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

          <!-- Legend con diseño moderno -->
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

          <!-- Map Image con efecto e indicador de zoom -->
          <div class="relative group rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white p-4">
            <!-- Indicador de lupa y texto fijo - esquina superior derecha -->
            <div class="absolute top-8 right-8 z-20 flex items-center space-x-3">
              <!-- Texto siempre visible -->
              <div class="bg-parque-dark text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
                Click para ampliar
              </div>
              <!-- Icono de lupa -->
              <div class="bg-white rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-parque-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path>
                </svg>
              </div>
            </div>

            <div class="rounded-xl overflow-hidden cursor-zoom-in">
              <img src="/mapa-parque.png" alt="Mapa Parque Pinares" class="w-full group-hover:scale-105 transition-transform duration-500">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Logo Central y Título -->
    <section id="proyecto" class="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-10 left-10 w-40 h-40 border-4 border-parque-lime rounded-full"></div>
        <div class="absolute bottom-10 right-10 w-60 h-60 border-4 border-parque-green rounded-full"></div>
      </div>

      <div class="container mx-auto px-6 text-center relative z-10">
        <div class="inline-block animate-fade-in">
          <img src="/logo.png" alt="Parque Pinares" class="h-24 md:h-32 w-auto mx-auto mb-6 drop-shadow-xl">
        </div>
        <h2 class="text-2xl md:text-3xl text-parque-dark uppercase tracking-widest font-bold mb-4">BARRIO PRIVADO</h2>
        <div class="w-24 h-1 bg-parque-lime mx-auto rounded-full"></div>
      </div>
    </section>

    <!-- Features Section - Dos Columnas -->
    <section class="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <!-- Section Title -->
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-5xl font-bold text-parque-dark mb-4">¿Por qué Parque Pinares?</h2>
            <p class="text-gray-600 text-lg max-w-2xl mx-auto">Un proyecto único que combina naturaleza, seguridad y confort</p>
          </div>

          <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
            <!-- Columna Izquierda -->
            <div class="space-y-5">
              <div class="group flex items-start space-x-4 p-5 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div class="flex-shrink-0 w-12 h-12 bg-parque-lime/10 rounded-xl flex items-center justify-center group-hover:bg-parque-lime group-hover:scale-110 transition-all duration-300">
                  <Icon name="heroicons:map-pin-20-solid" class="w-6 h-6 text-parque-lime group-hover:text-white transition-colors" />
                </div>
                <p class="text-gray-800 text-base md:text-lg leading-relaxed pt-2">A dos cuadras de la playa</p>
              </div>

              <div class="group flex items-start space-x-4 p-5 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div class="flex-shrink-0 w-12 h-12 bg-parque-lime/10 rounded-xl flex items-center justify-center group-hover:bg-parque-lime group-hover:scale-110 transition-all duration-300">
                  <Icon name="heroicons:clock-20-solid" class="w-6 h-6 text-parque-lime group-hover:text-white transition-colors" />
                </div>
                <p class="text-gray-800 text-base md:text-lg leading-relaxed pt-2">A 15 minutos del centro</p>
              </div>

              <div class="group flex items-start space-x-4 p-5 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div class="flex-shrink-0 w-12 h-12 bg-parque-lime/10 rounded-xl flex items-center justify-center group-hover:bg-parque-lime group-hover:scale-110 transition-all duration-300">
                  <Icon name="heroicons:video-camera-20-solid" class="w-6 h-6 text-parque-lime group-hover:text-white transition-colors" />
                </div>
                <p class="text-gray-800 text-base md:text-lg leading-relaxed pt-2">Cámaras de seguridad</p>
              </div>

              <div class="group flex items-start space-x-4 p-5 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div class="flex-shrink-0 w-12 h-12 bg-parque-lime/10 rounded-xl flex items-center justify-center group-hover:bg-parque-lime group-hover:scale-110 transition-all duration-300">
                  <Icon name="heroicons:lock-closed-20-solid" class="w-6 h-6 text-parque-lime group-hover:text-white transition-colors" />
                </div>
                <p class="text-gray-800 text-base md:text-lg leading-relaxed pt-2">Acceso controlado portería</p>
              </div>

              <div class="group flex items-start space-x-4 p-5 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div class="flex-shrink-0 w-12 h-12 bg-parque-lime/10 rounded-xl flex items-center justify-center group-hover:bg-parque-lime group-hover:scale-110 transition-all duration-300">
                  <Icon name="heroicons:beaker-20-solid" class="w-6 h-6 text-parque-lime group-hover:text-white transition-colors" />
                </div>
                <p class="text-gray-800 text-base md:text-lg leading-relaxed pt-2">Riego automatizado</p>
              </div>

              <div class="group flex items-start space-x-4 p-5 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div class="flex-shrink-0 w-12 h-12 bg-parque-lime/10 rounded-xl flex items-center justify-center group-hover:bg-parque-lime group-hover:scale-110 transition-all duration-300">
                  <Icon name="heroicons:bolt-20-solid" class="w-6 h-6 text-parque-lime group-hover:text-white transition-colors" />
                </div>
                <p class="text-gray-800 text-base md:text-lg leading-relaxed pt-2">Único con saneamiento</p>
              </div>

              <div class="group flex items-start space-x-4 p-5 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div class="flex-shrink-0 w-12 h-12 bg-parque-lime/10 rounded-xl flex items-center justify-center group-hover:bg-parque-lime group-hover:scale-110 transition-all duration-300">
                  <Icon name="heroicons:bolt-20-solid" class="w-6 h-6 text-parque-lime group-hover:text-white transition-colors" />
                </div>
                <p class="text-gray-800 text-base md:text-lg leading-relaxed pt-2">Electricidad subterránea</p>
              </div>
            </div>

            <!-- Columna Derecha -->
            <div class="space-y-5">
              <div class="group flex items-start space-x-4 p-5 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div class="flex-shrink-0 w-12 h-12 bg-parque-lime/10 rounded-xl flex items-center justify-center group-hover:bg-parque-lime group-hover:scale-110 transition-all duration-300">
                  <Icon name="heroicons:sparkles-20-solid" class="w-6 h-6 text-parque-lime group-hover:text-white transition-colors" />
                </div>
                <p class="text-gray-800 text-base md:text-lg leading-relaxed pt-2">Piscinas climatizadas</p>
              </div>

              <div class="group flex items-start space-x-4 p-5 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div class="flex-shrink-0 w-12 h-12 bg-parque-lime/10 rounded-xl flex items-center justify-center group-hover:bg-parque-lime group-hover:scale-110 transition-all duration-300">
                  <Icon name="heroicons:building-office-20-solid" class="w-6 h-6 text-parque-lime group-hover:text-white transition-colors" />
                </div>
                <p class="text-gray-800 text-base md:text-lg leading-relaxed pt-2">Club house Sala de juegos</p>
              </div>

              <div class="group flex items-start space-x-4 p-5 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div class="flex-shrink-0 w-12 h-12 bg-parque-lime/10 rounded-xl flex items-center justify-center group-hover:bg-parque-lime group-hover:scale-110 transition-all duration-300">
                  <Icon name="heroicons:building-office-2-20-solid" class="w-6 h-6 text-parque-lime group-hover:text-white transition-colors" />
                </div>
                <p class="text-gray-800 text-base md:text-lg leading-relaxed pt-2">Gimnasio y vestuarios</p>
              </div>

              <div class="group flex items-start space-x-4 p-5 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div class="flex-shrink-0 w-12 h-12 bg-parque-lime/10 rounded-xl flex items-center justify-center group-hover:bg-parque-lime group-hover:scale-110 transition-all duration-300">
                  <Icon name="heroicons:trophy-20-solid" class="w-6 h-6 text-parque-lime group-hover:text-white transition-colors" />
                </div>
                <p class="text-gray-800 text-base md:text-lg leading-relaxed pt-2">Canchas paddel y tennis</p>
              </div>

              <div class="group flex items-start space-x-4 p-5 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div class="flex-shrink-0 w-12 h-12 bg-parque-lime/10 rounded-xl flex items-center justify-center group-hover:bg-parque-lime group-hover:scale-110 transition-all duration-300">
                  <Icon name="heroicons:currency-dollar-20-solid" class="w-6 h-6 text-parque-lime group-hover:text-white transition-colors" />
                </div>
                <p class="text-gray-800 text-base md:text-lg leading-relaxed pt-2">Gastos comunes accesibles</p>
              </div>

              <div class="group flex items-start space-x-4 p-5 rounded-2xl bg-parque-lime/5 border-2 border-parque-lime/20 hover:border-parque-lime hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div class="flex-shrink-0 w-12 h-12 bg-parque-lime rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <Icon name="heroicons:check-circle-20-solid" class="w-6 h-6 text-white" />
                </div>
                <p class="text-gray-900 text-base md:text-lg font-bold leading-relaxed pt-2">21 casas ya vendidas</p>
              </div>

              <div class="group flex items-start space-x-4 p-5 rounded-2xl bg-parque-lime/5 border-2 border-parque-lime/20 hover:border-parque-lime hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div class="flex-shrink-0 w-12 h-12 bg-parque-lime rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <Icon name="heroicons:check-badge-20-solid" class="w-6 h-6 text-white" />
                </div>
                <p class="text-gray-900 text-base md:text-lg font-bold leading-relaxed pt-2">Todo totalmente terminado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Photo Section - Imagen de los árboles -->
    <section id="amenities" class="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute top-20 right-0 w-96 h-96 bg-parque-lime/5 rounded-full blur-3xl"></div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-6xl mx-auto">
          <!-- Section Title -->
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-5xl font-bold text-parque-dark mb-4">Naturaleza y Confort</h2>
            <p class="text-gray-600 text-lg">Un entorno único rodeado de naturaleza</p>
          </div>

          <div class="rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.01] relative group">
            <div class="absolute inset-0 bg-gradient-to-t from-parque-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img src="/clubhouse-real.png" alt="Parque Pinares - Vista de la naturaleza" class="w-full transform group-hover:scale-105 transition-transform duration-700">
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section id="contacto" class="py-20 md:py-28 bg-gradient-to-br from-parque-green via-parque-dark to-parque-green relative overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute top-0 left-0 w-full h-full opacity-10">
        <div class="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-20 w-96 h-96 bg-parque-lime rounded-full blur-3xl"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-3xl mx-auto">
          <!-- Header con ícono -->
          <div class="text-center mb-12">
            <div class="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
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

          <div class="bg-white rounded-3xl shadow-2xl p-8 md:p-12 backdrop-blur-sm">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div class="group">
                  <label class="block text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">Nombre *</label>
                  <div class="relative">
                    <input
                      v-model="form.name"
                      type="text"
                      required
                      class="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-parque-lime focus:border-parque-lime transition-all group-hover:border-gray-300"
                      placeholder="Tu nombre completo"
                    >
                  </div>
                </div>
                <div class="group">
                  <label class="block text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">Email *</label>
                  <div class="relative">
                    <input
                      v-model="form.email"
                      type="email"
                      required
                      class="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-parque-lime focus:border-parque-lime transition-all group-hover:border-gray-300"
                      placeholder="tu@email.com"
                    >
                  </div>
                </div>
              </div>

              <div class="group">
                <label class="block text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">Teléfono *</label>
                <div class="relative">
                  <input
                    v-model="form.phone"
                    type="tel"
                    required
                    class="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-parque-lime focus:border-parque-lime transition-all group-hover:border-gray-300"
                    placeholder="+598 99 123 456"
                  >
                </div>
              </div>

              <div class="group">
                <label class="block text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">Mensaje *</label>
                <textarea
                  v-model="form.message"
                  required
                  rows="5"
                  class="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-parque-lime focus:border-parque-lime resize-none transition-all group-hover:border-gray-300"
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
                  class="group relative w-full bg-gradient-to-r from-parque-lime to-parque-green text-white px-8 py-5 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                >
                  <span class="relative z-10 flex items-center justify-center space-x-2">
                    <span>Enviar Mensaje</span>
                    <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                  <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </button>
              </div>
            </form>
          </div>

          <!-- Contact info adicional -->
          <div class="mt-12 text-center">
            <p class="text-white/80 text-sm">
              O comunicate directamente con nosotros
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gradient-to-b from-gray-900 to-gray-950 py-12 relative overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-0 left-1/4 w-64 h-64 bg-parque-lime rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-64 h-64 bg-parque-green rounded-full blur-3xl"></div>
      </div>

      <div class="container mx-auto px-6 text-center relative z-10">
        <div class="mb-8">
          <img src="/logo.png" alt="Parque Pinares" class="h-16 w-auto mx-auto mb-6 drop-shadow-2xl">
          <div class="w-24 h-1 bg-parque-lime mx-auto rounded-full mb-6"></div>
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

/* Efecto de brillo en hover para botones */
@keyframes shimmer {
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
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
