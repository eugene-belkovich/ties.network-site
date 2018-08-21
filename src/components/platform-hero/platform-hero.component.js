import React, { Component } from 'react'
import ReactBodymovin from 'react-bodymovin'
import { FormattedMessage } from 'react-intl'
import { Button, Grid, Hidden } from 'material-ui'
import animation from '../../styles/public/image/animations/head.json'
import network from '../../styles/public/image/animations/network.json'
import logo from '../ico-details-hero/hero-logo.png'
import {
  WhitePaperLink,
  BusinessOverviewList,
  YellowPaper,
  PrototypeButton,
} from '../../components'
import './platform-hero.styles.css'

const bodymovinOptions = {
  loop: true,
  autoplay: true,
  prerender: true,
  animationData: animation,
}

const networkAnimation = {
  loop: true,
  autoplay: true,
  prerender: true,
  renderer: 'svg',
  animationData: network,
}

const text = 'Ties.Network fortifies professional collaboration. '
const text1 = 'We use an irrefutable rating system to guide you towards proven experts. '
const text2 = 'Smart contracts allow you to securely build teams and complete projects from ideation to growth stage. '

export class PlatformHero extends Component {
  render() {
    return (
      <Grid container className="platform-main-block" spacing={0}>
        <Grid
          container
          justify="center"
          align="center"
          spacing={0}
        >
          <Grid
            item
            xs={12}
            md={5}
            container
            className="platform-animation"
            justify="center"
            align="center"
            spacing={0}
          >
            <ReactBodymovin options={networkAnimation} />
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            container
            align="flex-start"
            justify="center"
            direction="column"
            className="platform-text-block"
            spacing={0}
          >
            <div className="logo-block">
              <img className="logo" src={logo} alt="logo" />
              <div className="logo-title">Ties.Network</div>
            </div>
            <Grid>
              <div className="description-third">{text}{text1}{text2}</div>
            </Grid>
            <Grid>
              <div className="description-second"><FormattedMessage id="discover2" /></div>
            </Grid>
            <Grid container className="buttons-block" spacing={0}>
              <PrototypeButton styles="download prototype-button" />
              <WhitePaperLink styles="white-paper" />
              <YellowPaper styles="white-paper" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
