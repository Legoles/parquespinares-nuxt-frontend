import { head } from '@vercel/blob'

export default defineEventHandler(async () => {
  try {
    // Intentar obtener la imagen con nombre fijo
    const blob = await head('mapa-parque.jpg', {
      token: process.env.BLOB_READ_WRITE_TOKEN
    })

    if (blob && blob.url) {
      return {
        url: blob.url,
        exists: true
      }
    }

    // Si no existe, retornar null
    return {
      url: null,
      exists: false
    }

  } catch (error) {
    // Si la imagen no existe o hay error, retornar null
    return {
      url: null,
      exists: false
    }
  }
})
