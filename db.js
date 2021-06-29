//incluimos Mongoose y abrimos una conexión
var mongoose = require('mongoose')
var MONGO_URL = process.env.MONGO_URL || 'mongodb+srv://user:password@host'
mongoose.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.on('connected', function () {
  console.log('Conectado exitosamente a la base de datos!')
})

mongoose.connection.on('error',function (err) {
  console.log('Error al conextar a la base de datos: ' + err)
})

mongoose.connection.on('disconnected', function () {
  console.log('Desconectado de la base de datos')
})

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Desconectado de la base de datos al terminar la app')
    process.exit(0)
  })
})
