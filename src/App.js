import React, { useEffect } from 'react'
import { Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { productInitialization } from './reducers/productReducer'
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import ProductFrom from './components/ProductForm'

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
      <ProductList products={props.products} />
    </Container>
  )
}

const mapStateToProps = state => ({
  products: state.products,
})

export default connect(
  mapStateToProps,
  { productInitialization },
)(App)
