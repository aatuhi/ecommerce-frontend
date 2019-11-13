import React, { useState } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"
import { FaUser, FaEnvelope } from "react-icons/fa"

import { userLoggingOut } from "../reducers/loginReducer"

const StyledContainer = styled.div``

const StyledButton = styled(animated.button)`
  margin: 20px 0 0 50px;
  padding: 5px 15px;
  max-height: 40px;
  background-color: rgba(210, 115, 150, 0.8);
  border-radius: 4px;
  border-color: rgba(210, 115, 150, 0.4);
  color: #f0f0f0;
  box-shadow: 1px 1px 2px slategray;
  font-size: 1.2em;
  text-shadow: 0px 1px 2px slategray;
`

const AccountDetails = props => {
  const [buttonHovered, setButtonHovered] = useState(false)

  const buttonSpring = useSpring({
    background: `${
      buttonHovered ? "rgba(220,170,200,0.8)" : "rgba(210,115,150,0.8)"
    }`
  })
  return (
    <div>
      <h2>{props.user.name}</h2>
      <div
        style={{
          display: "flex",
          marginBottom: "10px",
          alignItems: "center"
        }}
      >
        <FaUser
          style={{
            marginRight: "10px"
          }}
        />
        <p style={{ fontSize: "1.2em" }}>{props.user.username}</p>
      </div>
      <div
        style={{
          display: "flex",
          marginBottom: "10px",
          alignItems: "center"
        }}
      >
        <FaEnvelope style={{ marginRight: "10px" }} />
        <p style={{ fontSize: "1.2em" }}>{props.user.email}</p>
      </div>
      {props.loggedUser._id === props.user._id && (
        <StyledButton
          style={buttonSpring}
          type="button"
          onClick={() => props.userLoggingOut()}
          onMouseOver={() => setButtonHovered(true)}
          onMouseOut={() => setButtonHovered(false)}
        >
          Sign out
        </StyledButton>
      )}
    </div>
  )
}
const mapDispatchToProps = {
  userLoggingOut
}

const mapStateToProps = state => ({
  loggedUser: state.user
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountDetails)
