import React from 'react'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Form, Button, Message } from 'semantic-ui-react'
import orderService from '../services/orders'

const OrderForm = props => {
  const totalPrice = shoppingCart =>
    shoppingCart.reduce(
      (prev, curr) =>
        Math.round((prev + curr.price * curr.quantity) * 100) / 100,
      0
    )
  return (
    <div>
      <h2>Place an order</h2>
      <Formik
        initialValues={{
          name: '',
          street: '',
          zipCode: '',
          city: '',
          country: '',
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setTimeout(() => {
            const result = window.confirm()
            if (result) {
              try {
                const order = {
                  products: props.shoppingCart,
                  totalPrice: totalPrice(props.shoppingCart),
                  deliveryAddress: values,
                }
                orderService.createOrder(order)
              } catch (error) {
                window.alert(error)
              }
              window.alert('Order placed')
            }
            setSubmitting(false)
          }, 500)
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Required field'),
          street: Yup.string().required('Required field'),
          zipCode: Yup.string().required('Required field'),
          city: Yup.string().required('Required field'),
          country: Yup.string().required('Required field'),
        })}
      >
        {props => {
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
              <Form onSubmit={handleSubmit}>
                <div>
                  <Form.Input
                    label="Name"
                    id="name"
                    placeholder="Enter name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.name && touched.name}
                  />
                </div>
                <div>
                  <Form.Input
                    label="Street"
                    id="street"
                    placeholder="Enter street"
                    type="text"
                    value={values.street}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.street && touched.street}
                  />
                </div>
                <div>
                  <Form.Input
                    label="Postal code"
                    id="zipCode"
                    placeholder="Enter postal code"
                    type="text"
                    value={values.zipCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.zipCode && touched.zipCode}
                  />
                </div>
                <div>
                  <Form.Input
                    label="City"
                    id="city"
                    placeholder="Enter city"
                    type="text"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.city && touched.city}
                  />
                </div>

                <div>
                  <Form.Input
                    label="Country"
                    id="country"
                    placeholder="Enter country"
                    type="text"
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.country && touched.country}
                  />
                </div>

                <Button
                  type="button"
                  onClick={handleReset}
                  disabled={!dirty || isSubmitting}
                >
                  Reset
                </Button>
                <Button primary type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </Form>
            </div>
          )
        }}
      </Formik>
    </div>
  )
}

const mapStateToProps = state => ({
  shoppingCart: state.shoppingCart,
  user: state.user,
})

export default connect(mapStateToProps)(OrderForm)
