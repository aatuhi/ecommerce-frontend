import React from 'react'
import { connect } from 'react-redux'
import { emptyShoppingCart } from '../reducers/shoppingCartReducer'
import ShoppingCartProduct from './ShoppingCartProduct'

const ShoppingCart = (props) => {
  const totalPrice = (shoppingCart) =>
    shoppingCart.reduce(
      (prev, curr) =>
        Math.round((prev + curr.price * curr.quantity) * 100) / 100,
      0
    )

  if (!props.shoppingCart || props.shoppingCart.length < 1) {
    return <h2>Shopping cart is empty</h2>
  }

  return (
    <div>
      <h2>Shopping Cart</h2>
      {props.shoppingCart.map((product) => (
        <div key={product._id}>
          <ShoppingCartProduct product={product} />
        </div>
      ))}
      {props.shoppingCart.length > 0 && (
        <div>
          Total price:
          <h3>{totalPrice(props.shoppingCart)} €</h3>
          <button type="button" onClick={() => props.emptyShoppingCart()}>
            clear cart
          </button>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCart,
})

export default connect(
  mapStateToProps,
  { emptyShoppingCart }
)(ShoppingCart)
