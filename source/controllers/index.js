const express = require('express')
const router = express.Router()

router.use('/discuss', require('./discuss'))

router.use('/profile', require('./profile'))

router.get('/', function (req, res) {
  res.render('index')
})

module.exports = router
