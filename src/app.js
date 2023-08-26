import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import authRoutes from './routes/auth.route.js'
import asesoresRoutes from './routes/asesor.route.js'

const app = express()

app.use(cors())

app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

app.use('/api', authRoutes)
app.use('/api', asesoresRoutes)

app.use((err, req, res, next) => {
  console.error(err.stack)

  res.status(500).json({ message: 'Something went wrong' })
})

export default app
