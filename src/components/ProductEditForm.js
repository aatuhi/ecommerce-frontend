import React from "react"
import { connect } from "react-redux"
import { Formik } from "formik"
import * as Yup from "yup"
import styled, { css } from "styled-components"
import productService from "../services/products"
import { productEditing, productRemoval } from "../reducers/productReducer"

const StyledContainer = styled.div`
  margin: 25px 0 25px auto;
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
  margin: 20px 5px 0 5px;
  padding: 5px 15px;
  max-height: 40px;
  background-color: rgba(210, 115, 150, 0.8);
  border-radius: 4px;
  border-color: rgba(210, 115, 150, 0.4);
  color: #f0f0f0;
  box-shadow: 1px 1px 2px slategray;
  font-size: 1em;
  text-shadow: 0px 1px 2px slategray;

  ${props =>
    props.red &&
    css`
      background: rgba(190, 66, 81, 0.8);
      border-color: rgba(190, 66, 81, 0.4);
    `}
`

const ProductEditForm = props => {
  console.log(props.product)

  const handleRemove = product => {
    console.log(product._id)
    productService.setToken(props.user.token)
    props.productRemoval(product)
  }

  return (
    <StyledContainer>
      <h2>Edit product</h2>
      <Formik
        initialValues={{
          title: props.product.title,
          description: props.product.description,
          price: props.product.price,
          type: props.product.type
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setTimeout(() => {
            productService.setToken(props.user.token)
            const result = window.confirm("Update product?")
            if (result) {
              try {
                const updatedProduct = {
                  ...props.product,
                  title: values.title,
                  description: values.description,
                  price: values.price,
                  type: values.type
                }
                console.log(updatedProduct)
                props.productEditing(updatedProduct)
              } catch (error) {
                window.alert(error)
              }
            }
            window.alert("Complete")
            setSubmitting(false)
          }, 500)
        }}
        validationSchema={Yup.object().shape({
          title: Yup.string()
            .required("Required field")
            .min(2, "Title must be at least 2 characters"),
          description: Yup.string()
            .required("Required field")
            .min(2, "Description required"),
          type: Yup.string()
            .required("Required field")
            .min(2, "Type required"),
          price: Yup.number().required("Price is required")
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
                    label="Title"
                    id="title"
                    placeholder="Enter the product title"
                    type="text"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.title && touched.title}
                  />
                </div>
                <div>
                  <StyledInput
                    label="Description"
                    id="description"
                    placeholder="Enter the product description"
                    type="text"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.description && touched.description}
                  />
                </div>
                <div>
                  <StyledInput
                    label="Type"
                    id="type"
                    placeholder="Enter the product type"
                    type="text"
                    value={values.type}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.type && touched.type}
                  />
                </div>
                <div>
                  <StyledInput
                    label="Price"
                    id="price"
                    placeholder="Enter the product price"
                    type="number"
                    step="0.01"
                    value={values.price}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.price && touched.price}
                  />
                </div>

                <StyledButton
                  type="button"
                  onClick={handleReset}
                  disabled={!dirty || isSubmitting}
                >
                  Reset changes
                </StyledButton>
                <StyledButton type="submit" disabled={isSubmitting}>
                  Confirm editing
                </StyledButton>
              </form>
            </div>
          )
        }}
      </Formik>
      <StyledButton
        red
        type="button"
        onClick={() => handleRemove(props.product)}
      >
        Delete product
      </StyledButton>
    </StyledContainer>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(
  mapStateToProps,
  { productEditing, productRemoval }
)(ProductEditForm)
