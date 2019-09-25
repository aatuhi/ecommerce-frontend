import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Menu, Icon, Container, Segment } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'

const NavBar = props => {
  const [activeItem, setActiveItem] = useState('home')

  const cartTotalQuantity = shoppingCart =>
    shoppingCart.reduce((prev, curr) => prev + curr.quantity, 0)

  return (
    <Segment inverted>
      <Menu inverted pointing secondary size="large">
        <Container>
          <Link to="/">
            <Menu.Item
              link
              name="home"
              active={activeItem === 'home'}
              onClick={() => setActiveItem('home')}
            >
              <Icon name="home" />
              Home
            </Menu.Item>
          </Link>
          <Link to="/products">
            <Menu.Item
              link
              active={activeItem === 'products'}
              name="products"
              onClick={() => setActiveItem('products')}
            >
              <Icon name="shopping bag" />
              Products
            </Menu.Item>
          </Link>
          <Link to="/cart">
            <Menu.Item
              link
              active={activeItem === 'cart'}
              name="cart"
              onClick={() => setActiveItem('cart')}
            >
              <Icon name="shopping cart" />
              Cart
              {props.shoppingCart.length > 0 &&
                ` (${cartTotalQuantity(props.shoppingCart)})`}
            </Menu.Item>
          </Link>

          <Menu.Item position="right" />

          <Link to="/account">
            <Menu.Item
              link
              active={activeItem === 'account'}
              name="account"
              onClick={() => setActiveItem('account')}
              position="right"
            >
              {props.user ? (
                <div>
                  <Icon name="user" />
                  My account
                </div>
              ) : (
                <div>
                  <Icon name="lock" />
                  Log in
                </div>
              )}
            </Menu.Item>
          </Link>
          {props.user && props.user.admin && (
            <Link to="/admin">
              <Menu.Item
                link
                active={activeItem === 'admin'}
                name="admin"
                onClick={() => setActiveItem('admin')}
              >
                <Icon name="adn" />
                Admin panel
              </Menu.Item>
            </Link>
          )}
        </Container>
      </Menu>
    </Segment>
  )
}

const mapStateToProps = state => ({
  user: state.user,
  shoppingCart: state.shoppingCart,
})

export default withRouter(connect(mapStateToProps)(NavBar))
