import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { Button, Grid } from 'material-ui'
import {
  PageWithNavbar,
  KeepInTouch,
  CenteredContainer,
  PlatformHero,
  ExploreFeatures,
  UsesFeature,
  InformationRow,
  WhitePaperList,
  BusinessOverviewList,
  CaseBlock1,
  CaseBlock2,
  CaseBlock3,
  YoutubeVideo,
} from '../../components'
import './platform.styles.css'

const spanStyle = {
  color: 'white',
  fontWeight: 'bold',
  fontFamily: 'AvenirNextLTPro-Bold',
}

const GITHUB_LINK =
  'http://github.com/tiesnetwork'

const info = (
  <div className="information-row-text">The Ethereum blockchain records all business
    transactions, forming a record of achievements for all users.
    This allows <span style={spanStyle}>Ties.Network</span> members to make an informed evaluation
    on the viability of potential partners.</div>
)

const title = 'Find best rated crypto-experts '
const text = `Ties.Network rating is guaranteed by real business deals
 that have successfully taken place in the blockchain. You can be
  sure that potential partners have an irrefutable rating. `
const title1 = 'Instantly strike secure business deals '
const text1 = `Enter the deal through the smart contract, negotiate
 the conditions straight away and pay in cryptocurrency directly
  on the platform. `
const title2 = 'Attract investors and professionals to your project'
const text2 = `The platform brings together promising business projects
 and reputable professionals. From developers and marketers to advisors
  and industry experts. You can also use the platform to hire and be
   hired, recruit partners, employees, and volunteers or to finance
    projects, ask for due diligence and much more.`

export class Platform extends Component {
  render() {
    return (
      <PageWithNavbar className="platform-page">
        <CenteredContainer>
          <Grid item xs={12}>
            <PlatformHero />
          </Grid>
          <Grid item xs={12} className="case-container-1 case-container ">
            <CaseBlock1
              title={title}
              text={text}
              source="https://cdn.ties.network/deal.mp4"
            />
          </Grid>
          <Grid item xs={12} className="case-container-2 case-container">
            <CaseBlock2
              title={title1}
              text={text1}
              source="https://cdn.ties.network/search-peopl.mp4"
            />
          </Grid>
          <Grid item xs={12} className="case-container-3 case-container">
            <CaseBlock3
              title={title2}
              text={text2}
              source="https://cdn.ties.network/project.mp4"
            />
          </Grid>
          <InformationRow text={info} />
          <Grid item xs={12}>
            <YoutubeVideo
              source="https://www.youtube.com/watch?v=ocTuIFy-cIQ"
              sideColorBefore={'#F6F6F6'}
              sideColorAfter={'black'}
            >
              <p>Discover Ties.Network today</p>
            </YoutubeVideo>
          </Grid>
          <Grid item xs={12} className="uses-grid">
            <UsesFeature />
          </Grid>
          <Grid item xs={12}>
            <KeepInTouch showFooter={true} text="Keep in touch with the latest news" />
          </Grid>
        </CenteredContainer>
      </PageWithNavbar>
    )
  }
}

