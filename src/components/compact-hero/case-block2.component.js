import React, { Component } from 'react'
import { Button, Grid, Hidden } from 'material-ui'
import PropTypes from 'prop-types'
import './case-block.styles.css'
import search from '../../styles/public/image/gif/search.gif'

export class CaseBlock2 extends Component {
  static propTypes = {
    source: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
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
                <img src={search} id="background-video" alt={search} />
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
    )
  }
}
