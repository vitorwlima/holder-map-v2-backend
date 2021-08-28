import dotenv from 'dotenv'
import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import 'reflect-metadata'
import 'express-async-errors'
dotenv.config()

import routes from './routes'
import './database'
import { handleError } from './middlewares'

const app = express()

app.use(cors({ origin: process.env.ORIGIN, credentials: true }))
app.use(cookieParser())
app.use(express.json())
app.use(routes)
app.use(handleError)

app.listen(process.env.PORT!, () => console.log('SERVER IS RUNNING'))
