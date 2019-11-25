import React from 'react'
import { Formik } from 'formik'
import styled from 'styled-components'
import * as Yup from 'yup'

const StyledContainer = styled.div`
  margin: 50px;
  padding: 30px;
  background: rgba(220, 220, 220, 0.5);
  border-style: solid;
  border-color: rgba(220, 220, 220, 0.5);
  border-radius: 4px;
  display: inline-block;
`

const StyledSelect = styled.select`
  background-color: white;
  width: 300px;
  margin: 5px 5px 10px 5px;
  padding: 5px;
  font-size: 1.1em;
  border-color: rgba(240, 240, 240, 0.5);
  border-radius: 3px;
  box-shadow: 2px 2px 3px lightslategray;
`

const StyledButton = styled.button`
  display: block;
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

export const FeaturedProductSelection = ({ products }) => (
  <Formik
    initialValues={{
      productOne: '',
      productTwo: '',
      productThree: ''
    }}
    onSubmit={async (values, { setSubmitting }) => {
      console.log('clicked')
      setTimeout(() => {
        const { productOne, productTwo, productThree } = values
        try {
          console.log(productOne, productTwo, productThree)
        } catch (error) {
          console.log(error)
        }
        setSubmitting(false)
      }, 1000)
    }}
    validationSchema={Yup.object().shape({
      productOne: Yup.string().required('missing'),
      productTwo: Yup.string().required('missing'),
      productThree: Yup.string().required('missing')
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      } = props

      return (
        <StyledContainer>
          <h2>Select featured products</h2>
          <form onSubmit={handleSubmit}>
            <h4>Product one</h4>
            <StyledSelect
              name="productOne"
              value={values.productOne}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.productOne && touched.productOne}
            >
              {products.map(p => {
                return <option value={p._id}>{p.title}</option>
              })}
            </StyledSelect>
            <h4>Product two</h4>
            <StyledSelect
              name="productTwo"
              value={values.productTwo}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.productTwo && touched.productTwo}
            >
              {products.map(p => {
                return <option value={p._id}>{p.title}</option>
              })}
            </StyledSelect>
            <h4>Product three</h4>
            <StyledSelect
              name="productThree"
              value={values.productThree}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.productThree && touched.productThree}
            >
              {products.map(p => {
                return <option value={p._id}>{p.title}</option>
              })}
            </StyledSelect>
            <StyledButton type="submit" disabled={isSubmitting}>
              Submit
            </StyledButton>
          </form>
        </StyledContainer>
      )
    }}
  </Formik>
)

export default FeaturedProductSelection

// const mapStateToProps = state => ({
//   products: state.products
// })

// export default connect(mapStateToProps)(FeaturedProductSelection)
