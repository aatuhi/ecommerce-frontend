import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import {
  Segment, Button, Image, Grid,
} from 'semantic-ui-react'
import { addProductToCart } from '../reducers/shoppingCartReducer'

const ProductList = props => (
  <Segment basic>
    <h2>Product List</h2>
    {props.products.map(product => (
      <Segment raised key={product._id}>
        <Grid columns={4}>
          <Grid.Column>
            <Image
              src="https://react.semantic-ui.com/images/wireframe/image.png"
              size="small"
            />
          </Grid.Column>
          <Grid.Column>
            <Link to={`/products/${product._id}`}>
              <h3>{product.title}</h3>
            </Link>
            <div>{product.description}</div>
            <p>
              {product.price}
              {' '}
€
            </p>
            <Button
              primary
              type="button"
              onClick={() => props.addProductToCart(product)}
            >
              add to cart
            </Button>
          </Grid.Column>
        </Grid>
      </Segment>
    ))}
  </Segment>
)

const mapStateToProps = state => ({
  products: state.products,
})

export default withRouter(
  connect(
    mapStateToProps,
    { addProductToCart },
  )(ProductList),
)
