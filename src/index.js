import { Order } from './entities/order.js'
import { OrderBusiness } from './business/orderBusiness.js'

const order = new Order({
    customerId: 100,
    amount: 1234,
    products: ['tv']
})

const orderBusiness = new OrderBusiness()

console.info('order created -> ', orderBusiness.create(order))