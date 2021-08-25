import dotenv from 'dotenv'
import express from 'express'
dotenv.config()

import Routes from './routes'
import './database'

const app = express()

app.use(express.json())
app.use(Routes)

app.listen(process.env.PORT!, () => console.log('SERVER IS RUNNING'))
