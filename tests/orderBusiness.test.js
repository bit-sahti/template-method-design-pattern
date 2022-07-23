import { jest } from '@jest/globals'
import { OrderBusiness } from '../src/business/base/orderBusiness.js'
import { Order } from '../src/entities/order.js'

describe('#Order Business test suite', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })

  it('should validate and save the orders', () => {
    const order = new Order({
      customerId: 1,
      amount: 100000,
      products: ['car'],
    })

    const orderBusiness = new OrderBusiness()

    const validationSpy = jest.spyOn(
      orderBusiness,
      orderBusiness._validateRequiredFields.name
    )
    const creationSpy = jest.spyOn(orderBusiness, orderBusiness._create.name)

    const result = orderBusiness.create(order)

    expect(result).toBe(true)
    expect(validationSpy).toHaveBeenCalledTimes(1)
    expect(creationSpy).toHaveBeenCalledTimes(1)
  })
})
