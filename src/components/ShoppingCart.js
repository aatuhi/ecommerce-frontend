import React from 'react'
import { connect } from 'react-redux'
import styled, { css } from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { emptyShoppingCart } from '../reducers/shoppingCartReducer'
import ShoppingCartProduct from './ShoppingCartProduct'

const StyledContainer = styled.div`
  max-width: 600px;
`
const StyledButton = styled.button`
  padding: 5px;
  margin: 5px
  max-height: 40px;
  background-color: rgba(210, 115, 150, 0.8);
  border-radius: 4px;
  border-color: rgba(210, 115, 150, 0.4);
  color: #f0f0f0;
  box-shadow: 1px 1px 2px slategray;
  font-size: 1.2em;
  text-shadow: 0px 1px 2px slategray;

  ${(props) =>
    props.red &&
    css`
      background: rgba(190, 66, 81, 0.8);
      border-color: rgba(190, 66, 81, 0.4);
    `}

  ${(props) =>
    props.blue &&
    css`
      background-color: rgba(66, 136, 168, 0.8);
      border-color: rgba(66, 136, 168, 0.4);
    `}
`

const ShoppingCart = (props) => {
  const totalPrice = (shoppingCart) =>
    shoppingCart.reduce(
      (prev, curr) =>
        Math.round((prev + curr.price * curr.quantity) * 100) / 100,
      0
    )

    const spring = useSpring({ 
      opacity: 1,   
      from: { opacity: 0 },
    })

  if (!props.shoppingCart || props.shoppingCart.length < 1) {
    return <h2>Shopping cart is empty</h2>
  }

  return (
    <StyledContainer>
      <h2>Shopping Cart</h2>
      {props.shoppingCart.map((product) => (
        <animated.div style={spring} key={product._id}>
          <ShoppingCartProduct product={product} />
        </animated.div>
      ))}
      {props.shoppingCart.length > 0 && (
        <div>
          Total price:
          <h3>{totalPrice(props.shoppingCart)} €</h3>
          <StyledButton
            red
            type="button"
            onClick={() => props.emptyShoppingCart()}
          >
            clear cart
          </StyledButton>
        </div>
      )}
    </StyledContainer>
  )
}

const mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCart,
})

export default connect(
  mapStateToProps,
  { emptyShoppingCart }
)(ShoppingCart)
