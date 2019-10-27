import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ProductList from './ProductList'

const Products = ({ products }) => {
  const [visible, setVisibility] = useState(false)
  const [productsToShow, setProductsToShow] = useState([products])

  useEffect(() => {
    setProductsToShow(products)
  }, [products])

  const handleFilterClick = (category) => {
    if (category === 'all') {
      return setProductsToShow(products)
    }
    const prods = products.filter((p) => p.type === category)
    return setProductsToShow(prods)
  }

  const disctinctCategories = ['all', ...new Set(products.map((p) => p.type))]

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
              <button
                type="button"
                disabled={!visible}
                onClick={() => setVisibility(false)}
              >
                Hide categories
              </button>
            ) : (
              <button
                type="button"
                disabled={visible}
                onClick={() => setVisibility(true)}
              >
                Filter by category
              </button>
            )}
          </div>
          {disctinctCategories.map((category) => (
            <div
              style={{ margin: '10px' }}
              key={category}
              onClick={() => handleFilterClick(category)}
            >
              {category}
            </div>
          ))}
        </div>
      </div>
      <ProductList products={productsToShow} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  products: state.products,
})

export default withRouter(connect(mapStateToProps)(Products))
