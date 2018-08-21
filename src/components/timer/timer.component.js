import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { round, map, each, isEmpty } from 'lodash'
import { Grid } from 'material-ui'
import EasyPieChart from 'easy-pie-chart'
import { DateBetween } from './date-between'
import './timer.styles.css'

export class Timer extends Component {
  state = { remaining: {}, charts: {} }

  componentDidMount() {
    if (this.getTimerDate() > Date.now()) {
      this.createCharts()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.tokenSalesEnd && nextProps.tokenSalesEnd && isEmpty(this.state.charts)) {
      this.createCharts()
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  getTimerDate = () => {
    const { tokenSalesStart, tokenSalesEnd } = this.props
    return Date.now() > tokenSalesStart && tokenSalesEnd ? tokenSalesEnd : tokenSalesStart
  }

  createCharts = () => {
    const { id } = this.props
    if (!isEmpty(document.querySelectorAll(`.${id}days-chart`)) && !this.chartsIsEnabled) {
      this.chartsIsEnabled = true

      const options = {
        scaleColor: false,
        trackColor: 'rgba(255,255,255,0.3)',
        barColor: '#E7F7F5',
        lineWidth: 6,
        lineCap: 'butt',
        size: 160,
      }

      const charts = {
        days: map(document.querySelectorAll(`.${id}days-chart`), el => new EasyPieChart(el, options)),
        hours: map(document.querySelectorAll(`.${id}hours-chart`), el => new EasyPieChart(el, options)),
        minutes: map(document.querySelectorAll(`.${id}min-chart`), el => new EasyPieChart(el, options)),
        seconds: map(document.querySelectorAll(`.${id}sec-chart`), el => new EasyPieChart(el, options)),
      }

      this.setState({ charts })
    }

    if (!this.interval) {
      this.interval = setInterval(this.tick.bind(this), 1000)
      this.tick()
    }
  }


  tick = () => {
    const { days, hours, minutes, seconds } = this.state.charts
    const startDate = new Date()
    const endDate = new Date(this.getTimerDate())
    const remaining = DateBetween(startDate, endDate)

    if (remaining === false) {
      clearInterval(this.interval)
    }

    this.setState({ remaining })

    if (days && hours && minutes && seconds) {
      each(days, day => day.update(round((remaining.days / 30) * 100)))
      each(hours, hour => hour.update(round((remaining.hours / 24) * 100)))
      each(minutes, min => min.update(round((remaining.minutes / 60) * 100)))
      each(seconds, sec => sec.update(round((remaining.seconds / 60) * 100)))
    } else {
      this.createCharts()
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state.remaining
    const { id } = this.props

    if (this.getTimerDate() < Date.now()) {
      return <br />
    }

    return (
      <div className="timer-container">
        <div data-percent="0" className={classNames('circle', `${id}days-chart`)}>
          <Grid container justify="center" align="center" direction="column" className="circle-content">
            <div className="circle-content-value">{days}</div>
            <div className="circle-content-unit">days</div>
          </Grid>
        </div>
        <div data-percent="0" className={classNames('circle', `${id}hours-chart`)}>
          <Grid container justify="center" align="center" direction="column" className="circle-content">
            <div className="circle-content-value">{hours}</div>
            <div className="circle-content-unit">hours</div>
          </Grid>
        </div>
        <div data-percent="0" className={classNames('circle', `${id}min-chart`)}>
          <Grid container justify="center" align="center" direction="column" className="circle-content">
            <div className="circle-content-value">{minutes}</div>
            <div className="circle-content-unit">min</div>
          </Grid>
        </div>
        <div data-percent="0" className={classNames('circle', `${id}sec-chart`)}>
          <Grid container justify="center" align="center" direction="column" className="circle-content">
            <div className="circle-content-value">{seconds}</div>
            <div className="circle-content-unit">sec</div>
          </Grid>
        </div>
      </div>
    )
  }
}


Timer.propTypes = {
  id: PropTypes.string.isRequired,
  tokenSalesStart: PropTypes.number.isRequired,
  tokenSalesEnd: PropTypes.number,
}
