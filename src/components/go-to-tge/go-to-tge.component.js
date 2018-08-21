import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Button } from 'material-ui'
import { DASHBOARD_LINK } from '../../utils'
import './go-to-tge.styles.css'

export class GoToTGE extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  }

  render() {
    const { text } = this.props
    return (
      <Grid container spacing={0} className="go-to-tge-container" align="center" justify="center">
        <div className="go-to-tge-container-title">{text}</div>
        <Grid
          container
          spacing={0}
          direction="row"
          align="center"
          justify="center"
          className="hero-buttons"
          wrap="nowrap"
        >
          <Grid item className="hero-buttons-container">
            <a key={DASHBOARD_LINK} href={DASHBOARD_LINK}>
              <Button
                className="download tge-dashboard"
                type="submit"
                color="primary"
                raised
              >
                TGE Dashboard
              </Button>
            </a>
          </Grid>
        </Grid>
        <div className="video-info">
          <a target="_blank" key="youtube" href={'https://www.youtube.com/watch?v=P3MzNR721FU'} >
            <i className="fa fa-play-circle fa-2" aria-hidden="true" /> Watch the video instruction
          </a>
        </div>
      </Grid>
    )
  }
}
