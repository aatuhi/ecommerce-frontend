import React from 'react'
import { withRouter } from 'react-router-dom'
import { List } from 'semantic-ui-react'

const AccountDetails = ({ user }) => (
  <List>
    <List.Item>
      <h3>{user.name}</h3>
    </List.Item>
    <List.Item icon="user" content={user.username} />
    <List.Item icon="mail" content={user.email} />
  </List>
)

export default withRouter(AccountDetails)
