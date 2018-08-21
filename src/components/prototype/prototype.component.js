/* eslint-disable flowtype/require-valid-file-annotation */

import { device } from 'device.js'
import React from 'react'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'
import Menu, { MenuItem } from 'material-ui/Menu'
import logo from './ties-logo.svg'
import './prototype.styles.css'

const MAC_LINK = 'http://cdn.ties.network/Ties.Network-mac.dmg'
const WINDOWS_LINK = 'http://cdn.ties.network/Ties.Network-windows.exe'
const SOURCE_LINK = 'https://github.com/TiesNetwork/ties-client'

export class PrototypeButton extends React.Component {
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
          color="primary"
          href={device.mobile && 'https://github.com/TiesNetwork/ties-client'}
          target="_blank"
          raised
          onClick={!device.mobile && this.handleClick}
        >
          Try Prototype Now
        </Button>

        {!device.mobile && (
          <Menu
            id="simple-menu"
            anchorEl={this.state.anchorEl}
            open={this.state.open}
            onRequestClose={this.handleRequestClose}
          >
            <a target="_blank" key={MAC_LINK} href={MAC_LINK} >
              <MenuItem onClick={this.handleRequestClose}>for Mac</MenuItem>
            </a>
            <a target="_blank" key={WINDOWS_LINK} href={WINDOWS_LINK} >
              <MenuItem onClick={this.handleRequestClose}>for Windows</MenuItem>
            </a>
            <a target="_blank" key={SOURCE_LINK} href={SOURCE_LINK} >
              <MenuItem onClick={this.handleRequestClose}>Source code</MenuItem>
            </a>
          </Menu>
        )}
      </a>
    )
  }
}

PrototypeButton.propTypes = {
  styles: PropTypes.string.isRequired,
}
