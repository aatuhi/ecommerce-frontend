import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

const OrderHistory = (props) => {
  if (!props.orders || props.orders.length < 1) {
    return <h2>You have not made any orders yet</h2>
  }

  return (
    <div>
      <h2>Order history</h2>
      {props.orders.map(order => (
        <div key={order._id}>
          <Link to={`/account/orders/${order._id}`}>{order._id}</Link>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  orders: state.user.orders,
})

export default withRouter(connect(mapStateToProps)(OrderHistory))
