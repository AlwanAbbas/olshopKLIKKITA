import type { HttpContext } from '@adonisjs/core/http'

export default class AccountController {
  async profile({ inertia }: HttpContext) {
    return inertia.render('account') // <-- sesuai file React kamu
  }
}
