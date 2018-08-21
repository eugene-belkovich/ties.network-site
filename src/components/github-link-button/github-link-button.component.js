/* eslint-disable flowtype/require-valid-file-annotation */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'
import Menu, { MenuItem } from 'material-ui/Menu'
import { FormattedMessage } from 'react-intl'
import GitHubIcon from './github-icon'
import './github-link-button.styles.css'

const GITHUB_LINK = 'https://github.com/TiesNetwork'

export class GitHubLinkButton extends React.Component {
  render() {
    return (
      <a>
        <Button
          aria-haspopup="true"
          className={this.props.styles}
          raised
          color="primary"
          href={GITHUB_LINK}
          target="_blank"
          component={props => <a {...props} />}
        >
          <GitHubIcon /> Github
        </Button>
      </a>
    )
  }
}

GitHubLinkButton.propTypes = {
  styles: PropTypes.string.isRequired,
}
