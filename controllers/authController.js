var Usuario = require('../models/Usuario')
const jwt = require('jsonwebtoken');
const accessTokenSecret = 'secretKey2021Austin!';
const bcrypt = require('bcrypt');

module.exports = {
// https://docs.mongodb.com/v3.0/reference/operator/query/text/
login: function (req, res) {
  const { username, password } = req.body;

  Usuario.findOne({username: username}, function(err, usuario){
    if(err) {
      return res.status(500).json({
        message: 'Se ha producido un error al obtener la usuario'
      })
    }
    if(!usuario) {
      return res.status(404).json( {
        message: 'Username or password incorrect'
      })
    }
    if (usuario){
      bcrypt.compare(password, usuario.password, function(err, response) {
        if (response){
          const accessToken = jwt.sign({username: usuario.username}, accessTokenSecret,{
            expiresIn: '2d' // expires in 2 days
          })
          return res.json({accessToken})
        }else{
          return res.status(404).json( {
            message: 'Username or password incorrect'
          })
        }
      });

    }
  })

},
  authenticateJWT: (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
      const token = authHeader;

      jwt.verify(token, accessTokenSecret, (err, user) => {
          if (err) {
              return res.sendStatus(403);
          }

          req.user = user;
          next();
      });
  } else {
      res.sendStatus(401);
  }
}
}
