class Product {
  constructor(products) {
    this.products = products
  }

  getAll() {
    return this.products
  }

  getByID(id) {
    return this.products.find((prod) => prod.id === +id)
  }

  getLength() {
    return this.products.length
  }

  addProduct(prod) {
    this.products.push(prod)
  }

  putProduct(id, body) {
    const prodIndex = this.products.findIndex((product) => product.id === +id)
    if (prodIndex < 0) return -1

    const newProduct = {
      ...this.products[prodIndex],
      ...body
    }
    this.products[prodIndex] = newProduct
    return newProduct
  }

  deleteProduct(id) {
    const prod = this.products.find((prod) => prod.id === +id)
    if (!prod) {
      return -1
    }
    return this.products.filter((p) => p.id !== +id)
  }
}

module.exports = Product
