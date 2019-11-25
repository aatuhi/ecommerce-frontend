import React from 'react'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import { productCreation } from '../reducers/productReducer'
import productService from '../services/products'

const StyledContainer = styled.div`
  margin: 50px;
  padding: 30px;
  background: rgba(220, 220, 220, 0.5);
  border-style: solid;
  border-color: rgba(220, 220, 220, 0.5);
  /* background-clip: padding-box; */
  border-radius: 4px;
  display: inline-block;
`

const StyledInput = styled.input`
  width: 300px;
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

const ProductCreationForm = props => {
  return (
    <StyledContainer>
      <h2>Add a product</h2>
      <Formik
        initialValues={{
          title: '',
          description: '',
          type: '',
          price: 0
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setTimeout(() => {
            productService.setToken(props.user.token)
            const result = window.confirm(JSON.stringify(values))
            if (result) {
              try {
                props.productCreation(values)
              } catch (error) {
                window.alert(error)
              }
            }
            window.alert('Product added')
            setSubmitting(false)
          }, 500)
        }}
        validationSchema={Yup.object().shape({
          title: Yup.string()
            .required('Required field')
            .min(2, 'Title must be at least 2 characters'),
          description: Yup.string()
            .required('Required field')
            .min(2, 'Description required'),
          price: Yup.number().required('Price is required'),
          type: Yup.string()
            .required('Required field')
            .min(2, 'Description required')
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
                <div>
                  <StyledInput
                    label="Product Category"
                    id="type"
                    placeholder="Enter the product category/type"
                    type="text"
                    value={values.type}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.type && touched.type}
                  />
                </div>

                <StyledButton
                  type="button"
                  onClick={handleReset}
                  disabled={!dirty || isSubmitting}
                >
                  Reset
                </StyledButton>
                <StyledButton type="submit" disabled={isSubmitting}>
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
  user: state.user
})

export default connect(
  mapStateToProps,
  { productCreation }
)(ProductCreationForm)
