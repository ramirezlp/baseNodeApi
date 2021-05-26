var express = require('express') //llamamos a Express
const bodyParser = require("body-parser");
var app = express()  

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));      

var port = process.env.PORT || 8080  // establecemos nuestro puerto

/*toda la configuración de bbdd la hacemos en un fichero a parte*/
require('./db')


// para establecer las distintas rutas, necesitamos instanciar el express router
var router = require('./routes')  
app.use('/api', router)



// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)

/*lo añado al final de app/server.js:*/
module.exports = app