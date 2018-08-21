import React from 'react'
import { createSelector } from 'reselect'
import { FormattedMessage } from 'react-intl'
import kochin from '../../styles/public/image/kochin.png'
import neymark from '../../styles/public/image/neymark.png'

const teamCards = [
  {
    image: neymark,
    name: 'Alexander Neymark',
    position: <FormattedMessage id="founder" />,
    descripton: <FormattedMessage id="neymark" />,
    linkedin: 'https://www.linkedin.com/in/neymark/',
  },
  {
    image: kochin,
    name: 'Dmitry Kochin',
    position: <FormattedMessage id="founderPhd" />,
    descripton: <FormattedMessage id="kochin" />,
    linkedin: 'https://www.linkedin.com/in/kochin/',
  },
]

export const teamSelector = createSelector(() => ({ teamCards }))
