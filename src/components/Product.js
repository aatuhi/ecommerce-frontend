import React from 'react'

const Product = ({ product }) => {
  if (!product) {
    return null
  }

  return (
    <div>
      {' '}
      <h2>{product.details.title}</h2>
      {product.details.price}
€
      {product.details.description}
    </div>
  )
}

export default Product
