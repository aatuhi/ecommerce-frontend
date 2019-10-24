import React from 'react'
import { withRouter } from 'react-router-dom'

const OrderDetails = ({ order }) => {
  const calculateTotalQuantity = (o) =>
    o.products.reduce((prev, curr) => prev + curr.quantity, 0)

  if (!order) {
    return null
  }

  return (
    <div>
      <h2>Order Details</h2>
      <div>
        <div>
          <div>
            <div>
              {/* table headers */}
              <div>
                <div>Product</div>
                <div>Quantity</div>
                <div>Price</div>
              </div>
            </div>
            {/* rable body */}
            <div>
              {order.products.map((product) => (
                <div key={product._id}>
                  <div>{product.title}</div>
                  <div>{product.quantity}</div>
                  <div>
                    {Math.round(product.price * product.quantity * 100) / 100} €
                  </div>
                </div>
              ))}
            </div>
            {/* footer */}
            <div>
              <div>
                <div>Total</div>
                <div>{calculateTotalQuantity(order)}</div>
                <div>{order.totalPrice}€</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3>Delivery address</h3>
          <p>{order.deliveryAddress.name}</p>
          <p>{order.deliveryAddress.street}</p>
          <p>
            {order.deliveryAddress.zipCode} {order.deliveryAddress.city}
          </p>
          <p>{order.deliveryAddress.country}</p>
        </div>
      </div>
    </div>
  )
}

export default withRouter(OrderDetails)
