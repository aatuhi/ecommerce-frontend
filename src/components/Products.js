import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import ProductList from './ProductList'

const StyledButton = styled(animated.button)`
  margin: 10px;
  padding: 5px 15px;
  max-height: 40px;
  background-color: rgba(180, 90, 140, 0.8);
  border-radius: 4px;
  border-color: rgba(210, 115, 150, 0.3);
  color: #f0f0f0;
  box-shadow: 1px 1px 2px slategray;
  font-size: 1.1em;
  text-shadow: 0px 1px 2px slategray;
`

const Products = ({ products }) => {
  const [visible, setVisibility] = useState(false)
  const [productsToShow, setProductsToShow] = useState([products])

  useEffect(
    () => {
      setProductsToShow(products)
    },
    [products]
  )

  const handleFilterClick = category => {
    if (category === 'all') {
      return setProductsToShow(products)
    }
    const prods = products.filter(p => p.type === category)
    return setProductsToShow(prods)
  }

  const disctinctCategories = ['all', ...new Set(products.map(p => p.type))]

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <h2 style={{ margin: 'auto' }}>
          Enjoy our selection of quality goods!
        </h2>
      </div>
      {/* filter visibility */}
      <div style={{ display: 'flex', margin: '20px' }}>
        <div style={{ display: 'flex', margin: 'auto' }}>
          <div>
            {visible ? (
              <StyledButton
                type="button"
                disabled={!visible}
                onClick={() => setVisibility(false)}
              >
                Hide categories
              </StyledButton>
            ) : (
              <StyledButton
                type="button"
                disabled={visible}
                onClick={() => setVisibility(true)}
              >
                Filter by category
              </StyledButton>
            )}
          </div>
          {disctinctCategories.map(
            category =>
              visible && (
                <StyledButton
                  key={category}
                  onClick={() => handleFilterClick(category)}
                >
                  {category}
                </StyledButton>
              )
          )}
        </div>
      </div>
      <ProductList products={productsToShow} />
    </div>
  )
}

const mapStateToProps = state => ({
  products: state.products
})

export default withRouter(connect(mapStateToProps)(Products))
