import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Button } from 'material-ui'
import { SubscribeForm } from './subscribe-form'
import { SocialLinks } from '../social'

export class SmallKeepInTouch extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  }
  render() {
    const { text } = this.props
    const title = <div className="subscribe-title">{text}</div>
    return (
      <div className="subscribe-keep-in-touch-container small-keep-in-touch">
        <Grid item xs={12}><SubscribeForm title={title} /></Grid>
        <Grid item xs={12}><SocialLinks /></Grid>
      </div>
    )
  }
}
