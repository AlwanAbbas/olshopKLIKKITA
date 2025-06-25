import { BaseSchema } from '@adonisjs/lucid/schema'

export default class AddIsBestSellerToProducts extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.boolean('is_best_seller').defaultTo(false)
      table.boolean('is_new_arrival').defaultTo(false)
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('is_best_seller')
      table.dropColumn('is_new_arrival')
    })
  }
}
