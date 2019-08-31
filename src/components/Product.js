import React from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import {
  Segment, Grid, Image, Item, Button,
} from 'semantic-ui-react'
import ProductEditForm from './ProductEditForm'
import { addProductToCart } from '../reducers/shoppingCartReducer'

const Product = (props) => {
  if (!props.product) {
    return null
    // return <Redirect to="/products" />
  }

  //   <Segment raised>
  //       <Grid columns={3}>
  //         <Grid.Column verticalAlign="middle">
  //           <Image
  //             src="https://react.semantic-ui.com/images/wireframe/image.png"
  //             size="medium"
  //           />
  //         </Grid.Column>
  //         <Grid.Column verticalAlign="middle">
  //           <h2>{props.product.title}</h2>
  //           <h3>
  //             {' '}
  //             {props.product.price}
  // €
  //           </h3>
  //           <p>
  //             {' '}
  //             {props.product.description}
  //           </p>
  //         </Grid.Column>
  //         <Grid.Column>
  // {props.user && props.user.admin && (
  //   <ProductEditForm product={props.product} />
  // )}
  //         </Grid.Column>
  //       </Grid>
  //     </Segment>

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
                add to cart
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
