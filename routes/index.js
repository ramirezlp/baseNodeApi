var router = require('express').Router()
var usuarios = require('./usuarios')
var auth = require('./auth')


//Se definen las rutas de los controladores
router.use('/usuarios', usuarios)
router.use('/auth', auth)


router.get('/', function (req, res) {
  res.status(200).json({ message: 'Estás conectado a nuestra API' })
})

module.exports = router