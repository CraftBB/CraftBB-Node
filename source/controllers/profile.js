const express = require('express')
const router = express.Router()

const User = require('../models/user')

router.get('/:uuid', function (req, res) {
  console.log(req.cookies)
  User.findOne({uuid: req.params.uuid}, function (err, user) {
    if (err) throw err
    res.render('profile', {
      user: user,
      page: req.params.uuid
    })
  })
})

module.exports = router
