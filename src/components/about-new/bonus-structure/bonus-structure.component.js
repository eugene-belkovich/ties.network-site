import React from 'react'
import { Block } from '../index'
import './bonus-structure.styles.css'

import bgImage from '../../../styles/public/image/bonus-structure-bg.png'

import table from '../../../styles/public/svg/database/table.svg'

export const BonusStructure = () => (
  <Block
    id="bonus"
    style={{
      background: '#FFF',
      backgroundSize: 'contain',
    }}
    title="Key features of Ties.DB"
  >
    <div className="bonus-structure__description">
      All Ethereum-based decentralized applications (DApps) need to store non-financial data and
      search through their documents. Ties.DB is the first public database for
      decentralized structured data storage and allows advanced search
      and documents modification.
      <br /><br />
      Graph shows data storage functionality for structured data
    </div>

    <img
      alt="Bonus Structure"
      className="bonus-structure__scheme"
      src={table}
    />
  </Block>
)
