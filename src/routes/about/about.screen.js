import React, { Component } from 'react'
import { Grid, Hidden } from 'material-ui'
import { FormattedMessage } from 'react-intl'
import {
  PageWithNavbar,
  KeepInTouch,
  CenteredContainer,
  MainBlock,
  PlatformArchitecture,
  YoutubeVideo,
  PartnersMedia,
  InsightsBlock,
  SmallKeepInTouch,
  BonusScale,
  TokenSaleTerms,
  Roadmap,
  TeamBlock,
  CaseBlock2,
} from '../../components'
import deal from '../../styles/public/image/gif/deal.gif'
import './about.styles.css'

const GITHUB_LINK =
  'http://github.com/tiesnetwork'

const text = (
  <div className="information-row-text"><FormattedMessage id="tiesNetworkText" /></div>
)

const text1 = (
  <div className="information-row-text"><FormattedMessage id="tiesDBText" /></div>
)
const text2 = `Ties.Network is an ethereum-based business platform for frictionless
                  collaboration built on Ties.DB &mdash; the world’s first decentralized
                  public database.`

const subscribeText = 'Keep in touch with the latest news'

export class About extends Component {
  render() {
    return (
      <PageWithNavbar className="about-page-wrapper">
        <CenteredContainer>
          <Grid item xs={12} className="about-hero-block">
            {/* <Banner /> */}
            <MainBlock />
          </Grid>
          <Grid item xs={12} className="about-top-subscribe">
            <SmallKeepInTouch text={subscribeText} />
          </Grid>
          <section id="bonus">
            <BonusScale />
          </section>
          <Grid item xs={12}>
            <YoutubeVideo
              source="https://www.youtube.com/watch?v=PEX_V8tTwhY"
              sideColorBefore={'#F6F6F6'}
              sideColorAfter={'black'}
            >
              <p><FormattedMessage id="discover" /></p>
            </YoutubeVideo>
          </Grid>
          <Grid item xs={12} className="case-container-2 case-container">
            <CaseBlock2
              title={'Find best rated crypto-experts'}
              text={text2}
              source="https://cdn.ties.network/deal.mp4"
            />
          </Grid>
          <TokenSaleTerms />
          <PlatformArchitecture />
          <Roadmap />
          <TeamBlock />
          <InsightsBlock />
          <TeamBlock />
          <PartnersMedia />
          <Grid item xs={12} id="contact">
            <KeepInTouch showFooter={true} text="Keep in touch with the latest news" />
          </Grid>
        </CenteredContainer>
      </PageWithNavbar>
    )
  }
}
