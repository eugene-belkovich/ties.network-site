import React, { Component } from 'react'
import { Grid, Button } from 'material-ui'
import ReactBodymovin from 'react-bodymovin'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import { LandingCard } from '../'
import { CenteredContainer } from '../grid'
import db from '../../styles/public/image/animations/db.json'
import './db-block.styles.css'

const dbAnimation = {
  loop: true,
  autoplay: true,
  prerender: true,
  renderer: 'svg',
  animationData: db,
}

const spanStyle = {
  color: 'black',
  fontWeight: 'bold',
  fontFamily: 'AvenirNextLTPro-Bold',
}

const text2 = (
  <p className="faces-title"><FormattedMessage id="networkRelies" /></p>)

export class DbBlock extends Component {
  render() {
    return (
      <LandingCard
        title="Ties.DB"
        backgroundText="DB"
        classes={{
          wrapper: 'db-wrapper',
          title: 'bonus-scale-title',
          backgroundText: 'db-background-text',
          content: 'bonus-scale-content',
        }}
      >
        <Grid item xs={12} container align="center" spacing={0}>
          <Grid
            item
            xs={12}
            lg={5}
            className="faces-container"
            hidden={{ lgUp: true }}
          >
            <CenteredContainer className="faces-centred-container db">
              <ReactBodymovin options={dbAnimation} />
            </CenteredContainer>
          </Grid>
          <Grid item xs={12} lg={7} container className="faces-text-container" justify="center" align="center" spacing={0}>
            {text2}
            <Link to="/database">
              <Button type="submit" className="faces-block-button" color="primary" raised>
                Learn more
              </Button>
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            lg={5}
            className="faces-container"
            hidden={{ mdDown: true }}
          >
            <CenteredContainer className="faces-centred-container db">
              <ReactBodymovin options={dbAnimation} />
            </CenteredContainer>
          </Grid>
        </Grid>
      </LandingCard>
    )
  }
}
