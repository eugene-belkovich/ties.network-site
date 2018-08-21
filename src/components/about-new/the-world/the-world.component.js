import React from 'react'
import { Block } from '../block'
import './the-world.styles.css'

import bgImage from '../../../styles/public/image/the-world.jpg'

export const TheWorld = () => (
  <Block
    style={{
      background: `#64849E url(${bgImage}) no-repeat center center`,
      backgroundSize: 'cover',
      minHeight: 400,
    }}
  >
    <div className="the-world__container">
      <div className="the-world__small">
        The world’s
      </div>

      <div className="the-world__title">
        FIRST decentralized <br />
        public SMART DATABASE
      </div>
    </div>
  </Block>
)
