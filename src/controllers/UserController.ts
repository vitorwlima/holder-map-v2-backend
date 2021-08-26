import { Request, Response } from 'express'
import { compare, hash } from 'bcryptjs'

import { UserModel } from '../models'
import { generateAccessToken } from '../utils/TokenGenerator'

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

  async login(request: Request, response: Response) {
    const { email, password } = request.body

    const user = await UserModel.findOne({ email })
    if (!user) {
      throw new Error('Email não cadastrado.')
    }

    const passwordMatch = await compare(password, user.password)
    if (!passwordMatch) {
      throw new Error('Senha incorreta.')
    }

    const token = generateAccessToken(user._id)

    return response.json({ user, token })
  }
}
