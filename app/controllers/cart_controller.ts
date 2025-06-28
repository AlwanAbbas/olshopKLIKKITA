import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

interface Product {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export default class CartController {
  /**
   * Dummy produk (simulasi data dari database)
   */
  private getProducts(): Product[] {
    return [
      {
        id: 1,
        name: 'Adidas Birmingham BNIB',
        price: 12500000,
        quantity: 1,
        images: [
    'resources/images/A9.png',
  ],
      },
      {
        id: 2,
        name: 'Adidas Munchen BNIB',
        price: 5600000,
        quantity: 1,
        images: [
    'resources/images/A10.png',
  ],
      },
    ]
  }

  /**
   * Tampilkan isi keranjang
   */
  public async index({ inertia, session, request }: HttpContextContract) {
    // Opsional: reset keranjang dari URL ?reset=true
    if (request.input('reset') === 'true') {
      session.forget('cart')
    }

    // Ambil cart dari session, jika tidak ada ambil dummy
    const cart = session.get('cart') || this.getProducts()

    // Hitung subtotal
    const subtotal = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )

    return inertia.render('cart', {
      products: cart,
      subtotal,
    })
  }

  /**
   * Update jumlah kuantitas dari form keranjang
   */
  public async update({ request, response, session }: HttpContextContract) {
    const formData = request.all()

    // Ambil cart yang tersimpan di session atau dummy
    const currentCart: Product[] = session.get('cart') || this.getProducts()

    // Perbarui quantity berdasarkan input dari form
    const updatedCart = currentCart.map((item) => {
      const qty = parseInt(formData[`qty_${item.id}`])
      return {
        ...item,
        quantity: isNaN(qty) ? item.quantity : qty,
      }
    })

    // Simpan kembali ke session
    session.put('cart', updatedCart)

    return response.redirect().back()
  }
}
