import React, { Component } from 'react'
import { Grid } from 'material-ui'
import { connect } from 'react-redux'
import { get } from 'lodash'
import './ico-details-hero.styles.css'
import { Timer } from '../timer'
import { WhitePaperLink, BusinessOverviewList, YellowPaper, GoToTGE } from '../../components'
import logo from './hero-logo.png'
import { tokenSalesStart } from '../../utils'
import { icoDetailsSelector } from './ico-details.selector'

@connect(icoDetailsSelector)
export class IcoDetailsHero extends Component {
  render() {
    const tokenSalesEnd = get(this.props, 'contract.data.endTimestamp')
    return (
      <div className="hero-background">
        <div className="hero-container">
          <div className="hero-row-title">
            <img src={logo} alt="" className="hero-logo" />
            <span className="hero-title">Ties.Network</span>
          </div>
          <div className="hero-row">
            <div className="hero-text">
              Token Generation Event is&nbsp;now&nbsp;closed
              <br />
              <br />
              Thank you for your contribution!
            </div>
          </div>
          <div className="hero-row">
            <div className="hero-timer">
              <Timer tokenSalesStart={tokenSalesStart} tokenSalesEnd={tokenSalesEnd} id="ico-details-top" />
            </div>
          </div>
          <Grid
            container
            spacing={0}
            direction="row"
            align="center"
            justify="center"
            className="hero-buttons"
            wrap="nowrap"
          >
            <Grid item className="hero-buttons-container">
              <WhitePaperLink styles="white-paper" />
              { /* <BusinessOverviewList styles="white-paper" /> */ }
              { /* <YellowPaper styles="white-paper" /> */ }
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}
