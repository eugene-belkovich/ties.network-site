import React, { Component } from 'react'
import { Block } from '../index'
import './token-sale.styles.css'

import bgImage from '../../../styles/public/image/token-sale-bg.png'
import scheme from '../../../styles/public/image/token-sale.svg'
import schemeMobile from '../../../styles/public/image/token-sale-mobile.svg'

export const TokenSale = () => (
  <Block
    style={{
      background: `#EBF4F6 url(${bgImage}) no-repeat center top`,
      backgroundSize: 'contain',
    }}
    title="Token Sale Distribution Model"
  >
    <img
      alt="Bonus Structure"
      className="token-sale__scheme"
      src={scheme}
    />

    <img
      alt="Bonus Structure"
      className="token-sale__scheme-mobile"
      src={schemeMobile}
    />
  </Block>
)
