import React from 'react'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'

const NavBar = props => (
  <div>
    <Menu inverted stackable>
      <Menu.Item>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/products">Products</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/cart">Shopping cart</Link>
      </Menu.Item>
      <Menu.Item>
        {props.user ? (
          <Link to="/account">My account</Link>
        ) : (
          <Link to="/account">Log in</Link>
        )}
      </Menu.Item>
      {props.user && props.user.admin && (
        <Menu.Item>
          <Link to="/admin">Admin panel</Link>
        </Menu.Item>
      )}
    </Menu>
  </div>
)

const mapStateToProps = state => ({
  user: state.user,
})

export default withRouter(connect(mapStateToProps)(NavBar))
