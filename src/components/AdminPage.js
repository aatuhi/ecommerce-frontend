import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import AdminUserList from './AdminUserList'
import AdminOrderList from './AdminOrderList'
import ProductCreationForm from './ProductCreationForm'
import { FeaturedProductSelection } from './FeaturedProductSelection'

const StyledDivider = styled.div`
  border-bottom: solid #f0f0f0;
  margin: 20px 0;
`

const AdminPage = props => (
  <div>
    <div style={{ display: 'flex' }}>
      <ProductCreationForm />
      <FeaturedProductSelection products={props.products} />
    </div>
    <StyledDivider />
    <AdminUserList />
    <StyledDivider />
    <AdminOrderList />
  </div>
)

export default withRouter(AdminPage)
