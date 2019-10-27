import React from 'react'
import { withRouter } from 'react-router-dom'
import ShowcaseItemCollecation from './ShowcaseItemCollection'

const LandingPage = () => (
  <div>
    <ShowcaseItemCollecation />
  </div>
)

export default withRouter(LandingPage)
