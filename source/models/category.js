const database = require('mongoose')

const Schema = database.Schema

const categorySchema = new Schema({
  name: String,
  slug: String,
  description: String,
  color: String,
  private: Boolean,
  parent: String
}, {
  collection: 'categories'
})

const Category = database.model('Category', categorySchema)

module.exports = Category
