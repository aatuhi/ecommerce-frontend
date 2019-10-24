import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

const OrderHistory = (props) => {
  console.log(props.orders)

  if (!props.orders || props.orders.length < 1) {
    return <h2>You have not made any orders yet</h2>
  }

  return (
    <div>
      <h3>Recent orders</h3>
      {props.orders.length > 0 ? (
        <div>
          <div>
            <div>
              <div>ID</div>
              <div>Date</div>
            </div>
          </div>
          <div>
            {props.orders.map((order) => (
              <div key={order._id}>
                <div>
                  {props.user.admin ? (
                    <Link to={`/admin/orders/${order._id}`}>{order._id}</Link>
                  ) : (
                    <Link to={`/account/orders/${order._id}`}>{order._id}</Link>
                  )}
                </div>
                <div>{order.date}</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>No orders yet</div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
})

export default withRouter(connect(mapStateToProps)(OrderHistory))
