import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'

const ShowcaseItem = ({ product }) => {
  console.log(product)

  if (!product) {
    return null
  }
  return (
    <Link to={`/products/${product._id}`}>
      <Card raised link>
        <Image
          src="https://react.semantic-ui.com/images/wireframe/image.png"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{product.title}</Card.Header>
          <Card.Meta>{product.description}</Card.Meta>
          <Card.Description>
            <b>
              {product.price}
              {' '}
€
            </b>
          </Card.Description>
        </Card.Content>
      </Card>
    </Link>
  )
}

export default ShowcaseItem
