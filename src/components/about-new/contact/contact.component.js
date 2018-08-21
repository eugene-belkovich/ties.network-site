import { Button } from 'material-ui'
import React from 'react'
import './contact.styles.css'

import { Block } from '../block'
import { ASK_FORM_LINK } from '../../subscription/keep-in-touch'
import { PrototypeButton } from '../../prototype'
import { YellowPaper } from '../../../components'

import bgImage from '../../../styles/public/image/stack-bg.png'

export const Contact = () => (
  <Block
    id="contact"
    style={{
      background: `#FFF url(${bgImage}) no-repeat center top`,
    }}
    title="Contact"
  >
    <div className="contact__container">
      <div>
        Now that you scrolled this much, you can...
      </div>

      <div className="contact__actions">
        <YellowPaper styles="contact__action" />

        <Button
          className="contact__action"
          color="primary"
          href={ASK_FORM_LINK}
          raised
        >
          Ask us a question
        </Button>
      </div>
    </div>
  </Block>
)
