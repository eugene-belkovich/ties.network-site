import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Button } from 'material-ui'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { LandingCard } from '../'
import { teamSelector } from './team-block.selector'
import './team-block.styles.css'

@connect(teamSelector)
export class TeamBlock extends Component {
  static propTypes = {
    teamCards: PropTypes.arrayOf(PropTypes.object),
  }
  renderCards(cards) {
    return cards.map(({ image, name, position, descripton, linkedin }) => (
      <Grid className="team-landing-card" key={name} item lg={2} container spacing={0}>
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
    const { teamCards } = this.props
    return (
      <div>
        <LandingCard
          title="Team"
          backgroundText="Team"
          classes={{
            wrapper: 'team-wrapper',
            title: 'roadmap-title',
            backgroundText: 'team-background-text',
            content: 'team-content',
          }}
        >
          <Grid
            container
            direction="row"
            justify="center"
            spacing={0}
            className="team-landing-cards"
          >
            {this.renderCards(teamCards)}
          </Grid>
        </LandingCard>
        <Grid
          container
          className="team-button-block"
          direction="row"
          justify="center"
          align="center"
          spacing={0}
        >
          <a key="team" href="/team" >
            <Button
              className="white-paper"
              type="submit"
              color="primary"
              raised
            >
              <FormattedMessage id="meetTeam" />
            </Button>
          </a>
        </Grid>
      </div>
    )
  }
}

