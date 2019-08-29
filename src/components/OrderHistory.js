import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Table } from 'semantic-ui-react'

const OrderHistory = (props) => {
  console.log(props.orders)

  if (!props.orders || props.orders.length < 1) {
    return <h2>You have not made any orders yet</h2>
  }

  return (
    <div>
      <h3>Recent orders</h3>
      {props.orders.length > 0 ? (
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {props.orders.map(order => (
              <Table.Row key={order._id}>
                <Table.Cell>
                  {props.user.admin ? (
                    <Link to={`/admin/orders/${order._id}`}>{order._id}</Link>
                  ) : (
                    <Link to={`/account/orders/${order._id}`}>{order._id}</Link>
                  )}
                </Table.Cell>
                <Table.Cell>{order.date}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      ) : (
        <div>No orders yet</div>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user,
})

export default withRouter(connect(mapStateToProps)(OrderHistory))
