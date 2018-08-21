import React from 'react'
import { FormattedMessage } from 'react-intl'
import './uses-features.styles.css'
import { LandingCard } from '../'
import points from './points.svg'
import document from './document.svg'
import mask from './mask.svg'
import ranks from './ranks.svg'
import shield from './shield.svg'

const useCases = [
  {
    label: <FormattedMessage id="quickCrypto" />,
    icon: document,
    text: <FormattedMessage id="userCan" />,
  },
  {
    label: <FormattedMessage id="irrefutable" />,
    icon: ranks,
    text: <FormattedMessage id="ourRating" />,
  },
  {
    label: <FormattedMessage id="decentralisedRoles" />,
    icon: points,
    text: <FormattedMessage id="tiesNetworkEmploys" />,
  },
  {
    label: <FormattedMessage id="escrow" />,
    icon: shield,
    text: <FormattedMessage id="transactionsTemporarily" />,
  },
  {
    label: <FormattedMessage id="anonymity" />,
    icon: mask,
    text: <FormattedMessage id="usersMayChoose" />,
  },
]

export const UsesFeature = () => (
  <div className="uses-block">
    <LandingCard
      title={<FormattedMessage id="features" />}
      backgroundText={<FormattedMessage id="features" />}
      classes={{
        title: 'explore-features-title',
        backgroundText: 'explore-features-background-text',
        content: 'explore-features-content',
        wrapper: 'uses-features-wrapper',
      }}
    >
      <div className="uses-feature-list">
        {useCases.map(useCase => (
          <div className="uses-list-item" key={useCase.icon}>
            <img className="uses-list-image" src={useCase.icon} alt={useCase.label} />
            <span className="uses-list-label">{useCase.label}</span>
            <span className="uses-list-text">{useCase.text}</span>
          </div>
        ))}
      </div>
    </LandingCard>
  </div>
)

