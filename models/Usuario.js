var mongoose = require('mongoose')
var Schema = mongoose.Schema

var usuario = new Schema({
  nombre: String, 
  apellido: String, 
  username: {
      type: String,
      required: true,
  },
  password: {
      type: String,
      required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  email: String
})

var Usuario = mongoose.model('Usuario', usuario)

module.exports = Usuario