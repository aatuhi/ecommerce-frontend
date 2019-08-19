import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Product from './Product'
import { emptyShoppingCart } from '../reducers/shoppingCartReducer'
import OrderForm from './OrderForm'

const ShoppingCart = (props) => {
  const totalPrice = shoppingCart => Math.floor(
    shoppingCart.reduce((prev, curr) => prev + curr.details.price, 0),
  )
  // should round to one cent

  if (!props.shoppingCart || props.shoppingCart.length < 1) {
    return <h2>Shopping cart is empty</h2>
  }
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {props.shoppingCart.map(product => (
          <div key={Math.random() * 10}>
            <Product product={product} />
          </div>
        ))}
      </ul>
      {props.shoppingCart.length > 0 && (
        <div>
          <p>
            Total price:
            {totalPrice(props.shoppingCart)}
            {' '}
€
          </p>
          <button type="button" onClick={() => props.emptyShoppingCart()}>
            clear cart
          </button>
        </div>
      )}
      <OrderForm />
    </div>
  )
}

const mapStateToProps = state => ({
  shoppingCart: state.shoppingCart,
})

export default withRouter(
  connect(
    mapStateToProps,
    { emptyShoppingCart },
  )(ShoppingCart),
)
