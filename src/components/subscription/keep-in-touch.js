import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Button } from 'material-ui'
import { CenteredContainer } from '../grid'
import { SubscribeForm } from './subscribe-form'
import { SocialLinks } from '../social'
import './keep-in-touch.css'

export const ASK_FORM_LINK = 'https://ties6.typeform.com/to/jPM8Ko'

export class KeepInTouch extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    askButton: PropTypes.bool,
    showFooter: PropTypes.bool,
  }
  render() {
    const { text, askButton } = this.props
    const title = <div className="subscribe-title">{text}</div>
    return (
      <CenteredContainer className="subscribe-keep-in-touch-container" justify="center">
        <Grid item xs={12}><SubscribeForm title={title} /></Grid>
        <Grid item xs={8} md={10}>
          <CenteredContainer>
            <Grid container className="ask-container" justify="center" spacing={0}>
              {!askButton &&
              <Button
                href={ASK_FORM_LINK}
                type="submit"
                className="ask-button"
                color="primary"
                raised
              >
                Ask us a question
              </Button>}
            </Grid>
          </CenteredContainer>
        </Grid>
        <Grid item xs={12}><SocialLinks /></Grid>
        {this.props.showFooter && (
          <Grid item xs={12}>
            <div className="footer-border" />
            <div className="footer-container">
              <div className="footer-title">Company details:</div>
              <br />
              <div className="footer-demi">Ties.BV</div>
              <div className="footer-demi">Marconistraat 16 14e verdieping, 3029AK, Rotterdam</div>
              <div>Form of organization - <span className="footer-demi">limited liability company</span></div>
              <div>Chamber of Commerce Number (KvK-nummer) - <span className="footer-demi">69555176</span></div>
              <br />
              <div className="footer-policy"><a href="https://cdn.ties.network/privacy-policy.pdf">Private Policy</a></div>
              <div className="footer-policy"><a href="https://cdn.ties.network/terms.pdf">Terms and Conditions</a></div>
            </div>
          </Grid>
        )}
      </CenteredContainer>
    )
  }
}
