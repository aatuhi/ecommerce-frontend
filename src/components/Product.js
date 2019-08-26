import React from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import { productRemoval } from '../reducers/productReducer'
import ProductEditForm from './ProductEditForm'
import productService from '../services/products'

const Product = (props) => {
  const handleRemove = (product) => {
    console.log(product._id)
    productService.setToken(props.user.token)
    props.productRemoval(product)
  }

  if (!props.product) {
    return <Redirect to="/products" />
  }

  return (
    <div>
      {' '}
      <h2>{props.product.title}</h2>
      <p>
        {' '}
        {props.product.price}
€
      </p>
      <p>
        {' '}
        {props.product.type}
      </p>
      <p>
        {' '}
        {props.product.description}
      </p>
      {props.user.admin && (
        <div>
          <ProductEditForm product={props.product} />
          <Button type="button" onClick={() => handleRemove(props.product)}>
            Delete
          </Button>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user,
})

export default withRouter(
  connect(
    mapStateToProps,
    { productRemoval },
  )(Product),
)
