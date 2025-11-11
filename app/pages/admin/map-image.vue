<template>
  <div class="admin-container">
    <div class="admin-header">
      <h1>Administrador de Imagen del Mapa</h1>
      <button @click="handleLogout" class="btn-logout">
        Cerrar Sesión
      </button>
    </div>

    <!-- Mensajes de notificación -->
    <div v-if="uploadedUrl" class="notification success-notification">
      <div class="notification-content">
        <span class="notification-icon">✓</span>
        <div class="notification-text">
          <strong>¡Imagen subida exitosamente!</strong>
          <p>La imagen del mapa ha sido actualizada.</p>
        </div>
        <button @click="uploadedUrl = ''" class="btn-close-notification">×</button>
      </div>
    </div>

    <div v-if="error" class="notification error-notification">
      <div class="notification-content">
        <span class="notification-icon">⚠</span>
        <div class="notification-text">
          <strong>Error</strong>
          <p>{{ error }}</p>
        </div>
        <button @click="error = ''" class="btn-close-notification">×</button>
      </div>
    </div>

    <div class="admin-box">
      <div class="content-grid">
        <!-- Columna izquierda: Formulario de subida -->
        <div class="upload-section">
          <h2>Subir Nueva Imagen</h2>

          <div class="file-input-wrapper">
            <input
              id="fileInput"
              type="file"
              @change="onFileSelected"
              accept="image/*"
              ref="fileInput"
            />
            <label for="fileInput" class="file-label">
              <span class="file-icon">📁</span>
              <span v-if="!selectedFile">Selecciona una imagen</span>
              <span v-else class="file-selected">{{ selectedFile.name }}</span>
            </label>
          </div>

          <button
            @click="uploadImage"
            :disabled="!selectedFile || uploading"
            class="btn-primary"
          >
            <span v-if="uploading">⏳ Subiendo...</span>
            <span v-else>⬆ Subir Imagen</span>
          </button>

          <div v-if="uploadedUrl" class="url-display">
            <label>URL de la imagen:</label>
            <div class="url-copy-wrapper">
              <input
                type="text"
                :value="uploadedUrl"
                readonly
                class="url-input"
              />
              <button @click="copyToClipboard" class="btn-copy" title="Copiar URL">
                📋
              </button>
            </div>
          </div>
        </div>

        <!-- Columna derecha: Vista previa -->
        <div class="preview-section">
          <h2>Imagen Actual</h2>
          <div v-if="currentMapUrl" class="preview-container">
            <img :key="currentMapUrl" :src="currentMapUrl" alt="Mapa actual" />
          </div>
          <div v-else class="no-image">
            <span class="no-image-icon">🖼️</span>
            <p>Sin imagen personalizada</p>
            <small>Usando imagen predeterminada</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const selectedFile = ref<File | null>(null)
const uploading = ref(false)
const uploadedUrl = ref('')
const error = ref('')
const fileInput = ref<HTMLInputElement | null>(null)
const currentMapUrl = ref('')

// Cargar URL actual del mapa desde el API
onMounted(async () => {
  try {
    const response = await $fetch('/api/get-map-url')
    if (response.url) {
      // Agregar timestamp para evitar caché
      currentMapUrl.value = `${response.url}?v=${Date.now()}`
    }
  } catch (err) {
    console.log('No hay imagen custom aún o error al cargar')
  }
})

const onFileSelected = (event: Event) => {
  const target = event.target as HTMLInputElement
  selectedFile.value = target.files?.[0] || null
  error.value = ''
}

const uploadImage = async () => {
  if (!selectedFile.value) return

  uploading.value = true
  error.value = ''

  try {
    const formData = new FormData()
    formData.append('file', selectedFile.value)

    const response = await $fetch('/api/upload-map', {
      method: 'POST',
      body: formData
    })

    // Agregar timestamp para evitar caché de la imagen anterior
    const urlWithCacheBuster = `${response.url}?v=${Date.now()}`

    // Precargar la imagen para asegurar que esté en caché fresca
    await new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = () => resolve(true)
      img.onerror = () => reject(new Error('Error al cargar imagen'))
      img.src = urlWithCacheBuster
    })

    uploadedUrl.value = urlWithCacheBuster
    currentMapUrl.value = urlWithCacheBuster

    // Emitir evento global para que MapSection se actualice
    window.dispatchEvent(
      new CustomEvent('mapImageUpdated', { detail: { url: urlWithCacheBuster } })
    )

    // Limpiar input
    selectedFile.value = null
    if (fileInput.value) {
      fileInput.value.value = ''
    }

  } catch (err: any) {
    error.value = 'Error al subir la imagen: ' + (err.message || 'Error desconocido')
  } finally {
    uploading.value = false
  }
}

const copyToClipboard = () => {
  navigator.clipboard.writeText(uploadedUrl.value)
  alert('URL copiada al portapapeles')
}

const handleLogout = async () => {
  try {
    await $fetch('/api/auth/logout', {
      method: 'POST'
    })
    // Redirigir a login
    await router.push('/admin/login')
  } catch (err) {
    console.error('Error al cerrar sesión:', err)
    alert('Error al cerrar sesión')
  }
}
</script>

<style scoped>
.admin-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  padding: 40px 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

.admin-header {
  max-width: 1200px;
  margin: 0 auto 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.admin-header h1 {
  color: white;
  margin: 0;
  font-size: 28px;
}

.btn-logout {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.btn-logout:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* Notificaciones */
.notification {
  max-width: 1200px;
  margin: 0 auto 20px;
  border-radius: 8px;
  padding: 16px 20px;
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.success-notification {
  background: #d4edda;
  border: 1px solid #c3e6cb;
  color: #155724;
}

.error-notification {
  background: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
}

.notification-content {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.notification-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.notification-text {
  flex: 1;
}

.notification-text strong {
  display: block;
  margin-bottom: 4px;
  font-size: 15px;
}

.notification-text p {
  margin: 0;
  font-size: 14px;
  opacity: 0.9;
}

.btn-close-notification {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: inherit;
  opacity: 0.6;
  padding: 0;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  transition: opacity 0.2s;
}

.btn-close-notification:hover {
  opacity: 1;
}

/* Contenedor principal */
.admin-box {
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

h2 {
  color: #2a5298;
  font-size: 20px;
  margin: 0 0 20px 0;
  padding-bottom: 12px;
  border-bottom: 2px solid #e0e0e0;
}

/* Sección de subida */
.upload-section {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 8px;
  height: fit-content;
}

.file-input-wrapper {
  margin-bottom: 15px;
}

input[type="file"] {
  display: none;
}

.file-label {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  border: 2px dashed #2a5298;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  color: #2a5298;
  transition: all 0.3s ease;
  font-weight: 500;
  min-height: 60px;
}

.file-label:hover {
  background: #f0f4f8;
  border-color: #1e3c72;
}

.file-icon {
  font-size: 24px;
}

.file-selected {
  color: #1e3c72;
  font-weight: 600;
}

input[type="file"]:focus + .file-label {
  outline: 2px solid #2a5298;
  outline-offset: 2px;
}

/* Botones */
.btn-primary {
  width: 100%;
  padding: 14px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  transition: all 0.3s ease;
  background: #2a5298;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background: #1e3c72;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(42, 82, 152, 0.3);
}

.btn-primary:disabled {
  background: #ccc;
  cursor: not-allowed;
  opacity: 0.6;
}

.btn-secondary {
  width: 100%;
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
  background: #dc3545;
  color: white;
  margin-top: 15px;
}

.btn-secondary:hover {
  background: #c82333;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(220, 53, 69, 0.3);
}

/* URL Display */
.url-display {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #dee2e6;
}

.url-display label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #495057;
  margin-bottom: 8px;
}

.url-copy-wrapper {
  display: flex;
  gap: 8px;
}

.url-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  background: #f8f9fa;
  color: #495057;
}

.btn-copy {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: #28a745;
  color: white;
  font-size: 18px;
  transition: all 0.2s ease;
}

.btn-copy:hover {
  background: #218838;
  transform: scale(1.05);
}

/* Sección de vista previa */
.preview-section {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
}

.preview-container {
  background: white;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
  margin-bottom: 15px;
}

.preview-container img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  display: block;
}

.no-image {
  background: white;
  padding: 40px 20px;
  border-radius: 6px;
  border: 2px dashed #dee2e6;
  text-align: center;
  color: #6c757d;
  margin-bottom: 15px;
}

.no-image-icon {
  font-size: 48px;
  display: block;
  margin-bottom: 12px;
  opacity: 0.5;
}

.no-image p {
  margin: 0 0 4px 0;
  font-weight: 600;
  font-size: 16px;
}

.no-image small {
  font-size: 13px;
  opacity: 0.8;
}

/* Responsive */
@media (max-width: 968px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .admin-box {
    padding: 20px;
  }

  .admin-header h1 {
    font-size: 22px;
  }

  h2 {
    font-size: 18px;
  }

  .admin-container {
    padding: 20px 10px;
  }

  .upload-section,
  .preview-section {
    padding: 20px;
  }
}
</style>
