const express = require('express')
const routes = require('./routes')

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', routes)

const server = app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})

server.on('err', (err) => {
  console.log('Error', err.message)
})
