import React from 'react'
import { FormattedMessage } from 'react-intl'
import './uses.styles.css'
import { LandingCard } from '../'
import cart from '../../styles/public/image/icons/cart.svg'
import cloud from '../../styles/public/image/icons/cloud.svg'
import book from '../../styles/public/image/icons/open-book.svg'
import papers from '../../styles/public/image/icons/papers.svg'
import question from '../../styles/public/image/icons/question.svg'
import user from '../../styles/public/image/icons/user.svg'
import database from '../../styles/public/image/icons/database.svg'
import share from '../../styles/public/image/icons/share.svg'

const useCases = [
  {
    label: <FormattedMessage id="bigData" />,
    icon: cloud,
  },
  {
    label: <FormattedMessage id="knowledge" />,
    icon: book,
  },
  {
    label: <FormattedMessage id="social" />,
    icon: user,
  },
  {
    label: <FormattedMessage id="openDocuments" />,
    icon: papers,
  },
  {
    label: <FormattedMessage id="massMedia" />,
    icon: cart,
  },
  {
    label: <FormattedMessage id="dataStorage" />,
    icon: database,
  },
  {
    label: <FormattedMessage id="fileSharing" />,
    icon: share,
  },
]

export const Uses = () => (
  <div className="uses-block">
    <LandingCard
      title={<FormattedMessage id="tieDBCases" />}
      backgroundText={<FormattedMessage id="features" />}
      classes={{
        title: 'explore-features-title',
        backgroundText: 'explore-features-background-text',
        content: 'explore-features-content',
      }}
    >
      <div className="uses-item-container">
        <div className="uses-item-text">
          <div><FormattedMessage id="distributed" /></div>
        </div>
        <div className="uses-list">
          {useCases.map((useCase, key) => (
            <div className="uses-list-item" key={`${useCase.label}-${key}`}>
              <img src={useCase.icon} alt={useCase.label} />
              <span>{useCase.label}</span>
            </div>
          ))}
        </div>
      </div>
    </LandingCard>
  </div>
)

