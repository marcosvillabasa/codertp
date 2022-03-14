const express = require('express')
const router = express.Router()
const Product = require('../../classes/product/Product')
const products = require('../../data/products.json')

const product = new Product(products)

router.get('/', (req, res) => {
  res.json({ products: product.getAll() })
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const prod = product.getByID(id)
  if (prod) {
    return res.status(200).json(prod)
  }
  return res.status(404).json({ error: `Product with id: ${id} does not exist!` })
})

router.post('/', (req, res) => {
  const { nombre, descripcion, codigo, precio, stock, foto } = req.body || {}

  if (!nombre || !descripcion || !codigo || !precio || !stock || !foto) {
    return res.status(400).json({ ok: false, error: 'Invalid fields' })
  }

  const newProduct = {
    id: product.getLength() + 1,
    nombre,
    descripcion,
    codigo,
    precio,
    stock,
    foto,
    timestamp: Date.now()
  }
  product.addProduct(newProduct)
  return res.json({
    ok: true,
    newProduct
  })
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body
  const putProd = product.putProduct(id, body)
  if (putProd === -1) {
    return res.status(400).json({ ok: false, error: 'Product does not exist' })
  }
  return res.json({ ok: true, putProd })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  const response = product.deleteProduct(id)
  if (response === -1) {
    return res.status(400).json({ ok: false, error: 'Product does not exist' })
  }
  return res.json({ ok: true, products: response })
})

module.exports = router
