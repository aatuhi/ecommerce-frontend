import React, { useState } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { userLoggingIn } from "../reducers/loginReducer"

const StyledContainer = styled.div`
  margin: auto;
  padding: 30px;
  background: rgba(75, 75, 75, 0.15);
  border-style: solid;
  border-color: rgba(75, 75, 75, 0.15);
  background-clip: padding-box;
  border-radius: 4px;
`

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

const LoginPage = props => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async credentials => {
    console.log(credentials)
    try {
      await props.userLoggingIn(credentials)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div style={{ margin: "auto" }}>
      <h2 style={{ textAlign: "center" }}>Log in</h2>
      <StyledContainer>
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
      </StyledContainer>
    </div>
  )
}

const mapDispatchToProps = {
  userLoggingIn
}

export default connect(
  null,
  mapDispatchToProps
)(LoginPage)
