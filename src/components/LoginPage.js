import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Form, Button, Segment, Divider, Grid } from 'semantic-ui-react'
import { userLoggingIn } from '../reducers/loginReducer'
import UserCreationForm from './UserCreationForm'
import UserInfo from './UserInfo'

const LoginPage = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  if (props.user) {
    return <UserInfo user={props.user} />
  }

  const handleLogin = credentials => {
    props.userLoggingIn(credentials)
  }

  return (
    <Segment padded="very" raised>
      <Grid columns={2}>
        <Grid.Column>
          <Segment padded basic>
            <h3>Log in</h3>
            <Form onSubmit={() => handleLogin({ username, password })}>
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
                Log in
              </Button>
              {errorMessage && <div>{errorMessage}</div>}
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
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginPage)
)
