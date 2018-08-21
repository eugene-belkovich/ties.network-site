import React, { Component } from 'react'
import { Button, Grid, Hidden } from 'material-ui'
import PropTypes from 'prop-types'
import logo from '../ico-details-hero/hero-logo.png'
import './case-block.styles.css'

const text = 'Ties.Network fortifies professional collaboration. '
const text1 = 'We use an irrefutable rating system to guide you towards proven experts. '
const text2 = 'Smart contracts allow you to securely build teams and complete projects from ideation to growth stage. '
const text3 = 'Pay directly on the platform '
const text4 = `Negotiate the deal straight away and pay
 for completed work in cryptocurrency directly on the platform. `

export class CaseBlock extends Component {
  static propTypes = {
    source: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    showHeader: PropTypes.bool.isRequired,
  }
  render() {
    return (
      <Grid
        container
        justify="center"
        align="center"
        direction="column"
        spacing={0}
        className="case-container-main"
      >
        <Grid item lg={12} >
          {this.props.showHeader &&
          <div className="case-header-block">
            <div className="case-logo-container">
              <img className="logo" src={logo} alt="logo" />
              <div className="logo-main-title">Ties.Network</div>
            </div>
            <div className="case-header-text">{text}</div>
            <div className="case-header-text">{text1}</div>
            <div className="case-header-text">{text2}</div>
          </div>
          }
          <Grid container className="case-block-content" spacing={0}>
            <Grid
              item
              xs={12}
              md={6}
              container
              className="logo-row"
              align="flex-start"
              justify="center"
              direction="column"
              spacing={0}
            >
              <div className="logo-block">
                <div className="logo-title">{this.props.title}</div>
              </div>
              <Hidden only={['lg', 'md', 'xl']}>
                <Grid container className="top-phone" direction="row" justify="center" spacing={0}>
                  <video id="background-video" loop autoPlay>
                    <track kind="captions" />
                    <source src={this.props.source} type="video/mp4" />
                    <source src={this.props.source} type="video/ogg" />
                  </video>
                </Grid>
              </Hidden>
              <Grid>
                <div className="description-third">{this.props.text}</div>
              </Grid>
            </Grid>
            <Grid item className="left-phone" xs={12} md={6} container justify="flex-end" hidden={{ smDown: true }} spacing={0}>
              <div className="phone-image" />
              <video id="background-video" loop autoPlay>
                <track kind="captions" />
                <source src={this.props.source} type="video/mp4" />
                <source src={this.props.source} type="video/ogg" />
              </video>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
