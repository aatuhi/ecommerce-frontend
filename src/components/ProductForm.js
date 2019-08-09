import React from 'react'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Form, Button, Message } from 'semantic-ui-react'
import { productCreation } from '../reducers/productReducer'

const ProductFrom = props => (
  <div>
    <h2>Add a product</h2>
    <Formik
      initialValues={{
        title: '',
        description: '',
        sku: '',
        type: '',
        price: 0,
      }}
      onSubmit={async (values, { setSubmitting }) => {
        setTimeout(() => {
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
            <Form onSubmit={handleSubmit}>
              <div>
                <Form.Input
                  label="Title"
                  id="title"
                  placeholder="Enter the product title"
                  type="text"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.title && touched.title && (
                  <Message color="orange">{errors.title}</Message>
                )}
              </div>
              <div>
                <Form.Input
                  label="Description"
                  id="description"
                  placeholder="Enter the product description"
                  type="text"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.description && touched.description && (
                  <Message color="orange">{errors.description}</Message>
                )}
              </div>
              <div>
                <Form.Input
                  label="Price"
                  id="price"
                  placeholder="Enter the product price"
                  type="number"
                  step="0.01"
                  value={values.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.price && touched.price && (
                  <Message color="orange">{errors.price}</Message>
                )}
              </div>
              <div>
                <Form.Input
                  label="SKU"
                  id="sku"
                  placeholder="Enter the product sku-number"
                  type="text"
                  value={values.sku}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.sku && touched.sku && (
                  <Message color="orange">{errors.sku}</Message>
                )}
              </div>

              <div>
                <Form.Input
                  label="Product Category"
                  id="type"
                  placeholder="Enter the product category/type"
                  type="text"
                  value={values.type}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.type && touched.type && (
                  <Message color="orange">{errors.type}</Message>
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

export default connect(
  null,
  { productCreation },
)(ProductFrom)
