/* eslint no-bitwise: 0 */
import axios from 'axios'
import countdown from 'countdown'
import React, { Component } from 'react'
import './countdown.styles.css'

import { Block } from '../index'
import Field from './countdown-field.component'

const contractStatusString = '{"currentBonus":10,"totalEthInvested":"7.254722242569983249846e+21","totalSupply":5.92512780893333e+25,"totalBtcInvested":"1234.246484","blockNumber":4438189,"timestamp":1509092412876,"isOpen":false,"tokenPrice":"807947510343411","contractAddress":"0x5070832E17e2042754ccD86F28B9d21FcB0E1567","endTimestamp":1509019200000,"ethRate":297.049,"btcRate":5743.52}'

export class Countdown extends Component {
  constructor(props) {
    super(props)

    this.targetDate = new Date('26 Oct 2017 09:00:00 GMT')
    this.units = countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS

    this.state = {
      contractStatus: JSON.parse(contractStatusString),
      timespan: {},
    }
  }

  componentDidMount() {
    countdown(
      timespan => this.setState({ timespan }),
      this.targetDate,
      this.units,
    )
  }

  render() {
    const { days, hours, minutes, seconds, value } = this.state.timespan

    return (
      <Block style={{ background: '#363436', padding: 0 }}>
        <div className="countdown__container">
          {value > 0 ? (
            <div className="countdown__title">
              TIE TOKEN SALE <strong>IS NOW LIVE</strong>: SEPT 21 - OCT 26
            </div>
          ) : (
            <div className="countdown__title">
              TIE TOKEN SALE <strong>IS NOW CLOSED</strong>
              <div style={{ color: 'white' }}>
                <small>Thank you for your contribution!</small>
              </div>
            </div>
          )}

          {value > 0 && (
            <div className="countdown__counter">
              <Field label="days" value={days} />
              <Field label="hours" value={hours} />
              <Field label="minutes" value={minutes} />
              <Field label="seconds" value={seconds} />
            </div>
          )}

          {value > 0 && this.state.contractStatus && (
            <div className="countdown__bonus">
              CURRENT BONUS: {this.state.contractStatus && this.state.contractStatus.currentBonus}%
            </div>
          )}
        </div>
      </Block>
    )
  }
}
