import { Request, Response } from 'express'
import { UserModel } from '../models'
import { generateAccessToken } from '../utils/TokenGenerator'

export class CompaniesController {
  async registerRecentCompany(request: Request, response: Response) {
    const { user_id } = request
    const { quote } = request.body

    const user = await UserModel.findById(user_id)
    if (!user) {
      throw new Error('Usuário não encontrado.')
    }

    if (user.recentCompanies.length >= 10) {
      user.recentCompanies.pop()
    }

    if (user.recentCompanies.includes(quote)) {
      user.recentCompanies = user.recentCompanies.filter(item => item !== quote)
    }

    user.recentCompanies.unshift(quote)
    await user.save()

    const token = generateAccessToken(user._id)

    return response.json({ user, token })
  }

  async addFavoriteCompany(request: Request, response: Response) {
    const { user_id } = request
    const { quote } = request.body

    const user = await UserModel.findById(user_id)
    if (!user) {
      throw new Error('Usuário não encontrado.')
    }

    if (user.favoriteCompanies.includes(quote)) {
      return response.end()
    }

    user.favoriteCompanies.push(quote)
    await user.save()

    const token = generateAccessToken(user._id)

    return response.json({ user, token })
  }

  async removeFavoriteCompany(request: Request, response: Response) {
    const { user_id } = request
    const { quote } = request.params

    const user = await UserModel.findById(user_id)
    if (!user) {
      throw new Error('Usuário não encontrado.')
    }

    if (!user.favoriteCompanies.includes(quote)) {
      return response.end()
    }

    user.favoriteCompanies = user.favoriteCompanies.filter(company => company !== quote)
    await user.save()

    const token = generateAccessToken(user._id)

    return response.json({ user, token })
  }
}
