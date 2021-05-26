var router = require('express').Router()
var usuarioController = require ('../controllers/usuarioController')

  router.get('/search', function(req, res) {
    usuarioController.search(req, res)
  })
  router.get('/', function(req, res) {
    usuarioController.list(req,res)    
  })

  router.get('/:id', function(req, res) {
    usuarioController.show(req, res)
  })
  
  router.post('/', function(req, res) {
    usuarioController.create(req,res)
  })

  router.put('/:id', function(req, res) {
    usuarioController.update(req,res)
  })
  
  router.delete('/:id', function(req, res) {
    usuarioController.remove(req, res)
  })
  module.exports = router