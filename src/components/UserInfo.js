import React from "react"
import { withRouter } from "react-router-dom"
import AccountDetails from "./AccountDetails"
import OrderHistory from "./OrderHistory"

const UserInfo = ({ user }) => {
  if (!user) {
    return null
  }
  return (
    <div style={{ display: "flex" }}>
      <div style={{ margin: "auto" }}>
        <AccountDetails user={user} />
      </div>
      <div style={{ margin: "auto" }}>
        <OrderHistory orders={user.orders} />
      </div>
    </div>
  )
}

export default withRouter(UserInfo)
