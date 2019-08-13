import React, { useEffect } from 'react'
import { Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { productInitialization } from './reducers/productReducer'
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import ProductFrom from './components/ProductForm'
import ShoppingCart from './components/ShoppingCart'
import LandingPage from './components/LandingPage'
import Login from './components/Login'

const App = (props) => {
  useEffect(() => {
    console.log('products initialized')
    props.productInitialization()
  }, [])

  return (
    <Router>
      <Container>
        <NavBar />
        <Route path="/" exact component={LandingPage} />
        <Route path="/admin/" component={ProductFrom} />
        <Route path="/products/" component={ProductList} />
        <Route path="/cart/" component={ShoppingCart} />
        <Route path="/login/" component={Login} />
      </Container>
    </Router>
  )
}

export default connect(
  null,
  { productInitialization },
)(App)
