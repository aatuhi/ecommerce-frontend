import React, { useEffect } from 'react'
import { Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { productInitialization } from './reducers/productReducer'
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import ProductFrom from './components/ProductForm'
import ShoppingCart from './components/ShoppingCart'

const App = (props) => {
  useEffect(() => {
    console.log('products initialized')
    props.productInitialization()
  }, [])

  return (
    <Container>
      <NavBar />
      <h1>Ecommerce application</h1>
      <ProductFrom />
      <ProductList />
      <ShoppingCart />
    </Container>
  )
}

export default connect(
  null,
  { productInitialization },
)(App)
