import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Block, Slider } from '../index'
import Card from './press-card.component'

import { partnersMediaSelector } from '../../partners-media/partners-media.selector'

@connect(partnersMediaSelector)
export class Press extends Component {
  static propTypes = {
    partnersMedia: PropTypes.arrayOf(PropTypes.object),
  }

  render() {
    const { partnersMedia } = this.props
    return (
      <Block
        id="media"
        style={{ background: '#FFF' }}
        title="Press"
      >
        <Slider>
          {(partnersMedia || []).map(card => <Card {...card} key={card.name} />)}
        </Slider>
      </Block>
    )
  }
}
