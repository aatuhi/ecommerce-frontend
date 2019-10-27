import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 5px 5px 0px 0px;
`

const StyledItem = styled.div`
  max-width: 250px;
  background-color: lightblue;
  box-shadow: 3px 3px 4px slategray;
  border-radius: 5px;
`
const StyledTextBox = styled.div`
  text-align: center;
  color: #1f1f1f;
  margin: 0 20px;
`

const ShowcaseItem = ({ product }) => {
  console.log(product)

  if (!product) {
    return null
  }
  return (
    <Link to={`/products/${product._id}`}>
      <StyledItem>
        <StyledImage
          alt="showcase_img"
          src="https://react.semantic-ui.com/images/wireframe/image.png"
        />
        <StyledTextBox>
          <div>{product.title}</div>
          <div>{product.description}</div>
          <div>
            <p>{product.price} €</p>
          </div>
        </StyledTextBox>
      </StyledItem>
    </Link>
  )
}

export default ShowcaseItem
