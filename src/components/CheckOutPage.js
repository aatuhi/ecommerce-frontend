import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { Segment, Grid } from 'semantic-ui-react'
import ShoppingCart from './ShoppingCart'
import OrderForm from './OrderForm'

const CheckOutPage = props => (
  <Segment raised>
    <Grid columns={2}>
      <Grid.Column>
        <ShoppingCart />
      </Grid.Column>
      <Grid.Column verticalAlign="middle">
        {props.user ? (
          <OrderForm />
        ) : (
          <h3>
            Please
            {' '}
            <Link to="/account">log in</Link>
            {' '}
first to make an order
          </h3>
        )}
      </Grid.Column>
    </Grid>
  </Segment>
)

const mapStateToProps = state => ({
  user: state.user,
})

export default withRouter(connect(mapStateToProps)(CheckOutPage))
