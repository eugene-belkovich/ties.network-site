import React from 'react'
import { Grid } from 'material-ui'
import { FormattedMessage } from 'react-intl'
import { NetworkCard, LandingCard } from '../index'
import tiesNetworkImg from './images/ties.network.png'
import ethereumBlockchain from './images/ethereum.blockchain.png'
import decentralizedDb from './images/decentralized-db.png'
import './network-architecture.styles.css'

const networkCards = [
  {
    header: 'Ties.Network',
    content: `Decentralized rating system and genuine reviews make it easy to find
     a business partner and do proper due diligence on a crypto
      project with independent experts’ assistance.`,
    image: tiesNetworkImg,
  },
  {
    header: <FormattedMessage id="ethBlock" />,
    content: <FormattedMessage id="transactions" />,
    image: ethereumBlockchain,
  },
  {
    header: 'Decentralized TIES DB',
    content: `Our platform is based on a unique distributed, decentralized,
     and public database, which allows any independent node to add, remove
     and do advanced search through content.  It is 100%  Byzantine fault tolerant.`,
    image: decentralizedDb,
  },
]

const getCardWrapperStyles = index => ({ marginLeft: `${index * 3}%`, marginBottom: '-2%' })
const backgroundElements = (<div className="network-architecture-background" />)

export const NetworkArchitecture = () => (
  <LandingCard
    title="Network Architecture"
    backgroundText="Architecture"
    backgroundElements={backgroundElements}
  >
    <Grid
      className="network-architecture"
    >
      {networkCards.map((card, index) => (
        <Grid
          className="network-card-wrapper"
          item
          xs={12}
          sm={10}
          key={card.header}
          style={getCardWrapperStyles(index)}
        >
          <NetworkCard {...card} zIndex={length - index} />
        </Grid>
      ))}
    </Grid>
  </LandingCard>
)

