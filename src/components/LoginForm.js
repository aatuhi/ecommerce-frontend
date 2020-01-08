import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { userLoggingIn } from '../reducers/loginReducer'

const StyledContainer = styled.div`
  margin: 25px auto;
  padding: 30px;
  background: rgba(220, 220, 220, 0.5);
  border-style: solid;
  border-color: rgba(220, 220, 220, 0.5);
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

const LoginForm = props => (
  <Formik
    initialValues={{
      username: '',
      password: ''
    }}
    onSubmit={async (values, { setSubmitting }) => {
      setTimeout(() => {
        const { username, password } = values
        try {
          props.userLoggingIn({
            username,
            password
          })
        } catch (error) {
          console.log(error)
        }
        setSubmitting(false)
      }, 1000)
    }}
    validationSchema={Yup.object().shape({
      username: Yup.string().required('Username missing'),
      password: Yup.string().required('Password missing')
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props

      return (
        <div style={{ margin: 'auto' }}>
          <StyledContainer>
            <h2 style={{ textAlign: 'center ' }}>Log in</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <StyledInput
                  label="Username"
                  id="username"
                  placeholder="Enter your username"
                  type="text"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.username && touched.username}
                />
              </div>
              <div>
                <StyledInput
                  label="Password"
                  id="password"
                  placeholder="Enter password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.password && touched.password}
                />
              </div>
              <StyledButton type="submit" disabled={isSubmitting}>
                Submit
              </StyledButton>
            </form>
          </StyledContainer>
        </div>
      )
    }}
  </Formik>
)

const mapDispatchToProps = {
  userLoggingIn
}

export default connect(
  null,
  mapDispatchToProps
)(LoginForm)
