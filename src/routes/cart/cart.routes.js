const express = require('express')
const router = express.Router()

const Cart = require('../../classes/cart/Cart')
const Product = require('../../classes/product/Product')
const product = new Product()
const cart = new Cart()

router.get('/', (req, res) => {
  res.json(cart.getAll())
})

router.post('/', (req, res) => {
  const newCart = {
    id: cart.getLength() + 1,
    timestamp: Date.now(),
    productos: []
  }
  cart.addCart(newCart)
  return res.json({ ok: true, id: newCart.id })
})

router.post('/:id/products', (req, res) => {
  const { id } = req.params
})

router.get('/:id/products', (req, res) => {
  const { id } = req.params
  const respProducts = cart.getByIdProducts(id)
  if (respProducts === -1) {
    return res.status(400).json({ ok: false, error: 'Cart does not exist' })
  }
  return res.json({ ok: true, cartId: id, products: respProducts })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  const response = cart.deleteById(id)
  if (response === -1) {
    return res.status(400).json({ ok: false, error: 'Cart does not exist' })
  }
  return res.json({ ok: true, carts: response })
})

router.delete('/:id/poducts/:id_prod', (req, res) => {
  const { id, id_prod } = req.params
  const response = cart.deleteProdCart(id, id_prod)
  if (response === -1) {
    return res.status(400).json({ ok: false, error: 'Cart or Poduct does not exist' })
  }
  return res.json({ ok: true, cartId: id, products: response })
})

module.exports = router
