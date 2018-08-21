import React from 'react'
import './subscribe.styles.css'

import { Block } from '../block'
import { SocialLinks } from '../../social'

export const Subscribe = () => (
  <Block
    className="subscribe"
    title="Join our community!"
  >
    <SocialLinks />
  </Block>
)
