import React from 'react'
import { Table, Segment, Grid } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

const Order = ({ order }) => {
  const calculateTotalQuantity = o => o.products.reduce((prev, curr) => prev + curr.quantity, 0)

  if (!order) {
    return null
  }

  return (
    <Segment padded basic>
      <h2>Order Details</h2>
      <Grid columns={2}>
        <Grid.Column>
          <Table singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Product</Table.HeaderCell>
                <Table.HeaderCell>Quantity</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {order.products.map(product => (
                <Table.Row key={product._id}>
                  <Table.Cell>{product.title}</Table.Cell>
                  <Table.Cell>{product.quantity}</Table.Cell>
                  <Table.Cell>
                    {Math.round(product.price * product.quantity * 100) / 100}
                    {' '}
€
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell>Total</Table.HeaderCell>
                <Table.HeaderCell>
                  {calculateTotalQuantity(order)}
                </Table.HeaderCell>
                <Table.HeaderCell>
                  {order.totalPrice}
€
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Grid.Column>
        <Grid.Column>
          <h3>Delivery address</h3>
          <p>{order.deliveryAddress.name}</p>
          <p>{order.deliveryAddress.street}</p>
          <p>
            {order.deliveryAddress.zipCode}
            {' '}
            {order.deliveryAddress.city}
          </p>
          <p>{order.deliveryAddress.country}</p>
        </Grid.Column>
      </Grid>
    </Segment>
  )
}

export default withRouter(Order)
