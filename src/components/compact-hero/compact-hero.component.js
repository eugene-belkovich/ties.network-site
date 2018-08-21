import React, { Component } from 'react'
import { Button, Grid } from 'material-ui'
import './compact-hero.styles.css'
import { Timer } from '../timer'

export class CompactHero extends Component {
  render() {
    return (
      <Grid container spacing={0} justify="center" align="center" className="compact-hero-wrapper">
        <div className="hero-container">
          <div className="hero-row">
            <div className="hero-timer">
              <Timer id="ico-details-bottom" />
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
            <Grid item>
              <a target="_blank" key="tokens">
                <Button
                  className="white-paper"
                  type="submit"
                  color="primary"
                  raised
                >
                  Get Tokens
                </Button>
              </a>
            </Grid>
            <Grid item>
              <a target="_blank" key="balance">
                <Button
                  className="white-paper"
                  type="submit"
                  color="primary"
                  raised
                >
                  View My TIE Balance
                </Button>
              </a>
            </Grid>
            <Grid item>
              <a target="_blank" key="participate">
                <Button
                  className="download"
                  type="submit"
                  color="primary"
                  raised
                >
                  How To Participate
                </Button>
              </a>
            </Grid>
          </Grid>
        </div>
      </Grid>
    )
  }
}
