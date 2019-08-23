import React from 'react'
import { withRouter } from 'react-router-dom'

const Order = ({ order }) => (
  <div>
    <h2>
      Order
      {order._id}
    </h2>
    <div>
      <h3>Products</h3>
      {order.products.map(product => (
        <div key={product._id}>
          <div>{product.details.title}</div>
          <div>
            {product.price}
            {' '}
€
          </div>
        </div>
      ))}
    </div>
    <div>
      <h3>Delivery address</h3>
      <div>{order.deliveryAddress.name}</div>
      <div>{order.deliveryAddress.street}</div>
      <div>
        {order.deliveryAddress.zipCode}
        {' '}
        {order.deliveryAddress.city}
      </div>
      <div>{order.deliveryAddress.country}</div>
    </div>
    <div>
      <h3>Total price</h3>
      <div>
        {order.totalPrice}
€
      </div>
    </div>
  </div>
)

export default withRouter(Order)
