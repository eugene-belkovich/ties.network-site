import React from 'react'
import { FormattedMessage } from 'react-intl'
import './key-features.styles.css'
import { LandingCard } from '../'
import table from '../../styles/public/svg/database/table.svg'

export const KeyFeatures = () => (
  <div className="key-features-block">
    <LandingCard
      title={<FormattedMessage id="keyFeatures" />}
      backgroundText={<FormattedMessage id="features" />}
      classes={{
        title: 'explore-features-title',
        backgroundText: 'explore-features-background-text',
        content: 'explore-features-content',
      }}
    >
      <div className="key-features-container">
        <div className="key-features-text">
          <p>All Ethereum-based decentralized applications (DApps)
            need to store non-financial data and search through
            their documents. Ties.DB is the first public database
            for decentralized structured data storage and allows
            advanced search and documents modification.</p>
          <p>Graph shows data storage functionality for structured data</p>
        </div>
        <img src={table} className="table" alt="table" />
      </div>
    </LandingCard>
  </div>
)

