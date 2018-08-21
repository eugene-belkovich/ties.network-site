import React from 'react'
import { AppBar, Toolbar, Button, Drawer, Grid, IconButton } from 'material-ui'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { connect } from 'react-redux'
import { find } from 'lodash'
import { FormattedMessage } from 'react-intl'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import { childrenPropTypes, routerPropTypes } from './../../prop-types'
import tiesLogo from '../../styles/public/svg/ties-sign.svg'
import { pageWithNavbarSelector } from './page-with-navbar.selector'
import './page-with-navbar.styles.css'
import { SocialLinks, WhitePaperLink, GitHubLinkButton, ToolbarCountdown, LanguageMenu } from '../'
import { tokenSalesStart } from '../../utils'

const NAVIGATION_LINKS = [
  { to: '/', title: 'Home' },
  // { to: '/platform', title: 'About Ties.Network' },
  // { to: '/database', title: 'About Ties.DB' },
  // { to: '/TGE-details', title: 'Token Generation Event' },
  // { to: '/', hashlink: '/#bonus', title: 'TGE Bonus Structure' },
  { to: '/', hashlink: '/#roadmap', title: 'Roadmap' },
  { to: '/', hashlink: '/#media', title: 'Media' },
  { to: '/team', title: <FormattedMessage id="team" /> },
  { to: '/', external: 'http://Blog.ties.network', title: <FormattedMessage id="blog" /> },
  { to: '/', external: 'http://kb.ties.network', title: 'FAQ' },
  { to: '/', hashlink: '/#contact', title: 'Contact' },
]

@connect(pageWithNavbarSelector)
export class PageWithNavbar extends React.Component {
  static propTypes = {
    children: childrenPropTypes.isRequired,
    router: routerPropTypes.isRequired,
    className: childrenPropTypes,
  }

  state = {
    open: false,
  }

  getLinks = () => NAVIGATION_LINKS.map((x, key) => {
    if (x.hashlink) {
      return (
        <HashLink key={`${x.to}-${key}`} to={x.hashlink} onClick={this.handleClose}>
          <div className={`menu-link ${this.isActive(x) ? 'active' : ''}`}>{x.title}</div>
        </HashLink>
      )
    }
    if (x.external) {
      return (
        <a
          key={`${x.to}-${key}`}
          href={x.external}
          className={`menu-link ${this.isActive(x) ? 'active' : ''}`}
          onClick={this.handleClose}
        >
          {x.title}
        </a>
      )
    }
    return (
      <Link key={`${x.to}-${key}`} to={x.to} onClick={this.handleClose}>
        <div className={`menu-link ${this.isActive(x) ? 'active' : ''}`}>{x.title}</div>
      </Link>
    )
  })

  isActive = (link) => {
    const { router: { location: { pathname } } } = this.props
    return find(NAVIGATION_LINKS, x => x.to === pathname) === link
  }

  handleOpen = () => this.setState({ open: true })
  handleClose = () => this.setState({ open: false })

  render() {
    const { children, router: { location: { pathname } } } = this.props
    const { open } = this.state
    return (
      <div className={this.props.className}>
        <AppBar className="app-bar" color="default" position="static">
          <Toolbar>
            <Grid container justify="center" align="center" xs item spacing={0}>
              <Link to="/" className="header-logo-container">
                <IconButton><img src={tiesLogo} alt="" className="header-logo" /></IconButton>
              </Link>
              <Grid item xs hidden={{ smDown: true }} spacing={0} container align="center" className="app-bar-links">
                {this.getLinks()}
              </Grid>
              <Grid item xs hidden={{ mdUp: true }} container justify="flex-end" className="menu-button-container">
                <Button className="menu-button" onClick={this.handleOpen}>menu</Button>
              </Grid>
            </Grid>
          </Toolbar>
          {pathname === '/' && <ToolbarCountdown endDate={tokenSalesStart} />}
        </AppBar>
        <CSSTransitionGroup
          transitionName="example"
          transitionAppear
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          <div className="drawer-content">
            {children}
          </div>
        </CSSTransitionGroup>
        <Drawer
          className=""
          anchor="right"
          classes={{ paper: 'drawer-paper' }}
          open={open}
          onRequestClose={this.handleClose}
        >
          <Grid item xs container direction="column" spacing={0} align="center" justify="center">
            <Grid className="menu-content" container direction="column" spacing={0} align="flex-start">
              <Link className="tiesnetwork" to="/">
                <Grid>
                  ties<span className="text-style-2">.</span>network
                </Grid>
              </Link>
              {this.getLinks()}
              {/* <SocialLinks /> */}
              <Grid container direction="row" justify="center" align="center" spacing={0}>
                { /* <LanguageMenu /> */ }
              </Grid>
            </Grid>
          </Grid>
        </Drawer>
      </div>
    )
  }
}
