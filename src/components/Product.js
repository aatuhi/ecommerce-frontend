import React from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import { productRemoval } from '../reducers/productReducer'
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
      <h2>{props.product.details.title}</h2>
      <p>
        {' '}
        {props.product.details.price}
€
      </p>
      <p>
        {' '}
        {props.product.details.description}
      </p>
      {props.user.admin && (
        <Button type="button" onClick={() => handleRemove(props.product)}>
          Delete
        </Button>
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
