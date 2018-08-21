/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'
import Menu, { MenuItem } from 'material-ui/Menu'
import { FormattedMessage } from 'react-intl'

const BUSINESS_OVERVIEW_LINK_EN = 'https://cdn.ties.network/business-overview-en.pdf'
const BUSINESS_OVERVIEW_LINK_CN = 'https://cdn.ties.network/business-overview-cn.pdf'
const BUSINESS_OVERVIEW_LINK_KR = 'https://cdn.ties.network/business-overview-kr.docx'

export class BusinessOverviewList extends React.Component {
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
          <FormattedMessage id="businessOverview" />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >
          <a target="_blank" key={BUSINESS_OVERVIEW_LINK_EN} href={BUSINESS_OVERVIEW_LINK_EN} >
            <MenuItem onClick={this.handleRequestClose}>English</MenuItem>
          </a>
          <a target="_blank" key={BUSINESS_OVERVIEW_LINK_CN} href={BUSINESS_OVERVIEW_LINK_CN} >
            <MenuItem onClick={this.handleRequestClose}>中文</MenuItem>
          </a>
          <a target="_blank" key={BUSINESS_OVERVIEW_LINK_KR} href={BUSINESS_OVERVIEW_LINK_KR} >
            <MenuItem onClick={this.handleRequestClose}>한국어</MenuItem>
          </a>
        </Menu>
      </a>
    )
  }
}

BusinessOverviewList.propTypes = {
  styles: PropTypes.string.isRequired,
}
