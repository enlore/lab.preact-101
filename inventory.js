let _products = [
      { id: '1', make: 'brick 1', manufacturer: 'ACME Brick', count: { expected: 79, actual: 0, unit: 'cube' }},
      { id: '1', make: 'brick 2', manufacturer: 'ACME Brick', count: { expected: 10, actual: 0, unit: 'cube' }},
      { id: '1', make: 'brick 3', manufacturer: 'ACME Brick', count: { expected: 149, actual: 0, unit: 'cube' }}
]

module.exports = {
  get () {
    return _products
  },

  set (products) {
    _products = products
    console.info(_products)
  }
}
