import React from "react"
import { connect } from "react-redux"
import { Formik } from "formik"
import * as Yup from "yup"
import styled from "styled-components"
import orderService from "../services/orders"

const StyledContainer = styled.div`
  margin: 20px;
  padding: 30px;
  background: rgba(220, 220, 220, 0.5);
  border-style: solid;
  border-color: rgba(220, 220, 220, 0.5);
  /* background-clip: padding-box; */
  border-radius: 4px;
`

const StyledInput = styled.input`
  width: 280px;
  margin: 5px;
  padding: 5px;
  font-size: 1.1em;
  border-color: rgba(240, 240, 240, 0.5);
  border-radius: 3px;
  box-shadow: 2px 2px 3px lightslategray;
`
const StyledButton = styled.button`
  margin: 20px 10px;
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

const OrderForm = props => {
  const totalPrice = shoppingCart =>
    shoppingCart.reduce(
      (prev, curr) =>
        Math.round((prev + curr.price * curr.quantity) * 100) / 100,
      0
    )
  return (
    <StyledContainer>
      <h2>Place an order</h2>
      <Formik
        initialValues={{
          name: "",
          street: "",
          zipCode: "",
          city: "",
          country: ""
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setTimeout(() => {
            const result = window.confirm()
            if (result) {
              try {
                const order = {
                  products: props.shoppingCart,
                  totalPrice: totalPrice(props.shoppingCart),
                  deliveryAddress: values
                }
                orderService.createOrder(order)
              } catch (error) {
                window.alert(error)
              }
              window.alert("Order placed")
            }
            setSubmitting(false)
          }, 500)
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("Required field"),
          street: Yup.string().required("Required field"),
          zipCode: Yup.string().required("Required field"),
          city: Yup.string().required("Required field"),
          country: Yup.string().required("Required field")
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
            handleReset
          } = props

          return (
            <div>
              <form onSubmit={handleSubmit}>
                <div>
                  <StyledInput
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
                  <StyledInput
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
                  <StyledInput
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
                  <StyledInput
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
                  <StyledInput
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

                <StyledButton
                  type="button"
                  onClick={handleReset}
                  disabled={!dirty || isSubmitting}
                >
                  Reset
                </StyledButton>
                <StyledButton primary type="submit" disabled={isSubmitting}>
                  Submit
                </StyledButton>
              </form>
            </div>
          )
        }}
      </Formik>
    </StyledContainer>
  )
}

const mapStateToProps = state => ({
  shoppingCart: state.shoppingCart,
  user: state.user
})

export default connect(mapStateToProps)(OrderForm)
