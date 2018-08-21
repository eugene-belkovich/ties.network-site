import React from 'react'
import { Button } from 'material-ui'
import { FormattedMessage } from 'react-intl'
import { WhitePaperLink, YellowPaper, BusinessOverviewList } from '../../components'
import './learn-more.styles.css'

const GITHUB_LINK =
  'http://github.com/tiesnetwork'

export const LearnMore = () => (
  <div className="learn-more-container">
    <div className="learn-more-title"><FormattedMessage id="learnMore" /></div>
    <div className="learn-more-buttons">
      <WhitePaperLink styles="white-paper" />
      <YellowPaper styles="white-paper" />
      <a target="_blank" key={GITHUB_LINK} href={GITHUB_LINK} >
        <Button
          className="white-paper"
          type="submit"
          color="primary"
          raised
        >
          GitHub
        </Button>
      </a>
    </div>
  </div>
)
