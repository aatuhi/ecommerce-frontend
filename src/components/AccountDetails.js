import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const AccountDetails = props => (
  <div>
    <h2>Welcome!</h2>
    <h3>Account details</h3>
    <p>
Username:
      {props.user.username}
    </p>
    <p>
Name:
      {props.user.name}
    </p>
    <p>
E-mail:
      {props.user.email}
    </p>
  </div>
)

const mapStateToProps = state => ({
  user: state.user,
})

export default withRouter(connect(mapStateToProps)(AccountDetails))
