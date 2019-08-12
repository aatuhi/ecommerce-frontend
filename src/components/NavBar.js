import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const NavBar = () => (
  <React.Fragment>
    <Menu inverted stackable>
      <Menu.Item>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/products">Products</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/admin">Admin panel</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/cart">Shopping Cart</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/login">Log In</Link>
      </Menu.Item>
    </Menu>
  </React.Fragment>
)

export default NavBar
