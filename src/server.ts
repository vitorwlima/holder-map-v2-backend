import dotenv from 'dotenv'
import express from 'express'
import 'reflect-metadata'
import 'express-async-errors'
dotenv.config()

import routes from './routes'
import './database'
import { handleError } from './middlewares'

const app = express()

app.use(express.json())
app.use(routes)
app.use(handleError)

app.listen(process.env.PORT!, () => console.log('SERVER IS RUNNING'))
