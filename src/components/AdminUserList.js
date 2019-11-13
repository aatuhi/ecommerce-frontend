import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import styled, { css } from "styled-components"

const StyledContainer = styled.div`
  margin: 50px;
  /* max-height: 50px; */
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
  min-width: 200px;
  padding: 10px 10px;
  margin: 0;
`
const AdminUserList = props => {
  if (!props.registeredUsers || props.registeredUsers.length < 1) {
    return null
  }

  return (
    <StyledContainer>
      <h2>Registered users</h2>
      <ul>
        <StyledRow header>
          <StyledCell>
            <h3>Name</h3>
          </StyledCell>
          <StyledCell>
            <h3>Username</h3>
          </StyledCell>
          <StyledCell>
            <h3>E-mail</h3>
          </StyledCell>
          <StyledCell>
            <h3>Orders</h3>
          </StyledCell>
        </StyledRow>
        {props.registeredUsers.map(user => (
          <StyledRow key={user._id}>
            <StyledCell>
              <Link to={`/admin/users/${user._id}`}>{user.username}</Link>
            </StyledCell>
            <StyledCell>
              <p>{user.name}</p>
            </StyledCell>
            <StyledCell>
              <p>{user.username}</p>
            </StyledCell>
            <StyledCell>
              <p>{user.orders.length}</p>
            </StyledCell>
          </StyledRow>
        ))}
      </ul>
    </StyledContainer>
  )
}

const mapStateToProps = state => ({
  registeredUsers: state.registeredUsers
})

export default connect(mapStateToProps)(AdminUserList)
