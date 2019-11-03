import React from 'react'
import { useSpring, animated } from 'react-spring'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { addProductToCart } from '../reducers/shoppingCartReducer'

const StyledList = styled(animated.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

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
  background-color: rgba(240, 240, 240, 0.5);
  border-color: rgba(240, 240, 240, 0.1);
  box-shadow: 2px 2px 3px lightslategray;
`
const StyledButton = styled.button`
  margin: 0 0 0 50px;
  padding: 5px 15px;
  max-height: 40px;
  background-color: rgba(210, 115, 150, 0.8);
  border-radius: 4px;
  border-color: rgba(210, 115, 150, 0.4);
  color: #f0f0f0;
  box-shadow: 1px 1px 2px slategray;
  font-size: 1.2em;
`
const StyledTextDiv = styled.div`
  min-width: 250px;
  margin: 10px 20px;
`

const ProductList = (props) => {
  const spring = useSpring({ opacity: 1, from: { opacity: 0 } })
  return (
    // mapping key-error for unknown reason
    <StyledList style={spring}>
      {props.products.map((product) => (
        <StyledItem key={product._id}>
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
              <StyledButton
                type="button"
                onClick={() => props.addProductToCart(product)}
              >
                add to cart
              </StyledButton>
            </div>
          </StyledTextDiv>
        </StyledItem>
      ))}
    </StyledList>
  )
}

export default connect(
  null,
  { addProductToCart }
)(ProductList)
