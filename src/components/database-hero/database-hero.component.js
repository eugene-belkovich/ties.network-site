import React, { Component } from 'react'
import { Button, Grid } from 'material-ui'
import { FormattedMessage } from 'react-intl'
import { YellowPaper } from '../../components'
import './database-hero.styles.css'

const SHORT_GUIDE_LINK =
  'https://cdn.ties.network/short-guide-eng.pdf'

const GITHUB_LINK = 'http://github.com/tiesnetwork'

export class DatabaseHero extends Component {
  render() {
    return (
      <Grid container className="main-block" spacing={0}>
        <Grid
          item
          xs={12}
          md={12}
          container
          className="logo-row"
          align="flex-start"
          justify="center"
          direction="column"
          spacing={0}
        >
          <div className="logo-block">
            <div className="logo-title"><FormattedMessage id="dApp" /></div>
          </div>
          <Grid className="text-block">
            <div className="description-third">A public, distributed and decentralized
              database with one common thread: trust.</div>
            <div className="description-third">Enforced by integrated fault
              tolerance, incentive schemes and smart contracts.</div>
            <div className="video-info">
              <a target="_blank" key="youtube" href={'https://www.youtube.com/watch?v=GX0dU4RA7ak'} >
                <i className="fa fa-play-circle fa-2" aria-hidden="true" /> <FormattedMessage id="watch" />
              </a>
            </div>
          </Grid>
          <Grid className="buttons-block">
            <YellowPaper styles="white-paper" />
            <a target="_blank" key={SHORT_GUIDE_LINK} href={SHORT_GUIDE_LINK} >
              <Button
                className="download"
                type="submit"
                color="primary"
                raised
              >
                Short Guide
              </Button>
            </a>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
