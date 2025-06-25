// database/migrations/xxxx_products.ts
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Products extends BaseSchema {
  protected tableName = 'products'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.text('description')
      table.string('name')
      table.text('image')
      table.integer('price')
      table.integer('original_price').nullable()
      table.integer('discount_price').nullable()
      table.boolean('is_flash_sale').defaultTo(false)
      table.boolean('is_best_seller').defaultTo(false)
      table.boolean('is_new_arrival').defaultTo(false)
      table.integer('sold').defaultTo(0)
      // table
      //   .integer('category_id')
      //   .unsigned()
      //   .references('id')
      //   .inTable('categories')
      //   .onDelete('SET NULL')
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
