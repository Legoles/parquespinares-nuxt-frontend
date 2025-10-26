export default defineEventHandler((event) => {
  // Solo proteger rutas /admin (excepto /admin/login)
  const url = getRequestURL(event)
  const isAdminRoute = url.pathname.startsWith('/admin')
  const isLoginRoute = url.pathname === '/admin/login'
  const isApiAuth = url.pathname.startsWith('/api/auth')

  // Permitir acceso a login, API de auth, y routes no-admin
  if (isLoginRoute || isApiAuth || !isAdminRoute) {
    return
  }

  // Verificar si tiene cookie de autenticación
  const authCookie = getCookie(event, 'admin_auth')

  if (!authCookie) {
    // Redirigir a login si no está autenticado
    return sendRedirect(event, '/admin/login')
  }
})
