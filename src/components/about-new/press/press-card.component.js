import PropTypes from 'prop-types'
import React from 'react'
import './press-card.styles.css'

const PressCard = ({ date, image, link, name, text, title }) => (
  <div className="press-card">
    <img
      alt={title}
      className="press-card__image"
      src={image}
    />

    <a
      className="press-card__title"
      href={link}
      target="_blank"
    >
      {title}
    </a>

    <div className="press-card__name">
      {name}
    </div>

    <div className="press-card__text">
      {text}
    </div>

    <div className="press-card__date">
      {date}
    </div>
  </div>
)

PressCard.propTypes = {
  date: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
}

export default PressCard
