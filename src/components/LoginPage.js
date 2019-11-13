import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { userLoggingIn } from "../reducers/loginReducer"
import UserCreationForm from "./UserCreationForm"
import LoginForm from "./LoginForm"
import UserInfo from "./UserInfo"

const LoginPage = props => {
  if (props.user) {
    return <UserInfo user={props.user} />
  }

  return (
    <div style={{ display: "flex", padding: "50px" }}>
      <LoginForm />
      <UserCreationForm />
    </div>
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
