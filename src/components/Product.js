import React from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import ProductEditForm from './ProductEditForm'
import { addProductToCart } from '../reducers/shoppingCartReducer'

const Product = (props) => {
  if (!props.product) {
    return <Redirect to="/products" />
  }

  return (
    <div>
      <div>
        <div>
          <img
            alt="product_image"
            src="https://react.semantic-ui.com/images/wireframe/image.png"
          />
          <div>
            <div size="tiny">{props.product.title}</div>
            <div>{props.product.description}</div>
            <div>{props.product.price} €</div>
            <div>
              <button
                type="button"
                onClick={() => props.addProductToCart(props.product)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      {props.user && props.user.admin && (
        <ProductEditForm floated="right" product={props.product} />
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
})

export default withRouter(
  connect(
    mapStateToProps,
    { addProductToCart }
  )(Product)
)
