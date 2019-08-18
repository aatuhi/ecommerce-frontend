import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Product from './Product'
import { emptyShoppingCart } from '../reducers/shoppingCartReducer'

const ShoppingCart = (props) => {
  const totalPrice = cart => Math.floor(cart.reduce((prev, curr) => prev + curr.details.price, 0))
  // should round to one cent

  if (!props.cart) {
    return <h2>Shopping cart is empty</h2>
  }
  console.log('cart', props.cart)
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {props.cart.map(product => (
          <div key={Math.random() * 10}>
            <Product product={product} />
          </div>
        ))}
      </ul>
      {props.cart.length > 0 && (
        <div>
          <p>
            Total price:
            {totalPrice(props.cart)}
            {' '}
€
          </p>
          <button type="button" onClick={() => props.emptyShoppingCart()}>
            clear cart
          </button>
          <button type="button">next</button>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  cart: state.shoppingCart,
})

export default withRouter(
  connect(
    mapStateToProps,
    { emptyShoppingCart },
  )(ShoppingCart),
)
