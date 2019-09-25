import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { Segment, Grid } from 'semantic-ui-react'
import ShoppingCart from './ShoppingCart'
import OrderForm from './OrderForm'

const CheckOutPage = props => (
  <Segment raised>
    {props.cart.length < 1 ? (
      <h2>Please add some products to shopping cart first</h2>
    ) : (
      <Grid columns={2}>
        <Grid.Column>
          <ShoppingCart />
        </Grid.Column>
        <Grid.Column verticalAlign="middle">
          {props.user ? (
            <OrderForm />
          ) : (
            <h3>
              Please <Link to="/account">log in</Link> first to make an order
            </h3>
          )}
        </Grid.Column>
      </Grid>
    )}
  </Segment>
)

const mapStateToProps = state => ({
  user: state.user,
  cart: state.shoppingCart,
})

export default withRouter(connect(mapStateToProps)(CheckOutPage))
