import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled, { css } from 'styled-components'
import {
  removeProductFromCart,
  updateProductQuantity,
} from '../reducers/shoppingCartReducer'

const StyledImage = styled.img`
  width: 75px;
  height: 75px;
  margin: 0 20px;
  border-radius: 3px;
`

const StyledRow = styled.div`
  display: flex;
  margin: 20px;
  padding: 10px 5px;
  border: solid;
  border-radius: 6px;
  background-color: rgba(240, 240, 240, 0.5);
  border-color: rgba(240, 240, 240, 0.1);
  /* border-color: #fff1f9;
  background-color: #fff1f0; */
  box-shadow: 2px 2px 3px lightslategray;
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
const StyledTextDiv = styled.div`
  min-width: 100px;
  margin: 10px 25px;
`
const StyledInput = styled.input`
  max-width: 50px;
  font-size: 1.2em;
  margin-right: 10px;
`

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
    <StyledRow>
      <StyledImage
        alt="shoppingcart_image"
        src="https://react.semantic-ui.com/images/wireframe/image.png"
      />
      <StyledTextDiv>
        <h4>{props.product.title}</h4>
        <div>{props.product.price} € / each</div>
      </StyledTextDiv>

      <div style={{ margin: '10px' }}>
        <form style={{ marginRight: '15px' }} onSubmit={updateQuantity}>
          <StyledInput
            type="number"
            step="1"
            defaultValue={quantity}
            b
            id="updatedValue"
          />
          <StyledButton blue type="submit">
            update
          </StyledButton>
          <StyledButton
            red
            type="StyledButton"
            onClick={() => props.removeProductFromCart(props.product._id)}
          >
            remove
          </StyledButton>
        </form>
      </div>
    </StyledRow>
  )
}

export default connect(
  null,
  { removeProductFromCart, updateProductQuantity }
)(ShoppingCartProduct)
