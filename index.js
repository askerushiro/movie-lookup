const express = require('express')
const path = require('path')
const routes = require('./routes.js')

const app = express()

app.use(express.static(path.join(__dirname, 'client/build')))
app.use(routes())

const port = process.env.PORT || 5000
app.listen(port)

console.log(`Movie lookup api listening on ${port}`)