import React from 'react'
import PropTypes from 'prop-types'
import './information-row.styles.css'

export const InformationRow = ({ text, text1 }) => (
  <div className="information-row-container">
    {text}
    {text1 && text1}
  </div>
)

InformationRow.propTypes = {
  text: PropTypes.node,
  text1: PropTypes.node,
}

