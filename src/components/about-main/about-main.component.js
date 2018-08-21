/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class AboutLearnMoreButton extends React.Component {
  render() {
    return (
      <Link to="/platform">
        <Button
          className={this.props.styles}
          raised
          color="primary"
        >
          Learn More
        </Button>
      </Link>
    )
  }
}

AboutLearnMoreButton.propTypes = {
  styles: PropTypes.string.isRequired,
}
