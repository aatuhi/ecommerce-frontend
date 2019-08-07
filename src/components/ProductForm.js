import React from 'react'
import { Form, Button, Label } from 'semantic-ui-react'
import { Formik } from 'formik'
import * as Yup from 'yup'

const ProductForm = () => (
  <div>
    <h2>Add product to the shop</h2>
    <Form>
      <Form.Input label="Product title" />
      <Form.Input label="Product type" />
      <Form.Input label="SKU" />
      <Form.Input label="Price (€)" />
      <Form.Input label="Description" />
    </Form>
  </div>
)

export default ProductForm
