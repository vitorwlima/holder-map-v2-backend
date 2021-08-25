import { Router } from 'express'
import { UserRoutes } from './UserRoutes'

const Routes = Router()

Routes.use(UserRoutes)

export default Routes
