import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { addProductToCart } from '../reducers/shoppingCartReducer'

const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 20px;
`

const StyledRow = styled.div`
  display: flex;
  margin: 20px;
`

const ProductList = (props) => (
  // mapping key-error for unknown reason
  <div>
    {props.products.map((product) => (
      <StyledRow key={product._id}>
        <StyledImage
          alt="small_image"
          src="https://react.semantic-ui.com/images/wireframe/image.png"
        />
        <div>
          <Link to={`/products/${product._id}`}>
            <h3>{product.title}</h3>
          </Link>
          <div>{product.description}</div>
          <p>{product.price} €</p>
          <button type="button" onClick={() => props.addProductToCart(product)}>
            Add to cart
          </button>
        </div>
      </StyledRow>
    ))}
  </div>
)

export default connect(
  null,
  { addProductToCart }
)(ProductList)
