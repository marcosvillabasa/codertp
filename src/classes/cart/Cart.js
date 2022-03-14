class Cart {
  constructor(carts) {
    this.carts = carts
  }

  getAll() {
    return this.carts
  }

  getLength() {
    return this.carts.length
  }

  addCart(cart) {
    this.carts.push(cart)
  }

  deleteById(id) {
    const cart = this.carts.find((cart) => cart.id === +id)
    if (!cart) {
      return -1
    }
    this.carts = this.carts.filter((cart) => cart.id !== +id)
    return this.carts
  }

  getByIdProducts(id) {
    const cart = this.carts.find((cart) => cart.id === +id)
    if (!cart) {
      return -1
    }
    return cart.products
  }

  postProductByIdCart(id, prod) {}

  deleteProdCart(idCart, idProd) {
    const cart = this.carts.find((c) => c.id === +idCart)
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
