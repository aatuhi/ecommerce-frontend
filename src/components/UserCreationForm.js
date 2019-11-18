import React from "react"
import { Formik } from "formik"
import * as Yup from "yup"
import styled from "styled-components"
import userService from "../services/users"

const StyledContainer = styled.div`
  margin: auto;
  padding: 30px;
  background: rgba(220, 220, 220, 0.5);
  border-style: solid;
  border-color: rgba(220, 220, 220, 0.5);
  /* background-clip: padding-box; */
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
  box-shadow: 1px 1px 2px slategray;
  font-size: 1.2em;
  text-shadow: 0px 1px 2px slategray;
`

const UserCreationForm = props => (
  <Formik
    initialValues={{
      username: "",
      name: "",
      email: "",
      password: "",
      passwordVerification: ""
    }}
    onSubmit={async (values, { setSubmitting }) => {
      setTimeout(() => {
        const { username, name, password, email } = values
        try {
          userService.createUser({
            username,
            name,
            email,
            password
          })
        } catch (error) {
          console.log(error)
        }
        setSubmitting(false)
      }, 3000)
    }}
    validationSchema={Yup.object().shape({
      username: Yup.string()
        .required("Required field")
        .min(3, "Title must be at least 3 characters"),
      password: Yup.string()
        .required("Required field")
        .min(6, "Password must be at least 6 characters"),
      passwordVerification: Yup.string()
        .oneOf([Yup.ref("password"), "Must equal to password field"])
        .required("Password confirm is required"),
      email: Yup.string()
        .email("Invalid email")
        .required("Required field"),
      name: Yup.string().required("Required field")
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        // dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
        // handleReset,
      } = props

      return (
        <div style={{ margin: "auto" }}>
          <StyledContainer>
            <h2 style={{ textAlign: "center " }}>Create user</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <StyledInput
                  label="Username"
                  id="username"
                  placeholder="Enter preferred username"
                  type="text"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.username && touched.username}
                />
              </div>
              <div>
                <StyledInput
                  label="E-mail"
                  id="email"
                  placeholder="Enter your e-mail address"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.email && touched.email}
                />
              </div>
              <div>
                <StyledInput
                  label="Name"
                  id="name"
                  placeholder="Enter your name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.name && touched.name}
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
              <div>
                <StyledInput
                  label="Confirm password"
                  id="passwordVerification"
                  placeholder="Confirm password"
                  type="password"
                  value={values.passwordVerification}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    errors.passwordVerification && touched.passwordVerification
                  }
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

export default UserCreationForm
