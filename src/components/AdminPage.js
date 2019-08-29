import React from 'react'
import { withRouter } from 'react-router-dom'
import { Segment, Grid } from 'semantic-ui-react'
import AdminUserList from './AdminUserList'
import AdminOrderList from './AdminOrderList'
import ProductCreationForm from './ProductCreationForm'

const AdminPage = () => (
  <Segment raised>
    <Segment basic>
      <ProductCreationForm />
    </Segment>
    <Grid columns={2}>
      <Grid.Column>
        <AdminUserList />
      </Grid.Column>
      <Grid.Column>
        <AdminOrderList />
      </Grid.Column>
    </Grid>
  </Segment>
)

export default withRouter(AdminPage)
