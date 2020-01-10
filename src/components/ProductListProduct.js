import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { Link } from 'react-router-dom'
import { FaCartPlus } from 'react-icons/fa'
import { addProductToCart } from '../reducers/shoppingCartReducer'

const StyledImage = styled.img`
  margin: 5px
  width: 100px;
  height: 100px;
  border-radius: 3px;

  @media screen and (min-width:768px) {
  margin: 10px 40px 10px 20px;
    
  }
`

const StyledItem = styled(animated.div)`
  display: flex;
  padding: 10px 5px;
  margin: 5px;
  border: solid;
  border-radius: 6px;
  background-color: #e5e9f0b3;
  border-color: #e5e9f01a;
  box-shadow: 0px 1px 3px lightslategray;

  @media screen and (min-width: 768px) {
    box-shadow: 2px 2px 3px lightslategray;
    margin: 15px;
  }
`
const StyledButton = styled(animated.button)`
  margin-top: 5px;
  padding: 1px 5px;
  border-radius: 4px;
  background-color: #88c0d0;
  border-color: #88c0d066;
  color: #f0f0f0;
  box-shadow: 1px 1px 2px slategray;
  font-size: 1.2em;
  text-shadow: 0px 1px 2px slategray;

  @media screen and (min-width: 768px) {
    padding: 5px 10px;
    margin-left: 50px;
  }
`
const StyledTextDiv = styled.div`
  margin: 10px 20px;
  @media screen and (min-width: 768px) {
    margin: 10px 20px;
    min-width: 250px;
  }
`
const StyledProductTitle = styled.h3``

const StyledProductPrice = styled.h4`
  margin: 5px;
`
const StyledProductDescription = styled.p`
  margin-top: 5px;
  max-width: 250px;
`

const ProductListProduct = props => {
  const [buttonHovered, setButtonHovered] = useState(false)
  const [buttonClicked, setButtonClicked] = useState(false)

  const spring = useSpring({ opacity: 1, from: { opacity: 0 } })

  const buttonSpring = useSpring({
    background: `${buttonHovered ? '#81A1C1' : '#88C0D0'}`,
    transform: `scale(${buttonClicked ? 1.1 : 1})`
  })

  const { product } = props

  return (
    <StyledItem style={spring} key={product._id}>
      <StyledImage
        alt="small_image"
        src="https://react.semantic-ui.com/images/wireframe/image.png"
      />
      <StyledTextDiv>
        <Link to={`/products/${product._id}`}>
          <StyledProductTitle>{product.title}</StyledProductTitle>
        </Link>
        <StyledProductDescription>
          {product.description}
        </StyledProductDescription>
        <div style={{ marginTop: '15px' }}>
          <h3 style={{ margin: '0', display: 'inline-block', width: '75px' }}>
            {product.price}
            {' '}
€
          </h3>
          <StyledButton
            style={buttonSpring}
            type="button"
            onClick={() => props.addProductToCart(product)}
            onMouseOver={() => setButtonHovered(true)}
            onMouseOut={() => setButtonHovered(false)}
            onMouseDown={() => setButtonClicked(true)}
            onMouseUp={() => setButtonClicked(false)}
          >
            <FaCartPlus
              style={{
                verticalAlign: 'middle',
                margin: '0 3px 3px 0',
                fontSize: '0.9em'
              }}
            />
            {' '}
            Add to cart
          </StyledButton>
        </div>
      </StyledTextDiv>
    </StyledItem>
  )
}

export default connect(
  null,
  { addProductToCart }
)(ProductListProduct)
