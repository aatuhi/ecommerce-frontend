import React from 'react'
import { withRouter } from 'react-router-dom'
import { Header, Icon, Segment } from 'semantic-ui-react'
import ShowcaseItemCollecation from './ShowcaseItemCollection'

const LandingPage = () => (
  <Segment padded basic textAlign="center">
    <Header icon as="h1">
      <Icon name="shopping basket" />
      Welcome to Ismon valinta!
      <Header.Subheader>
        <i>Web store for every entity</i>
      </Header.Subheader>
    </Header>
    <ShowcaseItemCollecation />
  </Segment>
)

export default withRouter(LandingPage)
