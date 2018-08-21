import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Grid, Button } from 'material-ui'
import { LandingCard } from '../'
import { partnersMediaSelector } from './partners-media.selector'
import './partners-media.styles.css'

@connect(partnersMediaSelector)
export class PartnersMedia extends Component {
  static propTypes = {
    partnersMedia: PropTypes.arrayOf(PropTypes.object),
  }

  renderMedia(partnersMedia) {
    return partnersMedia.map(({ image, title, name, text, date, link }) => (
      <a href={link} key={name} className="partner-media-container">
        <img src={image} className="partner-media-image" alt={name} />
        <div className="partner-media-title">{title}</div>
        <div className="partner-media-name">{name}</div>
        <div className="partner-media-text">{text}</div>
        <div className="partner-media-date">{date}</div>
      </a>
    ))
  }

  render() {
    const { partnersMedia } = this.props
    return (
      <LandingCard
        title="Press"
        backgroundText="Social"
        classes={{
          wrapper: 'partner-media-wrapper',
          backgroundText: 'partner-media-background-text',
        }}
      >
        <Grid
          id="media"
          container
          direction="row"
          justify="space-around"
          align="center"
          spacing={0}
          className="media-landing-cards"
        >
          {this.renderMedia(partnersMedia)}
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          align="center"
          spacing={0}
        >
          <a key="team" href="mailto:pr@ties.network" >
            <Button
              id="mail-buttom"
              className="white-paper"
              type="submit"
              color="primary"
              raised
            >
              <i style={{ marginRight: 10 }} className={'fa fa-envelope-o'} />
               pr@ties.network
            </Button>
          </a>
        </Grid>
      </LandingCard>
    )
  }
}

