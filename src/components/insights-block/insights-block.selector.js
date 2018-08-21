import { createSelector } from 'reselect'
import ins1 from '../../styles/public/image/ins1.png'
import ins2 from '../../styles/public/image/ins2.png'
import medium from '../../styles/public/image/medium.png'
import youtube from '../../styles/public/image/youtube.png'

const insightsCards = [
  {
    image: ins1,
    name: 'Blog',
    icon: medium,
    descripton: 'Think beyond technology, blockchain or crypto. Think people',
    info: 'Read our blog',
    link: 'https://blog.ties.network/think-beyond-technology-blockchain-or-crypto-think-people-14599a857778',
    linkGlobal: 'http://blog.ties.network/',
  },
  {
    image: ins2,
    name: 'Our channel',
    icon: youtube,
    descripton: 'Interview with Natalia Tokar - Business Development Partner at Ties.Network',
    info: 'Watch the team interviews',
    link: 'https://www.youtube.com/watch?v=5owTdWI47Fs&t=196s',
    linkGlobal: 'https://www.youtube.com/channel/UCjDS8EQ21VEBgKAgQgMIcVQ',
  },
]

export const insightsSelector = createSelector(() => ({ insightsCards }))
