import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { LandingCard } from '../'
import architecture from './architecture.svg'
import architectureMobile from './architecture-mobile.svg'
import './platform.styles.css'

export class PlatformArchitecture extends Component {
  render() {
    return (
      <LandingCard
        title={<FormattedMessage id="platform" />}
        backgroundText="Architecture"
        classes={{
          wrapper: 'platform-wrapper',
          backgroundText: 'partner-media-background-text',
        }}
      >
        <div className="platform-text"><FormattedMessage id="multiPlatform" /></div>
        <div className="platform-image">
          <img className="architecture" src={architecture} alt="desktop" />
          <img className="architecture-mobile" src={architectureMobile} alt="desktop" />
        </div>
      </LandingCard>
    )
  }
}

