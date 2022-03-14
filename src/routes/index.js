const express = require('express')
const router = express.Router()

const productRoutes = require('./product/product.routes')
const cartRoutes = require('./cart/cart.routes')

router.use('/productos', productRoutes)
router.use('/carrito', cartRoutes)

module.exports = router