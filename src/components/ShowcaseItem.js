import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSpring, animated, config } from 'react-spring'

const StyledImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 5px 5px 0px 0px;
`

const StyledItem = styled(animated.div)`
  max-width: 250px;
  background: linear-gradient(45deg, rgba(220,170,200,0.5) 0%, rgba(210,115,150,0.5) 20%);
  box-shadow: 3px 3px 4px slategray;
  border-radius: 5px;
`
const StyledTextBox = styled.div`
  text-align: center;
  text-shadow: 1px 1px 2px slategray;
  color: rgba(240, 240, 240, 0.95);
  padding: 5px 10px;
`

const ShowcaseItem = ({ product }) => {
  const [hovered, setHovered] = useState(false)

  const itemSpring = useSpring({ 
    opacity: 1,   
    from: { opacity: 0 },
    transform: `scale(${hovered ? 1.05 : 1})`,
    background: `${hovered ? 'rgba(220,170,200,0.5)' : 'rgba(210,115,150,0.5)' }`,
  })
  
  
  if (!product) {
    return null
  }
  return (
    <Link to={`/products/${product._id}`}>
      <StyledItem style={itemSpring}
        onMouseOver={() => setHovered(true)} 
        onMouseOut={() => setHovered(false)}>
        <StyledImage
          alt="showcase_img"
          src="https://react.semantic-ui.com/images/wireframe/image.png"
        />
        <StyledTextBox>
          <h3 style={{ margin: '5px' }}>{product.title}</h3>
          <h4 style={{ margin: '5px' }}>{product.price} €</h4>
          <p style={{ margin: '5px' }}>{product.description}</p>
        </StyledTextBox>
      </StyledItem>
    </Link>
  )
}

export default ShowcaseItem
