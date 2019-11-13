import React from "react"
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"
import styled, { css } from "styled-components"

const StyledContainer = styled.div`
  margin: 50px;
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
`
const StyledCell = styled.div`
  min-width: 300px;
  padding: 10px 10px;
  margin: 0;
`

const AdminOrderList = props => {
  if (!props.allOrders || props.allOrders.length < 1) {
    return null
  }

  return (
    <StyledContainer>
      <h2>All orders</h2>
      <ul>
        <StyledRow header>
          <StyledCell>
            <h3>ID</h3>
          </StyledCell>
          <StyledCell>
            <h3>Date</h3>
          </StyledCell>
          <StyledCell>
            <h3>Total price</h3>
          </StyledCell>
        </StyledRow>
        {props.allOrders.map(order => (
          <StyledRow key={order._id}>
            <StyledCell>
              <Link to={`/admin/orders/${order._id}`}>{order._id}</Link>
            </StyledCell>
            <StyledCell>{order.date}</StyledCell>
            <StyledCell>
              {order.totalPrice}
              {' '}
€
            </StyledCell>
          </StyledRow>
        ))}
      </ul>
    </StyledContainer>
  )
}

const mapStateToProps = state => ({
  allOrders: state.allOrders
})

export default withRouter(connect(mapStateToProps)(AdminOrderList))
