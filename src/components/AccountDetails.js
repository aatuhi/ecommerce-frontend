import React from 'react'
import { connect } from 'react-redux'
import { List, Button } from 'semantic-ui-react'
import { userLoggingOut } from '../reducers/loginReducer'

const AccountDetails = props => (
  <List>
    <List.Item>
      <h3>{props.user.name}</h3>
    </List.Item>
    <List.Item icon="user" content={props.user.username} />
    <List.Item icon="mail" content={props.user.email} />
    {props.loggedUser._id === props.user._id && (
      <Button onClick={() => props.userLoggingOut()}>Logout</Button>
    )}
  </List>
)

const mapDispatchToProps = {
  userLoggingOut,
}

const mapStateToProps = state => ({
  loggedUser: state.user,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountDetails)
