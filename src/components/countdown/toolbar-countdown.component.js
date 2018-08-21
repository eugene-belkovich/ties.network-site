import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Toolbar, withStyles, LinearProgress, Grid, Button } from 'material-ui'
import { DateBetween } from './date-between'
import { classesPropTypes } from '../../prop-types'
import './countdown.css'

const styles = {
  text: {
    marginLeft: 16,
    lineHeight: '22px',
    fontFamily: 'AvenirNextLTPro-Demi',
  },
  progress: {
    width: '100%',
    height: 4,
    position: 'absolute',
    bottom: -1,
    left: 0,
  },
  button: {
    margin: '10px 0',
    '&:hover': {
      background: '#E5332C',
    },
    background: '#E5332C',
    color: 'white',
    fontFamily: 'AvenirNextLTPro-Demi',
  },
  link: {
    marginRight: 10,
  },
  primaryColor: {
    backgroundColor: '#E5332C',
  },
  accentColor: {
    backgroundColor: '#FFD3D1',
  },
}


@withStyles(styles)
export class ToolbarCountdown extends React.Component {
  state = {
    remaining: null,
    completed: null,
  }

  componentDidMount() {
    this.tick()
    this.interval = setInterval(this.tick.bind(this), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  tick() {
    if (this.props.endDate) {
      const startDate = new Date()
      const endDate = new Date(this.props.endDate)
      const restTime = this.props.endDate - startDate.getTime()
      const completed = 100 - ((restTime / (10 * 24 * 60 * 60 * 1000)) * 100)
      const remaining = DateBetween(startDate, endDate)

      if (remaining === false) {
        clearInterval(this.interval)
        if (this.props.cb) {
          this.props.cb()
        }
      }

      this.setState({
        remaining: remaining || null,
        completed,
      })
    }
  }

  render() {
    const { classes } = this.props
    const { remaining } = this.state
    if (remaining) {
      return (
        <Toolbar>
          <Grid container spacing={0} align="center">
            <Grid item xs={12} align="center" container spacing={0} className={classes.text}>
              Token Generation Event starts in {remaining}
              <Grid item sm xs={12} container justify="flex-end" spacing={0}>
                <Link className={classes.link} to="/TGE-details">
                  <Button className={classes.button}>
                    TGE
                  </Button>
                </Link>
              </Grid>
            </Grid>
            <LinearProgress
              classes={{
                determinateBar1: classes.primaryColor,
                accentColor: classes.accentColor,
              }}
              mode="determinate"
              value={this.state.completed}
              className={classes.progress}
              color="accent"
            />
          </Grid>
        </Toolbar>
      )
    }
    return null
  }
}

ToolbarCountdown.propTypes = {
  endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  cb: PropTypes.func,
  classes: classesPropTypes,
}
