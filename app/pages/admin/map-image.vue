<template>
  <div class="admin-container">
    <div class="admin-header">
      <h1>Administrador de Imagen del Mapa</h1>
      <button @click="handleLogout" class="btn-logout">
        Cerrar Sesión
      </button>
    </div>

    <div class="admin-box">

      <!-- Formulario de subida -->
      <div class="upload-section">
        <h2>Cambiar Imagen del Mapa</h2>

        <div class="file-input-wrapper">
          <input
            id="fileInput"
            type="file"
            @change="onFileSelected"
            accept="image/*"
            ref="fileInput"
          />
          <label for="fileInput">Selecciona una imagen</label>
        </div>

        <button
          @click="uploadImage"
          :disabled="!selectedFile || uploading"
          class="btn-primary"
        >
          {{ uploading ? 'Subiendo...' : 'Subir Imagen' }}
        </button>
      </div>

      <!-- Vista previa de la imagen actual -->
      <div class="preview-section">
        <h2>Imagen Actual del Mapa</h2>
        <div v-if="currentMapUrl" class="preview-container">
          <img :key="currentMapUrl" :src="currentMapUrl" alt="Mapa actual" />
          <p class="url-text">{{ currentMapUrl }}</p>
        </div>
        <p v-else class="no-image">Sin imagen custom. Usando imagen predeterminada.</p>
      </div>

      <!-- Resultado de carga exitosa -->
      <div v-if="uploadedUrl" class="success">
        <h3>✓ ¡Imagen subida exitosamente!</h3>
        <div class="result-preview">
          <img :key="uploadedUrl" :src="uploadedUrl" alt="Imagen nueva" />
        </div>
        <p class="success-text">La imagen del mapa ha sido actualizada. Recarga la página para verla reflejada.</p>
        <div class="url-info">
          <p>URL de la imagen:</p>
          <input
            type="text"
            :value="uploadedUrl"
            readonly
            class="url-input"
          />
          <button @click="copyToClipboard" class="btn-copy">Copiar URL</button>
        </div>
      </div>

      <!-- Mensaje de error -->
      <div v-if="error" class="error">
        <p>{{ error }}</p>
        <button @click="error = ''" class="btn-close">Cerrar</button>
      </div>

      <!-- Botón para limpiar la imagen custom -->
      <div v-if="currentMapUrl" class="actions">
        <button @click="resetToDefault" class="btn-secondary">
          Restaurar imagen predeterminada
        </button>
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

const resetToDefault = async () => {
  if (confirm('¿Restaurar la imagen predeterminada del mapa?')) {
    try {
      // Llamar al API para eliminar la imagen
      await $fetch('/api/delete-map', { method: 'POST' })

      currentMapUrl.value = ''
      uploadedUrl.value = ''

      window.dispatchEvent(
        new CustomEvent('mapImageUpdated', { detail: { url: null } })
      )
    } catch (err) {
      error.value = 'Error al restaurar imagen predeterminada'
    }
  }
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
  max-width: 900px;
  margin: 0 auto 30px;
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

.admin-box {
  max-width: 900px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

h1 {
  color: #1e3c72;
  margin-bottom: 30px;
  font-size: 28px;
  text-align: center;
}

h2 {
  color: #2a5298;
  font-size: 18px;
  margin: 25px 0 15px;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 10px;
}

/* Upload Section */
.upload-section {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 8px;
  margin-bottom: 30px;
}

.file-input-wrapper {
  position: relative;
  margin-bottom: 15px;
}

input[type="file"] {
  display: none;
}

input[type="file"] + label {
  display: block;
  padding: 12px 15px;
  border: 2px dashed #2a5298;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  text-align: center;
  color: #2a5298;
  transition: all 0.3s ease;
  font-weight: 500;
}

input[type="file"] + label:hover {
  background: #f0f4f8;
  border-color: #1e3c72;
}

input[type="file"]:focus + label {
  outline: 2px solid #2a5298;
  outline-offset: 2px;
}

/* Buttons */
.btn-primary,
.btn-secondary,
.btn-copy,
.btn-close {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.btn-primary {
  background: #2a5298;
  color: white;
  margin-top: 10px;
  width: 100%;
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
  background: #f5a623;
  color: white;
  width: 100%;
}

.btn-secondary:hover {
  background: #e8930f;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(245, 166, 35, 0.3);
}

.btn-copy {
  background: #27ae60;
  color: white;
  margin-top: 10px;
}

.btn-copy:hover {
  background: #229954;
}

.btn-close {
  background: #e74c3c;
  color: white;
  margin-top: 10px;
}

.btn-close:hover {
  background: #c0392b;
}

/* Preview Section */
.preview-section {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 8px;
  margin-bottom: 30px;
}

.preview-container {
  background: white;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
}

.preview-container img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  display: block;
  margin-bottom: 15px;
}

.url-text {
  color: #666;
  font-size: 12px;
  word-break: break-all;
  background: #e0e0e0;
  padding: 10px;
  border-radius: 4px;
  margin: 0;
  font-family: 'Courier New', monospace;
}

.no-image {
  color: #999;
  text-align: center;
  padding: 20px;
  font-style: italic;
}

/* Success Message */
.success {
  background: #d4edda;
  border: 2px solid #28a745;
  border-radius: 8px;
  padding: 25px;
  margin-bottom: 30px;
  color: #155724;
}

.success h3 {
  margin-top: 0;
  font-size: 18px;
}

.result-preview {
  margin: 20px 0;
  background: white;
  padding: 15px;
  border-radius: 6px;
}

.result-preview img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}

.success-text {
  margin: 15px 0;
  font-weight: 500;
}

.url-info {
  background: white;
  padding: 15px;
  border-radius: 6px;
  margin-top: 15px;
}

.url-info p {
  margin: 0 0 10px 0;
  color: #333;
  font-weight: 600;
}

.url-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  margin-bottom: 10px;
  background: #f9f9f9;
}

/* Error Message */
.error {
  background: #f8d7da;
  border: 2px solid #f5c6cb;
  border-radius: 8px;
  padding: 25px;
  margin-bottom: 30px;
  color: #721c24;
}

.error p {
  margin: 0 0 15px 0;
}

/* Actions */
.actions {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #e0e0e0;
}

@media (max-width: 768px) {
  .admin-box {
    padding: 20px;
  }

  h1 {
    font-size: 22px;
  }

  h2 {
    font-size: 16px;
  }

  .admin-container {
    padding: 20px 10px;
  }
}
</style>
