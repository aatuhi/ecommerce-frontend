import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { FaCartPlus } from 'react-icons/fa'
import ProductEditForm from './ProductEditForm'
import { addProductToCart } from '../reducers/shoppingCartReducer'

const StyledContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const StyledImage = styled.img`
  width: 125px;
  height: 125px;
  margin: 10px 25px;

  @media screen and (min-width: 768px) {
    width: 250px;
    height: 250px;
    margin: 50px;
  }
`
const StyledDetails = styled.div`
  margin: 25px;

  @media screen and (min-width: 768px) {
    margin: 50px;
  }
`

const StyledButton = styled(animated.button)`
  margin: 25px 0;
  padding: 5px 10px;
  max-height: 40px;
  background-color: rgba(210, 115, 150, 0.8);
  border-radius: 4px;
  border-color: rgba(210, 115, 150, 0.4);
  color: #f0f0f0;
  box-shadow: 1px 1px 2px slategray;
  font-size: 1.2em;
`

const Product = props => {
  const [buttonHovered, setButtonHovered] = useState(false)

  const buttonSpring = useSpring({
    background: `${
      buttonHovered ? 'rgba(220,170,200,0.8)' : 'rgba(210,115,150,0.8)'
    }`
  })

  const pageSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 }
  })

  if (!props.product) {
    return null
  }

  return (
    <StyledContainer style={pageSpring}>
      <StyledImage
        alt="product_image"
        src="https://react.semantic-ui.com/images/wireframe/image.png"
      />
      <StyledDetails>
        <h2>{props.product.title}</h2>
        <p>{props.product.description}</p>
        <h3>
          {props.product.price}
          {' '}
€
        </h3>
        <div>
          <StyledButton
            style={buttonSpring}
            type="button"
            onClick={() => props.addProductToCart(props.product)}
            onMouseOver={() => setButtonHovered(true)}
            onMouseOut={() => setButtonHovered(false)}
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
      </StyledDetails>
      {props.user && props.user.admin && (
        <ProductEditForm product={props.product} />
      )}
    </StyledContainer>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

export default withRouter(
  connect(
    mapStateToProps,
    { addProductToCart }
  )(Product)
)
