import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import styled from 'styled-components'
import ShoppingCart from './ShoppingCart'
import OrderForm from './OrderForm'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const CheckOutPage = props => {
  if (props.cart.length < 1) {
    return (
      <h2 style={{ textAlign: 'center' }}>
        Please add some products to shopping cart first
      </h2>
    )
  }

  return (
    <StyledContainer>
      <ShoppingCart />
      <div style={{ margin: '50px auto' }}>
        {props.user ? (
          <OrderForm />
        ) : (
          <h2>
            Please 
            {' '}
            <Link to="/account">log in</Link>
            {' '}
first to make an order
          </h2>
        )}
      </div>
    </StyledContainer>
  )
}

const mapStateToProps = state => ({
  user: state.user,
  cart: state.shoppingCart
})

export default withRouter(connect(mapStateToProps)(CheckOutPage))
