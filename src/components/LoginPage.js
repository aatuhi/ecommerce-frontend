import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'
import { userLoggingIn, userLoggingOut } from '../reducers/loginReducer'
import OrderHistory from './OrderHistory'
import AccountDetails from './AccountDetails'

const LoginPage = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  if (props.user) {
    return (
      <div>
        <AccountDetails />
        <Button onClick={() => props.userLoggingOut()}>Logout</Button>
        <OrderHistory />
      </div>
    )
  }

  return (
    <div>
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
        <Button type="submit">Log in</Button>
      </Form>
    </div>
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
