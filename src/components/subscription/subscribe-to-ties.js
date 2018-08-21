import React from 'react'
import { Grid } from 'material-ui'
import { FormattedMessage } from 'react-intl'
import { CenteredContainer } from '../grid'
import { SubscribeForm } from './subscribe-form'

const highlightTextStyle = { color: 'white', fontFamily: 'AvenirNextLTPro-Bold' }

const title = (<div className="subscribe-title"><FormattedMessage id="stayInLoop" /></div>)

export function SubscribeToTies() {
  return (
    <CenteredContainer className="subscribe-to-ties">
      <Grid item lg={6} xs={12} className="subscribe-form-container">
        <CenteredContainer style={{ height: '100%' }}>
          <Grid hidden={{ lgUp: true }} container align="center" justify="center" spacing={0}>
            <Grid item xs={10}>
              <div className="subscribe-title">
                <div className="subscribe-title"><FormattedMessage id="subscribeTo" />
                  <span style={{ color: 'black' }}>Ties.network</span>’s
                  <FormattedMessage id="subscribeText" />
                </div>
              </div>
            </Grid>
          </Grid>
          <SubscribeForm />
        </CenteredContainer>
      </Grid>
      <Grid item lg={6} hidden={{ mdDown: true }} className="subscribe-title-container">
        <Grid container style={{ height: '100%' }} align="center" justify="center" spacing={0}>
          <Grid item xs={9}>
            <div className="subscribe-title">
              <div className="subscribe-title"><FormattedMessage id="subscribeTo" />
                <span style={{ color: 'black' }}>ties.network</span>’s
                <FormattedMessage id="subscribeText" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </CenteredContainer>
  )
}
