'use strict'

const express = require('express')
const settings = require('./settings.json')
const database = require('mongoose')
const craft = express()

const db = settings.database

database.connect('mongodb://' + db.user + ':' + db.pass + '@' + db.host + ':' + db.port + '/' + db.name)

craft.engine('pug', require('pug').__express)

craft.set('view engine', 'pug')

craft.use('/avatar', express.static('public/avatars'))

craft.use('/assets', express.static('public/themes/' + settings.website.theme + '/assets'))

craft.set('views', 'public/themes/' + settings.website.theme + '/views')

craft.locals.website = settings.website

craft.locals.asset = {
  'css': settings.website.domain + 'assets/css/',
  'img': settings.website.domain + 'assets/img/',
  'js': settings.website.domain + 'assets/js/'
}

craft.locals.pretty = true

craft.use(require('./source/controllers'))

craft.listen(settings.server.port, function () {
  console.info('Listening on port: ' + settings.server.port)
})
