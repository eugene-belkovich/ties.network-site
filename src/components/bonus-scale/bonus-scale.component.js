import React from 'react'
import { FormattedMessage } from 'react-intl'
import { LandingCard } from '../'
import scale from '../../styles/public/svg/bonus-scale/HORIZ_bonusstruct_TEXT.svg'
import scaleMoblie from '../../styles/public/svg/bonus-scale/_bonusstruct_TEXT.svg'
import './bonus-scale.styles.css'

export const BonusScale = () => (
  <LandingCard
    title={<FormattedMessage id="bonus" />}
    backgroundText="Bonus"
    classes={{
      wrapper: 'bonus-scale-wrapper',
      title: 'bonus-scale-title',
      backgroundText: 'bonus-scale-background-text',
      content: 'bonus-scale-content',
    }}
  >
    <div className="bonus-scale-container">
      <div className="bonus-scale-text">
        <p><FormattedMessage id="tgeOffer" /></p>
      </div>
      <img src={scale} className="bonus-scale-image" alt="scale" />
      <img src={scaleMoblie} className="bonus-scale-image-mobile" alt="scale" />
    </div>
  </LandingCard>
)
