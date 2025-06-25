import type { HttpContext } from '@adonisjs/core/http'
import { loginValidator } from '#validators/login'
import { registerValidator } from '#validators/register'
import hash from '@adonisjs/core/services/hash'
import User from '#models/user'

export default class AuthController {
  // =====================
  // TAMPILKAN HALAMAN LOGIN
  // =====================
  public showLogin({ inertia }: HttpContext) {
    return inertia.render('auth/login')
  }

  // =====================
  // PROSES LOGIN
  // =====================
  public async login({ request, auth, response, session }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)

    try {
      const user = await User.verifyCredentials(email, password)
      await auth.use('web').login(user)

      session.flash('success', 'Berhasil login.')
      return response.redirect('/')
    } catch {
      session.flash('errors', {
        email: 'Login gagal. Periksa kembali email dan password Anda.',
      })

      return response.redirect().back()
    }
  }

  // =====================
  // TAMPILKAN HALAMAN REGISTER
  // =====================
  public showRegister({ inertia }: HttpContext) {
    return inertia.render('auth/register')
  }

  // =====================
  // PROSES REGISTER
  // =====================
  public async storeRegister({ request, response, session }: HttpContext) {
    const data = await request.validateUsing(registerValidator)

    // Cek jika email sudah digunakan
    const existing = await User.findBy('email', data.email)
    if (existing) {
      session.flash('errors', { email: 'Email sudah digunakan.' })
      session.flash('data', { name: data.name, email: data.email }) // agar tetap di form
      return response.redirect().back()
    }

    // Simpan user baru
    await User.create({
      fullName: data.name,
      email: data.email,
      address: data.address ?? '',
      password: await hash.make(data.password),
    })

    session.flash('success', 'Akun berhasil dibuat. Silakan login.')
    return response.redirect('/login')
  }
}
