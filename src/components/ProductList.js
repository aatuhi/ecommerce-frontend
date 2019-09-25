import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Segment, Button, Image, Grid,
} from 'semantic-ui-react'
import { addProductToCart } from '../reducers/shoppingCartReducer'

const ProductList = props => (
  // mapping key error for unknown reason
  <Segment padded basic>
    {props.products.map(product => (
      <Segment raised key={product._id}>
        <Grid columns={4}>
          <Grid.Row>
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
                Add to cart
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    ))}
  </Segment>
)

export default connect(
  null,
  { addProductToCart },
)(ProductList)
