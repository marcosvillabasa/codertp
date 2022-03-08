const products = require('../../data/products.json')

class Product {
  constructor() {
    this.products = products
  }

  getByID(id) {
    return products.find((prod) => prod.id === +id)
  }

  getLength() {
    return products.length
  }

  addProduct(prod) {
    products.push(prod)
  }

  putProduct(id, body) {
    const prodIndex = products.findIndex((product) => product.id === +id)
    if (prodIndex < 0) return -1

    const newProduct = {
      ...products[prodIndex],
      ...body
    }
    products[prodIndex] = newProduct
    return newProduct
  }

  deleteProduct(id) {
    const prod = products.find((prod) => prod.id === +id)
    if (!prod) {
      return -1
    }
    return products.filter((p) => p.id !== +id)
  }
}

module.exports = Product
