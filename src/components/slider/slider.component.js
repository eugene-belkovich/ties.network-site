/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import SlickSlider from 'react-slick'
import { IconButton } from 'material-ui'
import classNames from 'classnames'
import { childrenPropTypes } from '../../prop-types'
import leftArrow from './images/left-arrow.svg'
import rightArrow from './images/right-arrow.svg'
import './slider.styles.css'

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      role="button"
      tabIndex="-1"
      className={classNames(className, 'slider-right-arrow')}
      style={{
        ...style,
        backgroundImage: `url(${rightArrow})`,
        backgroundSize: '100% 100%',
      }}
      onClick={onClick}
    >
      <IconButton className="slider-ripple-right" />
    </div>
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      role="button"
      tabIndex="-1"
      className={classNames(className, 'slider-left-arrow')}
      style={{
        ...style,
        backgroundImage: `url(${leftArrow})`,
        backgroundSize: '100% 100%',
      }}
      onClick={onClick}
    >
      <IconButton className="slider-ripple-left" />
    </div>
  )
}

export class Slider extends React.Component {
  render() {
    const settings = {
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      ...this.props.settings,
    }
    return (
      <SlickSlider {...settings}>
        {this.props.children}
      </SlickSlider>
    )
  }
}

Slider.propTypes = {
  children: childrenPropTypes,
  settings: PropTypes.object, // eslint-disable-line react/forbid-prop-types
}

