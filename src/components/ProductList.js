import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { addProductToCart } from '../reducers/shoppingCartReducer'

const ProductList = (props) => {
  console.log(props.products)

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {props.products.map(product => (
          <div key={product._id}>
            <Link to={`/products/${product._id}`}>{product.details.title}</Link>
            <button
              type="button"
              onClick={() => props.addProductToCart(product)}
            >
              add to cart
            </button>
          </div>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  products: state.products,
})

export default withRouter(
  connect(
    mapStateToProps,
    { addProductToCart },
  )(ProductList),
)
