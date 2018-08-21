import React from 'react'
import PropTypes from 'prop-types'
import './countdown-field.styles.css'

const CountdownField = ({ label, value }) => (
  <div className="countdown-field">
    <div className="countdown-field__container">
      <div className="countdown-field__value">
        {`${value < 10 ? '0' : ''}${value}`}
      </div>

      <div className="countdown-field__label">
        {label}
      </div>
    </div>
  </div>
)

CountdownField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
}

export default CountdownField
