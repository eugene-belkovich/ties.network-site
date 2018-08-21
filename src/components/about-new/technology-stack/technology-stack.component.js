import React, { Component } from 'react'
import { Block } from '../index'
import './technology-stack.styles.css'

import bgImage from '../../../styles/public/image/stack-bg.png'
import scheme from '../../../styles/public/image/stack.svg'

export const TechnologyStack = () => (
  <Block
    style={{
      background: `#E9E9E9 url(${bgImage}) no-repeat center top`,
      backgroundSize: 'contain',
    }}
    title="Technology Stack"
  >
    <div className="technology-stack__container">
      <img
        alt="Technology Stack"
        className="technology-stack__scheme"
        src={scheme}
      />
    </div>
  </Block>
)
