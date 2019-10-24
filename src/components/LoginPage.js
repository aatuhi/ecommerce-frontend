import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { userLoggingIn } from '../reducers/loginReducer'
import UserCreationForm from './UserCreationForm'
import UserInfo from './UserInfo'

const LoginPage = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  if (props.user) {
    return <UserInfo user={props.user} />
  }

  const handleLogin = (credentials) => {
    props.userLoggingIn(credentials)
  }

  return (
    <div>
      <div>
        <div>
          <div>
            <h3>Log in</h3>
            <form onSubmit={() => handleLogin({ username, password })}>
              <div>
                <input
                  label="username"
                  value={username}
                  onChange={({ target }) => setUsername(target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  label="password"
                  onChange={({ target }) => setPassword(target.value)}
                />
              </div>
              <button type="submit">Log in</button>
              {errorMessage && <div>{errorMessage}</div>}
            </form>
          </div>
        </div>
        <div>
          <div padded basic>
            <UserCreationForm />
          </div>
        </div>
      </div>
      <div>Or</div>
    </div>
  )
}

const mapStateToProps = (state) => ({
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
