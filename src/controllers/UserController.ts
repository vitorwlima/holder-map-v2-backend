import { Request, Response } from 'express'
import { hash } from 'bcryptjs'

import { UserModel } from '../models'

export class UserController {
  async register(request: Request, response: Response) {
    const { name, email, password } = request.body

    const userAlreadyExists = await UserModel.findOne({ email })
    if (userAlreadyExists) {
      throw new Error('Usuário já cadastrado.')
    }

    const passwordHash = await hash(password, 8)
    const user = await new UserModel({ name, email, password: passwordHash }).save()

    return response.json(user)
  }
}
