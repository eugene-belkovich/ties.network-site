import React from 'react'
import './how-it-works.styles.css'

import { Block } from '../block'
import { YoutubeVideo } from '../../video'

export const HowItWorks = () => (
  <Block
    style={{ background: '#EBF4F6' }}
    title="See How It Works"
  >
    <div className="how-it-works__container">
      <div className="how-it-works__youtube">
        <YoutubeVideo
          source="https://www.youtube.com/watch?v=GX0dU4RA7ak"
          sideColorBefore={'#F6F6F6'}
          sideColorAfter={'black'}
        />
      </div>
    </div>
  </Block>
)
