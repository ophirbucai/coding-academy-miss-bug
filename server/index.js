import express from 'express'

const PORT = process.env.PORT || 3030
const app = express()

app.get('/', (req, res) => {
    res.send('Hello there')
})
app.listen(PORT, () => {
    console.log('Server ready at port 3030')
})
