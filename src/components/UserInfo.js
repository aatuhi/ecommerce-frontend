import React from 'react'
import { withRouter } from 'react-router-dom'
import AccountDetails from './AccountDetails'
import OrderHistory from './OrderHistory'

const UserInfo = ({ user }) => {
  if (!user) {
    return null
  }
  return (
    <div>
      <div>
        <div>
          <div>
            <AccountDetails user={user} />
          </div>
          <div>
            <OrderHistory orders={user.orders} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(UserInfo)
