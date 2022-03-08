let carts = require('../../data/cart.json')

class Cart {
  constructor() {
    this.carts = carts
  }

  getAll() {
    return carts
  }

  getLength() {
    return carts.length
  }

  addCart(cart) {
    carts.push(cart)
  }

  deleteById(id) {
    const cart = carts.find((cart) => cart.id === +id)
    if (!cart) {
      return -1
    }
    carts = carts.filter((cart) => cart.id !== +id)
    return carts
  }

  getByIdProducts(id) {
    const cart = carts.find((cart) => cart.id === +id)
    if (!cart) {
      return -1
    }
    return cart.products
  }

  postProductByIdCart(id, prod) {}

  deleteProdCart(idCart, idProd) {
    const cart = carts.find((c) => c.id === +idCart)
    if (!cart) {
      return -1
    }
    const prod = cart.products.find((prod) => prod.id === +idProd)
    if (!prod) {
      return -1
    }
    return (cart.products = cart.products.filter((prod) => prod.id !== +idProd))
  }
}

module.exports = Cart
