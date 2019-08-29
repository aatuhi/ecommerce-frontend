import React from 'react'
import { withRouter } from 'react-router-dom'
import { Segment, Grid } from 'semantic-ui-react'
import UserList from './UserList'
import OrderList from './OrderList'
import ProductForm from './ProductForm'

const AdminPage = () => (
  <Segment raised>
    <Segment basic>
      <ProductForm />
    </Segment>
    <Grid columns={2}>
      <Grid.Column>
        <UserList />
      </Grid.Column>
      <Grid.Column>
        <OrderList />
      </Grid.Column>
    </Grid>
  </Segment>
)

export default withRouter(AdminPage)
