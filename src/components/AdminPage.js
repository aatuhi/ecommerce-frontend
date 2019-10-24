import React from 'react'
import { withRouter } from 'react-router-dom'
import AdminUserList from './AdminUserList'
import AdminOrderList from './AdminOrderList'
import ProductCreationForm from './ProductCreationForm'

const AdminPage = () => (
  <div>
    <div>
      <ProductCreationForm />
    </div>
    <div>
      <div>
        <AdminUserList />
      </div>
      <div>
        <AdminOrderList />
      </div>
    </div>
  </div>
)

export default withRouter(AdminPage)
