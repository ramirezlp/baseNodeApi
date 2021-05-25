var Usuario = require('../models/Usuario')
module.exports = {
// https://docs.mongodb.com/v3.0/reference/operator/query/text/
search: function (req, res) {
  var q = req.query.q
  Usuario.find({ $text: { $search: q } }, function(err, usuarios) {
    if(err) {
      return res.status(500).json({
        message: 'Error en la búsqueda'
      })
    }
    return res.json(usuarios)
  })
},
list: function(req, res) {
  Usuario.find(function(err, usuarios){
    if(err) {
      return res.status(500).json({
        message: 'Error obteniendo la usuario'
      })
    }
    return res.json(usuarios)
  })
},
show: function(req, res) {
  var id = req.params.id
  Usuario.findOne({_id: id}, function(err, usuario){
    if(err) {
      return res.status(500).json({
        message: 'Se ha producido un error al obtener la usuario'
      })
    }
    if(!usuario) {
      return res.status(404).json( {
        message: 'No tenemos esta usuario'
      })
    }
    return res.json(usuario)
  })
},
create: function(req, res) {
  var usuario = new Usuario (req.body)
  usuario.save(function(err, usuario){
    if(err) {
      return res.status(500).json( {
        message: 'Error al guardar la usuario',
        error: err
      })
    }
    return res.status(201).json({
      message: 'saved',
      _id: usuario._id
    })
  })
},
remove: function(req, res) {
  var id = req.params.id
  Usuario.findByIdAndRemove(id, function(err, usuario){
    if(err) {
      return res.json(500, {
        message: 'No hemos encontrado la usuario'
      })
    }
    return res.json(usuario)
  })
}
}

/*
update: function(req, res) {
  var id = req.params.id
  Usuario.findOne({_id: id}, function(err, usuario){
    if(err) {
      return res.status(500).json({
        message: 'Se ha producido un error al guardar la usuario',
        error: err
      })
    }
    if(!usuario) {
      return res.status(404).json({
        message: 'No hemos encontrado la usuario'
      })
    }
    usuario.Nombre = req.body.nombre
    usuario.Descripción =  req.body.descripcion
    usuario.Graduacion = req.body.graduacion
    usuario.Envase = req.body.envase
    usuario.Precio = req.body.precio
    usuario.save(function(err, usuario){
      if(err) {
        return res.status(500).json({
          message: 'Error al guardar la usuario'
        })
      }
      if(!usuario) {
        return res.status(404).json({
          message: 'No hemos encontrado la usuario'
        })
      }
      return res.json(usuario)
    })
  })
},
*/