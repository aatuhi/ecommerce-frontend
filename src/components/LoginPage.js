import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  Form, Button, Segment, Divider, Grid,
} from 'semantic-ui-react'
import { userLoggingIn, userLoggingOut } from '../reducers/loginReducer'
import UserCreationForm from './UserCreationForm'
import UserInfo from './UserInfo'

const LoginPage = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  if (props.user) {
    return (
      <div>
        <UserInfo user={props.user} />
        <Button onClick={() => props.userLoggingOut()}>Logout</Button>
      </div>
    )
  }

  return (
    <Segment padded="very" raised>
      <Grid columns={2}>
        <Grid.Column>
          <Segment padded basic>
            <h3>Sign in</h3>
            <Form onSubmit={() => props.userLoggingIn({ username, password })}>
              <div>
                <Form.Input
                  label="username"
                  value={username}
                  onChange={({ target }) => setUsername(target.value)}
                />
              </div>
              <div>
                <Form.Input
                  type="password"
                  label="password"
                  onChange={({ target }) => setPassword(target.value)}
                />
              </div>
              <Button primary type="submit">
                Sign in
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment padded basic>
            <UserCreationForm />
          </Segment>
        </Grid.Column>
      </Grid>
      <Divider vertical>Or</Divider>
    </Segment>
  )
}

const mapStateToProps = state => ({
  user: state.user,
})

const mapDispatchToProps = {
  userLoggingIn,
  userLoggingOut,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage)
