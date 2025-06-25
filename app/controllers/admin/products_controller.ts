// app/controllers/admin/products_controller.ts
import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'

export default class ProductsController {
  async index({ inertia }: HttpContext) {
    const products = await Product.all()
    return inertia.render('admin/products/index', { products })
  }

  async create({ inertia }: HttpContext) {
    return inertia.render('admin/products/create')
  }

  async store({ request, response }: HttpContext) {
    const data = request.only([
      'name',
      'image',
      'price',
      'original_price',
      'discount_price',
      'is_flash_sale',
      'is_best_seller',
      'is_new_arrival',
    ])
    await Product.create(data)
    return response.redirect().toPath('/admin/products')
  }

  async edit({ params, inertia }: HttpContext) {
    const product = await Product.findOrFail(params.id)
    return inertia.render('admin/products/edit', { product })
  }

  async update({ params, request, response }: HttpContext) {
    const product = await Product.findOrFail(params.id)
    const data = request.only([
      'name',
      'image',
      'price',
      'original_price',
      'discount_price',
      'is_flash_sale',
      'is_best_seller',
      'is_new_arrival',
    ])
    product.merge(data)
    await product.save()
    return response.redirect().toPath('/admin/products')
  }

  async destroy({ params, response }: HttpContext) {
    const product = await Product.findOrFail(params.id)
    await product.delete()
    return response.redirect().toPath('/admin/products')
  }
}
