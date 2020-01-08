import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import AccountDetails from './AccountDetails'
import OrderHistory from './OrderHistory'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const UserInfo = ({ user }) => {
  if (!user) {
    return null
  }
  return (
    <StyledContainer>
      <div style={{ margin: 'auto' }}>
        <AccountDetails user={user} />
      </div>
      <div style={{ margin: 'auto' }}>
        <OrderHistory orders={user.orders} />
      </div>
    </StyledContainer>
  )
}

export default withRouter(UserInfo)
