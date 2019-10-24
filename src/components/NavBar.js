import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

const NavBar = (props) => {
  const cartTotalQuantity = (shoppingCart) =>
    shoppingCart.reduce((prev, curr) => prev + curr.quantity, 0)

  return (
    <div>
      <div>
        <div>
          <Link to="/">
            <div>Home</div>
          </Link>
          <Link to="/products">
            <div>Products</div>
          </Link>
          <Link to="/cart">
            <div>
              Cart
              {props.shoppingCart.length > 0 &&
                ` (${cartTotalQuantity(props.shoppingCart)})`}
            </div>
          </Link>

          <Link to="/account">
            <div>{props.user ? <div>My account</div> : <div>Log in</div>}</div>
          </Link>
          {props.user && props.user.admin && (
            <Link to="/admin">
              <div>Admin panel</div>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
  shoppingCart: state.shoppingCart,
})

export default withRouter(connect(mapStateToProps)(NavBar))
