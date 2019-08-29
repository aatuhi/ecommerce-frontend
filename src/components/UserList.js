import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Table } from 'semantic-ui-react'

const UserList = (props) => {
  if (!props.registeredUsers || props.registeredUsers.length < 1) {
    return null
  }

  return (
    <div>
      <h3>Registered users</h3>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Username</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.registeredUsers.map(user => (
            <Table.Row key={user._id}>
              <Table.Cell>
                <Link to={`/admin/users/${user._id}`}>{user.username}</Link>
              </Table.Cell>
              <Table.Cell>{user.name}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}

const mapStateToProps = state => ({
  registeredUsers: state.registeredUsers,
})

export default withRouter(connect(mapStateToProps)(UserList))
