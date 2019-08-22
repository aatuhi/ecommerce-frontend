import React, { useEffect } from 'react'
import { Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { productInitialization } from './reducers/productReducer'
import { usersInitialization } from './reducers/usersReducer'
import userService from './services/users'
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import ProductFrom from './components/ProductForm'
import Product from './components/Product'
import ShoppingCart from './components/ShoppingCart'
import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import Order from './components/Order'
import UserInfo from './components/UserInfo'

const App = (props) => {
  useEffect(() => {
    console.log('products initialized')
    props.productInitialization()
    if (props.user && props.user.admin) {
      userService.setToken(props.user.token)
      props.usersInitialization()
    }
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

  const orderById = (id) => {
    console.log(id)
    const orderToRender = props.user.orders.find((order) => {
      console.log(order._id, id)
      return order._id === id
    })
    console.log(orderToRender)
    return orderToRender
  }

  const userById = (id) => {
    console.log(id)
    const userToRender = props.registeredUsers.find((user) => {
      console.log(user._id, id)
      return user._id === id
    })
    console.log(userToRender)
    return userToRender
  }

  return (
    <Router>
      <Container>
        <NavBar />
        <Route path="/" exact component={LandingPage} />
        <Route path="/admin/" exact component={ProductFrom} />
        <Route path="/products/" exact component={ProductList} />
        <Route
          exact
          path="/products/:id"
          render={({ match }) => (
            <Product product={productById(match.params.id)} />
          )}
        />
        <Route path="/cart/" component={ShoppingCart} />
        <Route path="/account/" exact component={LoginPage} />
        <Route
          exact
          path="/account/orders/:id"
          render={({ match }) => <Order order={orderById(match.params.id)} />}
        />
        <Route
          exact
          path="/admin/users/:id"
          render={({ match }) => <UserInfo user={userById(match.params.id)} />}
        />
      </Container>
    </Router>
  )
}

const mapStateToProps = state => ({
  products: state.products,
  user: state.user,
  registeredUsers: state.registeredUsers,
})

export default connect(
  mapStateToProps,
  { productInitialization, usersInitialization },
)(App)
