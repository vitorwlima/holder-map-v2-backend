import { Request, Response } from 'express'
import { UserModel } from '../models'

export class CompaniesController {
  async registerRecentCompany(request: Request, response: Response) {
    const { user_id } = request
    const { quote } = request.body

    const user = await UserModel.findById(user_id)
    if (!user) {
      throw new Error('Usuário não encontrado.')
    }

    if (user.recentCompanies.length >= 10) {
      user.recentCompanies.shift()
    }

    user.recentCompanies.push(quote)
    await user.save()

    return response.end()
  }
}
