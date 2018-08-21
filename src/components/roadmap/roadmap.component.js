import React from 'react'
import { Grid } from 'material-ui'
import { LandingCard } from '../'
import roadmap from '../../styles/public/svg/ico-details/roadmap.svg'
import roadmapVertical from '../../styles/public/svg/ico-details/roadmap-vertical.svg'
import './roadmap.styles.css'

export const Roadmap = () => (
  <LandingCard
    title="Roadmap"
    backgroundText="Roadmap"
    classes={{
      wrapper: 'roadmap-wrapper',
      title: 'roadmap-title',
      backgroundText: 'roadmap-background-text',
      content: 'roadmap-content',
    }}
  >
    <Grid id="roadmap" container justify="center" align="center" className="roadmap-container">
      <Grid hidden={{ mdDown: true }} className="roadmap-image-container">
        <img src={roadmap} className="roadmap-image" alt="roadmap" />
      </Grid>
      <Grid hidden={{ lgUp: true }} className="roadmap-image-container">
        <img src={roadmapVertical} className="roadmap-image" alt="roadmap" />
      </Grid>
    </Grid>
  </LandingCard>
)
