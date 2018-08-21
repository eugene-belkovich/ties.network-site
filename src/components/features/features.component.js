import React from 'react'
import './features.styles.css'
import { FormattedMessage } from 'react-intl'
import { LandingCard } from '../'
import feature1 from '../../styles/public/svg/feature/feature-one.svg'
import feature2 from '../../styles/public/svg/feature/feature-two.svg'
import feature3 from '../../styles/public/svg/feature/feature-three.svg'
import feature4 from '../../styles/public/svg/feature/feature-four.svg'

const content = [
  {
    image: feature1,
    text1: 'TiesDB solves problems by being an open',
    text2: ' system, so anyone can join.',
  },
  {
    image: feature2,
    text1: 'Decentralized, so it retains transparency',
    text2: 'of blockchain and there is no separate control.',
  },
  {
    image: feature3,
    text1: 'Provides all capabilities of distributed network',
    text2: 'but appears as one document.',
  },
  {
    image: feature4,
    text1: 'Content is organized so that you can run',
    text2: 'complex search.',
  },
]

export const Features = () => (
  <div className="features-block">
    <LandingCard
      title={null}
      backgroundText={<FormattedMessage id="features" />}
      classes={{
        title: 'explore-features-title',
        backgroundText: 'explore-features-background-text',
        content: 'explore-features-content',
      }}
    >
      <div className="features-container">
        { content.map(({ image, text1, text2 }, index) => (
          <div key={`key-${text1}`}>
            { index % 2
              ? (
                <div className="features-item-container">
                  <div className="features-item-text">
                    <div>{text1}</div>
                    <div>{text2}</div>
                  </div>
                  <img src={image} className="features-item-image" alt={`img-${index}`} />
                </div>
              )
              : (
                <div className="features-item-container">
                  <img src={image} className="features-item-image" alt={`img-${index}`} />
                  <div className="features-item-text">
                    <div>{text1}</div>
                    <div>{text2}</div>
                  </div>
                </div>
              )
            }
          </div>
          ),
        )}
      </div>
      <div className="features-container">
        { content.map(({ image, text1, text2 }, index) => (
          <div key={`key-${text1}`} className="features-item-container1">
            <img src={image} className="features-item-image" alt={`img-${index}`} />
            <div className="features-item-text">
              <div>{text1} {text2}</div>
            </div>
          </div>
        ))
        }
      </div>
    </LandingCard>
  </div>
)

