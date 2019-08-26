import React from 'react'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'

const NavBar = props => (
  <div>
    <Menu inverted stackable>
      <Menu.Item>
        <Link to="/">
          <h4>Home</h4>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/products">
          <h4>Products</h4>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/cart">
          <h4>Cart</h4>
        </Link>
      </Menu.Item>
      <Menu.Item>
        {props.user ? (
          <Link to="/account">
            <h4>My account</h4>
          </Link>
        ) : (
          <Link to="/account">
            <h4>Sign in</h4>
          </Link>
        )}
      </Menu.Item>
      {props.user && props.user.admin && (
        <Menu.Item>
          <Link to="/admin">
            <h4>Admin panel</h4>
          </Link>
        </Menu.Item>
      )}
    </Menu>
  </div>
)

const mapStateToProps = state => ({
  user: state.user,
})

export default withRouter(connect(mapStateToProps)(NavBar))
