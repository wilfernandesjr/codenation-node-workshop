const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const routes = require('./routes')

// Serve Static
app.use(express.static(path.resolve(__dirname, 'public')))

// Server Config Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extend: true }))

// Router
app.use('/', routes)

// Error Handling
app.use((req, res, next) => {
  let err = new Error('Resource Not Found')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    status: err.status,
    error: err.message
  })
})

// Server Listener at bin/www
module.exports = app
