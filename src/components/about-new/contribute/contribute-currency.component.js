import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import './contribute-currency.styles.css'

import btc from '../../../styles/public/image/btc.jpg'
import eth from '../../../styles/public/image/eth.jpg'
import usd from '../../../styles/public/image/usd.jpg'

const ContributeCurrency = ({ label, value }) => (
  <div className={classNames('contribute-currency', `contribute-currency--${label}`)}>
    {label === 'btc' && (
      <img
        alt="label"
        className="contribute-currency__icon"
        src={btc}
      />
    )}

    {label === 'eth' && (
      <img
        alt="label"
        className="contribute-currency__icon"
        src={eth}
      />
    )}

    {label === 'usd' && (
      <img
        alt="label"
        className="contribute-currency__icon"
        src={usd}
      />
    )}

    <div className="contribute-currency__value">
      {value}
    </div>
  </div>
)

ContributeCurrency.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
}

export default ContributeCurrency
