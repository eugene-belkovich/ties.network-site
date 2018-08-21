import { Grid } from 'material-ui'
import React, { Component } from 'react'
import { Block } from '../index'
import './use-of-proceed.styles.css'

import { content, Card } from '../../work/work.component'

import bgImage from '../../../styles/public/image/stack-bg.png'

export class UseOfProceeds extends Component {
  render() {
    return (
      <Block
        style={{
          background: `#E9E9E9 url(${bgImage}) no-repeat center top`,
          backgroundSize: 'contain',
        }}
        title="Ties.DB"
      >
        <div className="use-of-proceeds__container work-block">
          <Grid container className="work-item-container" direction="row" align="flex-start" justify="center" spacing={16}>
            {content.map(({ image, text, header }) => (
              <Grid key={`key-${image}`} className="work-card-container" item lg={3} md={6}>
                <Card {...{ image, text, header }} />
              </Grid>
            ))}
          </Grid>
        </div>
      </Block>
    )
  }
}
