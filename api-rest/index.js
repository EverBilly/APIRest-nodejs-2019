'use strict'

const moongose = require('mongoose')
const app = require('./app')
const config = require('./config')

/*Esto es para las rutas, aqui se pueden manejar para enviar datos por URl como el nombre
app.get('/hola/:name', (req, res) => {
  res.send({message : `Hola ${req.params.name}!`})
})
*/

moongose.connect(config.db, (err, res) => {
  if(err) { 
    return console.log(`Error al conectar a la BD: ${err}`)
  }
  console.log('Conexion a la BD establecida')

//Utilizar este tipo de comillas `` para cuando se agregre una variable html y la detecte
  app.listen(config.port, () => {
    console.log(`API REST corriendo en http://localhost:${config.port}`)
  })
})
