import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 5px 5px 0px 0px;

  @media screen and (min-width: 768px) {
    width: 250px;
    height: 250px;
  }
`

const StyledItem = styled(animated.div)`
  display: flex;
  background: linear-gradient(
    45deg,
    rgba(220, 170, 200, 0.5) 0%,
    rgba(210, 115, 150, 0.5) 20%
  );
  box-shadow: 3px 3px 4px slategray;
  border-radius: 5px;
  width: 350px;
  @media screen and (min-width: 768px) {
    width: 250px;
    display: block;
  }
`

const StyledTextBox = styled.div`
  padding: 15px 10px
  min-width: 250px;
  display: block;
  text-align: center;
  text-shadow: 1px 1px 2px slategray;
  color: rgba(240, 240, 240, 0.95);
  height: 100px;

  @media screen and (min-width: 768px) {
    padding: 5px 10px;
    display: block;
    min-height: 100px;
    height: initial;
  }
`

const StyledProductTitle = styled.h3`
  margin: 5px;
`

const StyledProductPrice = styled.h4`
  margin: 5px;
`
const StyledProductDescription = styled.p`
  margin: 5px;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`

const ShowcaseItem = ({ product }) => {
  const [hovered, setHovered] = useState(false)

  const itemSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    transform: `scale(${hovered ? 1.05 : 1})`,
    background: `${
      hovered ? 'rgba(220,170,200,0.5)' : 'rgba(210,115,150,0.5)'
    }`,
    boxShadow: `${hovered ? '6px 6px 8px slategray' : '3px 3px 4px slategray'}`
  })

  if (!product) {
    return null
  }
  return (
    <Link to={`/products/${product._id}`}>
      <StyledItem
        style={itemSpring}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      >
        <StyledImage
          alt="showcase_img"
          src="https://react.semantic-ui.com/images/wireframe/image.png"
        />
        <StyledTextBox>
          <StyledProductTitle>{product.title}</StyledProductTitle>
          <StyledProductPrice>
            {product.price}
            {' '}
€
          </StyledProductPrice>
          <StyledProductDescription>
            {product.description}
          </StyledProductDescription>
        </StyledTextBox>
      </StyledItem>
    </Link>
  )
}

export default ShowcaseItem
