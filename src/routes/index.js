const express = require('express')
const router = express.Router()
const students = require('./students')

router.get('/', (req, res) => {
  res.json({})
})

router.use('/students', students)

module.exports = router
