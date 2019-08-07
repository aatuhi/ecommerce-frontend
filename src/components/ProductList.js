import React from 'react'

const ProductList = ({ products }) => {
  console.log(products)
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <div key={product._id}>{product.details.title}</div>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
