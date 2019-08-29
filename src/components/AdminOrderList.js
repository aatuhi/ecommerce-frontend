import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Table } from 'semantic-ui-react'

const AdminOrderList = (props) => {
  if (!props.allOrders || props.allOrders.length < 1) {
    return null
  }

  return (
    <div>
      <h3>All OrderList</h3>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>User</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.allOrders.map(order => (
            <Table.Row key={order._id}>
              <Table.Cell>
                <Link to={`/admin/orders/${order._id}`}>{order._id}</Link>
              </Table.Cell>
              <Table.Cell>{order.date}</Table.Cell>
              <Table.Cell>{order.user.username}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}

const mapStateToProps = state => ({
  allOrders: state.allOrders,
})

export default withRouter(connect(mapStateToProps)(AdminOrderList))
