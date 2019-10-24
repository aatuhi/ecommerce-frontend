import React from 'react'
import { Link } from 'react-router-dom'

const ShowcaseItem = ({ product }) => {
  console.log(product)

  if (!product) {
    return null
  }
  return (
    <Link to={`/products/${product._id}`}>
      <div>
        <img
          alt="showcase_img"
          src="https://react.semantic-ui.com/images/wireframe/image.png"
        />
        <div>
          <div>{product.title}</div>
          <div>{product.description}</div>
          <div>
            <p>{product.price} €</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ShowcaseItem
