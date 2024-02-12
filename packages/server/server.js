import express from 'express'
import { loggerService } from './services/logger.service.js'

const PORT = process.env.PORT || 3030
const port = +process.env.PORT || 3030
const app = express()

app.use(express.static('public'))
app.get('/api', (req, res) => {
    res.send('Hello there')
})
app.listen(port, () => {
    loggerService.info(`Server ready at port ${port}`)
})
