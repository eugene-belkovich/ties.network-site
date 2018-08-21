import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'
import classNames from 'classnames'
import './intro-video.css'

export class YoutubeVideo extends Component {
  static propTypes = {
    source: PropTypes.string.isRequired,
    sideColorBefore: PropTypes.string,
    sideColorAfter: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  }

  state = {
    playing: false,
    started: false,
    bgColor: this.props.sideColorBefore,
  }

  play() {
    this.setState({ bgColor: this.props.sideColorAfter, playing: true, started: true })
  }

  render() {
    const { source } = this.props
    const { playing, started } = this.state

    const overlayClassName = classNames('video-overlay', {
      'video-overlay-hide': playing,
      'video-overlay-hide-poster': started,
    })

    return (
      <div className="video-container" style={{ backgroundColor: this.state.bgColor }}>
        <div className="intro-video react-video">
          <ReactPlayer
            className="react-player"
            url={source}
            playing={playing}
            controls
          />
          <div className={overlayClassName}>
            <div className="play-pause" role="button" tabIndex="-1" onClick={() => this.play()} />
            <div className="video-title-block">
              <div>
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
