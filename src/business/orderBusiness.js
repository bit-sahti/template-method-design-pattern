import { BaseBusiness } from './base/baseBusiness.js'

export class OrderBusiness extends BaseBusiness {
    #orders = new Set()
  _validateRequiredFields({ customerId, amount, products }) {
    return (
      customerId && amount > 0 && Array.isArray(products) && products.length
    )
  }

  _create(order) {
    this.#orders.add(order)

    return true
  }
}
