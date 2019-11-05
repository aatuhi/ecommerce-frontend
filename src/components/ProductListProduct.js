import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { Link } from 'react-router-dom'
import { addProductToCart } from '../reducers/shoppingCartReducer'

const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  margin: 10px 40px 10px 20px;
  border-radius: 3px;
`

const StyledItem = styled(animated.div)`
  display: flex;
  margin: 15px;
  padding: 10px 5px;
  border: solid;
  border-radius: 6px;
  background-color: rgba(240, 240, 240, 0.7);
  border-color: rgba(240, 240, 240, 0.1);
  box-shadow: 2px 2px 3px lightslategray;
`
const StyledButton = styled(animated.button)`
  margin: 0 0 0 50px;
  padding: 5px 15px;
  max-height: 40px;
  background-color: rgba(210, 115, 150, 0.8);
  border-radius: 4px;
  border-color: rgba(210, 115, 150, 0.4);
  color: #f0f0f0;
  box-shadow: 1px 1px 2px slategray;
  font-size: 1.2em;
  text-shadow: 0px 1px 2px slategray;
`
const StyledTextDiv = styled.div`
  min-width: 250px;
  margin: 10px 20px;
`

const ProductListProduct = (props) => {
    const [buttonHovered, setButtonHovered] = useState(false)

    
    const buttonSpring = useSpring({ 
        transform: `scale(${buttonHovered ? 1.05 : 1})`,
    })
    
    const spring = useSpring({ opacity: 1, from: { opacity: 0 } })
    
    const { product } = props
    
    return (
   <StyledItem style={spring} key={product._id}>
        <StyledImage
          alt="small_image"
          src="https://react.semantic-ui.com/images/wireframe/image.png"
        />
        <StyledTextDiv>
          <Link to={`/products/${product._id}`}>
            <h3>{product.title}</h3>
          </Link>
          <p style={{ marginTop: '5px', maxWidth: '250px' }}>
            {product.description}
          </p>
          <div style={{ marginTop: '15px' }}>
            <h3 style={{ margin: '0', display: 'inline-block' }}>
              {product.price} €
            </h3>
            <StyledButton style={buttonSpring}
              type="button"
              onClick={() => props.addProductToCart(product)}
              onMouseOver={() => setButtonHovered(true)} 
              onMouseOut={() => setButtonHovered(false)}
            >
              add to cart
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
  
