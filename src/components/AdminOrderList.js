import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

const AdminOrderList = (props) => {
  if (!props.allOrders || props.allOrders.length < 1) {
    return null
  }

  return (
    <div>
      <h3>All orders</h3>
      <div>
        <div>
          <div>
            <div>ID</div>
            <div>Date</div>
            <div>User</div>
          </div>
        </div>
        <div>
          {props.allOrders.map((order) => (
            <div key={order._id}>
              <div>
                <Link to={`/admin/orders/${order._id}`}>{order._id}</Link>
              </div>
              <div>{order.date}</div>
              <div>{order.user.username}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  allOrders: state.allOrders,
})

export default withRouter(connect(mapStateToProps)(AdminOrderList))
