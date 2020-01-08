import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled, { css } from 'styled-components'
import { FaSyncAlt, FaTrashAlt } from 'react-icons/fa'
import {
  removeProductFromCart,
  updateProductQuantity
} from '../reducers/shoppingCartReducer'

const StyledImage = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 3px;
`

const StyledRow = styled.div`
  display: flex;
  margin: 5px;
  padding: 10px 20px;
  border: solid;
  border-radius: 6px;
  background-color: rgba(240, 240, 240, 0.7);
  border-color: rgba(240, 240, 240, 0.1);
  box-shadow: 0px 1px 3px lightslategray;

  @media screen and (min-width: 768px) {
    box-shadow: 2px 2px 3px lightslategray;
    margin: 20px 5px;
  }
`
const StyledButton = styled.button`
  margin: 5px 5px 0 0;
  padding: 4px 5px;
  background-color: rgba(210, 115, 150, 0.8);
  border-radius: 4px;
  border-color: rgba(210, 115, 150, 0.4);
  color: #f0f0f0;
  box-shadow: 1px 1px 2px slategray;
  font-size: 1em;
  text-shadow: 0px 1px 2px slategray;

  @media screen and (min-width: 768px) {
    padding: 8px 10px;
    margin: 5px;
  }

  ${props =>
    props.red &&
    css`
      background: rgba(190, 66, 81, 0.8);
      border-color: rgba(190, 66, 81, 0.4);
    `}

  ${props =>
    props.blue &&
    css`
      background-color: rgba(66, 136, 168, 0.8);
      border-color: rgba(66, 136, 168, 0.4);
    `}
`
const StyledTextDiv = styled.div`
  width: 125px;
  margin: 10px 25px;
`
const StyledInput = styled.input`
  max-width: 50px;
  font-size: 1.1em;
  margin: 0 20px 5px 0;
  padding: 5px;
  border-color: rgba(240, 240, 240, 0.5);
  border-radius: 3px;
  box-shadow: 2px 2px 3px lightslategray;

  @media screen and (min-width: 768px) {
    margin: 0 10px 0 0;
  }
`

const ShoppingCartProduct = props => {
  const [quantity, setQuantity] = useState(props.product.quantity)

  const updateQuantity = event => {
    event.preventDefault()
    setQuantity(event.target.updatedValue.value)
    const updatedProduct = {
      ...props.product,
      quantity: Number(event.target.updatedValue.value)
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
        <div>
          {props.product.price}
          {' '}
€ / each
        </div>
      </StyledTextDiv>

      <form
        style={{ margin: '10px 0 10px 10px', alignItems: 'center' }}
        onSubmit={updateQuantity}
      >
        <StyledInput
          type="number"
          step="1"
          defaultValue={quantity}
          b
          id="updatedValue"
        />
        <StyledButton blue type="submit">
          <FaSyncAlt />
        </StyledButton>
        <StyledButton
          red
          type="button"
          onClick={() => props.removeProductFromCart(props.product._id)}
        >
          <FaTrashAlt />
        </StyledButton>
      </form>
    </StyledRow>
  )
}

export default connect(
  null,
  { removeProductFromCart, updateProductQuantity }
)(ShoppingCartProduct)
