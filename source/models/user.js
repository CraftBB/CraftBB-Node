const database = require('mongoose')

const Schema = database.Schema

const userSchema = new Schema({
  uuid: String,
  title: String,
  status: String,
  signature: String,
  rank: String,
  token: String,
  last_login: String,
  joined: String,
  online: Boolean,
  banner: String,
  gender: String,
  location: String,
  birthday: String,
  ip: {
    current: String,
    previous: String,
    history: Array
  }
}, {
  collection: 'users'
})

const User = database.model('User', userSchema)

module.exports = User
