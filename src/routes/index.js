const express = require('express')
const router = express.Router()

const productRoutes = require('./product/product.routes')
const cartRoutes = require('./cart/cart.routes')

router.use('/products', productRoutes)
router.use('/cart', cartRoutes)

module.exports = router