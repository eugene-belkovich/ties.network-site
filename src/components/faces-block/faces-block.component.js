import React, { Component } from 'react'
import { Grid, Button } from 'material-ui'
import ReactBodymovin from 'react-bodymovin'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import { LandingCard } from '../'
import { CenteredContainer } from '../grid'
import network from '../../styles/public/image/animations/network.json'
import img0 from '../../styles/public/image/animations/images/img_0.png'
import img1 from '../../styles/public/image/animations/images/img_1.png'
import img2 from '../../styles/public/image/animations/images/img_2.png'
import img3 from '../../styles/public/image/animations/images/img_3.png'
import img4 from '../../styles/public/image/animations/images/img_4.png'
import img5 from '../../styles/public/image/animations/images/img_5.png'
import './faces-block.styles.css'

const networkAnimation = {
  loop: true,
  autoplay: true,
  prerender: true,
  renderer: 'svg',
  animationData: network,
}

const spanStyle = {
  color: 'black',
  fontWeight: 'bold',
  fontFamily: 'AvenirNextLTPro-Bold',
}

const text1 = (
  <p className="faces-title"><FormattedMessage id="asBusinessTool" /></p>)

export class FacesBlock extends Component {
  render() {
    return (
      <LandingCard
        title="Ties.Network"
        backgroundText="email"
        classes={{
          wrapper: 'faces-wrapper',
          title: 'bonus-scale-title',
          backgroundText: 'faces-background-text',
          content: 'bonus-scale-content',
        }}
      >
        <CenteredContainer className="faces-block">
          <Grid item xs={12} container align="center" spacing={0}>
            <Grid item xs={12} lg={5} className="faces-container">
              <CenteredContainer className="faces-centred-container network">
                <ReactBodymovin options={networkAnimation} />
              </CenteredContainer>
            </Grid>
            <Grid item xs={12} lg={7} container className="faces-text-container" justify="center" align="center" spacing={0}>
              {text1}
              <Link to="/platform">
                <Button type="submit" className="faces-block-button" color="primary" raised>
                  Learn more
                </Button>
              </Link>
            </Grid>
          </Grid>
          <img src={img0} alt="img0" style={{ display: 'none' }} />
          <img src={img1} alt="img1" style={{ display: 'none' }} />
          <img src={img2} alt="img2" style={{ display: 'none' }} />
          <img src={img3} alt="img3" style={{ display: 'none' }} />
          <img src={img4} alt="img4" style={{ display: 'none' }} />
          <img src={img5} alt="img5" style={{ display: 'none' }} />
        </CenteredContainer>
      </LandingCard>
    )
  }
}
