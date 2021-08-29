import { Router } from 'express'
import { CompaniesController } from '../controllers/CompaniesController'

export const CompaniesRoutes = Router()
const companiesController = new CompaniesController()

CompaniesRoutes.post('/recent-company', companiesController.registerRecentCompany)
