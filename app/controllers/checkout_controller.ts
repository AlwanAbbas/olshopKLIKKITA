import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CheckoutController {
  public async show({ inertia }: HttpContextContract) {
    // Menampilkan halaman checkout
    return inertia.render('checkout')
  }

  public async store({ request, response }: HttpContextContract) {
    const data = request.only([
      'firstName',
      'lastName',
      'email',
      'address',
      'paymentMethod',
      'coupon',
    ])

    // Di sini bisa simpan data ke database, kirim notifikasi, dsb.

    return response.redirect('/Arigatou_Gozaimas') // Redirect setelah checkout sukses
  }
}
