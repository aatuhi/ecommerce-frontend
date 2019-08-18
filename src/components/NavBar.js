import React from 'react'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'

const NavBar = (props) => {
  if (props.user === null || !props.user.admin) {
    return (
      <div>
        <Menu inverted stackable>
          <Menu.Item>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/products">Products</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/cart">Shopping Cart</Link>
          </Menu.Item>
          {props.user ? (
            <Menu.Item>
              <Link to="/login">My account</Link>
            </Menu.Item>
          ) : (
            <Menu.Item>
              <Link to="/login">Log in</Link>
            </Menu.Item>
          )}
        </Menu>
      </div>
    )
  }

  return (
    <div>
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
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user,
})

export default withRouter(connect(mapStateToProps)(NavBar))
