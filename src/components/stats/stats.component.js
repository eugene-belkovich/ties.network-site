import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Grid } from 'material-ui'
import { connect } from 'react-redux'
import { get, round } from 'lodash'
import { fetchContractStatus } from '../../actions'
import { statsSelector } from './stats.selector'
import './stats.styles.css'

const weiToEth = 1000000000000000000

@connect(statsSelector)
export class Stats extends React.Component {
  static propTypes = {
    contract: PropTypes.shape({
      data: PropTypes.shape({
        btcRate: PropTypes.number.isRequired,
        ethRate: PropTypes.number.isRequired,
        totalBtcInvested: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        totalEthInvested: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        totalSupply: PropTypes.number.isRequired,
      }),
    }),
    className: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
  }
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchContractStatus())
  }
  getTotalRaised() {
    const { contract: { data: contractStatus, isFetching } } = this.props
    const ethRate = get(contractStatus, 'ethRate', 1)
    const btcRate = get(contractStatus, 'btcRate', 1)
    const totalEthInvested = get(contractStatus, 'totalEthInvested', 0)
    const totalBtcInvested = get(contractStatus, 'totalBtcInvested', 0)
    const result = ((totalEthInvested / weiToEth) * ethRate) + (totalBtcInvested * btcRate)
    return round(result, 0).toLocaleString()
  }
  getTIERate() {
    const { contract: { data: contractStatus, isFetching } } = this.props
    const ethRate = get(contractStatus, 'ethRate', 1)
    const tokenPrice = get(contractStatus, 'tokenPrice', 0)
    const result = ((tokenPrice / weiToEth) * ethRate) || 0.20
    return round(result, 0).toFixed(0)
  }
  getTotalSupply() {
    const { contract: { data: contractStatus, isFetching } } = this.props
    const totalSupply = get(contractStatus, 'totalSupply', 0)
    return `${(round(totalSupply / weiToEth, 2).toLocaleString())}`
  }
  render() {
    const { className, contract } = this.props

    return (
      <Grid item className={classNames('stats-wrapper', className)} xs={12}>
        <Grid container spacing={0} align="center" justify="center" className="stats">
          <Grid item xs={10} sm={6} md={4} className="stats-item">
            <span className="value">
              ${this.getTotalRaised()} / ${Number(33600000).toLocaleString()}
            </span>
            <span className="title">collected</span>
          </Grid>
          <Grid item xs={10} sm={6} md={4} className="stats-item">
            <span className="value">
            1 TIE = $0.24
            </span>
            <span className="title">
            Current rate
                </span>
          </Grid>
          <Grid item xs={10} sm={6} md={4} className="stats-item">
            <span className="value">{this.getTotalSupply()} / {Number(140000000).toLocaleString()}</span>
            <span className="title">TIE tokens issued</span>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
