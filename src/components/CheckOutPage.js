import React from "react"
import { connect } from "react-redux"
import { withRouter, Link } from "react-router-dom"
import styled from "styled-components"
import ShoppingCart from "./ShoppingCart"
import OrderForm from "./OrderForm"

const StyledContainer = styled.div`
  margin: 20px;
  padding: 30px;
  background: rgba(75, 75, 75, 0.15);
  border-style: solid;
  border-color: rgba(75, 75, 75, 0.15);
  background-clip: padding-box;
  border-radius: 4px;
`

const CheckOutPage = props => (
  <div>
    {props.cart.length < 1 ? (
      <h2 style={{ textAlign: "center" }}>
        Please add some products to shopping cart first
      </h2>
    ) : (
      <div style={{ display: "flex" }}>
        <div>
          <ShoppingCart />
        </div>
        <div style={{ margin: "50px auto" }}>
          {props.user ? (
            <OrderForm />
          ) : (
            <div>
              <h2>
                Please 
                {' '}
                <Link to="/account">log in</Link>
                {' '}
first to make an order
              </h2>
            </div>
          )}
        </div>
      </div>
    )}
  </div>
)

const mapStateToProps = state => ({
  user: state.user,
  cart: state.shoppingCart
})

export default withRouter(connect(mapStateToProps)(CheckOutPage))
