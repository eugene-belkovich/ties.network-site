import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'material-ui'
import { get } from 'lodash'
import { childrenPropTypes } from '../../prop-types'
import './landing-card.styles.css'

export const LandingCard = (props) => {
  const { title, backgroundText, children, backgroundElements } = props
  const classes = get(props, 'classes', {})
  const { wrapper, content, background } = classes
  return (
    <Grid className={`landing-card-wrapper ${wrapper}`} container spacing={0}>
      <h2 className={`landing-card-title ${classes.title}`}>{title}</h2>

      <Grid className={`landing-card-content ${content}`}>
        {children}
      </Grid>

      <Grid className={`landing-card-background ${background}`} item>
        <Grid
          hidden={{ xsDown: true }}
          className={`landing-card-background-text ${classes.backgroundText}`}
        >
          {backgroundText}
        </Grid>
      </Grid>
      {backgroundElements}
    </Grid>
  )
}

LandingCard.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  // eslint-disable-next-line react/no-unused-prop-types
  classes: PropTypes.shape({
    wrapper: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    background: PropTypes.string,
    backgroundText: PropTypes.string,
  }),
  backgroundText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: childrenPropTypes,
  backgroundElements: childrenPropTypes,
}

