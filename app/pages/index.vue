<template>
  <div class="min-h-screen">
    <!-- Header -->
    <header class="bg-white/95 backdrop-blur-md shadow-sm fixed w-full top-0 z-50 transition-all">
      <nav class="container mx-auto px-6 py-3">
        <div class="flex justify-between items-center">
          <NuxtLink to="/" class="flex items-center">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 7178.872 2184.874" class="h-10 w-auto">
              <path d="M497.354 1533.61c0 55.683-2.437 97.446-7.296 125.272-7.656 45.246-23.67 80.04-48.027 104.398-32.715 32.716-76.914 49.074-132.58 49.074H177.9v300.96H42.194v-851.136c128.05 0 150.657-6.265 267.255-6.265 55.682 0 99.866 16.358 132.581 49.058 24.357 24.374 40.371 59.168 48.027 104.399 4.859 27.841 7.296 69.26 7.296 124.24m-135.706 0q0-72.042-11.483-103.351c-13.92-34.81-40.715-52.2-80.383-52.2-39.684 0-66.478 17.39-80.398 52.2q-11.484 31.31-11.484 103.351t11.484 103.351c13.92 35.498 40.714 53.246 80.398 53.246q59.502 0 80.383-53.246 11.484-31.31 11.483-103.35m676.654 272.479H905.72l-133.628 5.218c-61.182 2.375-107.177-15.67-137.799-46.98-30.606-31.31-45.933-72.386-45.933-123.194 0-45.934 15.827-83.681 47.495-113.272 31.67-29.576 77.774-44.356 138.33-44.356H902.58v-27.155c0-57.073-33.746-85.602-101.255-85.602-43.855 0-78.649 14.967-104.397 44.887l-86.647-84.556c25.747-28.545 53.932-48.372 84.554-59.511 27.841-10.437 65.072-15.655 111.708-15.655 154.5 0 231.759 64.026 231.759 192.094zM902.58 1605.65v-29.232H795.06q-76.212 0-76.212 61.59c0 41.762 26.107 62.635 78.305 62.635 46.62 0 77.602-11.484 92.913-34.45 8.343-12.53 12.514-32.717 12.514-60.543m679.45-298.586-102.303 103.351c-21.576-21.576-45.589-32.356-72.04-32.356-22.966 0-42.793 8-59.494 24.013-18.795 18.78-28.2 44.184-28.2 76.213v327.803h-135.706v-543.911h132.58l136.753-6.265c51.464-2.36 94.304 17.045 128.41 51.152m478.313 806.25h-135.706v-300.961h-132.58c-55.667 0-99.882-16.358-132.597-49.075-24.357-24.357-40.356-59.151-48.011-104.397-4.875-27.826-7.312-69.589-7.312-125.272 0-54.98 2.437-96.399 7.312-124.24 7.655-45.231 23.654-80.025 48.01-104.399 32.716-32.7 77.322-51.667 133.629-49.058l134.674 6.265h132.581zm-135.706-579.705c0-51.496-5.218-88.384-15.67-110.663-13.92-29.92-39.668-44.887-77.243-44.887-39.668 0-66.462 17.389-80.382 52.199q-11.484 31.31-11.484 103.351 0 72.042 11.484 103.351 20.88 53.247 80.382 53.246c37.575 0 63.322-14.967 77.243-44.887 10.452-22.967 15.67-60.214 15.67-111.71m733.899 272.479h-132.581l-135.722 6.265c-53.51 2.453-96.381-16.015-128.394-48.028-36.887-36.887-55.338-88.383-55.338-154.503v-347.645h135.721v328.85c0 34.106 9.734 59.854 29.232 77.259 15.998 14.608 36.183 21.92 60.541 21.92 25.06 0 45.59-7.312 61.603-21.92 19.483-17.405 29.232-43.153 29.232-77.26v-328.849h135.705zm599.067-229.67h-340.327c0 36.185 10.609 65.417 31.84 87.68 21.217 22.28 50.278 33.42 87.164 33.42 48.027 0 89.086-17.061 123.192-51.152l82.476 80.384c-29.935 29.92-59.166 51.153-87.694 63.683-32.716 14.608-72.384 21.92-119.02 21.92-167.734 0-251.585-92.915-251.585-278.744q0-130.49 65.759-205.672c42.465-48.011 99.522-72.025 171.218-72.025 73.774 0 132.237 24.701 175.374 74.12 41.074 47.323 61.603 109.272 61.603 185.828zm-133.628-92.914c-.703-22.28-4.874-41.763-12.53-58.465-16.701-37.59-46.98-56.386-90.82-56.386q-65.782 0-90.834 56.386c-7.656 16.702-11.827 36.185-12.515 58.465z" fill="#acc348"/>
              <path d="M3516.836 708.402c-4.808 335.15-5.866 513.639-10.698 848.813-1.541 53.268-16.012 163.199-61.497 262.667h199.422c-9.915-31.513-30.046-43.811-42.539-89.383-18.152-126.077-17.163-154.874-22.523-230.374l-52.225-790.088z" fill="#acc348" fill-rule="evenodd" clip-rule="evenodd"/>
              <path d="m3257.859 694.857 270.003 226.601-.267-65.643zm511.143 4.661-243.48 149.444-3.044-41.584zm-933.328-175.175h1008.035l-.025-22.639-888.472 1.017 3.86-74.416h329.385V282.798h624.566v121.68h-382.814v22.81h511.183v97.055h184.777v135.27H2835.674zm550.569-330.24h195.57v67.632h-195.57z" fill="#acc348" fill-rule="evenodd" clip-rule="evenodd"/>
              <path d="M3005.979 683.227h1082.32v67.632h-1082.32zm428.901-562.623h63.966v53.746h-63.966z" fill="#acc348" fill-rule="evenodd" clip-rule="evenodd"/>
              <path d="M4533.07 2061.071c0 15.632-4.907 27.732-14.719 36.275-9.812 8.567-22.808 12.838-38.941 12.838h-71.893V1936.2h69.156c16.464 0 29.531 4.272 39.178 12.839 9.647 8.543 14.482 20.157 14.482 34.82 0 8.797-2.5 16.694-7.477 23.69-4.505 6.188-10 10.599-16.487 13.208 17.808 6.996 26.7 20.434 26.7 40.315m-29.697-76.244c0-7.989-2.618-14.131-7.854-18.449-5.26-4.318-12.289-6.488-21.11-6.488h-39.932v49.851h39.932c8.821 0 15.85-2.147 21.11-6.465 5.236-4.318 7.854-10.46 7.854-18.449m2.76 75.02c0-7.827-2.594-14.177-7.76-19.072-5.142-4.872-12.312-7.32-21.464-7.32h-42.432v53.015h42.432c9.152 0 16.322-2.424 21.464-7.32 5.166-4.894 7.76-11.313 7.76-19.302m255.091 50.337h-28.705l-12.242-34.935h-70.147l-12.217 34.935h-28.706l65.147-173.985h21.723zm-48.423-57.425-26.96-77.214-27.715 77.214zm260.563 57.425h-31.465l-37.432-73.311h-33.706v73.311h-26.96V1936.2h68.897c16.653 0 30.003 4.734 40.074 14.178 10.072 9.444 15.096 21.658 15.096 36.644 0 11.891-3.279 21.867-9.86 29.948-6.58 8.058-15.095 13.461-25.591 16.232zm-32.456-122.909c0-8.474-2.736-15.147-8.232-20.042s-12.807-7.343-21.983-7.343h-39.932v54.493h39.932c9.176 0 16.488-2.402 21.983-7.204 5.496-4.803 8.232-11.43 8.232-19.904m253.345 122.91h-31.464l-37.433-73.312h-33.705v73.311h-26.96V1936.2h68.897c16.653 0 30.003 4.734 40.074 14.178 10.072 9.444 15.096 21.658 15.096 36.644 0 11.891-3.279 21.867-9.86 29.948-6.58 8.058-15.095 13.461-25.591 16.232zm-32.455-122.91c0-8.474-2.735-15.147-8.232-20.042-5.495-4.895-12.807-7.343-21.982-7.343h-39.933v54.493h39.933c9.175 0 16.487-2.402 21.982-7.204 5.497-4.803 8.232-11.43 8.232-19.904m150.744 122.91h-26.96v-173.986h26.96zm225.135-87.005c0 20.366-.684 34.058-2.005 41.054-2.005 11.407-6.982 21.036-14.977 28.84-12.643 12.377-28.281 18.565-46.938 18.565-18.468 0-34.036-6.188-46.678-18.565-7.973-7.804-13.067-17.433-15.214-28.84-1.344-7.157-2.005-20.85-2.005-41.054 0-20.18.66-33.873 2.005-41.031 2.147-11.407 7.241-21.035 15.214-28.84 12.642-12.376 28.21-18.588 46.678-18.588 18.657 0 34.295 6.212 46.938 18.588 7.995 7.805 12.973 17.433 14.977 28.84 1.321 6.996 2.005 20.689 2.005 41.031m-26.96 0c0-14.824-.259-24.268-.755-28.331-1.179-11.569-4.41-20.135-9.74-25.654-6.817-7.181-15.638-10.76-26.465-10.76-10.803 0-19.624 3.579-26.44 10.76-5.332 5.519-8.587 14.085-9.742 25.654-.495 4.063-.755 13.507-.755 28.331s.26 24.291.755 28.355c1.156 11.568 4.41 20.112 9.741 25.653 6.817 7.181 15.638 10.76 26.44 10.76 10.827 0 19.649-3.579 26.465-10.76 5.33-5.542 8.562-14.085 9.741-25.653.496-4.064.755-13.531.755-28.355m428.549-34.197c0 15.31-5.213 27.94-15.615 37.868-10.402 9.952-24.176 14.917-41.3 14.917h-40.452v68.416h-26.96V1936.2h67.411c17.124 0 30.9 4.965 41.3 14.893 10.403 9.952 15.616 22.583 15.616 37.891m-26.96 0c0-9.12-2.878-16.255-8.633-21.381-5.732-5.126-13.35-7.712-22.832-7.712h-38.94v57.933h38.942c9.482 0 17.1-2.563 22.832-7.712q8.633-7.688 8.633-21.128m246.6 121.201h-31.465l-37.432-73.311h-33.706v73.311h-26.96V1936.2h68.897c16.653 0 30.003 4.734 40.074 14.178 10.072 9.444 15.096 21.658 15.096 36.644 0 11.891-3.279 21.867-9.86 29.948-6.58 8.058-15.095 13.461-25.591 16.232zm-32.456-122.909c0-8.474-2.736-15.147-8.232-20.042s-12.807-7.343-21.983-7.343h-39.932v54.493h39.932c9.176 0 16.488-2.402 21.983-7.204s8.232-11.43 8.232-19.904m150.743 122.91h-26.96V1936.2h26.96zM6497.33 1936.2l-58.92 173.985h-20.97l-58.4-173.985h27.95l40.947 126.581 40.923-126.58zm203.93 173.985h-28.704l-12.242-34.935h-70.147l-12.218 34.935h-28.705l65.147-173.985h21.723zm-48.423-57.425-26.96-77.214-27.714 77.214zm257.308-30.78c0 18.403-.566 31.195-1.745 38.353-2.335 14.016-7.736 25.169-16.228 33.481-11.133 10.922-26.464 16.371-45.923 16.371h-62.411V1936.2h62.41c19.46 0 34.791 5.45 45.924 16.371 8.492 8.313 13.893 19.05 16.228 32.257 1.18 6.835 1.745 19.212 1.745 37.153m-26.96 0c0-14.5-.4-24.614-1.25-30.317-1.32-8.797-4.08-15.47-8.231-20.042-7.147-7.805-17.219-11.73-30.191-11.73h-32.715v126.58h32.715c12.973 0 23.044-3.902 30.19-11.73 4.152-4.548 6.911-11.637 8.233-21.242.849-6.189 1.25-16.695 1.25-31.518m245.61 1.201c0 20.366-.685 34.058-2.005 41.054-2.005 11.407-6.982 21.036-14.978 28.84-12.642 12.377-28.28 18.565-46.937 18.565-18.469 0-34.036-6.188-46.679-18.565-7.972-7.804-13.067-17.433-15.213-28.84-1.345-7.157-2.005-20.85-2.005-41.054 0-20.18.66-33.873 2.005-41.031 2.146-11.407 7.24-21.035 15.213-28.84 12.643-12.376 28.21-18.588 46.679-18.588 18.656 0 34.295 6.212 46.937 18.588 7.996 7.805 12.973 17.433 14.978 28.84 1.32 6.996 2.005 20.689 2.005 41.031m-26.96 0c0-14.824-.26-24.268-.755-28.331-1.18-11.569-4.41-20.135-9.741-25.654-6.817-7.181-15.638-10.76-26.465-10.76-10.802 0-19.624 3.579-26.44 10.76-5.331 5.519-8.586 14.085-9.742 25.654-.495 4.063-.755 13.507-.755 28.331s.26 24.291.755 28.355c1.156 11.568 4.411 20.112 9.742 25.653 6.816 7.181 15.638 10.76 26.44 10.76 10.827 0 19.648-3.579 26.465-10.76 5.33-5.542 8.562-14.085 9.741-25.653.495-4.064.755-13.531.755-28.355m26.974-381.503c0 47.855-18.858 85.727-56.558 113.647-37.7 27.904-88.804 41.872-153.329 41.872q-133.744 0-212.042-75.041l38.06-38.06c40.59 42.778 97.865 64.151 171.811 64.151 105.115 0 157.688-35.512 157.688-106.57 0-52.917-33.356-82.274-100.053-88.07l-86.992-7.625c-105.115-9.421-157.688-55.09-157.688-137.02 0-44.95 17.045-81.01 51.12-108.195s79.743-40.778 137.018-40.778q110.92 0 183.78 55.449l-36.981 36.98c-40.59-29.715-89.538-44.59-146.799-44.59-89.178 0-133.752 33.717-133.752 101.133 0 52.2 35.512 81.572 106.568 88.087l84.82 7.61c49.292 4.358 85.538 15.232 108.74 32.637 29.715 22.467 44.589 57.261 44.589 104.383m-536.574-101.133h-364.293c0 137.755 56.916 206.624 170.734 206.624 54.37 0 102.583-21.029 144.626-63.073l41.324 32.623q-80.476 80.478-189.216 80.478c-148.61 0-222.916-89.54-222.916-268.604q0-126.155 55.448-197.375c36.98-47.497 88.445-71.23 154.423-71.23q97.864 0 153.876 67.964c37.34 45.31 55.994 107.836 55.994 187.58zm-55.448-44.575c-1.453-40.606-7.624-73.947-18.498-100.054-10.874-26.092-28.638-47.122-53.276-63.074-24.654-15.951-52.198-23.92-82.648-23.92s-57.995 7.969-82.649 23.92c-24.653 15.952-42.402 36.982-53.275 63.074-10.874 26.107-17.046 59.448-18.499 100.054zm-391.774-185.97-40.231 40.247c-27.544-27.545-60.541-41.325-98.96-41.325-43.495 0-77.757 15.405-102.755 46.215-25.013 30.81-37.527 68.323-37.527 112.554v322.975h-55.464v-524.162h55.464v69.604c31.902-50.746 83.007-76.12 153.328-76.12 50.746 0 92.804 16.671 126.145 50.012m-527.512 480.666h-55.448v-52.199c-39.153 39.153-92.444 58.73-159.86 58.73-72.492 0-123.972-15.952-154.423-47.856q-38.058-39.137-38.058-102.226c0-47.84 16.139-84.993 48.401-111.46s77.024-39.685 134.3-39.685h169.64v-58.73c0-85.54-49.308-128.317-147.892-128.317-65.978 0-114.192 22.107-144.627 66.338l-40.246-34.81c38.434-53.636 100.053-80.462 184.873-80.462 135.565 0 203.34 57.26 203.34 171.815zm-55.448-182.689v-67.432H5398.93c-89.163 0-133.753 35.17-133.753 105.492 0 68.15 45.668 102.21 137.018 102.21 59.448 0 102.944-13.405 130.488-40.23 19.576-18.843 29.372-52.2 29.372-100.04m-498.515 182.689h-55.464v-325.146c0-104.399-48.198-156.598-144.627-156.598-46.386 0-82.648 13.78-108.74 41.325-26.106 27.545-39.152 65.964-39.152 115.273v325.146h-55.463v-524.162h55.463v61.995c39.153-45.684 90.617-68.51 154.423-68.51 60.166 0 107.474 17.576 141.908 52.73q51.651 52.754 51.652 143.004zm-656.016-524.162h55.463v524.163h-55.463zm-6.515-250.106h68.509v68.51h-68.509zm-160.062 511.601c0 103.695-22.483 178.017-67.447 222.983-30.45 30.45-73.227 45.684-128.331 45.684-66.728 0-118.567-24.67-155.548-73.979v390.626h-55.479V1265.85h55.48v67.448c36.98-49.325 88.819-73.979 155.547-73.979 55.104 0 97.88 15.233 128.331 45.684 44.964 44.965 67.447 119.287 67.447 222.998m-55.464 0c0-66.73-8.702-117.116-26.107-151.207-23.216-45.684-63.821-68.526-121.831-68.526q-87.015 0-121.817 68.526c-15.827 30.998-24.42 75.541-25.857 133.52l-.047 2.407v.594l-.078 2.406v.593l-.03 2.453v.594l-.048 2.453v.594l-.015 2.5v.593l-.031 2.5v.594l.03 2.5v.593l.016 2.5v.594l.047 2.453v.593l.031 2.453v.594l.078 2.406v.594l.047 2.406.094 3.562.078 2.375c1.86 54.98 10.374 97.164 25.685 126.443 23.201 46.403 63.79 69.589 121.785 69.589s98.6-23.186 121.801-69.589c9.312-17.858 16.14-40.512 20.467-67.9l.297-1.844.078-.578.281-1.828.078-.578.297-1.891.078-.578.25-1.89.078-.579.25-1.937.078-.578.219-1.922.078-.578.234-2 .079-.578.203-2c2.093-19.123 3.124-40.247 3.124-63.4" fill="#b1b2b4"/>
            </svg> -->
          </NuxtLink>
          <div class="hidden md:flex space-x-8 items-center">
            <a href="#proyecto" class="text-gray-700 hover:text-parque-lime transition-colors duration-300 font-medium text-sm">El proyecto</a>
            <a href="#amenities" class="text-gray-700 hover:text-parque-lime transition-colors duration-300 font-medium text-sm">Amenities</a>
            <a href="#contacto" class="bg-parque-lime text-white px-6 py-2.5 rounded-full hover:bg-parque-green transition-all duration-300 font-medium text-sm shadow-lg hover:shadow-xl">Contacto</a>
          </div>
          <button class="md:hidden text-gray-700">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="relative h-screen">
      <div class="absolute inset-0">
        <img src="/assets/head.jpg" alt="Vista de la playa" class="w-full h-full object-cover">
        <div class="absolute inset-0 gradient-overlay"></div>
      </div>
      <div class="relative h-full flex flex-col justify-center items-center text-center px-4">
        <div class="fade-in space-y-6 max-w-4xl">
          <span class="inline-block bg-parque-lime/90 text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
            Últimas Oportunidades
          </span>
          <h1 class="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl tracking-tight leading-tight">
            ÚLTIMOS TERRENOS<br>
            <span class="text-parque-lime">DISPONIBLES</span>
          </h1>
          <p class="text-xl md:text-2xl text-white/90 font-light">
            A dos cuadras de la playa en Barrio Privado Sustentable
          </p>
          <div class="pt-6">
            <a href="#contacto" class="inline-block bg-white text-parque-green px-10 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300">
              Conocé más
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Amenities 3D Section -->
    <section class="py-24 bg-gradient-to-b from-white to-gray-50">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12 fade-in">
            <h2 class="text-4xl md:text-5xl font-bold text-parque-dark mb-4">
              Amenities de <span class="text-parque-lime">Primera Categoría</span>
            </h2>
            <p class="text-gray-600 text-lg max-w-2xl mx-auto">
              Diseñados para brindarte la mejor calidad de vida en un entorno natural único
            </p>
          </div>
          <div class="hover-lift rounded-2xl overflow-hidden shadow-2xl">
            <img src="/assets/1.jpg" alt="Vista 3D de Amenities" class="w-full">
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-24 bg-white" id="proyecto">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-flex items-center justify-center mb-6">
            <div class="h-1 w-16 bg-parque-lime rounded-full"></div>
            <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" class="h-12 w-12 mx-4">
              <style>.st1{fill:#acc348}</style>
              <path class="st1" d="M100 20L60 100h80L100 20z"/>
              <rect class="st1" x="70" y="110" width="60" height="8" rx="4"/>
              <rect class="st1" x="80" y="125" width="40" height="8" rx="4"/>
              <rect class="st1" x="90" y="140" width="20" height="8" rx="4"/>
            </svg> -->
            <div class="h-1 w-16 bg-parque-lime rounded-full"></div>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-parque-dark mb-4">
            Un lugar para vivir,<br>
            <span class="text-parque-lime">una inversión segura</span>
          </h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div v-for="feature in features" :key="feature.id" class="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div class="w-14 h-14 bg-parque-lime/10 rounded-xl flex items-center justify-center mb-4">
              <component :is="feature.icon" class="w-8 h-8 text-parque-lime" />
            </div>
            <h3 class="text-lg font-semibold text-parque-dark mb-2">{{ feature.title }}</h3>
            <p class="text-gray-600 text-sm">{{ feature.description }}</p>
          </div>
        </div>

        <div class="mt-16 text-center">
          <div class="inline-flex flex-col md:flex-row gap-4 items-center justify-center bg-parque-lime/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <div class="text-center md:text-left">
              <p class="text-3xl font-bold text-parque-dark">21 casas vendidas</p>
              <p class="text-gray-600">Únete a una comunidad consolidada</p>
            </div>
            <div class="hidden md:block w-px h-12 bg-parque-lime/30"></div>
            <div class="text-center md:text-left">
              <p class="text-3xl font-bold text-parque-lime">100% terminado</p>
              <p class="text-gray-600">Obra totalmente finalizada</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Club House Image -->
    <section class="py-24 bg-gray-50" id="amenities">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-4xl md:text-5xl font-bold text-parque-dark mb-4">
              Nuestro <span class="text-parque-lime">Club House</span>
            </h2>
            <p class="text-gray-600 text-lg max-w-2xl mx-auto">
              Un espacio diseñado para compartir momentos únicos con familia y amigos
            </p>
          </div>
          <div class="hover-lift rounded-2xl overflow-hidden shadow-2xl">
            <img src="/assets/2.jpg" alt="Club House" class="w-full">
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-24 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-parque-dark mb-8">
            Plan Maestro del <span class="text-parque-lime">Proyecto</span>
          </h2>
        </div>

        <!-- Legend -->
        <div class="flex flex-wrap justify-center gap-6 mb-12">
          <div class="flex items-center bg-white px-6 py-3 rounded-full shadow-md">
            <div class="w-8 h-8 bg-green-500 rounded-lg mr-3 shadow-sm"></div>
            <span class="text-sm font-semibold text-gray-700 uppercase tracking-wide">Terreno Disponible</span>
          </div>
          <div class="flex items-center bg-white px-6 py-3 rounded-full shadow-md">
            <div class="w-8 h-8 bg-red-300 rounded-lg mr-3 shadow-sm"></div>
            <span class="text-sm font-semibold text-gray-700 uppercase tracking-wide">Casas Construidas</span>
          </div>
          <div class="flex items-center bg-white px-6 py-3 rounded-full shadow-md">
            <div class="w-8 h-8 bg-orange-700 rounded-lg mr-3 shadow-sm"></div>
            <span class="text-sm font-semibold text-gray-700 uppercase tracking-wide">Amenities</span>
          </div>
        </div>

        <!-- Map -->
        <div class="max-w-6xl mx-auto">
          <div class="bg-white rounded-2xl shadow-2xl p-6 hover-lift">
            <img src="/assets/mapa-parque.png" alt="Mapa Parque Pinares" class="w-full rounded-xl">
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="py-24 bg-gradient-to-br from-parque-green to-parque-dark relative overflow-hidden" id="contacto">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
      </div>
      <div class="container mx-auto px-6 relative">
        <div class="max-w-3xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
              ¿Listo para vivir<br>
              <span class="text-parque-lime">tu sueño?</span>
            </h2>
            <p class="text-white/90 text-lg">
              Contactanos hoy y descubrí todas las oportunidades que tenemos para vos
            </p>
          </div>

          <div class="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Nombre completo</label>
                  <input v-model="form.name" type="text" required class="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-parque-lime focus:border-transparent transition-all">
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Teléfono</label>
                  <input v-model="form.phone" type="tel" class="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-parque-lime focus:border-transparent transition-all">
                </div>
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input v-model="form.email" type="email" required class="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-parque-lime focus:border-transparent transition-all">
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Mensaje</label>
                <textarea v-model="form.message" required rows="5" class="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-parque-lime focus:border-transparent transition-all resize-none"></textarea>
              </div>

              <div class="flex items-start space-x-3">
                <input v-model="form.privacy" type="checkbox" id="privacy" class="mt-1 w-5 h-5 text-parque-lime border-gray-300 rounded focus:ring-parque-lime">
                <label for="privacy" class="text-sm text-gray-600">
                  Acepto la <a href="#" class="text-parque-green font-semibold hover:underline">Política de Privacidad</a> y el tratamiento de mis datos personales
                </label>
              </div>

              <div class="pt-4">
                <button type="submit" class="w-full bg-gradient-to-r from-parque-lime to-parque-green text-white px-8 py-5 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Enviar consulta
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-parque-dark text-white py-12">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-6 md:mb-0">
            <div class="text-left">
              <p class="text-2xl font-light text-parque-lime mb-1">parque <span class="font-semibold">pinares</span></p>
              <p class="text-xs text-gray-400 uppercase tracking-wider">Barrio Privado Sustentable</p>
            </div>
          </div>
          <div class="text-center md:text-right">
            <p class="text-sm text-gray-400">
              &copy; 2024 Parque Pinares. Todos los derechos reservados.
            </p>
            <p class="text-xs text-gray-500 mt-2">
              Diseñado con pasión por la sustentabilidad
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  phone: '',
  email: '',
  message: '',
  privacy: false
})

const features = ref([
  {
    id: 1,
    title: 'A dos cuadras de la playa',
    description: 'Ubicación privilegiada cerca del mar',
    icon: 'IconCheck'
  },
  {
    id: 2,
    title: 'A 15 minutos del centro',
    description: 'Conectividad ideal con todas las comodidades',
    icon: 'IconClock'
  },
  {
    id: 3,
    title: 'Cámaras de seguridad',
    description: 'Vigilancia 24/7 para tu tranquilidad',
    icon: 'IconEye'
  },
  {
    id: 4,
    title: 'Acceso controlado portería',
    description: 'Seguridad premium y control de accesos',
    icon: 'IconLock'
  },
  {
    id: 5,
    title: 'Riego automatizado',
    description: 'Mantenimiento de áreas verdes eficiente',
    icon: 'IconFilter'
  },
  {
    id: 6,
    title: 'Electricidad subterránea',
    description: 'Infraestructura moderna y estética',
    icon: 'IconZap'
  },
  {
    id: 7,
    title: 'Piscinas climatizadas',
    description: 'Disfruta todo el año del confort',
    icon: 'IconStar'
  },
  {
    id: 8,
    title: 'Club house completo',
    description: 'Sala de juegos, gimnasio y vestuarios',
    icon: 'IconHome'
  },
  {
    id: 9,
    title: 'Canchas de pádel y tenis',
    description: 'Espacios deportivos de primer nivel',
    icon: 'IconSmile'
  }
])

const handleSubmit = async () => {
  console.log('Formulario enviado:', form.value)
  // Aquí iría la lógica para enviar el formulario
  // por ejemplo: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form.value) })
}

// Smooth scroll behavior
onMounted(() => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })

  // Header scroll effect
  let lastScroll = 0
  const header = document.querySelector('header')

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset

    if (currentScroll > 100) {
      header?.classList.add('shadow-lg')
    } else {
      header?.classList.remove('shadow-lg')
    }

    lastScroll = currentScroll
  })
})

import { onMounted } from 'vue'
</script>

<style scoped>
.fade-in {
  animation: fadeIn 0.8s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.gradient-overlay {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3));
}
</style>
