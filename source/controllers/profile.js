const express = require('express')
const router = express.Router()

const User = require('../models/user')
const Comment = require('../models/comment')

router.get('/:uuid', function (req, res) {
    res.render('profile')
})


module.exports = router
