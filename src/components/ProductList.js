import React  from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import ProductListProduct from './ProductListProduct'

const StyledList = styled(animated.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const ProductList = (props) => { 
  const spring = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    // mapping key-error for unknown reason
    <StyledList style={spring}>
      {props.products.map((product) => (
        <ProductListProduct product={product} key={product._id} />
      ))}
    </StyledList>
  )
}

export default ProductList
