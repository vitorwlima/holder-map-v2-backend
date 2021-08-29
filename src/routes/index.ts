import { Router } from 'express'
import { CompaniesRoutes } from './CompaniesRoutes'
import { UserRoutes } from './UserRoutes'

const routes = Router()

routes.use(UserRoutes)
routes.use(CompaniesRoutes)

export default routes
