import PropTypes from 'prop-types'
import React from 'react'
import ReactSlick from 'react-slick'

import './slider.styles.css'

const NextArrow = props => (
  <button {...props} className="slider__arrow slider__arrow--next" />
)

const PrevArrow = props => (
  <button {...props} className="slider__arrow slider__arrow--prev" />
)

const sliderSettings = {
  arrows: true,
  autoplay: false,
  autoplaySpeed: 5000,
  infinite: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
}

export const Slider = ({ children, settings }) => (
  <ReactSlick {...Object.assign({}, sliderSettings, settings)} className="slider">
    {React.Children.map(children, child => (
      <div className="slider__item">
        {child}
      </div>
    ))}
  </ReactSlick>
)

Slider.propTypes = {
  children: PropTypes.node,
  settings: PropTypes.shape({}),
}
