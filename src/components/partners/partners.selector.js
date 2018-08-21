import { createSelector } from 'reselect'
import byzantium from '../../styles/public/svg/partners/byzantium.svg'
import suicideVentures from '../../styles/public/svg/partners/suicide-ventures.svg'
import deloitte from '../../styles/public/svg/partners/deloitte.svg'


const partners = [
  {
    image: byzantium,
    name: 'byzantium',
    text: `Byzantium — is the ICO agency which provides a full range of services for conducting and promoting 
      the launching projects. Byzantium's field of expertise aiming to bring 
      the new promising projects to the crypto-world`,
    link: '',
  },
  {
    image: suicideVentures,
    name: 'suicideVentures',
    text: `Suicide Ventures is an early-stage investment fund. Initially investing in prospective technologies,
      we support growth from conception to a working prototype by assisting the launch stage through to 
      creation of full-stack marketing campaigns`,
    link: '',
  },
  {
    image: deloitte,
    name: 'deloitte',
    text: 'The Deloitte company is a consultant of GoldMint on the matters of law adherence and taxation',
    link: '',
  },
]

export const partnersSelector = createSelector(() => ({ partners }))
