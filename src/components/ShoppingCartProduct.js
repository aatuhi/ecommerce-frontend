import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  Button, Form, Icon, Item,
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
    <Item>
      <Item.Image
        src="https://react.semantic-ui.com/images/wireframe/image.png"
        size="tiny"
      />
      <Item.Content>
        <Item.Header>{props.product.title}</Item.Header>
        <Item.Description>
          {props.product.price}
          {' '}
€ / each
        </Item.Description>
        <Item.Meta>{props.product.description}</Item.Meta>
      </Item.Content>

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
    </Item>
  )
}

export default connect(
  null,
  { removeProductFromCart, updateProductQuantity },
)(ShoppingCartProduct)
