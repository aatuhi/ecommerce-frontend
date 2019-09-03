import React from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { Segment, Item, Button } from 'semantic-ui-react'
import ProductEditForm from './ProductEditForm'
import { addProductToCart } from '../reducers/shoppingCartReducer'

const Product = (props) => {
  if (!props.product) {
    return <Redirect to="/products" />
  }

  return (
    <Segment raised>
      <Item.Group>
        <Item>
          <Item.Image
            src="https://react.semantic-ui.com/images/wireframe/image.png"
            size="medium"
          />
          <Item.Content>
            <Item.Header size="tiny">{props.product.title}</Item.Header>
            <Item.Meta>{props.product.description}</Item.Meta>
            <Item.Description>
              {props.product.price}
              {' '}
€
            </Item.Description>
            <Item.Extra>
              <Button
                primary
                type="button"
                onClick={() => props.addProductToCart(props.product)}
              >
                Add to cart
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
      {props.user && props.user.admin && (
        <ProductEditForm floated="right" product={props.product} />
      )}
    </Segment>
  )
}

const mapStateToProps = state => ({
  user: state.user,
})

export default withRouter(
  connect(
    mapStateToProps,
    { addProductToCart },
  )(Product),
)
