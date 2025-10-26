export default defineEventHandler((event) => {
  // Eliminar la cookie de autenticación
  deleteCookie(event, 'admin_auth')

  return {
    success: true,
    message: 'Sesión cerrada'
  }
})
