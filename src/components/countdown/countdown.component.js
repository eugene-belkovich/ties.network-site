import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'material-ui'
import { toUpper } from 'lodash'
import { DateBetween } from './date-between'
import { CenteredContainer } from '../grid'
import './countdown.css'

export class Countdown extends Component {

  constructor(props) {
    super(props)
    this.state = { remaining: null }
  }

  componentDidMount() {
    this.tick()
    this.interval = setInterval(this.tick.bind(this), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  tick() {
    const startDate = new Date()
    const endDate = new Date(this.props.endDate)
    const remaining = DateBetween(startDate, endDate)

    if (remaining === false) {
      clearInterval(this.interval)
      if (this.props.cb) {
        this.props.cb()
      }
    }

    this.setState({
      remaining: remaining || 'time expired',
    })
  }

  render() {
    return (
      <Grid item xs className="countdown">
        <CenteredContainer justify="flex-start">
          <Grid item hidden={{ smDown: true }} className="title">{toUpper('ties.network')} </Grid>
          <Grid item className="date"> {toUpper('token sale starts in Early Fall 2017')}</Grid>
        </CenteredContainer>
      </Grid>
    )
  }
}

Countdown.propTypes = {
  endDate: PropTypes.string,
  cb: PropTypes.func,
}
