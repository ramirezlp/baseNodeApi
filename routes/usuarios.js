var router = require('express').Router()
var usuarioController = require ('../controllers/usuarioController')
var authController = require ('../controllers/authController');

  router.get('/search', authController.authenticateJWT, function(req, res) {
    usuarioController.search(req, res)
  })
  router.get('/', authController.authenticateJWT, authController.authenticateJWT, function(req, res) {
    usuarioController.list(req,res)    
  })

  router.get('/:id', authController.authenticateJWT, function(req, res) {
    usuarioController.show(req, res)
  })
  
  router.post('/', authController.authenticateJWT, function(req, res) {
    usuarioController.create(req,res)
  })

  router.put('/:id', authController.authenticateJWT, function(req, res) {
    usuarioController.update(req,res)
  })
  
  router.delete('/:id', authController.authenticateJWT, function(req, res) {
    usuarioController.remove(req, res)
  })
  module.exports = router