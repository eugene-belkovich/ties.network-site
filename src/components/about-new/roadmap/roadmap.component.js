import React from 'react'
import './roadmap.styles.css'

import { Block } from '../block'

import bgImage from '../../../styles/public/image/stack-bg.png'
import scheme from '../../../styles/public/image/roadmap.png'
import schemeMobile from '../../../styles/public/svg/ico-details/roadmap-vertical.svg'

export const Roadmap = () => (
  <Block
    className="roadmap"
    id="roadmap"
    style={{
      background: `#FFF url(${bgImage}) no-repeat center top`,
      backgroundSize: 'contain',
    }}
    title="Roadmap"
  >
    <img
      alt="roadmap"
      className="roadmap__scheme"
      src={scheme}
    />

    <img
      alt="roadmap"
      className="roadmap__scheme-mobile"
      src={schemeMobile}
    />
  </Block>
)
