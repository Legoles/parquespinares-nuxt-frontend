export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { password } = body

    if (!password) {
      throw createError({
        statusCode: 400,
        message: 'La contraseña es requerida'
      })
    }

    const adminPassword = process.env.ADMIN_PASSWORD

    if (password !== adminPassword) {
      throw createError({
        statusCode: 401,
        message: 'Contraseña incorrecta'
      })
    }

    // Crear cookie de sesión segura
    setCookie(event, 'admin_auth', 'authenticated', {
      httpOnly: true, // No accesible desde JavaScript
      secure: process.env.NODE_ENV === 'production', // HTTPS en producción
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 // 24 horas
    })

    return {
      success: true,
      message: 'Autenticación exitosa'
    }

  } catch (error: any) {
    console.error('Error en login:', error)
    throw error
  }
})
