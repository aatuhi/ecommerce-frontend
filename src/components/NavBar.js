import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import styled, { css } from 'styled-components'
import {
  FaShoppingCart,
  FaBoxes,
  FaStoreAlt,
  FaUnlock,
  FaUser,
  FaTools
} from 'react-icons/fa'

const StyledNavBar = styled.ul`
  display: flex;
  margin: 0px;
  background: rgba(210, 115, 150, 0.8);
  box-shadow: 0px 1px 2px rgba(75, 75, 75, 0.5);
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin: auto;
  }
`

const StyledNavBarItem = styled.li`
  display: block;
  margin: 10px 1vw;
  font-size: 1em;
  color: #f0f0f0;
  text-shadow: 0px 1px 2px slategray;

  @media screen and (min-width: 768px) {
    min-width: 120px;
    margin: 30px 2.5vw;
    font-size: 1.7em;
  }
`
const StyledNavBarItemTitle = styled.h4``

const NavBar = props => {
  const cartTotalQuantity = shoppingCart =>
    shoppingCart.reduce((prev, curr) => prev + curr.quantity, 0)

  return (
    <StyledNavBar>
      <StyledWrapper>
        <Link to="/">
          <StyledNavBarItem>
            <FaStoreAlt
              style={{ verticalAlign: 'bottom', marginRight: '15px' }}
            />
            Home
          </StyledNavBarItem>
        </Link>
        <Link to="/products">
          <StyledNavBarItem>
            <FaBoxes style={{ verticalAlign: 'bottom', marginRight: '15px' }} />
            Products
          </StyledNavBarItem>
        </Link>
        <Link to="/cart">
          <StyledNavBarItem>
            <FaShoppingCart
              style={{ verticalAlign: 'bottom', marginRight: '15px' }}
            />
            Cart
            {props.shoppingCart.length > 0 &&
              ` (${cartTotalQuantity(props.shoppingCart)})`}
          </StyledNavBarItem>
        </Link>

        {props.user && props.user.admin && (
          <Link to="/admin">
            <StyledNavBarItem>
              <FaTools
                style={{ verticalAlign: 'bottom', marginRight: '10px' }}
              />
              Admin panel
            </StyledNavBarItem>
          </Link>
        )}

        <Link to="/account">
          {props.user ? (
            <StyledNavBarItem>
              <FaUser
                style={{ verticalAlign: 'bottom', marginRight: '10px' }}
              />
              My account
            </StyledNavBarItem>
          ) : (
            <StyledNavBarItem>
              <FaUnlock
                style={{ verticalAlign: 'bottom', marginRight: '10px' }}
              />
              Log in
            </StyledNavBarItem>
          )}
        </Link>
      </StyledWrapper>
    </StyledNavBar>
  )
}

const mapStateToProps = state => ({
  user: state.user,
  shoppingCart: state.shoppingCart
})

export default withRouter(connect(mapStateToProps)(NavBar))
