const express = require('express')
const router = express.Router()

const Category = require('../models/category')
const Topic = require('../models/topic')

router.get('/', function (req, res) {
  Category.find(function (err, category) {
    if (err) throw err
    res.render('discuss', {
      categories: category,
      page: 'Discuss'
    })
  })
})

router.get('/:category', function (req, res) {
  Category.findOne({slug: req.params.category}, function (err, category) {
    if (err) throw err
    if (!category) res.send('404')
    else {
      Topic.find({category: category.id}, function (err, topic) {
        if (err) throw err
        res.render('category', {
          topics: topic,
          page: category.name,
          category: category.slug
        })
      })
    }
  })
})

router.get('/:category/:topic', function (req, res) {
  Category.findOne({slug: req.params.category}, function (err, category) {
    if (err) throw err
    if (!category) res.send('404')
    else {
      Topic.findOne({slug: req.params.topic}, function (err, topic) {
        if (err) throw err
        if (!topic) res.send('404')
        res.render('topic', {
          topic: topic,
          page: topic.title,
          category_name: category.name,
          category_slug: category.slug
        })
      })
    }
  })
})

module.exports = router
