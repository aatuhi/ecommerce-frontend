import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Form, Button, Message } from 'semantic-ui-react'
import userService from '../services/users'

const UserCreationForm = props => (
  <Formik
    initialValues={{
      username: '',
      name: '',
      email: '',
      password: '',
      passwordVerification: '',
    }}
    onSubmit={async (values, { setSubmitting }) => {
      setTimeout(() => {
        const {
          username, name, password, email,
        } = values
        try {
          userService.createUser({
            username,
            name,
            email,
            password,
          })
        } catch (error) {
          console.log(error)
        }
        setSubmitting(false)
      }, 3000)
    }}
    validationSchema={Yup.object().shape({
      username: Yup.string()
        .required('Required field')
        .min(3, 'Title must be at least 3 characters'),
      password: Yup.string()
        .required('Required field')
        .min(6, 'Password must be at least 6 characters'),
      passwordVerification: Yup.string()
        .oneOf([Yup.ref('password'), 'Must equal to password field'])
        .required('Password confirm is required'),
      email: Yup.string()
        .email('Invalid email')
        .required('Required field'),
      name: Yup.string().required('Required field'),
    })}
  >
    {(props) => {
      const {
        values,
        touched,
        errors,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
      } = props

      return (
        <div>
          <h3>Create a user</h3>
          <Form onSubmit={handleSubmit} success={isSubmitting}>
            <div>
              <Form.Input
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
              <Form.Input
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
              <Form.Input
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
              <Form.Input
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
              <Form.Input
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
            <Button
              type="button"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
            <Message
              success
              header="Account created succesfully!"
              content="Dive in to explore our webstore."
            />
          </Form>
        </div>
      )
    }}
  </Formik>
)

export default UserCreationForm
