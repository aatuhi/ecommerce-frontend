import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import ShowcaseItem from './ShowcaseItem'

const ShowcaseItemCollecation = (props) => {
  const [showcaseProducts, setShowcaseProducts] = useState([])

  // artificial intelligence in it's best
  useEffect(() => {
    setShowcaseProducts([
      props.products[Math.floor(Math.random() * props.products.length)],
      props.products[Math.floor(Math.random() * props.products.length)],
      props.products[Math.floor(Math.random() * props.products.length)],
    ])
  }, [props.products])

  console.log('showcase', showcaseProducts)

  return (
    <div>
      <h3>
        <p> Here's some products we think you would be interested in</p>
      </h3>
      <div>
        {showcaseProducts.map((product) => (
          <div>
            <ShowcaseItem product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  products: state.products,
})

export default connect(mapStateToProps)(ShowcaseItemCollecation)
