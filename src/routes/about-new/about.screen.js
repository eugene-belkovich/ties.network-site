import React, { Component } from 'react'
import {
  CenteredContainer,
  PageWithNavbar,
} from '../../components'

import {
  Advisors,
  BonusStructure,
  Contact,
  Contribute,
  Countdown,
  HowItWorks,
  Partners,
  Press,
  Roadmap,
  Subscribe,
  Team,
  TechnologyStack,
  TheWorld,
  TiesNetwork,
  TokenSale,
  UseOfProceeds,
} from '../../components/about-new'

export class About extends Component {
  render() {
    return (
      <PageWithNavbar>
        <CenteredContainer>
          <TheWorld />
          <Contribute />
          <HowItWorks />
          <BonusStructure />
          <Subscribe />
          <TiesNetwork />
          <UseOfProceeds />
          <Roadmap />
          <Team />
          <Advisors />
          <Partners />
          <Press />
          <Subscribe />
          <Contact />
        </CenteredContainer>
      </PageWithNavbar>
    )
  }
}
