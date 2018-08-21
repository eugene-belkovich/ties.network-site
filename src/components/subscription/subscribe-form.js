import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { Button, Input, Grid } from 'material-ui'
import PropTypes from 'prop-types'
import { CenteredContainer } from '../grid'
import './subscription.styles.css'
import { subscribe } from '../../utils'

const subscribeConfirmation = <div className="subscribe-title">Thanks for subscribing!</div>
export class SubscribeForm extends Component {
  static propTypes = {
    title: PropTypes.element,
  }
  state = {
    subscribed: false,
  }
  subscribe() {
    subscribe(this.email)
      .then(() => this.setState({ subscribed: true }))
      .catch(() => this.setState({ subscribed: false }))
  }
  changeEmail({ target: { value } }) {
    this.email = value
  }
  renderConfirmation() {
    if (this.state.subscribed) {
      return (
        <Grid item xs={8} md={10}>
          {subscribeConfirmation}
        </Grid>
      )
    }
    return null
  }
  renderInput() {
    if (!this.state.subscribed) {
      return (
        <Grid item xs={8} md={6} className="subscribe-wrapper">
          <CenteredContainer>
            <Grid item xs={12} sm className="subscribe-input">
              <Input
                type="email"
                name="EMAIL"
                className="subscribe-email"
                placeholder="Enter your E-mail"
                onChange={e => this.changeEmail(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={4} xl={3} className="subscribe-button-container" container justify="center">
              <Button
                type="submit"
                className="subscribe-button"
                color="primary"
                onClick={() => this.subscribe()}
                raised
              >
                <FormattedMessage id="subscribe" />
              </Button>
            </Grid>
          </CenteredContainer>
        </Grid>
      )
    }
    return null
  }
  render() {
    const { title } = this.props
    return (
      <Grid item xs={12}>
        <CenteredContainer className="subscribe-form">
          <Grid item xs={8} md={10}>
            {title}
          </Grid>
          {this.renderConfirmation()}
          {this.renderInput()}
        </CenteredContainer>
      </Grid>
    )
  }
}
