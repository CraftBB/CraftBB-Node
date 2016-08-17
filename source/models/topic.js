const database = require('mongoose')

const Schema = database.Schema

const topicSchema = new Schema({
  title: String,
  slug: String,
  body: String,
  author: String,
  category: String,
  timestamp: String
}, {
  collection: 'topics'
})

const Topic = database.model('Topic', topicSchema)

module.exports = Topic
