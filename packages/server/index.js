import express from 'express'

const PORT = process.env.PORT || 3030
const app = express()

app.use(express.static('public'))
app.get('/api', (req, res) => {
    res.send('Hello there')
})
app.listen(PORT, () => {
    console.log(`Server ready at port ${PORT}`)
})
