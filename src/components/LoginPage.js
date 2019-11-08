import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { userLoggingIn } from '../reducers/loginReducer'
import UserCreationForm from './UserCreationForm'
import UserInfo from './UserInfo'

const StyledInput = styled.input`
  width: 220px;
  margin: 5px;
  padding: 5px;
  font-size: 1.1em;
  border-color: rgba(240, 240, 240, 0.5);
  border-radius: 3px;
  box-shadow: 2px 2px 3px lightslategray;
`
const StyledButton = styled.button`
  margin: 20px 0 0 130px;
  padding: 5px 15px;
  max-height: 40px;
  background-color: rgba(210, 115, 150, 0.8);
  border-radius: 4px;
  border-color: rgba(210, 115, 150, 0.4);
  color: #f0f0f0;
  text-shadow: 0px 1px 2px slategray;
  box-shadow: 1px 1px 2px slategray;
  font-size: 1.2em;
`
const StyledHeader = styled.h2`
  text-align: center;
`

const LoginPage = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  if (props.user) {
    return <UserInfo user={props.user} />
  }

  const handleLogin = (credentials) => {
    props.userLoggingIn(credentials)
  }

  return (
    <div style={{ display: 'flex', padding: '50px' }}>
      <div style={{ margin: 'auto' }}>
        <StyledHeader>Log in</StyledHeader>
        <form onSubmit={() => handleLogin({ username, password })}>
          <div>
            <StyledInput
              placeholder="Enter your username"
              label="username"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div>
            <StyledInput
              placeholder="Enter your password"
              type="password"
              label="password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <StyledButton type="submit">Log in</StyledButton>
        </form>
      </div>
      <div style={{ margin: 'auto' }}>
        <StyledHeader>Create a user</StyledHeader>
        <UserCreationForm />
      </div>
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
