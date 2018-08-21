import React, { Component } from 'react'
import { Grid } from 'material-ui'
import { FormattedMessage } from 'react-intl'
import {
  PageWithNavbar,
  KeepInTouch,
  CenteredContainer,
  YoutubeVideo,
  BonusScale,
  FacesBlock,
  DbBlock,
  TokenSaleTerms,
  IcoDetailsHero,
  Roadmap,
  TeamBlock,
  Stats,
  CompactHero,
} from '../../components'
import './ico-details.styles.css'

const subscribeText = 'Leave your email to get a notice right before TGE'

export class IcoDetails extends Component {
  render() {
    return (
      <PageWithNavbar className="ico-details-page-wrapper">
        <CenteredContainer>
          <Grid item xs={12}>
            <IcoDetailsHero />
          </Grid>
          <Stats />
          <Grid item xs={12}>
            <YoutubeVideo
              source="https://www.youtube.com/watch?v=ocTuIFy-cIQ"
              sideColorBefore={'#F6F6F6'}
              sideColorAfter={'black'}
            >
              <p><FormattedMessage id="discover" /></p>
            </YoutubeVideo>
          </Grid>
          <FacesBlock />
          <DbBlock />
          <BonusScale />
          <TokenSaleTerms />
          <Roadmap />
          <TeamBlock />
          {/* <Partners /> */}
          {/* <PartnersMedia /> */}
          {/* <Stats className="bottom-stats" /> */}
          {/* <CompactHero /> */}
          <KeepInTouch showFooter={true} text="Keep in touch with the latest news" />
        </CenteredContainer>
      </PageWithNavbar>
    )
  }
}

