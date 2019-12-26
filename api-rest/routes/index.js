'use strict'

const express = require('express')
const ProductController = require('../controllers/product')
const UserController = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/product', auth, ProductController.getProducts)
api.get('/product/:productId', ProductController.getProduct)
api.post('/product', auth, ProductController.saveProduct)
api.put('/product/:productId', auth, ProductController.updateProduct)
api.delete('/product/:productId', auth, ProductController.deleteProduct)
api.post('/signup', UserController.signUp)
api.post('/signin', UserController.signIn) 
api.get('/private', auth,(req, res) => {
  res.status(200).send({message: 'Tienes acceso'})
})

module.exports = api