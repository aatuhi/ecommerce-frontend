import React from "react"
import { withRouter } from "react-router-dom"
import styled from "styled-components"
import AdminUserList from "./AdminUserList"
import AdminOrderList from "./AdminOrderList"
import ProductCreationForm from "./ProductCreationForm"

const StyledDivider = styled.div`
  border-bottom: solid #f0f0f0;
  margin: 20px 0;
`

const AdminPage = () => (
  <div>
    <ProductCreationForm />
    <StyledDivider />
    <AdminUserList />
    <StyledDivider />
    <AdminOrderList />
  </div>
)

export default withRouter(AdminPage)
