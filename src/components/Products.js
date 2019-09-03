import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  Segment, Sidebar, Menu, Button, Grid,
} from 'semantic-ui-react'
import ProductList from './ProductList'

const Products = ({ products }) => {
  const [visible, setVisibility] = useState(false)
  const [productsToShow, setProductsToShow] = useState([products])

  useEffect(
    () => {
      setProductsToShow(products)
    },
    [products],
  )

  const handleFilterClick = (category) => {
    if (category === 'all') {
      return setProductsToShow(products)
    }
    const prods = products.filter(p => p.type === category)
    return setProductsToShow(prods)
  }

  const disctinctCategories = ['all', ...new Set(products.map(p => p.type))]

  console.log('productstoShow', productsToShow)

  return (
    <Segment basic>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <h2>Enjoy our selection of quality goods!</h2>
          </Grid.Column>
          <Grid.Column>
            {visible ? (
              <Button disabled={!visible} onClick={() => setVisibility(false)}>
                Hide categories
              </Button>
            ) : (
              <Button disabled={visible} onClick={() => setVisibility(true)}>
                Filter by category
              </Button>
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          direction="top"
          visible={visible}
        >
          {disctinctCategories.map(category => (
            <Menu.Item
              key={category}
              as="a"
              onClick={() => handleFilterClick(category)}
            >
              {category}
            </Menu.Item>
          ))}
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic>
            <ProductList products={productsToShow} />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Segment>
  )
}

const mapStateToProps = state => ({
  products: state.products,
})

export default withRouter(connect(mapStateToProps)(Products))
