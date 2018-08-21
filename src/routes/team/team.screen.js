import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'material-ui'
import { connect } from 'react-redux'
import { PageWithNavbar, KeepInTouch, LandingCard } from '../../components'
import krtoken from '../../styles/public/svg/krtoken_logo.svg'
import { teamSelector } from './team.selector'
import './team.styles.css'

@connect(teamSelector)
export class Team extends Component {

  static propTypes = {
    teamCards: PropTypes.arrayOf(PropTypes.object).isRequired,
    adviserCards: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  renderCards(cards) {
    return cards.map(({ image, name, position, descripton, linkedin }) => (
      <Grid className="team-landing-card" key={name} item lg={6} md={9} sm={10} container spacing={0}>
        <Grid className="team-landing-image-container" container justify="flex-end" align="center" spacing={0}>
          <img src={image} className="team-landing-card-image" alt={name} />
        </Grid>
        <Grid className="team-landing-card-info" item xs={12} sm container direction="column" justify="center" spacing={0}>
          <Grid>
            <div className="card-name">{name}</div>
            <div className="card-position">{position}</div>
          </Grid>
          {descripton && <Grid className="card-description">{descripton}</Grid>}
          <Grid className="card-linkedin">
            {(linkedin)
            && (
              <a target="_blank" rel="noopener noreferrer" href={linkedin} className="team-social-link" key={linkedin}>
                <i className="fa fa-linkedin-square" />
              </a>
            )}
          </Grid>
        </Grid>
      </Grid>
    ))
  }

  render() {
    const { adviserCards, teamCards } = this.props
    return (
      <PageWithNavbar className="team-landing">
        <div key="team" className="team">
          <div className="team-landing-card-text">
            <h1>Team</h1>
          </div>
          <div className="team-landing-card-title">Team</div>
          <Grid
            container
            direction="row"
            justify="flex-start"
            align="stretch"
            spacing={0}
            className="team-landing-cards"
          >
            {this.renderCards(teamCards)}
          </Grid>
        </div>
        <div key="advisors">
          <div className="team-landing-card-title">Advisors</div>
          <Grid
            container
            direction="row"
            justify="flex-start"
            align="stretch"
            spacing={0}
            className="team-landing-cards advisor"
          >
            {this.renderCards(adviserCards)}
          </Grid>
        </div>
        <div key="partner">
          <div className="team-landing-card-title">Our korean partner</div>
          <Grid
            container
            direction="row"
            justify="center"
            align="center"
            spacing={0}
            className="team-landing-cards advisor"
          >
            <a target="_blank" href="http://www.krtoken.com/">
              <img src={krtoken} className="team-landing-card-image" alt={krtoken} />
            </a>
          </Grid>
        </div>
        <KeepInTouch showFooter={true} text="Keep in touch with the latest news" />
      </PageWithNavbar>
    )
  }
}

