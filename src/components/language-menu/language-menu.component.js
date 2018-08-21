import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import injectSheet from 'react-jss'
import { Button, Menu, MenuItem } from 'material-ui'
import { changeLocale } from '../../actions/index'
import { languageMenuSelector } from './language-menu.selector'
import { languageIcons } from './icons'

const styles = {
  languageItem: {
    width: 30,
    height: 30,
    backgroundSize: 'contain !important',
  },
}

@injectSheet(styles)
@connect(languageMenuSelector)
export class LanguageMenu extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  }

  state = {
    open: false,
    anchorEl: undefined,
  }

  onChangeLocaleClick = (locale) => {
    this.props.dispatch(changeLocale(locale))
    this.handleRequestClose()
  }

  handleClick = (event) => {
    this.setState({ open: true, anchorEl: event.currentTarget })
  }

  handleRequestClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { classes, locale } = this.props
    return (
      <div>
        <Button
          aria-owns={this.state.open ? 'language-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <div className={classes.languageItem} style={{ background: `url(${languageIcons[locale]})` }} />
          ▼
        </Button>
        <Menu
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >
          {['en', 'zh'].map(lang => (
            <MenuItem
              key={lang}
              selected={lang === locale}
              onClick={() => this.onChangeLocaleClick(lang)}
            >
              <div className={classes.languageItem} style={{ background: `url(${languageIcons[lang]})` }} />
            </MenuItem>
          ))}
        </Menu>
      </div>
    )
  }
}
