<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-header">
        <h1>Panel Administrativo</h1>
        <p>Cambiar Imagen del Mapa</p>
      </div>

      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="Ingresa la contraseña"
            :disabled="loading"
            @keydown.enter="handleLogin"
            autocomplete="off"
          />
        </div>

        <button type="submit" :disabled="loading" class="btn-login">
          {{ loading ? 'Verificando...' : 'Ingresar' }}
        </button>
      </form>

      <!-- Mensaje de error -->
      <div v-if="error" class="error-message">
        {{ error }}
      </div>

      <!-- Mensaje de info -->
      <div class="info-message">
        <p>Ingresa la contraseña para acceder al panel de administración.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const password = ref('')
const loading = ref(false)
const error = ref('')

const handleLogin = async () => {
  if (!password.value.trim()) {
    error.value = 'Por favor ingresa una contraseña'
    return
  }

  loading.value = true
  error.value = ''

  try {
    const response = await $fetch('/api/auth/login', {
      method: 'POST',
      body: {
        password: password.value
      }
    })

    if (response.success) {
      // Redirigir al panel de admin
      await router.push('/admin/map-image')
    }
  } catch (err: any) {
    error.value = err.data?.message || 'Error al iniciar sesión'
    password.value = ''
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

.login-box {
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 400px;
}

.login-header {
  text-align: center;
  margin-bottom: 30px;
}

.login-header h1 {
  color: #1e3c72;
  margin: 0 0 8px 0;
  font-size: 24px;
}

.login-header p {
  color: #666;
  margin: 0;
  font-size: 14px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-weight: 600;
  font-size: 14px;
}

input[type="password"] {
  width: 100%;
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
}

input[type="password"]:focus {
  outline: none;
  border-color: #2a5298;
  box-shadow: 0 0 0 3px rgba(42, 82, 152, 0.1);
}

input[type="password"]:disabled {
  background: #f5f5f5;
  cursor: not-allowed;
  opacity: 0.6;
}

.btn-login {
  width: 100%;
  padding: 12px;
  background: #2a5298;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.btn-login:hover:not(:disabled) {
  background: #1e3c72;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(42, 82, 152, 0.3);
}

.btn-login:disabled {
  background: #ccc;
  cursor: not-allowed;
  opacity: 0.7;
}

.error-message {
  background: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
  padding: 12px;
  border-radius: 6px;
  margin-top: 20px;
  font-size: 14px;
  text-align: center;
}

.info-message {
  background: #d1ecf1;
  border: 1px solid #bee5eb;
  color: #0c5460;
  padding: 12px;
  border-radius: 6px;
  margin-top: 20px;
  font-size: 13px;
  text-align: center;
}

.info-message p {
  margin: 0;
}

@media (max-width: 480px) {
  .login-box {
    padding: 30px 20px;
  }

  .login-header h1 {
    font-size: 20px;
  }
}
</style>
