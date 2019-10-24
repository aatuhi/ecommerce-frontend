import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const AdminUserList = (props) => {
  if (!props.registeredUsers || props.registeredUsers.length < 1) {
    return null
  }

  return (
    <div>
      <h3>Registered users</h3>
      <div>
        <div>
          <div>
            <div>Username</div>
            <div>Name</div>
          </div>
        </div>
        <div>
          {props.registeredUsers.map((user) => (
            <div key={user._id}>
              <div>
                <Link to={`/admin/users/${user._id}`}>{user.username}</Link>
              </div>
              <div>{user.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  registeredUsers: state.registeredUsers,
})

export default connect(mapStateToProps)(AdminUserList)
