import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Form, Button, Message } from 'semantic-ui-react'

const FormikComponent = () => (
  <div>
    <h2>Formik Component</h2>
    <Formik
      initialValues={{ email: '', name: '' }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 500)
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required('Required field'),
        name: Yup.string()
          .required('Required field')
          .min(3, 'Name must be at least 3 characters'),
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

        console.log('Formik props', props)
        return (
          <div>
            <Form onSubmit={handleSubmit}>
              <div>
                <Form.Input
                  label="Email"
                  id="email"
                  placeholder="Enter your email"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && (
                  <Message color="orange">{errors.email}</Message>
                )}
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
                />
                {errors.name && touched.name && (
                  <Message color="orange">{errors.name}</Message>
                )}
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
            </Form>
          </div>
        )
      }}
    </Formik>
  </div>
)

export default FormikComponent
