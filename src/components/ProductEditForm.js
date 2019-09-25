import React from 'react'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Form, Button, Message } from 'semantic-ui-react'
import productService from '../services/products'
import { productEditing, productRemoval } from '../reducers/productReducer'

const ProductEditForm = props => {
  console.log(props.product)

  const handleRemove = product => {
    console.log(product._id)
    productService.setToken(props.user.token)
    props.productRemoval(product)
  }

  return (
    <div>
      <h3>Edit product</h3>

      <Formik
        initialValues={{
          title: props.product.title,
          description: props.product.description,
          price: props.product.price,
          type: props.product.type,
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setTimeout(() => {
            productService.setToken(props.user.token)
            const result = window.confirm('Update product?')
            if (result) {
              try {
                const updatedProduct = {
                  ...props.product,
                  title: values.title,
                  description: values.description,
                  price: values.price,
                  type: values.type,
                }
                console.log(updatedProduct)
                props.productEditing(updatedProduct)
              } catch (error) {
                window.alert(error)
              }
            }
            window.alert('Complete')
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
          type: Yup.string()
            .required('Required field')
            .min(2, 'Type required'),
          price: Yup.number().required('Price is required'),
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
                  <Form.Input
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
                  <Form.Input
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
                  <Form.Input
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

                <Button
                  type="button"
                  onClick={handleReset}
                  disabled={!dirty || isSubmitting}
                >
                  Reset changes
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  Confirm editing
                </Button>
              </Form>
            </div>
          )
        }}
      </Formik>
      <Button
        negative
        type="button"
        onClick={() => handleRemove(props.product)}
      >
        Delete product
      </Button>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user,
})

export default connect(
  mapStateToProps,
  { productEditing, productRemoval }
)(ProductEditForm)
