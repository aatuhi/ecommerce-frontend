import React from 'react'
import { withRouter } from 'react-router-dom'
import { Segment, Grid } from 'semantic-ui-react'
import AccountDetails from './AccountDetails'
import OrderHistory from './OrderHistory'

const UserInfo = ({ user }) => {
  if (!user) {
    return null
  }
  return (
    <Segment raised>
      <Segment basic padded="very">
        <Grid columns={2}>
          <Grid.Column>
            <AccountDetails user={user} />
          </Grid.Column>
          <Grid.Column>
            <OrderHistory orders={user.orders} />
          </Grid.Column>
        </Grid>
      </Segment>
    </Segment>
  )
}

export default withRouter(UserInfo)
