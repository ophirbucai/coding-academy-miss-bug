import express from 'express'
import { loggerService } from './services/logger.service.js'
import {bugRoutes} from "./api/bug/bug.routes.js";
import cookieParser from 'cookie-parser'

const PORT = process.env.PORT || 3030
const port = +process.env.PORT || 3030
const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(cookieParser())

/* Routers */
app.use('/api/bug', bugRoutes)


app.listen(port, () => {
    loggerService.info(`Server ready at port ${port}`)
})
