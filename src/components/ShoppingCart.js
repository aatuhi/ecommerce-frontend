import React from 'react'
import { connect } from 'react-redux'
import Product from './Product'
import { emptyShoppingCart } from '../reducers/shoppingCartReducer'

const ShoppingCart = (props) => {
  if (!props) {
    return <h2>Shopping cart</h2>
  }
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {props.cart.map(product => (
          <div key={product._id}>
            <Product product={product} />
          </div>
        ))}
      </ul>
      <button type="button" onClick={() => props.emptyShoppingCart()}>
        clear cart
      </button>
    </div>
  )
}

const mapStateToProps = state => ({
  cart: state.shoppingCart,
})

export default connect(
  mapStateToProps,
  { emptyShoppingCart },
)(ShoppingCart)
