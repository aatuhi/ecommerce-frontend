import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { animated } from 'react-spring'
import ProductList from './ProductList'

const StyledButton = styled(animated.button)`
  margin: 2px;
  padding: 1px 5px;
  max-height: 40px;
  border-radius: 4px;
  background-color: #d08770;
  border-color: #d0877066;
  color: #f0f0f0;
  box-shadow: 1px 1px 2px slategray;
  font-size: 1.1em;
  text-shadow: 0px 1px 2px slategray;

  @media screen and (min-width: 768px) {
    margin: 10px;
    padding: 5px 15px;
    font-size: 1em;
  }
`

const ProductsPage = ({ products }) => {
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
      <h2 style={{ textAlign: 'center' }}>Products</h2>
      {/* filter visibility */}
      <div style={{ display: 'flex', margin: '25px 0' }}>
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

export default withRouter(connect(mapStateToProps)(ProductsPage))
