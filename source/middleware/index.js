const express = require('express')
const router = express.Router()

var unless = function (path, middleware) {
  return function (req, res, next) {
    if (path === req.path) {
      return next()
    } else {
      return middleware(req, res, next)
    }
  }
}

router.use(unless('/authenticate', require('./authentication')))

module.exports = router
