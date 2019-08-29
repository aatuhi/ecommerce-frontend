import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Button, Form, Segment, Icon, Grid, Image,
} from 'semantic-ui-react'
import {
  removeProductFromCart,
  updateProductQuantity,
} from '../reducers/shoppingCartReducer'

const ShoppingCartProduct = (props) => {
  const [quantity, setQuantity] = useState(props.product.quantity)

  const updateQuantity = (event) => {
    event.preventDefault()
    setQuantity(event.target.updatedValue.value)
    const updatedProduct = {
      ...props.product,
      quantity: Number(event.target.updatedValue.value),
    }
    props.updateProductQuantity(updatedProduct)
  }

  return (
    <Segment>
      <Grid columns={3}>
        <Grid.Column>
          <Image
            src="https://react.semantic-ui.com/images/wireframe/image.png"
            size="tiny"
          />
        </Grid.Column>
        <Grid.Column>
          <h3>{props.product.title}</h3>
          <div>
            {' '}
            {props.product.description}
          </div>
          <div>
            {props.product.price}
            {' '}
€ / each
          </div>
        </Grid.Column>
        <Grid.Column>
          <div>
            <Form onSubmit={updateQuantity}>
              <Form.Input
                type="number"
                step="1"
                defaultValue={quantity}
                id="updatedValue"
              />
              <Button
                type="button"
                onClick={() => props.removeProductFromCart(props.product._id)}
              >
                <Icon name="trash" />
              </Button>
              <Button primary type="submit">
                <Icon name="refresh" />
              </Button>
            </Form>
          </div>
        </Grid.Column>
      </Grid>
    </Segment>
  )
}

export default withRouter(
  connect(
    null,
    { removeProductFromCart, updateProductQuantity },
  )(ShoppingCartProduct),
)
