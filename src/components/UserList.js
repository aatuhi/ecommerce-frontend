import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

const UserList = (props) => {
  if (!props.registeredUsers || props.registeredUsers.length < 1) {
    return null
  }

  return (
    <div>
      <h2>Users</h2>
      {props.registeredUsers.map(user => (
        <div key={user._id}>
          <Link to={`/admin/users/${user._id}`}>{user._id}</Link>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  registeredUsers: state.registeredUsers,
})

export default withRouter(connect(mapStateToProps)(UserList))
