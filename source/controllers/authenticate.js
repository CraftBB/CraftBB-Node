const express = require('express')
const auth = require('jsonwebtoken')
const router = express.Router()

const User = require('../models/user')

router.get('/:uuid/:token', function (req, res) {
  User.findOne({uuid: req.params.uuid}, function (err, user) {
    if (err) throw err
    if (!user) {
      res.json({
        success: false,
        message: 'Wrong UUID'
      })
    } else if (user) {
      if (user.token !== req.params.token) {
        res.json({
          success: false,
          message: 'Wrong Token'
        })
      } else {
        var token = auth.sign({user: req.params.uuid}, req.app.get('secret'), {
          expiresIn: 60 * 24
        })
        if (req.cookies.session) {
          // check expiry
          res.redirect('/')
        } else {
          res.cookie('access-token', token, {maxAge: 1 * 60 * 1000, httpOnly: true})
          res.redirect('/')
        }
      }
    }
  })
})

module.exports = router
