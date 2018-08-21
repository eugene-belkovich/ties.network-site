import React, { Component } from 'react'
import { Grid } from 'material-ui'
import './database.styles.css'

import {
  CenteredContainer,
  PageWithNavbar,
  KeepInTouch,
  DatabaseHero,
  DatabaseInfo,
  Uses,
  Work,
  KeyFeatures,
} from '../../components'

const spanStyle = {
  color: '#1A4D9F',
  fontWeight: 'bold',
  fontFamily: 'AvenirNextLTPro-Bold',
}

export class Database extends Component {

  render() {
    return (
      <PageWithNavbar className="database-page">
        <CenteredContainer>
          <Grid item xs={12}>
            <DatabaseHero />
          </Grid>
          <DatabaseInfo link={false} />
          <Grid item xs={12}>
            <KeyFeatures />
          </Grid>
          <Grid item xs={12} className="uses-grid">
            <Uses />
          </Grid>
          <Grid item xs={12} className="work-grid">
            <Work />
          </Grid>
          <KeepInTouch showFooter={true} text="Keep in touch with the latest news" />
        </CenteredContainer>
      </PageWithNavbar>
    )
  }
}

