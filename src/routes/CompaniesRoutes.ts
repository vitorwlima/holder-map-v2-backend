import { Router } from 'express'
import { CompaniesController } from '../controllers/CompaniesController'
import { ensureAuthenticated } from '../middlewares'

export const CompaniesRoutes = Router()
const companiesController = new CompaniesController()

CompaniesRoutes.post('/recent-company', ensureAuthenticated, companiesController.registerRecentCompany)
CompaniesRoutes.post('/favorite-company', ensureAuthenticated, companiesController.addFavoriteCompany)
CompaniesRoutes.delete('/favorite-company/:quote', ensureAuthenticated, companiesController.removeFavoriteCompany)
