import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'material-ui'
import withWidth from 'material-ui/utils/withWidth'
import { connect } from 'react-redux'
import { LandingCard, Slider } from '../'
import { partnersSelector } from './partners.selector'
import './partners.styles.css'

@withWidth()
@connect(partnersSelector)
export class Partners extends Component {
  static propTypes = {
    partners: PropTypes.arrayOf(PropTypes.object),
    width: PropTypes.string,
  }

  renderPartners(partners) {
    return partners.map(({ image, name, text }) => (
      <Grid container key={name} spacing={0} align="center" justify="center">
        <div key={text} className="partners-container">
          <img src={image} className="partners-image" alt={name} />
          <div className="partner-media-text">{text}</div>
        </div>
      </Grid>
    ))
  }

  render() {
    const { partners, width } = this.props
    const slidesCount = {
      xs: 1,
      sm: 1,
      md: 2,
    }
    const sliderSettings = {
      dots: true,
      speed: 500,
      slidesToShow: slidesCount[width] ? slidesCount[width] : 3,
      slidesToScroll: slidesCount[width] ? slidesCount[width] : 3,
      infinite: false,
    }
    return (
      <LandingCard
        title="Partners"
        backgroundText="Partners"
        classes={{
          wrapper: 'partners-wrapper',
          content: 'partners-content',
          backgroundText: 'partners-background-text',
        }}
      >
        <Grid
          container
          direction="row"
          justify="flex-start"
          align="stretch"
          spacing={0}
          className="team-landing-cards"
        >
          <div className="slider-container">
            <Slider settings={sliderSettings}>
              {this.renderPartners(partners)}
            </Slider>
          </div>
        </Grid>
      </LandingCard>
    )
  }
}

