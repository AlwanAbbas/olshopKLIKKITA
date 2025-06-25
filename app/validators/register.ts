import { Vine } from '@vinejs/vine'

const vine = new Vine()

export const registerValidator = vine.compile(
  vine.object({
    name: vine.string(),
    email: vine.string().email(),
    password: vine.string().minLength(6),
    address: vine.string().optional(),
  })
)
