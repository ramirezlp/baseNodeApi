const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.json({
      mensaje: "Hola mundo!"
  })
})

app.listen(port)
console.log('Api escuchando en el puerto: ' + port)