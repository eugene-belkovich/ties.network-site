import PropTypes from 'prop-types'
import React from 'react'

import './partners-card.styles.css'

const PartnersCard = ({ image, link, title }) => (
  <a
    className="partners-card"
    href={link}
    target="_blank"
  >
    <img
      alt={title}
      className="partners-card__image"
      src={image}
    />
  </a>
)

PartnersCard.propTypes = {
  image: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
}

export default PartnersCard
