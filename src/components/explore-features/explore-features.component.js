import React, { Component } from 'react'
import { Grid } from 'material-ui'
import { FormattedMessage } from 'react-intl'
import { LandingCard, Slider } from '../'
import desktop from '../../styles/public/image/desktop.png'
import './explore-features.styles.css'

const EXPLORE_TEXT = [
  {
    title: 'Find best rated crypto-experts. ',
    info: `Ties.Network rating is guaranteed by
     real business deals that have successfully
      taken place. You can be sure that potential
       partners have a proven track record of achievements.`,
  },
  {
    title: <FormattedMessage id="payDirectly" />,
    info: <FormattedMessage id="negotiate" />,
  },
  {
    title: <FormattedMessage id="setUpTeam" />,
    info: <FormattedMessage id="launch" />,
  },
  {
    title: <FormattedMessage id="quickIco" />,
    info: <FormattedMessage id="collective" />,
  },
]

export class ExploreFeatures extends Component {
  getTextContent = () => {
    const sliderSettings = {
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
    }
    return (
      <Grid container spacing={0} justify="center" align="center">
        <Grid item sm xs={9}>
          <Slider settings={sliderSettings}>
            {EXPLORE_TEXT.map(text => (
              <div key={text.title} className="explore-slider-content">
                <div className="explore-white-title">{text.title}</div>
                <div className="explore-white-info">{text.info}</div>
              </div>
            ))}
          </Slider>
        </Grid>
      </Grid>
    )
  }

  render() {
    return (
      <LandingCard
        title={<FormattedMessage id="explore" />}
        backgroundText="Use-cases"
        classes={{
          title: 'explore-features-title',
          backgroundText: 'platform-background-text',
          content: 'explore-features-content',
          wrapper: 'explore-features-wrapper',
        }}
      >
        <Grid container spacing={0}>
          <Grid item hidden={{ smDown: true }} className="explore-transparent" />
          <Grid container className="explore-white-container" align="center" justify="center" spacing={0}>
            <Grid container spacing={0} align="center" justify="center" className="desktop-container">
              <img className="desktop" src={desktop} alt="desktop" />
            </Grid>
            <Grid container align="center" className="explore-white-text" spacing={0}>
              {this.getTextContent()}
            </Grid>
          </Grid>
        </Grid>
      </LandingCard>
    )
  }
}

