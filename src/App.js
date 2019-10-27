import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import { productInitialization } from './reducers/productReducer'
import { usersInitialization } from './reducers/usersReducer'
import { ordersInitialization } from './reducers/ordersReducer'
import userService from './services/users'
import orderService from './services/orders'
import NavBar from './components/NavBar'
import Products from './components/Products'
import Product from './components/Product'
import CheckOutPage from './components/CheckOutPage'
import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import OrderDetails from './components/OrderDetails'
import UserInfo from './components/UserInfo'
import AdminPage from './components/AdminPage'

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
`

const App = (props) => {
  useEffect(() => {
    props.productInitialization()
    if (props.user && props.user.admin) {
      userService.setToken(props.user.token)
      orderService.setToken(props.user.token)
      props.usersInitialization()
      props.ordersInitialization()
    }
  }, [])

  const productById = (id) =>
    props.products.find((product) => product._id === id)

  const orderById = (id) => {
    if (props.user.admin) {
      return props.allOrders.find((order) => order._id === id)
    }
    return props.user.orders.find((order) => order._id === id)
  }

  const userById = (id) => props.registeredUsers.find((user) => user._id === id)

  return (
    <Router>
      <NavBar />
      <div style={{ display: 'flex', margin: '50px' }}>
        <h1>E-commerce site</h1>
      </div>
      <StyledContainer>
        <Route path="/" exact component={LandingPage} />
        <Route path="/admin/" exact component={AdminPage} />
        <Route path="/products/" exact component={Products} />
        <Route
          exact
          path="/products/:id"
          render={({ match }) => (
            <Product product={productById(match.params.id)} />
          )}
        />
        <Route path="/cart/" component={CheckOutPage} />
        <Route path="/account/" exact component={LoginPage} />
        <Route
          exact
          path="/account/orders/:id"
          render={({ match }) => (
            <OrderDetails order={orderById(match.params.id)} />
          )}
        />
        <Route
          exact
          path="/admin/users/:id"
          render={({ match }) => <UserInfo user={userById(match.params.id)} />}
        />
        <Route
          exact
          path="/admin/orders/:id"
          render={({ match }) => (
            <OrderDetails order={orderById(match.params.id)} />
          )}
        />
      </StyledContainer>
    </Router>
  )
}

const mapStateToProps = (state) => ({
  products: state.products,
  user: state.user,
  registeredUsers: state.registeredUsers,
  allOrders: state.allOrders,
})

export default connect(
  mapStateToProps,
  { productInitialization, usersInitialization, ordersInitialization }
)(App)
