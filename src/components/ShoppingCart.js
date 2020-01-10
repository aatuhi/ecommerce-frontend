import React from 'react'
import { connect } from 'react-redux'
import styled, { css } from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { emptyShoppingCart } from '../reducers/shoppingCartReducer'
import ShoppingCartProduct from './ShoppingCartProduct'

const StyledContainer = styled.div`
  max-width: 600px;
  /* padding: 25px 5px; */

  @media screen and (min-width: 768px) {
    
  }
`
const StyledList = styled(animated.div)`
  margin-bottom: 25px;
`

const StyledButton = styled.button`
  padding: 5px 15px;
  margin: 5px
  max-height: 40px;
  background-color: rgba(210, 115, 150, 0.8);
  border-radius: 4px;
  border-color: rgba(210, 115, 150, 0.4);
  color: #f0f0f0;
  box-shadow: 1px 1px 2px slategray;
  font-size: 1.2em;
  text-shadow: 0px 1px 2px slategray;

  ${props =>
    props.red &&
    css`
      background: #bf616a;
      border-color: #bf616a66;
    `}

  ${props =>
    props.blue &&
    css`
      background-color: rgba(66, 136, 168, 0.8);
      border-color: rgba(66, 136, 168, 0.4);
    `}
`

const ShoppingCart = props => {
  const totalPrice = shoppingCart =>
    shoppingCart.reduce(
      (prev, curr) =>
        Math.round((prev + curr.price * curr.quantity) * 100) / 100,
      0
    )

  const spring = useSpring({
    opacity: 1,
    from: { opacity: 0 }
  })

  if (!props.shoppingCart || props.shoppingCart.length < 1) {
    return <h2>Shopping cart is empty</h2>
  }

  return (
    <StyledContainer>
      <h2 style={{ textAlign: 'center', marginBottom: '25px' }}>Shopping cart</h2>
      <StyledList style={spring}>
        {props.shoppingCart.map(product => (
          <ShoppingCartProduct key={product._id} product={product} />
        ))}
      </StyledList>
      {props.shoppingCart.length > 0 && (
        <div style={{ display: 'flex'}}>
          <div style={{ display:'flex', margin: 'auto'}}>

          <div style={{ marginRight: '25px' }}>
            Total price:
            <h3>
              {totalPrice(props.shoppingCart)}
              {' '}
€
            </h3>
          </div>
          <StyledButton
            red
            type="button"
            onClick={() => props.emptyShoppingCart()}
            >
            Clear cart
          </StyledButton>
            </div>
        </div>
      )}
    </StyledContainer>
  )
}

const mapStateToProps = state => ({
  shoppingCart: state.shoppingCart
})

export default connect(
  mapStateToProps,
  { emptyShoppingCart }
)(ShoppingCart)
