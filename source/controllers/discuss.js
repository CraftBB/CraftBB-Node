const express = require('express')
const router = express.Router()

const Category = require('../models/category')
const Topic = require('../models/topic')

router.get('/', function (req, res) {
  res.render('discuss/index')
})

router.get('/:category', function (req, res) {
  res.render('discuss/topics')
})

router.get('/:category/:topic', function (req, res) {
  res.render('discuss/topic')
})

module.exports = router
