import React from "react"
import styled from "styled-components"
import ProductListProduct from "./ProductListProduct"

const StyledList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const ProductList = props => {
  return (
    // mapping key-error for unknown reason
    <StyledList>
      {props.products.map(product => (
        <ProductListProduct product={product} key={product._id} />
      ))}
    </StyledList>
  )
}

export default ProductList
