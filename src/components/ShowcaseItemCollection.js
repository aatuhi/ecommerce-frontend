import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import ShowcaseItem from './ShowcaseItem'

const StyledSubHeader = styled.h2`
  text-align: center;
  margin: 50px;
`

const ShowcaseItemCollecation = props => {
  const [showcaseProducts, setShowcaseProducts] = useState(
    props.featuredProducts
  )

  // artificial intelligence as it's best
  useEffect(
    () => {
      setShowcaseProducts(props.featuredProducts)
    },
    [props.featuredProducts]
  )

  console.log('showcase', showcaseProducts)

  return (
    <div>
      <StyledSubHeader>Featured products:</StyledSubHeader>
      <div style={{ display: 'flex' }}>
        {showcaseProducts.map(product => (
          <div style={{ margin: 'auto' }} key={Math.random()}>
            <ShowcaseItem product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  featuredProducts: state.featuredProducts
})

export default connect(mapStateToProps)(ShowcaseItemCollecation)
