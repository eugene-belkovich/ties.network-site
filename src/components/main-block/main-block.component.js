import React, { Component } from 'react'
import ReactBodymovin from 'react-bodymovin'
import { Button, Grid, Hidden } from 'material-ui'
import { connect } from 'react-redux'
import axios from 'axios'
import { get, round } from 'lodash'
import { Timer } from '../timer'
import animation from '../../styles/public/image/animations/head.json'
import logo from '../ico-details-hero/hero-logo.png'
import deal from '../../styles/public/image/gif/deal.gif'
import eth from '../../styles/public/svg/eth.svg'
import btc from '../../styles/public/svg/btc.svg'
import { tokenSalesStart, weiToEth } from '../../utils'
import { icoDetailsSelector } from '../ico-details-hero/ico-details.selector'
import {
  WhitePaperLink,
  PrototypeButton,
} from '../../components'
import './main-block.styles.css'

const bodymovinOptions = {
  loop: true,
  autoplay: true,
  prerender: true,
  animationData: animation,
}

const contractStatusString = '{"currentBonus":10,"totalEthInvested":"7.254722242569983249846e+21","totalSupply":5.92512780893333e+25,"totalBtcInvested":"1234.246484","blockNumber":4438189,"timestamp":1509092412876,"isOpen":false,"tokenPrice":"807947510343411","contractAddress":"0x5070832E17e2042754ccD86F28B9d21FcB0E1567","endTimestamp":1509019200000,"ethRate":297.049,"btcRate":5743.52}'

@connect(icoDetailsSelector)
export class MainBlock extends Component {
  state = {
    contractStatus: JSON.parse(contractStatusString),
  }
  componentDidMount() {
  }
  getTotalRaised = () => {
    const { contractStatus } = this.state
    const ethRate = get(contractStatus, 'ethRate', 1)
    const btcRate = get(contractStatus, 'btcRate', 1)
    const totalEthInvested = get(contractStatus, 'totalEthInvested', 0)
    const totalBtcInvested = get(contractStatus, 'totalBtcInvested', 0)
    const result = ((totalEthInvested / weiToEth) * ethRate) + (totalBtcInvested * btcRate)
    return round(result, 0).toLocaleString()
  }
  render() {
    return (
      <Grid container className="main-block" spacing={0}>
        <ReactBodymovin options={bodymovinOptions} />
        <Grid container className="main-block-content" spacing={0}>
          <Grid
            item
            xs={12}
            container
            className="logo-row"
            align="center"
            justify="center"
            direction="column"
            spacing={0}
          >
            <div className="logo-container">
              <img className="logo" src={logo} alt="logo" />
              <div className="logo-main-title">Ties.Network</div>
            </div>
            <div className="logo-block">
              <div className="logo-title">Ties is a platform for DAPPS and decentralized database.</div>
            </div>
            <Grid>
              <Hidden only={['sm', 'xs']}>
                <div className="description-third">
                  Token sale has started!
                </div>
              </Hidden>
            </Grid>
            <Hidden only={['lg', 'md', 'xl']}>
              <div className="description-third">TIE Token Sale Is Now Live: Sept 21 - Oct 26</div>
            </Hidden>
            <Hidden only={['lg', 'md', 'xl']}>
              <div className="hero-row">
                <div className="hero-timer">
                  <Timer tokenSalesStart={tokenSalesStart} tokenSalesEnd={1509019200000} id="about-page-top" />
                </div>
              </div>
            </Hidden>
            <div className="description-third">
              Soft Cap Reached. Total raised: <big>$</big> {this.getTotalRaised()}</div>
            <div
              className="description-third"
            >
              Current bonus: {this.state.contractStatus && this.state.contractStatus.currentBonus}%
            </div>
            <Hidden only={['lg', 'md', 'xl']}>
              {/* <div className="description-third">Contributors: 400</div> */}
            </Hidden>
            <div className="buy-tokens">
              <a key="tge-details" href="http://dashboard.ties.network">
                <Button
                  className="download tge-dashboard left-0"
                  type="submit"
                  color="primary"
                  raised
                >
                  Contribute now
                </Button>
              </a>
            </div>
            <Hidden only={['lg', 'md', 'xl', 'sm', 'xs']}>
              <Grid container className="top-phone" direction="row" justify="center" spacing={0}>
                <img src={deal} id="background-video" alt={deal} />
              </Grid>
            </Hidden>
            <Hidden only={['lg', 'md', 'xl']}>
              <Grid className="buttons-block">
                <WhitePaperLink styles="white-paper" />
              </Grid>
            </Hidden>
            <Hidden only={['sm', 'xs']}>
              <Grid className="buttons-block">
                <PrototypeButton styles="download prototype-button left-0" />
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
