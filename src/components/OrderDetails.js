import React from "react"
import { withRouter } from "react-router-dom"
import styled, { css } from "styled-components"

const StyledContainer = styled.div`
  margin: 50px;
`

const StyledAddressContainer = styled.div`
  margin: auto;
  padding: 30px;
  background: rgba(220, 220, 220, 0.5);
  border-style: solid;
  border-color: rgba(220, 220, 220, 0.5);
  border-radius: 4px;
  display: inline-block;
  font-size: 1.4em;
`

const StyledRow = styled.li`
  list-style: none;
  display: inline-flex;
  margin: 0;
  padding: 0;
  background-color: rgba(210, 115, 150, 0.2);
  border-top: solid #f0f0f0 2px;

  ${props =>
    props.header &&
    css`
      background-color: rgba(210, 115, 150, 0.5);
      border: none;
    `}

  ${props =>
    props.footer &&
    css`
      background-color: rgba(210, 115, 150, 0.1);
    `}
`
const StyledCell = styled.div`
  min-width: 150px;
  padding: 10px 10px;
  margin: 0;
`

const OrderDetails = ({ order }) => {
  const calculateTotalQuantity = o =>
    o.products.reduce((prev, curr) => prev + curr.quantity, 0)

  if (!order) {
    return null
  }

  return (
    <div style={{ display: "flex" }}>
      <StyledContainer>
        <h2>Order details</h2>
        <ul style={{ maxWidth: "600px", padding: 0, margin: 0 }}>
          <StyledRow header>
            <StyledCell>
              <h3>Product</h3>
            </StyledCell>
            <StyledCell>
              <h3>Quantity</h3>
            </StyledCell>
            <StyledCell>
              <h3>Total price</h3>
            </StyledCell>
          </StyledRow>
          {order.products.map(product => (
            <StyledRow key={product._id}>
              <StyledCell>{product.title}</StyledCell>
              <StyledCell>{product.quantity}</StyledCell>
              <StyledCell>
                {Math.round(product.price * product.quantity * 100) / 100}
                {' '}
€
              </StyledCell>
            </StyledRow>
          ))}

          <StyledRow footer>
            <StyledCell>
              <h3>Total</h3>
            </StyledCell>
            <StyledCell>
              <h3>{calculateTotalQuantity(order)}</h3>
            </StyledCell>
            <StyledCell>
              <h3>
                {order.totalPrice}
€
              </h3>
            </StyledCell>
          </StyledRow>
        </ul>
      </StyledContainer>

      <StyledContainer>
        <h2>Delivery address</h2>
        <StyledAddressContainer>
          <p>{order.deliveryAddress.name}</p>
          <p>{order.deliveryAddress.street}</p>
          <p>
            {order.deliveryAddress.zipCode} 
            {' '}
            {order.deliveryAddress.city}
          </p>
          <p>{order.deliveryAddress.country}</p>
        </StyledAddressContainer>
      </StyledContainer>
    </div>
  )
}

export default withRouter(OrderDetails)
