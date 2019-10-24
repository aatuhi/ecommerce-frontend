import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import ShoppingCart from './ShoppingCart'
import OrderForm from './OrderForm'

const CheckOutPage = (props) => (
  <div>
    {props.cart.length < 1 ? (
      <h2>Please add some products to shopping cart first</h2>
    ) : (
      <div>
        <div>
          <ShoppingCart />
        </div>
        <div>
          {props.user ? (
            <OrderForm />
          ) : (
            <h3>
              Please <Link to="/account">log in</Link> first to make an order
            </h3>
          )}
        </div>
      </div>
    )}
  </div>
)

const mapStateToProps = (state) => ({
  user: state.user,
  cart: state.shoppingCart,
})

export default withRouter(connect(mapStateToProps)(CheckOutPage))
