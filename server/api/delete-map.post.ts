import { del } from '@vercel/blob'

export default defineEventHandler(async () => {
  try {
    // Eliminar la imagen con nombre fijo
    await del('mapa-parque.jpg', {
      token: process.env.BLOB_READ_WRITE_TOKEN
    })

    return {
      success: true,
      message: 'Imagen eliminada correctamente'
    }

  } catch (error: any) {
    console.error('Error al eliminar imagen del mapa:', error)

    // Si la imagen no existe, no es un error crítico
    if (error.message?.includes('not found')) {
      return {
        success: true,
        message: 'La imagen ya no existe'
      }
    }

    throw createError({
      statusCode: 500,
      message: error.message || 'Error al eliminar la imagen del mapa'
    })
  }
})
