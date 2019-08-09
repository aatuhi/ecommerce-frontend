import React from 'react'

const Product = ({ product }) => {
  console.log(product)
  if (!product) {
    return null
  }

  return (
    <div>
      {' '}
      <h3>{product.details.title}</h3>
      {product.details.price}
€
      {product.details.description}
    </div>
  )
}

export default Product
