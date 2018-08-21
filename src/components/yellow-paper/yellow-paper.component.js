/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'
import Menu, { MenuItem } from 'material-ui/Menu'

const YELLOW_PAPER_LINK_EN = 'https://tiesdb.com/'
const YELLOW_PAPER_LINK_RU = 'https://docs.google.com/document/d/12-ikkqcLBuS4mXHs5sWnyR6gjBuz9XiFHToXVAxQPlo/edit'

export class YellowPaper extends React.Component {
  state = {
    anchorEl: {},
    open: false,
  };
  handleClick = (event) => {
    event.preventDefault()
    this.setState({ open: true, anchorEl: event.currentTarget })
  }
  handleRequestClose = () => {
    this.setState({ open: false })
  };
  render() {
    return (
      <a>
        <Button
          aria-owns={this.state.open ? 'simple-menu' : null}
          aria-haspopup="true"
          className={this.props.styles}
          raised
          color="primary"
          onClick={this.handleClick}
        >
          Yellow Paper
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >
          <a target="_blank" key={YELLOW_PAPER_LINK_EN} href={YELLOW_PAPER_LINK_EN} >
            <MenuItem onClick={this.handleRequestClose}>English</MenuItem>
          </a>
          <a target="_blank" key={YELLOW_PAPER_LINK_RU} href={YELLOW_PAPER_LINK_RU} >
            <MenuItem onClick={this.handleRequestClose}>Русский</MenuItem>
          </a>
        </Menu>
      </a>
    )
  }
}

YellowPaper.propTypes = {
  styles: PropTypes.string.isRequired,
}
