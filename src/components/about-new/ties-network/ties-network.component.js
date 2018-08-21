import React from 'react'
import { FormattedMessage } from 'react-intl'
import './ties-network.styles.css'

import { Block } from '../block'

import bgImage from '../../../styles/public/image/ties-network.jpg'
import cart from '../../../styles/public/image/icons/cart.svg'
import cloud from '../../../styles/public/image/icons/cloud.svg'
import book from '../../../styles/public/image/icons/open-book.svg'
import papers from '../../../styles/public/image/icons/papers.svg'
import question from '../../../styles/public/image/icons/question.svg'
import user from '../../../styles/public/image/icons/user.svg'
import database from '../../../styles/public/image/icons/database.svg'
import share from '../../../styles/public/image/icons/share.svg'

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


export const TiesNetwork = () => (
  <Block
    style={{ background: '#FFF' }}
    title="Ties.DB application cases"
  >
    <div className="ties-network__container">
      <div className="ties-network__description">
        A public, distributed and decentralized database with one common thread: trust.
        Enforced by integrated fault tolerance, incentive schemes and smart contracts.
      </div>

      <div className="ties-network__list uses-list">
        {useCases.map((useCase, key) => (
          <div className="uses-list-item" key={`${useCase.label}-${key}`}>
            <img src={useCase.icon} alt={useCase.label} />
            <span>{useCase.label}</span>
          </div>
        ))}
      </div>
    </div>
  </Block>
)
