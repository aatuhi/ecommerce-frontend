import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  removeProductFromCart,
  updateProductQuantity,
} from '../reducers/shoppingCartReducer'

const ShoppingCartProduct = (props) => {
  const [quantity, setQuantity] = useState(props.product.quantity)

  const updateQuantity = (event) => {
    event.preventDefault()
    setQuantity(event.target.updatedValue.value)
    const updatedProduct = {
      ...props.product,
      quantity: Number(event.target.updatedValue.value),
    }
    props.updateProductQuantity(updatedProduct)
  }
  console.log('state', typeof Number(quantity))

  return (
    <div>
      <h3>{props.product.title}</h3>
      <p>
        {' '}
        {props.product.price}
€
      </p>
      <p>
        {' '}
        {props.product.description}
      </p>
      <div>
        quantity:
        {' '}
        <p>{quantity}</p>
        <form onSubmit={updateQuantity}>
          <input
            type="number"
            step="1"
            defaultValue={quantity}
            id="updatedValue"
          />
          <button type="submit">update quantity</button>
        </form>
      </div>
      <button
        type="button"
        onClick={() => props.removeProductFromCart(props.product._id)}
      >
        x
      </button>
    </div>
  )
}

export default withRouter(
  connect(
    null,
    { removeProductFromCart, updateProductQuantity },
  )(ShoppingCartProduct),
)
