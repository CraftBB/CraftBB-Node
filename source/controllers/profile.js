const express = require('express')
const router = express.Router()

const User = require('../models/user')

router.get('/:uuid', function  (req, res) {
  User.findOne({uuid: req.params.uuid}, function  (err, user) {
    if (err) throw err
    var exists = (user ? true : false)
    res.render('profile/index', {
      user: user,
      page: req.params.uuid,
      exists: exists
    })
  })
})

module.exports = router
