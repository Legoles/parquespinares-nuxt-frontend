import { put, del } from '@vercel/blob'

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

    // Obtener URL anterior si existe para borrarla (viene en FormData)
    const previousUrlField = form.find((f: any) => f.name === 'previousUrl')
    const previousUrl = previousUrlField?.data?.toString() || null

    if (previousUrl && previousUrl !== '/assets/plano.jpg') {
      try {
        // Extraer el pathname de la URL para borrar de Vercel
        const url = new URL(previousUrl)
        const pathname = url.pathname.split('/').pop() || ''

        if (pathname) {
          await del(pathname, {
            token: process.env.BLOB_READ_WRITE_TOKEN
          })
        }
      } catch (deleteError) {
        // Log del error pero no fallar por eso
        console.warn('Advertencia al borrar imagen anterior:', deleteError)
      }
    }

    // Sube al Blob Storage de Vercel
    const blob = await put(`mapa-parque-${Date.now()}.jpg`, file.data, {
      access: 'public',
      token: process.env.BLOB_READ_WRITE_TOKEN
    })

    return {
      url: blob.url,
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
