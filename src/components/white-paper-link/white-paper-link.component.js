/* eslint-disable flowtype/require-valid-file-annotation */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react'
import { FormattedMessage } from 'react-intl'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'
import Menu, { MenuItem } from 'material-ui/Menu'

const DOCUMENT_LINK = 'https://drive.google.com/file/d/0B0O-WracGkwYYXY0M1M5S0lYM1E/view?usp=sharing'

export class WhitePaperLink extends React.Component {
  render() {
    return (
      <a>
        <Button
          aria-haspopup="true"
          className={this.props.styles}
          raised
          href={DOCUMENT_LINK}
          target="_blank"
          component={props => <a {...props} />}
        >
          <FormattedMessage id="whitePaper" />
        </Button>
      </a>
    )
  }
}

WhitePaperLink.propTypes = {
  styles: PropTypes.string.isRequired,
}
