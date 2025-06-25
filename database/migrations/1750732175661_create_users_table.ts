import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  async up() {
    this.schema.alterTable('users', (table) => {
      // table.string('full_name').nullable()
      table.string('last_name').nullable()
      table.string('address').nullable()
    })
  }

  async down() {
    this.schema.alterTable('users', (table) => {
      table.dropColumns('full_name', 'last_name', 'address')
    })
  }
}
