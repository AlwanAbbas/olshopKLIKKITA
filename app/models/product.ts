import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare description: string | null

  @column()
  declare image: string // tambahkan jika gambar produk belum ada

  @column()
  declare price: number

  @column()
  declare original_price: number | null // harga sebelum diskon

  @column()
  declare discount_price: number | null // harga setelah diskon

  @column()
  declare stock: number

  @column()
  declare sold: number

  @column()
  declare is_flash_sale: boolean

  @column()
  declare is_best_seller: boolean

  @column()
  declare is_new_arrival: boolean

  @column()
  declare category_id: number | null

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime
}
