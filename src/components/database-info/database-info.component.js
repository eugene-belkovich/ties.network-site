import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Button } from 'material-ui'
import { Link } from 'react-router-dom'
import ReactBodymovin from 'react-bodymovin'
import { FormattedMessage } from 'react-intl'
import {
  CenteredContainer,
} from '../../components'
import animation from '../../styles/public/image/animations/db.json'
import './database-info.styles.css'

const bodymovinOptions = {
  loop: true,
  autoplay: true,
  prerender: true,
  renderer: 'svg',
  animationData: animation,
}

const text1 = (
  <p className="faces-title"><FormattedMessage id="dApp" /></p>)

const text2 = (
  <p className="faces-title-text">A public, distributed and
    decentralized database with one common thread: trust.
    Enforced by integrated fault tolerance, incentive schemes
    and smart contracts.
  </p>)

export class DatabaseInfo extends Component {
  static propTypes = {
    link: PropTypes.bool,
  }
  render() {
    const { link } = this.props
    return (
      <Grid item xs={12} container align="center" className="animation-grid" spacing={0}>
        <Grid item xs={12} lg={6} className="faces-container" hidden={{ lgUp: true }}>
          <CenteredContainer className="faces-centred-container">
            <ReactBodymovin options={bodymovinOptions} />
          </CenteredContainer>
        </Grid>
        <Grid item xs={12} lg={6} container className="faces-text-container" justify="center" align="center" spacing={0}>
          {text1}
          {text2}
          {link && (
          <Link to="/database">
            <Button type="submit" className="faces-block-button" color="primary" raised>
              Database
            </Button>
          </Link>)}
        </Grid>
        <Grid item xs={12} lg={6} className="faces-container" hidden={{ mdDown: true }}>
          <CenteredContainer className="faces-centred-container">
            <ReactBodymovin options={bodymovinOptions} />
          </CenteredContainer>
        </Grid>
      </Grid>
    )
  }
}

