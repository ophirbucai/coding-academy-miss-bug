import express from 'express'
import { loggerService } from './services/logger.service.js'
import { bugRoutes } from './api/bug/bug.routes.js'
import cookieParser from 'cookie-parser'
import { dbService } from './services/db.service.js'
import { resolve } from 'node:path'

const port = +process.env.PORT || 3030
const app = express()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('public'))
}
app.use(express.json())
app.use(cookieParser())

/* Routers */
app.use('/api/bug', bugRoutes)

app.get('/**', (req, res) => {
  res.sendFile(resolve('public/index.html'))
})

dbService.testConnection()
app.listen(port, () => {
  loggerService.info(`Server ready at port ${port}`)
})
