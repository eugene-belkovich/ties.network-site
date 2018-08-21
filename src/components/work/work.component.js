import React from 'react'
import propTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { Grid } from 'material-ui'
import './work.styles.css'
import { LandingCard } from '../'
import keys from '../../styles/public/svg/work/keys-blur.svg'
import dots from '../../styles/public/svg/work/dots-blur.svg'
import mail from '../../styles/public/svg/work/mail-blur.svg'
import file from '../../styles/public/svg/work/file-blur.svg'

export const content = [
  {
    image: keys,
    header: <FormattedMessage id="verified" />,
    text: [
      <FormattedMessage id="haveID" />,
      <FormattedMessage id="usersSign" />,
      <FormattedMessage id="signingWith" />,
      <FormattedMessage id="withoutKey" />,
    ],
  },
  {
    image: dots,
    header: <FormattedMessage id="specialData" />,
    text: [
      <FormattedMessage id="userBecome" />,
      <FormattedMessage id="eachRecords" />,
      <FormattedMessage id="allRecords" />,
      <FormattedMessage id="theRecords" />,
    ],
  },
  {
    image: mail,
    header: <FormattedMessage id="incentive" />,
    text: [
      <FormattedMessage id="queries" />,
      <FormattedMessage id="nodesTie" />,
      <FormattedMessage id="pay" />,
    ],
  },
  {
    image: file,
    header: <FormattedMessage id="security" />,
    text: [
      <FormattedMessage id="permissions" />,
      <FormattedMessage id="nodesAnd" />,
      <FormattedMessage id="nodeOwner" />,
      <FormattedMessage id="mutual" />,
    ],
  },
]

export const Work = () => (
  <div className="work-block">
    <LandingCard
      title="Ties.DB"
      backgroundText="Ties.DB"
      classes={{
        title: 'explore-features-title',
        backgroundText: 'explore-features-background-text',
        content: 'work-explore-features-content',
      }}
    >
      <Grid container className="work-item-container" direction="row" align="flex-start" justify="center" spacing={16}>
        {content.map(({ image, text, header }) => (
          <Grid key={`key-${image}`} className="work-card-container" item lg={3} md={6}>
            <Card {...{ image, text, header }} />
          </Grid>
        ))}
      </Grid>
    </LandingCard>
  </div>
)

function textWithNewlinesFormatter(text) {
  return (text.map((item, key) => <div key={`${item}-${key}`}>{item}<br /></div>))
}

export function Card({ header, text, image }) {
  const textWithNewLines = textWithNewlinesFormatter(text)
  const styles = {
    backgroundImage: `url(${image})`,
  }

  return (
    <Grid
      className="work-item-container-column"
      key={`key-${text}`}
      direction="column"
      justify="flex-start"
      align="center"
      style={styles}
      spacing={0}
      container
    >
      <div className="work-item-header">
        {header}
      </div>
      <div className="work-item-text">
        {textWithNewLines}
      </div>
    </Grid>)
}

Card.propTypes = {
  text: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  header: propTypes.string.isRequired,
}
