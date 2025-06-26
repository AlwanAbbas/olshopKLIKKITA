import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'
import Category from '#models/category'

export default class HomeController {
  async index({ inertia, auth }: HttpContext) {
    const user = auth.user
    const flashSales = await Product.query().where('is_flash_sale', true)
    const bestSellers = await Product.query().where('is_best_seller', true)
    const newArrivals = await Product.query().where('is_new_arrival', true)
    const categories = await Category.all()
    const products = await Product.all()

    return inertia.render('home', {
      flashSales,
      bestSellers,
      newArrivals,
      categories,
      products,
      user,
    })
  }
}
