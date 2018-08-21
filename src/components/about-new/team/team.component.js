import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Block, Slider } from '../index'
import Card from './team-card.component'

import { teamSelector } from '../../../routes/team/team.selector'

@connect(teamSelector)
export class Team extends Component {
  static propTypes = {
    teamCards: PropTypes.arrayOf(PropTypes.object),
  }

  render() {
    const { teamCards } = this.props

    return (
      <Block
        style={{ background: '#EBF4F6' }}
        title="Team"
      >
        <Slider>
          {(teamCards || []).map(card => <Card {...card} key={card.name} />)}
        </Slider>
      </Block>
    )
  }
}
