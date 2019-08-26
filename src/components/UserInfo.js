import React from 'react'
import { withRouter, Link } from 'react-router-dom'

const UserInfo = (props) => {
  console.log('props userinfo', props.user)
  if (!props.user) {
    return null
  }
  return (
    <div>
      <h3>{props.user.name}</h3>
      <p>{props.user._id}</p>
      <p>{props.user.username}</p>
      <p>{props.user.email}</p>
      <h3>Orders</h3>
      {props.user.orders.length > 0 ? (
        props.user.orders.map(o => (
          <div key={o._id}>
            <Link to={`/admin/orders/${o._id}`}>{o._id}</Link>
          </div>
        ))
      ) : (
        <p>No orders yet</p>
      )}
    </div>
  )
}

export default withRouter(UserInfo)
