import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

const OrderList = (props) => {
  if (!props.allOrders || props.allOrders.length < 1) {
    return null
  }

  return (
    <div>
      <h3>All orders</h3>
      {props.allOrders.map(order => (
        <div key={order._id}>
          <Link to={`/admin/orders/${order._id}`}>{order._id}</Link>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  allOrders: state.allOrders,
})

export default withRouter(connect(mapStateToProps)(OrderList))
