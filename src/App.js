import React, { useEffect } from 'react'
import { Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { productInitialization } from './reducers/productReducer'
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import ProductFrom from './components/ProductForm'
import Product from './components/Product'
import ShoppingCart from './components/ShoppingCart'
import LandingPage from './components/LandingPage'
import Login from './components/Login'
import OrderForm from './components/OrderForm'

const App = (props) => {
  useEffect(() => {
    console.log('products initialized')
    props.productInitialization()
  }, [])

  const productById = (id) => {
    console.log(id)
    const productToRender = props.products.find((product) => {
      console.log(product._id, id)
      return product._id === id
    })
    console.log(productToRender)
    return productToRender
  }

  return (
    <Router>
      <Container>
        <NavBar />
        <Route path="/" exact component={LandingPage} />
        <Route path="/admin/" component={ProductFrom} />
        <Route path="/products/" exact component={ProductList} />
        <Route
          exact
          path="/products/:id"
          render={({ match }) => (
            <Product product={productById(match.params.id)} />
          )}
        />
        <Route path="/cart/" component={ShoppingCart} />
        <Route path="/login/" component={Login} />
      </Container>
    </Router>
  )
}

const mapStateToProps = state => ({
  products: state.products,
})

export default connect(
  mapStateToProps,
  { productInitialization },
)(App)
