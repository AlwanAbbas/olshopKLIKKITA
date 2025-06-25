import { Vine } from '@vinejs/vine'

const vine = new Vine()

export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(6),
  })
)
