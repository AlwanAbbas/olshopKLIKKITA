// app/middleware/admin_middleware.ts
import type { HttpContext } from '@adonisjs/core/http'

export default class Admin {
  public async handle({ auth, response }: HttpContext, next: () => Promise<void>) {
    if (!auth.user || auth.user.role !== 'admin') {
      return response.unauthorized({ message: 'Unauthorized access' })
    }

    await next()
  }
}
