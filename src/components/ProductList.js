import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addProductToCart } from '../reducers/shoppingCartReducer'

const ProductList = (props) => (
  // mapping key error for unknown reason
  <div>
    {props.products.map((product) => (
      <div key={product._id}>
        <div>
          <div>
            <div>
              <img
                alt="small_image"
                src="https://react.semantic-ui.com/images/wireframe/image.png"
              />
            </div>
            <div>
              <Link to={`/products/${product._id}`}>
                <h3>{product.title}</h3>
              </Link>
              <div>{product.description}</div>
              <p>{product.price} €</p>
              <button
                type="button"
                onClick={() => props.addProductToCart(product)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
)

export default connect(
  null,
  { addProductToCart }
)(ProductList)
