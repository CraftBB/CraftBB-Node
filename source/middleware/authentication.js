const express = require('express')
const auth = require('jsonwebtoken')
const router = express.Router()

router.use(function (req, res, next) {
  var token = req.cookies['access-token']
  if (token) {
    auth.verify(token, req.app.get('secret'), function (err, decoded) {
      if (err) {
        return res.json({
          success: false,
          message: 'Failed to authenticate token.'
        })
      } else {
        req.authenticate = decoded
        req.app.locals.authenticated = decoded
        next()
      }
    })
  } else {
    req.authenticate = false
    req.app.locals.authenticated = false
    next()
  }
})

module.exports = router
