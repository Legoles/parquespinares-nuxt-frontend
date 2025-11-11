import { put } from '@vercel/blob'

export default defineEventHandler(async (event) => {
  try {
    // Lee el multipart form data
    const form = await readMultipartFormData(event)

    if (!form || !form[0]) {
      throw createError({
        statusCode: 400,
        message: 'No se envió ninguna imagen'
      })
    }

    const file = form[0]

    // Validar que sea una imagen
    if (!file.type?.startsWith('image/')) {
      throw createError({
        statusCode: 400,
        message: 'El archivo debe ser una imagen'
      })
    }

    // Sube al Blob Storage de Vercel con nombre fijo (sobreescribe automáticamente)
    const blob = await put('mapa-parque.jpg', file.data, {
      access: 'public',
      token: process.env.BLOB_READ_WRITE_TOKEN,
      addRandomSuffix: false, // Importante: no agregar sufijo aleatorio
      allowOverwrite: true // Permite sobrescribir el archivo existente
    })

    // Agregar timestamp para romper el cache del navegador y CDN
    const urlWithCacheBuster = `${blob.url}?v=${Date.now()}`

    return {
      url: urlWithCacheBuster,
      pathname: blob.pathname
    }

  } catch (error: any) {
    console.error('Error al subir imagen del mapa:', error)
    throw createError({
      statusCode: 500,
      message: error.message || 'Error al subir la imagen del mapa'
    })
  }
})
