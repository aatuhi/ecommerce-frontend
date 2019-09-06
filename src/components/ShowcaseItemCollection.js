import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Segment, Grid, Header } from 'semantic-ui-react'
import ShowcaseItem from './ShowcaseItem'

const ShowcaseItemCollecation = (props) => {
  const [showcaseProducts, setShowcaseProducts] = useState([])

  // artificial intelligence in it's best
  useEffect(
    () => {
      setShowcaseProducts([
        props.products[Math.floor(Math.random() * props.products.length)],
        props.products[Math.floor(Math.random() * props.products.length)],
        props.products[Math.floor(Math.random() * props.products.length)],
      ])
    },
    [props.products],
  )

  console.log('showcase', showcaseProducts)

  return (
    <Segment padded="very" basic>
      <Header color="grey" as="h3">
        <i> Here's some products we think you would be interested in</i>
      </Header>
      <Grid columns={3}>
        {showcaseProducts.map(product => (
          <Grid.Column>
            <ShowcaseItem product={product} />
          </Grid.Column>
        ))}
      </Grid>
    </Segment>
  )
}

const mapStateToProps = state => ({
  products: state.products,
})

export default connect(mapStateToProps)(ShowcaseItemCollecation)
