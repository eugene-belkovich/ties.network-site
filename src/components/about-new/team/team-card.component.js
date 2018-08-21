import PropTypes from 'prop-types'
import React from 'react'
import './team-card.styles.css'

export const TeamCard = ({ image, name, position, descripton, linkedin }) => (
  <div className="team-card">
    <div className="team-card__header">
      <img
        alt={name}
        className="team-card__image"
        src={image}
      />

      {linkedin && (
        <a
          className="team-card__linkedIn"
          href={linkedin}
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa fa-linkedin-square" />
        </a>
      )}
    </div>

    <div className="team-card__name">
      {name}
      <br />
      {position}
    </div>

    <div className="team-card__description">
      {descripton}
    </div>
  </div>
)

TeamCard.propTypes = {
  descripton: PropTypes.string,
  image: PropTypes.string,
  linkedin: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
}

export default TeamCard
