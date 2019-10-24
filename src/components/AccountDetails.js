import React from 'react'
import { connect } from 'react-redux'
import { userLoggingOut } from '../reducers/loginReducer'

const AccountDetails = (props) => (
  <div>
    <div>
      <h3>{props.user.name}</h3>
    </div>
    <div>{props.user.username}</div>
    <div>{props.user.email}</div>
    {props.loggedUser._id === props.user._id && (
      <button type="button" onClick={() => props.userLoggingOut()}>
        Logout
      </button>
    )}
  </div>
)

const mapDispatchToProps = {
  userLoggingOut,
}

const mapStateToProps = (state) => ({
  loggedUser: state.user,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountDetails)
