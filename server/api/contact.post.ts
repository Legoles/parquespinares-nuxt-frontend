import nodemailer from 'nodemailer'

interface ContactRequest {
  name: string
  email: string
  phone: string
  message: string
}

export default defineEventHandler(async (event) => {
  try {
    // Parse the request body
    const body = await readBody<ContactRequest>(event)

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Nombre, email y mensaje son requeridos'
      })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Formato de email inválido'
      })
    }

    // Get SMTP configuration from environment variables
    const smtpHost = process.env.NUXT_PUBLIC_SMTP_HOST
    const smtpPort = parseInt(process.env.NUXT_PUBLIC_SMTP_PORT || '587', 10)
    const smtpUser = process.env.NUXT_PUBLIC_SMTP_USER
    const smtpPassword = process.env.NUXT_SMTP_PASSWORD
    const smtpFrom = process.env.NUXT_PUBLIC_SMTP_FROM
    const smtpTo = process.env.NUXT_PUBLIC_SMTP_TO

    // Validate SMTP configuration
    if (!smtpHost || !smtpUser || !smtpPassword || !smtpFrom || !smtpTo) {
      const missingVars = []
      if (!smtpHost) missingVars.push('NUXT_PUBLIC_SMTP_HOST')
      if (!smtpUser) missingVars.push('NUXT_PUBLIC_SMTP_USER')
      if (!smtpPassword) missingVars.push('NUXT_SMTP_PASSWORD')
      if (!smtpFrom) missingVars.push('NUXT_PUBLIC_SMTP_FROM')
      if (!smtpTo) missingVars.push('NUXT_PUBLIC_SMTP_TO')

      console.error('Configuración SMTP incompleta. Variables faltantes:', missingVars)
      throw createError({
        statusCode: 500,
        message: `Configuración SMTP incompleta. Faltantes: ${missingVars.join(', ')}`
      })
    }

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // Use TLS if port is 465, otherwise use STARTTLS
      auth: {
        user: smtpUser,
        pass: smtpPassword
      }
    })

    // Prepare email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3d6700; margin-bottom: 20px;">Nuevo mensaje de contacto</h2>

        <p style="margin: 10px 0;"><strong>Nombre:</strong> ${escapeHtml(body.name)}</p>
        <p style="margin: 10px 0;"><strong>Email:</strong> ${escapeHtml(body.email)}</p>
        <p style="margin: 10px 0;"><strong>Teléfono:</strong> ${body.phone ? escapeHtml(body.phone) : 'No proporcionado'}</p>

        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">

        <h3 style="color: #3d6700; margin: 15px 0 10px;">Mensaje:</h3>
        <p style="line-height: 1.6; white-space: pre-wrap; color: #333;">
          ${escapeHtml(body.message)}
        </p>

        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">

        <p style="font-size: 12px; color: #999; margin-top: 20px;">
          Este email fue generado automáticamente desde el formulario de contacto de Barrio Privado Parque Pinares.
        </p>
      </div>
    `

    const emailText = `
Nuevo mensaje de contacto

Nombre: ${body.name}
Email: ${body.email}
Teléfono: ${body.phone || 'No proporcionado'}

Mensaje:
${body.message}
    `

    // Send email
    await transporter.sendMail({
      from: `"${body.name}" <${smtpFrom}>`,
      to: smtpTo,
      replyTo: body.email,
      subject: `Nuevo contacto de ${body.name} - Parque Pinares`,
      text: emailText,
      html: emailHtml
    })

    // Return success response
    setResponseStatus(event, 200)
    return {
      success: true,
      message: 'Mensaje enviado correctamente'
    }
  } catch (error) {
    console.error('Error al enviar email:', error)

    // If it's already a structured error, rethrow it
    if (error instanceof Error && 'statusCode' in error) {
      throw error
    }

    // Handle SMTP-specific errors
    if (error instanceof Error) {
      const errorMsg = error.message

      if (errorMsg.includes('ENOTFOUND') || errorMsg.includes('ECONNREFUSED')) {
        console.error('No se puede conectar al servidor SMTP:', errorMsg)
        throw createError({
          statusCode: 503,
          message: 'No se puede conectar al servidor de email. Verifica la configuración SMTP.'
        })
      }

      if (errorMsg.includes('EAUTH') || errorMsg.includes('Invalid login')) {
        console.error('Credenciales SMTP inválidas:', errorMsg)
        throw createError({
          statusCode: 503,
          message: 'Error de autenticación con el servidor de email.'
        })
      }

      if (errorMsg.includes('SMTP')) {
        throw createError({
          statusCode: 503,
          message: 'Error en la conexión SMTP: ' + errorMsg
        })
      }
    }

    // Generic error response
    throw createError({
      statusCode: 500,
      message: 'Error al procesar la solicitud: ' + (error instanceof Error ? error.message : 'Error desconocido')
    })
  }
})

/**
 * Escape HTML special characters to prevent XSS
 */
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }
  return text.replace(/[&<>"']/g, (char) => map[char])
}
