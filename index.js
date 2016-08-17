'use strict'

const express = require('express')
const database = require('mongoose')
const parser = require('body-parser')
const cookie = require('cookie-parser')
const settings = require('./settings.json')
const app = express()

database.connect(settings.database)

app.engine('pug', require('pug').__express)

app.set('view engine', 'pug')
app.set('views', 'public/themes/' + settings.website.theme + '/views')
app.set('secret', settings.server.secret)

app.use('/avatar', express.static('public/avatars'))
app.use('/assets', express.static('public/themes/' + settings.website.theme + '/assets'))
app.use(cookie())
app.use(require('./source/middleware'))
app.use(require('./source/controllers'))
app.use(parser.json())
app.use(parser.urlencoded({ extended: false }))

app.locals.website = settings.website
app.locals.url = settings.website.domain
app.locals.asset = {
  'css': settings.website.domain + 'assets/css/',
  'img': settings.website.domain + 'assets/img/',
  'js': settings.website.domain + 'assets/js/'
}

app.locals.pretty = true

app.listen(settings.server.port, function () {
  console.info('Listening on port: ' + settings.server.port)
})
