import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Button } from 'material-ui'
import { connect } from 'react-redux'
import { LandingCard } from '../'
import { insightsSelector } from './insights-block.selector'
import './insights-block.styles.css'

@connect(insightsSelector)
export class InsightsBlock extends Component {
  static propTypes = {
    insightsCards: PropTypes.arrayOf(PropTypes.object),
  }
  renderCards(cards) {
    return cards.map(({ image, name, icon, descripton, info, link, linkGlobal }) => (
      <Grid className="insights-landing-card-block" key={name} item lg={5} container spacing={0}>
        <Grid className="insights-landing-image-container" container justify="center" align="center" spacing={0}>
          <a target="_blank" href={link} key={link} className="insights-landing-card-image">
            <img src={image} className="insights-landing-card-image" alt={name} />
          </a>
          <div className="insights-white-block">
            <div className="insights-white-block-info">
              <div className="insights-white-block-descripton">{descripton}</div>
              <div>
                <div className="insights-landing-card-info">{info}</div>
                <a target="_blank" key={linkGlobal} href={linkGlobal} >
                  <Button
                    className="white-paper"
                    type="submit"
                    color="primary"
                    raised
                  >
                    <img src={icon} className="insights-landing-card-icon" alt={name} />
                    <span className="insights-landing-card-text">{name}</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    ))
  }
  render() {
    const { insightsCards } = this.props
    return (
      <div className="insights-block">
        <LandingCard
          title="Insights"
          backgroundText="Social"
          classes={{
            wrapper: 'insights-wrapper',
            title: 'insights-title',
            backgroundText: 'insights-background-text',
            content: 'insights-content',
          }}
        >
          <div className="platform-text">Ties.Network loves to share the
            vision behind the project. Get to know the team by following
            our social accounts today.</div>
          <Grid
            container
            direction="row"
            justify="center"
            spacing={0}
            className="insights-landing-cards"
          >
            {this.renderCards(insightsCards)}
          </Grid>
        </LandingCard>
      </div>
    )
  }
}

