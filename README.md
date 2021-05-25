# buildingsolutions
Building Solutions


Commands

npm init 
npm install --save express
npm i -S express

npm i -D nodemon

Cada vez que ejecutemos npm start ejecutaremos nodemon en vez de node. Habrá que cambiar el script en el fichero package.json:
"start": "nodemon app/server.js"

npm i -S mongoose

Para iniciar la API

nodemon app.js