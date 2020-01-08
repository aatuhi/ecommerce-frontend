import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import ShowcaseItem from './ShowcaseItem'

const StyledSubHeader = styled.h2`
  text-align: center;
  margin: 25px;
  @media screen and (min-width: 768px) {
    margin: 50px;
  }
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const ShowcaseItemCollecation = props => {
  const [showcaseProducts, setShowcaseProducts] = useState(
    props.featuredProducts
  )

  useEffect(
    () => {
      setShowcaseProducts(props.featuredProducts)
    },
    [props.featuredProducts]
  )

  console.log('showcase', showcaseProducts)

  return (
    <div>
      <StyledSubHeader>Featured products</StyledSubHeader>
      <StyledWrapper>
        {showcaseProducts.map(product => (
          <div style={{ margin: '10px auto' }} key={product._id}>
            <ShowcaseItem product={product} />
          </div>
        ))}
      </StyledWrapper>
    </div>
  )
}

const mapStateToProps = state => ({
  featuredProducts: state.featuredProducts
})

export default connect(mapStateToProps)(ShowcaseItemCollecation)
