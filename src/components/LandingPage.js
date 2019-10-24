import React from 'react'
import { withRouter } from 'react-router-dom'
import ShowcaseItemCollecation from './ShowcaseItemCollection'

const LandingPage = () => (
  <div>
    <h1>
      Welcome to Ismon valinta!
      <h3>Web store for every entity</h3>
    </h1>
    <ShowcaseItemCollecation />
  </div>
)

export default withRouter(LandingPage)
