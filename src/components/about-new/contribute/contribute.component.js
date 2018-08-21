import { get, round } from 'lodash'
import { Button } from 'material-ui'
import React, { Component } from 'react'
import './contribute.style.css'

import { Block } from '../block'
import { YellowPaper } from '../../../components'

const SHORT_GUIDE_LINK =
  'https://cdn.ties.network/short-guide-eng.pdf'

export class Contribute extends Component {
  render() {
    return (
      <Block
        style={{ background: '#FFF' }}
        title="Ties.DB is the answer to DApp storage"
      >
        <div className="contribute__container">
          <div className="contribute__description">
            A public, distributed and decentralized database with one common thread: trust.
            Enforced by integrated fault tolerance, incentive schemes and smart contracts.
          </div>

          <div className="contribute__whitepaper">
            <Button
              className="contribute__whitepaper-button"
              color="primary"
              href={SHORT_GUIDE_LINK}
              target="_blank"
              raised
            >
              Short Guide
            </Button>
            <YellowPaper styles="contribute__whitepaper-button" />
          </div>
        </div>
      </Block>
    )
  }
}
