import React from 'react'
import { Grid } from 'material-ui'
import { FormattedMessage } from 'react-intl'
import { LandingCard } from '../'
import tokenSalePie from '../../styles/public/svg/token-sale-terms/_distribution_TEXT.svg'
import './token-sale-terms.styles.css'

export const TokenSaleTerms = () => (
  <LandingCard
    title={<FormattedMessage id="terms" />}
    backgroundText="Terms"
    classes={{
      wrapper: 'token-sale-wrapper',
      title: 'token-sale-terms-title',
      backgroundText: 'token-sale-terms-background-text',
      content: 'token-sale-terms-content',
    }}
  >
    <Grid container spacing={0}>
      <Grid item md={12} lg container justify="center" align="center" className="token-sale-image-container" spacing={0}>
        <img src={tokenSalePie} className="token-sale-image" alt="token-sale" />
      </Grid>
      <Grid item md={12} lg container justify="center" align="center" spacing={0} className="token-sale-text-wrapper">
        <Grid item container direction="column" justify="center" spacing={0} className="token-sale-text">
          <p>TGE Cap: <span className="token-sale-highlight-text">$33.6 million</span></p>
          <p>Token Supply: <span className="token-sale-highlight-text">140 000 000 TIE</span></p>
          <p>Accepting: <span className="token-sale-highlight-text">BTC and ETH</span></p>
        </Grid>
      </Grid>
    </Grid>
  </LandingCard>
)
