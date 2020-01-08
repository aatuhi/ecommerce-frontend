import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { userLoggingIn } from '../reducers/loginReducer'
import UserCreationForm from './UserCreationForm'
import LoginForm from './LoginForm'
import UserInfo from './UserInfo'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 50px;
  }
`

const LoginPage = props => {
  if (props.user) {
    return <UserInfo user={props.user} />
  }

  return (
    <StyledContainer>
      <LoginForm />
      <UserCreationForm />
    </StyledContainer>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = {
  userLoggingIn
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginPage)
)
