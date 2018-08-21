import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'material-ui'
import './network-architecture.styles.css'

export const NetworkCard = ({ header, content, image, zIndex }) => (
  <Grid spacing={0} className="network-card" container align="flex-end" justify="space-between">
    <Grid xs={12} md={6} item hidden={{ smDown: true }} className="card-text">
      <div className="card-header">{header}</div>
      <div className="card-content">{content}</div>
    </Grid>
    <Grid item xs={12} md={6} className="card-image-container" style={{ zIndex }}>
      <img src={image} alt="" className="card-image" />
    </Grid>
    <Grid xs={12} md={6} item hidden={{ mdUp: true }} className="card-text">
      <div className="card-header">{header}</div>
      <div className="card-content">{content}</div>
    </Grid>
  </Grid>
)

NetworkCard.propTypes = {
  header: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
  zIndex: PropTypes.number,
}
