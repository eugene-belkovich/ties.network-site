import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Block, Slider } from '../index'
import Card from '../team/team-card.component'

import { teamSelector } from '../../../routes/team/team.selector'

@connect(teamSelector)
export class Advisors extends Component {
  static propTypes = {
    adviserCards: PropTypes.arrayOf(PropTypes.object),
  }

  render() {
    const { adviserCards } = this.props

    return (
      <Block
        style={{ background: '#FFF' }}
        title="Advisors"
      >
        <Slider settings={{ arrows: false, infinite: false, slidesToShow: 3 }}>
          {(adviserCards || []).map(card => <Card {...card} key={card.name} />)}
        </Slider>
      </Block>
    )
  }
}
