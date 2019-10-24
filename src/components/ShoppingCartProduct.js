import React, { useState } from 'react'
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

  return (
    <div>
      <img
        alt="shoppingcart_image"
        src="https://react.semantic-ui.com/images/wireframe/image.png"
      />
      <div>
        <div>{props.product.title}</div>
        <div>{props.product.price} € / each</div>
        <div>{props.product.description}</div>
      </div>

      <div>
        <form onSubmit={updateQuantity}>
          <input
            type="number"
            step="1"
            defaultValue={quantity}
            id="updatedValue"
          />
          <button
            type="button"
            onClick={() => props.removeProductFromCart(props.product._id)}
          >
            remove
          </button>
          <button type="submit">update</button>
        </form>
      </div>
    </div>
  )
}

export default connect(
  null,
  { removeProductFromCart, updateProductQuantity }
)(ShoppingCartProduct)
